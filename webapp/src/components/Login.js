import { AuthButton } from "@solid/react";
import React from "react";

class Login extends React.Component {
    
    render() { 
        return <AuthButton popup="https://solid.github.io/solid-auth-client/dist/popup.html"
            login="log in for magic!" logout="log me outta here"/>
        ;
    }

}

export default Login;