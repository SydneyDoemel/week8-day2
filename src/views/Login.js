import React, { Component } from 'react'
import '../App.css';
export default class Login extends Component {
    sendLoginInfo = async (e) => {
        e.preventDefault();

        

        const res = await fetch('http://localhost:5000/api/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
        })
            });
        const data = await res.json();
        console.log(data)

        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }

    };

    sendBasicAuth = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/token', {
            method: "POST",
            headers: {Authorization: `Bearer ${btoa(e.target.username.value+":"+e.target.password.value)}`}
        });
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }
    };

    render() {
        return (
            <div className='container'>
                <form className='col-md-6 mx-auto' onSubmit={(e) => { this.sendBasicAuth(e) }}>
                <h1 className='row text-center mx-auto mb-5 mt-5'>Log In</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" name='username' />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' />
                    </div>

                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </form>
            </div>
        )
    }
}
