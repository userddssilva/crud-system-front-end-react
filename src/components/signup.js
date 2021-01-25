import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageSrc from "../logo.svg";

export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {image:imageSrc}
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ image: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="profile-image-class">
                    <img className="profile-image" src={this.state.image}></img>
                </div>

                <div className="form-group-input-file">
                    <input className="input-file" type="file" onChange={this.onImageChange} />
                </div>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    {/* Already registered <a href="#">sign in?</a> */}
                    Already registered <Link to="/sign-in">sign in</Link>?
                </p>
            </form>
        );
    }
}