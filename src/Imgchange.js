import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Imgchange() {
    const [myPicture, myPictureUpdate] = React.useState({});
    let navigate = useNavigate();
    const onChangeEvent = (e) => {
        myPictureUpdate((myPicture) => ({
            ...myPicture,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_id", myPicture.txt1);
        myformdata.append("st_photo", myPicture.txt2);

        axios.post("https://akashsir.in/myapi/crud/student-image-change-api.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    alert(response.data.message);
                    navigate('/Dashboard');
                } else {
                    alert("Wrong details entered");
                }
            });
    }
    return (
        <div>
            <h1><i>Update Image</i></h1>
            <form onSubmit={submitValue} >
                ID : <input type='text' name='txt1' onChange={onChangeEvent} /><br />
                File : <input type='file' name='txt2' onChange={onChangeEvent} /><br />
                <input type='submit' />
            </form>
        </div>
    );
}
export default Imgchange;