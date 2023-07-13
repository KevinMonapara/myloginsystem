import React, { useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const [ Dashboard, setDashboard ] = React.useState("");

    let navigate = useNavigate();
    function Logout() {
        localStorage.clear();
        navigate('/')
    }
    
    useEffect(() => {
        if (localStorage.getItem("st_name")) {
            var z = localStorage.getItem("st_name");
            
            setDashboard(z);
           
        }else{
            window.location ='/Login';
        }
    });

    return (
        <>
            <h1><i>Dashboard</i></h1>
            Hiii, {Dashboard} 
            <br />
            <Link to="/Changepass">Change Password</Link> |  
            <Link to="/Editprofile"> Edit Profile</Link> |  
            <Link to="/Imgchange"> Update Image</Link> |  
            <button onClick={Logout} type='button'> LogOut </button>
        </>
    )
}
export default Dashboard;