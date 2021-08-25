import React, { Component, useState } from 'react'
import MyFooter from '../MyFooter/MyFooter'
// import { actFetchDashboardRequest } from '../../../redux/actions/dashboard'
// import { connect } from 'react-redux'
import { Line, Pie, Bar } from 'react-chartjs-2';
import Header from "../header/Header";
// import {HorizontalBar} from 'chart.js'
import './style.css'
// import callApi from '../../../utils/apiCaller';
// import { actTokenRequest } from "../../../redux/actions/auth";
// let token;
const DashBoard =() => {
    const state = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    }
    // const [January1, setJanuary1] = useState(0),

    // const dataLine = {  
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //     datasets: [
    //       {
    //         label: 'Count contact',
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: 'rgba(75,192,192,0.4)',
    //         borderColor: 'rgba(75,192,192,1)',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: 'miter',
    //         pointBorderColor: 'rgba(75,192,192,1)',
    //         pointBackgroundColor: '#fff',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //         pointHoverBorderColor: 'rgba(220,220,220,1)',
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [January1, February1, March1, April1, May1, June1, July1, August1, September1, October1, November1, December1]
    //       }
    //     ]
    //   };
    return (
      <div className="content-inner">
        {/* Page Header*/}
        <header className="page-header">
          <div className="container-fluid">
            <h2 className="no-margin-bottom">Dashboard</h2>
          </div>
        </header>
        {/* Dashboard Counts Section*/}
        <section className="dashboard-counts no-padding-bottom">
          <div className="container-fluid">
            <div className="row bg-white has-shadow">
              {/* Item */}
              <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                  <div className="icon bg-violet"><i className="icon-user" /></div>
                  <div className="title"><span>New<br />Clients</span>
                    <div className="progress">
                      <div role="progressbar" style={{ width: '100%', height: '4px' }} className="progress-bar bg-violet fix-processbar" />
                    </div>
                  </div>
                  <div className="number"><strong>12</strong></div>
                </div>
              </div>
              {/* Item */}
              <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                  <div className="icon bg-red"><i className="icon-padnote" /></div>
                  <div className="title"><span>Work<br />Orders</span>
                    <div className="progress">
                      <div role="progressbar" style={{ width: '100%', height: '4px' }} className="progress-bar bg-red fix-processbar" />
                    </div>
                  </div>
                  <div className="number"><strong>15</strong></div>
                </div>
              </div>
              {/* Item */}
              <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                  <div className="icon bg-green"><i className="icon-bill" /></div>
                  <div className="title"><span>New<br />Products</span>
                    <div className="progress">
                      <div role="progressbar" style={{ width: '100%', height: '4px' }} className="progress-bar bg-green fix-processbar" />
                    </div>
                  </div>
                  <div className="number"><strong>10</strong></div>
                </div>
              </div>
              {/* Item */}
              <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                  <div className="icon bg-orange"><i className="icon-check" /></div>
                  <div className="title"><span>Amount<br />Income</span>
                    <div className="progress">
                      <div role="progressbar" style={{ width: '100%', height: '4px' }} className="progress-bar bg-orange fix-processbar" />
                    </div>
                  </div>
                  <div className="number"><strong>1</strong></div>
                </div>
              </div>
            </div>
            <h3 style={{paddingTop: 20}}>Report Product of Catefory</h3>
            {/* s */}
            <br />
            <br />
            <h3>Report Total Income</h3>
            <Bar 
            width={100}
            height={30}  data={state}/>
             <br />
             <br />
             <h3>Report Contact</h3>
             <Line  width={100}
            height={15} data={state}
               />
          </div>
        </section>
        {/* <MyFooter></MyFooter> */}
        
        
      </div>
    )
}


export default DashBoard;
