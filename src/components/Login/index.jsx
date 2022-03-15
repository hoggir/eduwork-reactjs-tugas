import React from "react";
import "./index.css";

const Input = ({type, name, className, placeholder, onChange}) => {
    return(
        <input type={type} name={name} className={className} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    )
  }
  
  const ShowErrors = ({errors}) => {
    return (
      <ul style={{color: 'red', marginLeft: '-20px', marginTop: '-16px'}}>
        {
          errors.map((error, i) => <li key={i}>{error}</li>)
        }
      </ul>
    )
  }
  
  export default class Login extends React.Component {
    state = {
      email: '',
      password:'',
      errors: []
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const {email, password} = this.state;
  
      let message =[];
  
      if(email.length === 0) {
        message = [...message, 'Email tidak boleh kosong!'];
      }
  
      if(password.length === 0) {
        message = [...message, 'Password tidak boleh kosong!'];
      }
  
      //eslint-disable-next-line
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(String(email).toLowerCase())) {
        message = [...message, 'Email tidak valid']
      }
  
      if(password.length < 8) {
        message = [...message, 'Password minimal 8 karakter']
      }
  
      if(message.length > 0){
        this.setState({
          errors: message
        });
      }else {
        alert(`
        email: ${this.state.email}
        password: ${this.state.password}
        `)
      }
  
    }
  
    render() {
      return (
        <div className="bg">
          <div className="container login-container">
            <div className="card border-0 login-card">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-img"></div>
                </div>
  
                <div className="col-md-6 left-container">
                  <div className="card-body login-card-body">
                    <p className="text-card login-text-card">Login</p>
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group login-input-group">
                        <Input
                          type="email"
                          name="email"
                          className="input--style-3"
                          placeholder="Email"
                          onChange={value => this.setState({email: value})}
                          />
                      </div>
                      <div className="input-group login-input-group">
                      <Input
                        type="password"
                        name="password"
                        className="input--style-3"
                        placeholder="Password"
                        onChange={value => this.setState({password: value})}
                        />
                      </div>
                      {
                        this.state.errors && <ShowErrors errors={this.state.errors} />
                      }
                      <button className="btn btn--pill btn--green" type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }