import React from "react";
import Axios from "axios";

function Changepass() {
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
        myfrmData.append("st_id", data.txt1);
        myfrmData.append("opass", data.txt2);
        myfrmData.append("npass", data.txt3);
        myfrmData.append("cpass", data.txt4);

        Axios.post("https://akashsir.in/myapi/crud/student-change-password-api.php", myfrmData)
            .then(function (response) {
                console.log(response);
                if (response.data.flag == "1") {
                    var msg = response.data.message;
                    alert(msg);
                } else {
                    alert("Your details is wrong");
                }
            });
    }
    return (
        <div>
            <h1><i>ChangePassword</i></h1>
            <form onSubmit={onSubmitValue}>
                User Id: <input type="text" name="txt1" onChange={onChangeEvent} /><br />
                Old Password: <input type="password" name="txt2" onChange={onChangeEvent} /><br />
                New Password: <input type="password" name="txt3" onChange={onChangeEvent} /><br />
                Confirm Password: <input type="password" name="txt4" onChange={onChangeEvent} /><br />
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Changepass;