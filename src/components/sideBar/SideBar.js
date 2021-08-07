import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axiosadmin from '../../api/axiosadmin';
function SideBar(props) {
    const token = localStorage.getItem('token');
    const currentRole = jwt_decode(token).role;
    const currentName = jwt_decode(token).username;
    // const currentRole = token.role;
    // const currentName = token.username;
    return (
        <nav className="side-navbar">
            {/* Sidebar Header*/}
            <div className="sidebar-header d-flex align-items-center">
                <div className="avatar"><img src='https://i.ibb.co/NCdx7FF/avatar-Default.png' alt="notfound" className="img-fluid rounded-circle"/></div>
          <div className="title">
            <h1 className="h4">{currentName}</h1>
            <p><b style={{fontWeight: 600}}>{currentRole}</b></p>
          </div>
            </div>
            {/* Sidebar Navidation Menus*/}
            <span className="heading">Main</span>
            {/* {(nameRole === 'superadmin' || nameRole === 'admin') ? */}
            <ul className="list-unstyled">
                <li><Link to="/home"> <i class="fa fa-home" aria-hidden="true"/>Home </Link></li>
                <li><Link to="/property"> <i className="icon icon-website" />Property</Link></li>
                <li> <Link to="/media"> <i class="fa fa-camera" aria-hidden="true" />Media </Link></li>
                <li><Link to="/customer"> <i class="fa fa-users" aria-hidden="true" />Customer</Link></li>
                <li><Link to="/company"> <i class="fa fa-building" aria-hidden="true" />Company</Link></li>
                <li><Link to="/users"> <i class="fa fa-user" aria-hidden="true" />Users</Link></li>
                <li><Link to="/roles"> <i class="fa fa-server" aria-hidden="true" />Roles</Link></li>
                <li><Link to="/propertysalemethods"> <i class="fa fa-bars" aria-hidden="true" />Sale Method</Link></li>
                <li> <Link to="/change-password"> <i class="fa fa-cog" aria-hidden="true" />Change Password </Link></li>
            </ul>
            <span className="heading">Extras</span>
            <ul className="list-unstyled">
                <li> <Link to="/about"> <i className="icon-screen" />Abount </Link></li>
                <li> <Link to="/help"> <i className="icon-flask" />Help </Link></li>
            </ul>
        </nav>
    );
}

export default SideBar;