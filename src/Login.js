import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Login() {
    const [data, setData] = React.useState({});
    const onChangeEvent = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        })
        );
    }
    const onSubmitValue = (event) => {
        event.preventDefault();
        var myfrmData = new FormData();
        myfrmData.append("st_email", data.txt1);
        myfrmData.append("st_password", data.txt2);

        Axios.post("https://akashsir.in/myapi/crud/student-login-api.php", myfrmData)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    alert("SucessFully Login");
                    var a = response.data.st_id
                    var b = response.data.st_name
                    localStorage.setItem("st_id", JSON.stringify(a))
                    localStorage.setItem("st_name", JSON.stringify(b))
                    window.location = 'Dashboard';
                } else {
                    alert("You Enteres Wrong Email Id Or Pass");
                }
            }).catch(function (response) {
                console.log(response);
            });
    }
    return (
        <>
            <h1><i>Login</i></h1>
            <form onSubmit={onSubmitValue}>
                Email: <input type="email" name="txt1" onChange={onChangeEvent} /><br />
                Password: <input type="password" name="txt2" onChange={onChangeEvent} /><br />
                <input type="submit"></input>
            </form>
            <br />
            <Link to="/SignUp">SignUp</Link> |   
            <Link to="/Forgotpass"> Forgot Password</Link>  |
            <Link to="/Otp"> Login with OTP</Link>
        </>
    )
}
export default Login;