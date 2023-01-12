import "./SignIn.css";
import { Button, Navbar, SignInOption } from "./../../components";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="signContainer">
        <div className="signContent">
          <div className="left">
            <h3>Sign In</h3>

            <form>
              <div className="formGroup">
                <label>Username or Email address</label>
                <input type="text" placeholder="Username or Email address" />
              </div>
              <div className="formGroup">
                <label>Password</label>
                <input type="text" placeholder="Enter your password" />
                <p>Forgot password?</p>
              </div>
              <div className="formBtn">
                <Button type="primary" size="small" text="Sign in" />
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

export default SignIn;
