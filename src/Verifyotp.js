import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Verifyotp() {
    const [ myVeotp, setVerifyotp] = React.useState({});
    let navigate = useNavigate();
    const onChangeEvent = (e) => {
        setVerifyotp((myVeotp) => ({
            ...myVeotp,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_mobileno", myVeotp.no);
        myformdata.append("mobile_otp", myVeotp.num);

        axios.post("https://akashsir.in/myapi/crud/verify-mobile-otp.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    alert(response.data.message);
                    navigate('/Dashboard');
                }
                else {
                    alert("Wrong details entered");
                }
            })
    }
    return (
        <div>
            <h3><i>Verify OTP</i></h3>
            <form onSubmit={submitValue} >
                Mobile no : <input type="number" name="no" onChange={onChangeEvent} /><br />
                Mobile OTP : <input type="number" name="num" onChange={onChangeEvent} /><br />
                <input type="submit" />
            </form>
        </div>
    );
}
export default Verifyotp;