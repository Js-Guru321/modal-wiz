import React from 'react'
import * as api from '../api'

class OauthCallback extends React.Component {
    async componentWillMount() {
        const r = await api.get(`${api.URL}${window.location.pathname}${window.location.search}`)
        if(r.token) {
            localStorage.setItem("userToken",r.token)
        }
    }
    render () {
        return (
        <div className='section-1'>
            <h1>Authenticating...</h1>
        </div>)
    }


}

export default OauthCallback