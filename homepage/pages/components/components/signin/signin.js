import React, {useState,useContext} from 'react'
// import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../contexts/user/user-context"
import {firebase} from "../../../firebase";

export default function Signin() { // const clientId="596578000345-diud9rq2885oak05elkeo6nsrub38l4b.apps.googleusercontent.com";
    // eslint-disable-next-line
    const [showLoginButton, setshowLoginButton] = useState(true);
    // eslint-disable-next-line
    const [showLogoutButton, setshowLogoutButton] = useState(false);
    const { user } = useContext(AuthContext);
    // const history = useHistory();
    //const [userData, setUserData] = useState();
    /* const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("ph", {
            'size': 'invisible',
            'callback': (response) => { // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("captcha resolved")
                onSignInSubmit();
            }
        });
    }

    const onSignInSubmit = (event) => {
        event.preventDefault();
        setUpRecaptcha();
        const phoneNumber = window.prompt("Enter Phone number to verify");
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            const code = window.prompt("Enter otp") // getCodeFromUserInput();
            confirmationResult.confirm(code).then((result) => { // User signed in successfully.
                const user = result.user;
                console.log("User is signin");
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log("bad verification code")

            });
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log("sms could not be sent");
        });
    }  */


    const Login = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            // var credential = result.credential;
            // var token = credential.accessToken;
            var user = result.user;
            //setUserData(user);
            if (user) {
                console.log("Logged in ", user.email, user.displayName, user.photoURL)
                console.log("checking: ",{user});
                setshowLoginButton(false);
                setshowLogoutButton(true);
                /* console.log(user.metadata.lastSignInTime)
                console.log(user.metadata.creationTime)
                if (user.metadata.lastSignInTime == user.metadata.creationTime) {


                    const phoneNumber = window.prompt("Enter Phone number to verify. For testing purpose enter : +12345678910")
                    if (phoneNumber == null || phoneNumber == "") {
                        Logout('enter valid number');

                    } else {
                        setUpRecaptcha();
                        console.log(phoneNumber);
                        const appVerifier = window.recaptchaVerifier;
                        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then((confirmationResult) => {
                            // SMS sent. Prompt user to type the code from the message, then sign the
                            // user in with confirmationResult.confirm(code).
                            window.confirmationResult = confirmationResult;
                            const code = window.prompt("Enter otp. For testing purpose enter : 123456") // getCodeFromUserInput();
                            confirmationResult.confirm(code).then((result) => { // User signed in successfully.
                                const user = result.user;
                                //firebase.instance.currentUser.linkWithCredential(result);
                                // await(await firebase.instance.currentUser()).linkWithCredential(result);
                                console.log("User is signin");
                                // ...
                            }).catch((error) => {
                                // User couldn't sign in (bad verification code?)
                                // ...
                                console.log("bad verification code")
                                Logout("bad verification code");
                            });
                            // ...
                        }).catch((error) => {
                            // Error; SMS not sent
                            // ...
                            console.log("Please enter valid number", error);
                            Logout("Please enter valid number");
                        });

                    }


                } */
            } else {
                console.log("login failed");
                Logout("login failed");
            }

        }).catch((error) => {
            console.log(error);
        });
    };

    const Logout = (e) => {
        firebase.auth().signOut().then(() => {
            var msg = "signout due to " + e;
            console.log(msg)
            setshowLoginButton(true);
            setshowLogoutButton(false);
        }).catch((error) => {
            console.log("signout Failed")
        });
    }


    return (
        <div>
            {/* <div id="ph"></div>
            <div className="p-md-2 py-md-3 ">
                <img className="p-md-1" width="30px"
                    src={Google}
                    alt=""/>
                Sign in with Google</div> */}

            {
            !user ?
            <div class="fa-mouse-pointer p-md-2"  onClick={Login} style={{cursor: "pointer", fontSize: "150%"}}>
                <i className="fa fa-user-alt"></i>
              {/* <img width="15px" style={{margin_bottom:"3px", margin_right:"5px"}} alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> */}
           Profile
            </div>
             : null
        } </div>
    )
}
