import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { useAuth } from '../../Context/AuthContext';



export default function UserName (){
  const { currentUser, logout } = useAuth();
 
  return (
    <div className="m-1 p-2" style={{color: '#RRR'}}>
        <FaUserCircle size={30} />
        <span style={{ marginLeft: '5px'}}>{currentUser.displayName}</span>
        <span style={{ marginLeft: '6px'}}
            title="Logout"
            onClick={logout}
          >
            <GrLogout size={30} />
            {/* <Nav>
            <Nav.Link className="m-1 p-2 Button_1" style={{color: '#fff'}}>Log Out</Nav.Link>
            </Nav> */}
          </span>
    </div>
  )
}


