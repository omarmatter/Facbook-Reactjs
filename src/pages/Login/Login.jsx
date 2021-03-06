import { Link } from 'react-router-dom'
import  './login.css'

export default function Login() {
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Facbook</h3>
              <span className="loginDesc">
                Connect with friends and the world around you on Facbook.
              </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                  <h4 className='loginTitle'>Login </h4>
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton"> <Link  className="link" to="/Home" > LogIn  </Link> </button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">
                  Create a New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    