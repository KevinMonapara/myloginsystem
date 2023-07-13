import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reotp() {
    const [ myReotp, setReotp] = React.useState({});
    let navigate = useNavigate();
    const onChangeEvent = (e) => {
        setReotp((myReotp) => ({
            ...myReotp,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_mobileno", myReotp.no);

        axios.post("https://akashsir.in/myapi/crud/resend-mobile-otp.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    var otp = response.data.mobile_otp;
                    alert("otp is " + otp);
                    navigate('/Verifyotp');
                }
                else {
                    alert("Wrong details entered");
                }
            })
    }
    return (
        <div>
            <h3><i>Resend OTP</i></h3>
            <form onSubmit={submitValue} >
                Mobile no : <input type="number" name="no" onChange={onChangeEvent} /><br />
                <input type="submit" />
            </form>
        </div>
    );
}
export default Reotp;