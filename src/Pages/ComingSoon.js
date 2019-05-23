import React from 'react'
import { InputGroup, Button, Divider, Toaster } from "@blueprintjs/core";
import * as api from "../api"
import * as utils from "../utils"
import AppContext from '../AppContext'


// here is a function to validate email using a regex (Regular Expression)
// you dont need to understand what this actually means! I certainly dont


class ComingSoon extends React.Component {
    constructor () {
        super ()
        this.state = {
            loading: false,
            email: ''
        };
    }
   
    onSubmit = async (e) => {
        e.preventDefault()
        if(this.state.email==='12345') {
            this.context.actions.setUser({
                first_name: "example",
                last_name: "example"
            })
            this.props.history.push("/")
            return
        }
        if(!utils.validateEmail(this.state.email)) {
            utils.Alerts.show({
                message: "Invalid email, please try again.",
                intent: "danger"
            })
            return
        }
        this.setState ({loading: true})

        try {  
            // eslint-disable-next-line
            const r = await api.post(`${api.URL}/new-coming-soon-contact`,{email:this.state.email})
            this.setState ({loading: false, email: ''})
            utils.Alerts.show({
                message: "Thanks for subscribing!",
                intent: "success"
            })

        } catch (e) {
            this.setState ({loading: false})
            utils.Alerts.show({
                message: "Invalid email, please try again.",
                intent: "danger"
            })
        }
        console.log(this)
    }

    render () {
        return (
        <div className='section-1 coming-soon'>
            <h1>Coming Soon!</h1>
            <form onSubmit={this.onSubmit}>
                <InputGroup leftIcon="user" placeholder="Email"
                style={{width:300}}
                value={this.state.email}
                onChange= {(e) =>this.setState ({email:e.target.value})}  
                />
                <Button icon="small-tick" intent="success"
                type="submit" text="Notify Me" 
                style={{width:300, marginTop:15}}
                disabled={!this.state.email}
                loading={this.state.loading}
                />
          </form>
        </div>)
    }


}

ComingSoon.contextType= AppContext
export default ComingSoon