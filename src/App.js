import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      registration: {
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
  }

  handleChange(event){
    const target = event.target
    const registration = this.state.registration
    registration[target.name] = target.value
    this.setState({
      registration: registration
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.registration)
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6 col-xs-offset-3'>
              <div className='panel panel-default'>
                <div className='panel-body'>
                  <h3>Registration</h3>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='form-group'> 
                          <label 
                            htmlFor='firstName'
                            className='control-label'
                          >
                            First Name
                          </label>
                          <input
                            name='firstName'
                            value={this.state.registration.firstName}
                            onChange={this.handleChange.bind(this)}
                            className='form-control'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='form-group'>
                          <label 
                            htmlFor='lastName'
                            className='control-label'
                          >
                            Last Name
                          </label>
                          <input
                            name='lastName'
                            value={this.state.registration.lastName}
                            onChange={this.handleChange.bind(this)}
                            className='form-control'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='form-group'>
                          <label 
                            htmlFor='email'
                            className='control-label'
                          >
                            Email
                          </label>
                          <input
                            name='email'
                            value={this.state.registration.email}
                            onChange={this.handleChange.bind(this)}
                            className='form-control'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='form-group'>
                          <label 
                            htmlFor='password'
                            className='control-label'
                          >
                            Password
                          </label>
                          <input
                            type='password'
                            name='password'
                            value={this.state.registration.password}
                            onChange={this.handleChange.bind(this)}
                            className='form-control'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <input className='btn btn-primary' type='submit' value='Submit' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className="col-xs-4 col-xs-offset-4">
            <ul className='list-group'>
              <li className='list-group-item'>First Name: {this.state.registration.firstName}</li>
              <li className='list-group-item'>Last Name: {this.state.registration.lastName}</li>
              <li className='list-group-item'>Email: {this.state.registration.email}</li>
              <li className='list-group-item'>Password: {this.state.registration.password}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
