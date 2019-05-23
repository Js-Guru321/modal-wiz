import React from 'react'
import { Card, Button, Tabs, Tab, Toaster, InputGroup, AnchorButton } from "@blueprintjs/core";
import * as api from "../api"
import * as utils from "../utils"
import AppContext from '../AppContext'

const initialState = {
    firstName:"",
    lastName:"",
    companyName:"",
    email:"",
    password:"",
    selectedTabId: "register",
    loading: false
}

class Register extends React.Component {
    constructor () {
        super()
        this.state = initialState
    
    }
    
    onSubmit = async (e) => {
        e.preventDefault()
        if(!utils.validateEmail(this.state.email)) {
            utils.Alerts.show({
                message: "Invalid email, please try again.",
                intent: "danger"
            })
            return
        }
        this.setState ({loading: true})

        try {  
            const r = await api.post(
                `${api.URL}/${this.state.selectedTabId}`, 
                {...this.state, email:this.state.email.toLowerCase()}
            ) //can also be just this.state with no {}, since this is not JSX)
            this.setState ({...initialState, selectedTabId:this.state.selectedTabId}) //this overrides the ...initialState operator, and must come afterwards})
            console.log(r)
            if(r.token) {
                localStorage.setItem("userToken",r.token)
            }
            this.context.actions.setUser(r.user)
            //history is provided with BrowserRouter component
            this.props.history.push("/dashboard")
        } catch (e) {
            this.setState ({loading: false})
            utils.Alerts.show({
                message: "Error! Please check data and resubmit",
                intent: "danger"
            })
        }
    
    }

    handleTabChange = (selectedTabId) => {this.setState({selectedTabId})}
    updateField = (key, value) => this.setState({[key]:value})
    render () {
        return (
        <div className='section-1'>
            <Card elevation={3}>
                <Tabs id="AuthTabs" onChange={this.handleTabChange} selectedTabId={this.state.selectedTabId}
                    large={true} className="auth-tabs">
                    <Tab id="register" title="Register" panel={
                        <Panel {...this.state} onSubmit={this.onSubmit} changeField={this.updateField} fields={registerFields} buttonText={"Register"} />} 
                    />
                    <Tab id="login" title="Log In" panel={
                        <Panel {...this.state} onSubmit={this.onSubmit} changeField={this.updateField} fields={loginFields} buttonText={"Log in"} />} 
                    />
                </Tabs>
            </Card>
        </div>)
    }
}

const registerFields = [
    {icon:"", placeholder:"First Name",key: "firstName"},
    {icon:"", placeholder:"Last Name",key: "lastName"},
    {icon:"", placeholder:"Company Name",key: "companyName"},
    {icon:"", placeholder:"Email",key: "email"},
    {icon:"", placeholder:"Password",key: "password"}
]

const loginFields = [
    {icon:"user", placeholder:"Email",key: "email"},
    {icon:"key", placeholder:"Password",key: "password"}
]

const Panel = (props) => (
        <form onSubmit={props.onSubmit}>
                    <AnchorButton href={`${api.URL}/auth/google`} 
                    icon="user" style={{width:300, marginBottom:10}} text={`${props.buttonText} with Google`}/>
                    {props.fields.map(f=> {
                        return (<InputGroup  key={f.key} leftIcon={f.icon || false} placeholder={f.placeholder}
                                    style={{width:300, marginBottom:10}}
                                    value={props[f.key]}
                                    type={f.key === "password" ? "password" : "text"}
                                    onChange= {(e) => props.changeField(f.key,e.target.value)}  
                                />)
                    })}
                    
                    <Button icon="log-in" intent="success" 
                    type="submit" text={props.buttonText} 
                    style={{width:300, marginTop:15}}
                    disabled={!props.email}
                    loading={props.loading}
                    />
        </form>
)

Register.contextType=AppContext

export default Register