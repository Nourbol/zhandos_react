import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class AdminLoginForm extends Component {
    state = {
        login: '',
        password: '',
        error: null
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        axios({
            'method': 'post',
            'url' : 'http://web.test/api/admins/login',
            'data': {
                login: this.state.login,
                password: this.state.password,
            },
        })
        .then(response => {
            localStorage.setItem('jwt-token', response.data.token);
            console.log(response.data.token);
            useNavigate('/admin');
        })
        .catch((error) => {
            this.setState({error});
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state);
    }

    render() { 
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            
                            <div className="card-header text-center">
                                Admin
                            </div>
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="login">Login</label>
                                    <input type="login" name="login" value={this.state.login} className="form-control" onChange={this.handleChange} />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" name="password" value={this.state.password} className="form-control" onChange={this.handleChange} />
                                </div>

                                <input type="submit" value="Sign in" className="btn btn-primary btn-block mb-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AdminLoginForm;