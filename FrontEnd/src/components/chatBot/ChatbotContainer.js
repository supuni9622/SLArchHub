import React,  { useEffect } from 'react';
import Axios from 'axios';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../../_actions/message_actions';
import Message from './Message';
import CardComponent from "./Card";
import ArchiCards from './Card2'

function ChatbotContainer() {

    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages)

    useEffect(() => {
        eventQuery('WelcomeToSLArchHub')

    }, []) 

    const textQuery = async (text) => {

        //  First  Need to  take care of the message I sent     
        let conversation = {
            who: 'User',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))
        console.log('text I sent', conversation)

        // We need to take care of the message Chatbot sent 
        const textQueryVariables = {
            text
        }
        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)
            console.log(response);

            for (let content of response.data.fulfillmentMessages) {

                conversation = {
                    who: 'ArchiBot',
                    content: content
                }

                dispatch(saveMessage(conversation))
                console.log(conversation)
            }


        } catch (error) {
            conversation = {
                who: 'ArchiBot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }

            dispatch(saveMessage(conversation))
            console.log(conversation)

        }

    }

    const eventQuery = async (event) => {

        // We need to take care of the message Chatbot sent 
        const eventQueryVariables = {
            event
        }
        try {
            //I will send request to the eventQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            for (let content of response.data.fulfillmentMessages) {

                let conversation = {
                    who: 'ArchiBot',
                    content: content
                }

                dispatch(saveMessage(conversation))
                console.log(conversation)
            }


        } catch (error) {
            let conversation = {
                who: 'ArchiBot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }
            dispatch(saveMessage(conversation))
            console.log(conversation)
        }

    } 

    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('you need to type somthing first')
            }

            //we will send request to text query route 
            textQuery(e.target.value)


            e.target.value = "";
        }
    }

    const renderDesignCards = (cards, i) => {
        return cards.map((card,i) => <CardComponent key={i} cardInfo={card.structValue} />)
    }  

    const renderCards = (cards, i) => {
        return cards.map((card2,i) => <ArchiCards key={i} cardInfo2={card2.structValue} />)
    } 

    const renderOneMessage = (message, i) => {
        console.log('message', message)

        // we need to give some condition here to separate message kinds 

        // template for normal text 
       if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        } else if (message.content && message.content.payload.fields.card) {

            const AvatarSrc = message.who ==='ArchiBot' ? <i style={{fontSize:'1rem', color:'black'}} class="fas fa-robot"></i> : <i class="far fa-smile-beam" style={{fontSize:'1rem', color:'black'}}></i> 

            return <div>
                <List.Item style={{ padding: '1rem'}}>
                    <List.Item.Meta
                        avatar={<Avatar icon={AvatarSrc} />}
                        title={message.who}
                        description={renderDesignCards(message.content.payload.fields.card.listValue.values)}
                    />
                </List.Item>
            </div>
        } else if (message.content && message.content.payload.fields.card2) {

            const AvatarSrc = message.who ==='ArchiBot' ? <i style={{fontSize:'1rem', color:'black'}} class="fas fa-robot"></i> : <i class="far fa-smile-beam" style={{fontSize:'1rem', color:'black'}}></i> 

            return <div>
                <List.Item style={{ padding: '1rem'}}>
                    <List.Item.Meta
                        avatar={<Avatar icon={AvatarSrc} />}
                        title={message.who}
                        description={renderCards(message.content.payload.fields.card2.listValue.values)}
                    />
                </List.Item>
            </div>
        } 

    } 

    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    } 

    return (
        <div style={{height: 450, width: 500}}>
            <div style={{ height: 400, width: '100%', overflow: 'auto' }}>
                {renderMessage(messagesFromRedux)}
             </div>  
            <input
                style={{
                    margin: 0, width: '100%', height: 35,
                    borderRadius: '3px', padding: '3px', fontSize: '1rem'
                }}
                placeholder="Type your message..."
                onKeyPress={keyPressHanlder}
                type="text"
            /> 
        </div>
    )
}

export default ChatbotContainer
