import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

// Authentication middleware in the frontend. This is imported to app.js as well as loginPage.js. 
export default function (ComposedClass, reload, exteriorDesignerRoute = null, clientRoute =null, landscapeDesignerRoute = null) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(async response => {
                if (await !response.payload.isAuth) {
                    if (reload) {
                        props.history.push('/login')
                    }
                } else {
                    if (landscapeDesignerRoute && response.payload.isLandscapeDesigner) {
                        props.history.push('/archi-dashboard')
                    }
                    else if(clientRoute && response.payload.isClient){
                        props.history.push('/client-dashboard')
                    }  
                    else {
                        if (reload === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
            
        }, [dispatch, props.history, user.googleAuth])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


