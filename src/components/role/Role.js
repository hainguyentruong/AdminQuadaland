import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar"
import roleapi from "../../api/roleapi";
import MyFooter from "../MyFooter/MyFooter";

function Role(props) {

    const [roleList, setRoleList] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log('rerender');
        roleapi.getAll(successCallback, failedCallback);
    }, []);

    const successCallback = (res) => {
        setRoleList(res)
    }

    const failedCallback = (err) => {
        console.log(err);
    }

    return (
        <>
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <SideBar />
                <div className="content-inner">
                    {/* Page Header*/}
                    <header className="page-header">
                        <div className="container-fluid">
                            <h2 className="no-margin-bottom">Roles</h2>
                        </div>
                    </header>
                    {/* Breadcrumb*/}
                    <div className="breadcrumb-holder container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Roles</li>
                        </ul>
                    </div>
                    <section className="tables pt-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center">
                                            <h3 className="h4">Data Table Roles</h3>
                                        </div>
                                        <form
                                            className="form-inline md-form form-sm mt-0" style={{ justifyContent: 'flex-end', paddingTop: 5, paddingRight: 20 }}>
                                        </form>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th>Number</th>
                                                            <th>Name Role</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {roleList ? roleList.map((item, index) => (
                                                            <tr >
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item.name}</td>
                                                            </tr>
                                                        )) : <h1>No items</h1>}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Page Footer*/}
                    <MyFooter></MyFooter>
                </div>
            </div>
        </>
    );
}

export default Role;