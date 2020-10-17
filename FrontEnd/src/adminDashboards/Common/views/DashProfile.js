import React, { useState } from 'react';
import {auth} from '../../../_actions/user_actions';
//import {GET_USER} from '../../../_actions/types';
import { useSelector, useDispatch } from "react-redux";



function DashProfile(props){
    
    
      /*  const dispatch = useDispatch();

        const onView =  () => {
            dispatch(auth()).then(async response => {
                console.log(response.data)
            }) 
        }*/
      
       
                
          /*  if (response.payload.isLandscapeDesigner || response.payload.isExteriorDesigner) {
                props.history.push('/archi-dashboard')
            }*/
           
   

  
        return(
            <h1>Profile Page</h1>
        )
    
}
  
  export default DashProfile;
  
  
  



/*
export default function DashProfile(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const {userData, loading, error} = user;
        

        useEffect(() => {
           /* if(userData){
                console.log(userData)
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
            }

            dispatch(getUser(props.match.params.id));
            return() => {};
            
        }, [userData])

        return (
<>
           
        
            
                <h1>{firstName}</h1>
            </>
        )
    }
    */

