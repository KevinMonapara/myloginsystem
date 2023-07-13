import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [myData, myDataUpdate] = React.useState({});

    let navigate = useNavigate();
    const onChangeEvent = (e) => {
        myDataUpdate((myData) => ({
            ...myData,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_name", myData.txt1);
        myformdata.append("st_gender", myData.txt2);
        myformdata.append("st_email", myData.txt3);
        myformdata.append("st_mobileno", myData.txt4);
        myformdata.append("st_password", myData.txt5);
        myformdata.append("st_photo", myData.pic);

        Axios.post("https://akashsir.in/myapi/crud/student-add-api.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    var a = response.data.st_mobileno
                    localStorage.setItem("st_mobileno", JSON.stringify(a))
                    var msg = response.data.message;
                    alert(msg);
                    navigate('/');
                }
            }).catch(function (response) {
                console.log(response)
            });
    };

    return (
        <div>
            <h1><i>Signup</i></h1>
            <form onSubmit={submitValue}>
                Name : <input type="text" name='txt1' onChange={onChangeEvent} /> <br />
                Gender : <input type="text" name="txt2" onChange={onChangeEvent} /> <br />
                Email : <input type="email" name='txt3' onChange={onChangeEvent} /> <br />
                Mobile No : <input type="number" name='txt4' onChange={onChangeEvent} /> <br />
                Password: <input type="password" name='txt5' onChange={onChangeEvent} /> <br />
                Image : <input type="file" name="pic" onChange={onChangeEvent} /> <br />
                <input type="submit" />
            </form>
        </div>
    );
}
export default Signup;