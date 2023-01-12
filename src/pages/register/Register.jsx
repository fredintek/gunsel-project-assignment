import "./Register.css";
import { Button, Navbar, SignInOption } from "./../../components";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="signContainer">
        <div className="signContent">
          <div className="left">
            <h3>Create Account</h3>

            <form>
              <div className="formGroup">
                <label>Email address</label>
                <input type="text" placeholder="Email address" />
              </div>
              <div className="formGroup">
                <label>Username</label>
                <input type="text" placeholder="Username" />
              </div>
              <div className="formGroup">
                <label>Password</label>
                <input type="text" placeholder="Enter your password" />
              </div>
              <div className="remember">
                <input type="checkbox" />
                <p>
                  i agree to <span>terms</span> and <span>privacy policy</span>
                </p>
              </div>
              <div className="formBtn">
                <Button type="primary" size="small" text="Create Account" />
              </div>
            </form>
          </div>
          <div className="middle">OR</div>
          <div className="right">
            <p>Sign in with another account</p>
            <div className="signOptions">
              <SignInOption
                icon={faFacebook}
                name="Facebook"
                color="facebook"
              />
              <SignInOption icon={faTwitter} name="Twitter" color="twitter" />
              <SignInOption icon={faGoogle} name="Google" color="google" />
              <SignInOption icon={faGithub} name="Github" color="git" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
