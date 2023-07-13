import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Otp() {
    const [myOtp, setOtp] = React.useState({});
    let navigate = useNavigate();
    const onChangeEvent = (e) => {
        setOtp((myOtp) => ({
            ...myOtp,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_mobileno", myOtp.no);
        myformdata.append("st_name", myOtp.name);

        axios.post("https://akashsir.in/myapi/crud/login-with-otp.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    alert("otp is " + response.data.mobile_otp);
                    navigate('/Verifyotp');
                }
                else {
                    alert("Wrong details entered");
                }
            })
    }
    return (
        <div>
            <h3><i>Login with OTP</i></h3>
            <form onSubmit={submitValue} >
                Mobile no : <input type="number" name="no" onChange={onChangeEvent} />
                <br />
                Name : <input type="text" name="name" onChange={onChangeEvent} /><br />
                <input type="submit" />
            </form>
            <Link to="/Reotp">Rsened OTP</Link>
        </div>
    );
}
export default Otp;