import React from "react";
import axios from "axios";

function Editprofile() {
    const [myData, myDataUpdate] = React.useState({});
    const onChangeEvent = (e) => {
        myDataUpdate((myData) => ({
            ...myData,
            [e.target.name]: e.target.value
        }));
    }
    
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_id", myData.txt1);
        myformdata.append("st_name", myData.txt2);
        myformdata.append("st_gender", myData.txt3);
        myformdata.append("st_email", myData.txt4);
        myformdata.append("st_mobileno", myData.txt5);

        axios.post("https://akashsir.in/myapi/crud/student-edit-api.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    var msg = response.data.message;
                    alert(msg);
                } else {
                    alert("Wrong Details entered");
                }
            });
    }
    return (
        <div>
            <h1><i>Edit Profile</i></h1>
            <form onSubmit={submitValue}>
                Id : <input type="text" name='txt1' onChange={onChangeEvent} /> <br />
                Name : <input type="text" name='txt2' onChange={onChangeEvent} /> <br />
                Gender : <input type="text" name='txt3' onChange={onChangeEvent} /> <br />
                Email : <input type="email" name='txt4' onChange={onChangeEvent} /><br />
                Mobile No : <input type="number" name='txt5' onChange={onChangeEvent} /><br />
                <input type="submit" />
            </form>
        </div>);
}

export default Editprofile;