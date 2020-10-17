let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');

let bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
let dbConfig = require('./database/db');

const { auth } = require("./middleware/auth");
const multer = require("multer");
const fs = require("fs");
const config = require('./config/dev');

// Express Routes
const projectRoute = require('./routes/project');
const tasksRoute = require('./routes/tasks');
const appointmentRoute = require('./routes/appointments');
const taskProgressRoute = require('./routes/taskProggress');
const Users = require('./routes/Users');
const webProjectRoute = require('./routes/projectsWeb');
const commentRoute = require('./routes/Comment');
const LikeDislikeRoute = require('./routes/like');
const ServiceProviderRoute = require('./routes/serviceProvider');
const adminRoute = require('./routes/admin');
const profileRoute = require('./routes/profile');
const bookingRoute = require('./routes/booking');
const reportRoute = require('./routes/reports');
const countRoutes = require('./routes/counts');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;

const connect = mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
const path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  //extended: false
  extended: true
}));
app.use(cookieParser());

//Socket io
const server = require("http").createServer(app);
const io = module.exports.io = require("socket.io")(server);

//Socket Manager
//const SocketManager = require('./SocketManager')
const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED, 
  LOGOUT, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT,
  TYPING  } = require('../frontend/src/adminDashboards/Common/Components/PrivateChat/Events')

const { createUser, createMessage, createChat } = require('../frontend/src/adminDashboards/Common/Components/PrivateChat/Factories')

const { Chat } = require("./models/Chat");

//---------Express Routes-----------------//
app.use(cors());
app.use('/users', Users);
app.use('/archi-dashboard/projects', projectRoute);
app.use('/projects', webProjectRoute);
app.use('/archi-dashboard/work-schedule', tasksRoute);
app.use('/comment', commentRoute);
app.use('./like', LikeDislikeRoute);
app.use('/service-provider', ServiceProviderRoute);
app.use('/admin-dashboard', adminRoute);
app.use('/profile', profileRoute);
app.use('/booking', bookingRoute);
app.use('/reports', reportRoute);
app.use('./counts', countRoutes);
app.use('/api/users', require('./routes/Users'));
//app.use('/api/like', require('./routes/like'));
app.use('/api/favorite', require('./routes/favorite'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/dialogflow', require('./routes/dialogflow'));

//========================================================//

//Upload images or videos for chat
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/chats/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})
 
var upload = multer({ storage: storage }).single("file")

app.post("/api/chat/uploadfiles", auth ,(req, res) => {
  upload(req, res, err => {
    if(err) {
      return res.json({ success: false, err })
    }
    return res.json({ success: true, url: res.req.file.path });
  })
});

//Socket.io 
io.on("connection", socket => {

  socket.on("Input Chat Message", msg => {

    connect.then(db => {
      try {
          let chat = new Chat({ message: msg.chatMessage, sender:msg.userId, type: msg.type })

          chat.save((err, doc) => {
            console.log(doc)
            if(err) return res.json({ success: false, err })

            Chat.find({ "_id": doc._id })
            .populate("sender")
            .exec((err, doc)=> {

                return io.emit("Output Chat Message", doc);
            })
          })
      } catch (error) {
        console.error(error);
      }
    })
   })

   // console.log('\x1bc'); //clears console
  console.log("Socket Id:" + socket.id);
  let connectedUsers = { }
  let communityChat = createChat()
	let sendMessageToChatFromUser;
  let sendTypingFromUser;
  
  //Verify Username
	socket.on(VERIFY_USER, (name, callback)=>{
		if(isUser(connectedUsers, name)){
			callback({ isUser:true, user:null })
		}else{
			callback({ isUser:false, user:createUser({name:name})})
		}
  })
  
  //User Connects with username
	socket.on(USER_CONNECTED, (user)=>{
		connectedUsers = addUser(connectedUsers, user)
		socket.user = user

		sendMessageToChatFromUser = sendMessageToChat(user.name)
		sendTypingFromUser = sendTypingToChat(user.name)

		io.emit(USER_CONNECTED, connectedUsers)
		console.log(connectedUsers);

	})
  
  //User disconnects
	socket.on('disconnect', ()=>{
		if("user" in socket){
			connectedUsers = removeUser(connectedUsers, socket.user.name)

			io.emit(USER_DISCONNECTED, connectedUsers)
			console.log("Disconnect", connectedUsers);
		}
  })
  
  //User logsout
	socket.on(LOGOUT, ()=>{
		connectedUsers = removeUser(connectedUsers, socket.user.name)
		io.emit(USER_DISCONNECTED, connectedUsers)
		console.log("Disconnect", connectedUsers);

	})

	//Get Community Chat
	socket.on(COMMUNITY_CHAT, (callback)=>{
		callback(communityChat)
	})

	socket.on(MESSAGE_SENT, ({chatId, message})=>{
		sendMessageToChatFromUser(chatId, message)
	})

	socket.on(TYPING, ({chatId, isTyping})=>{
		sendTypingFromUser(chatId, isTyping)
	})

  
/*
* Returns a function that will take a chat id and a boolean isTyping
* and then emit a broadcast to the chat id that the sender is typing
* @param sender {string} username of sender
* @return function(chatId, message)
*/
function sendTypingToChat(user){
	return (chatId, isTyping)=>{
		io.emit(`${TYPING}-${chatId}`, {user, isTyping})
	}
}

/*
* Returns a function that will take a chat id and message
* and then emit a broadcast to the chat id.
* @param sender {string} username of sender
* @return function(chatId, message)
*/
function sendMessageToChat(sender){
	return (chatId, message)=>{
		io.emit(`${MESSAGE_RECIEVED}-${chatId}`, createMessage({message, sender}))
	}
}

/*
* Adds user to list passed in.
* @param userList {Object} Object with key value pairs of users
* @param user {User} the user to added to the list.
* @return userList {Object} Object with key value pairs of Users
*/
function addUser(userList, user){
	let newList = Object.assign({}, userList)
	newList[user.name] = user
	return newList
}

/*
* Removes user from the list passed in.
* @param userList {Object} Object with key value pairs of Users
* @param username {string} name of user to be removed
* @return userList {Object} Object with key value pairs of Users
*/
function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}

/*
* Checks if the user is in list passed in.
* @param userList {Object} Object with key value pairs of Users
* @param username {String}
* @return userList {Object} Object with key value pairs of Users
*/
function isUser(userList, username){
  	return username in userList
}

})

//===========================================================

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("frontend/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

//=========================================================================//

// PORT 
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
}); 









