import React, { Component, useState, useEffect } from 'react'
// import Chart from './Chart'
import { HorizontalBar } from 'react-chartjs-2'
import ChartRight from './ChartRight'
import ChartDown from './ChartDown'
import ChartDownR from './ChartDownR'

import { Link, withRouter } from 'react-router-dom'


class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: ['7月份','8月份', '9月份', '10月份', '11月份'],
        datasets: [
          {
            label: '身體清潔',
            fill: false,
            backgroundColor: 'rgba(85, 149, 52, 0.8)',
            data: [37, 25, 50, 84, 44, 10],
        
          },
          {
            label: '臉部保養',
            fill: false,
            backgroundColor: 'rgba(98, 122, 134,0.8)',
            data: [30, 36, 27, 29, 62, 80],
          
          },
          {
            label: '頭髮護理',
            fill: false,
            backgroundColor: 'rgba(236, 109, 106, 0.8)',
            data: [40, 6, 30, 33, 22, 45],

          },
        ],
        maintainAspectRatio: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function(label, index, labels) {
                return label.toFixed(2) + '%'
              },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              callback: function(label, index, labels) {
                return label
              },
              fontSize: 24,
              fontColor: 'black',
            },
            display: true,
          },
        ],
      },
    }
  }

  render() {
    // console.log(this.props.getClickData)
    console.log(this.props.totalPrice)

    return (
      <div className="conteiner">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-lg-around pt-md-0 mt-md-3 mb-5">
              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card  text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i
                      width="150"
                      height="150"
                      className="text-warning"
                    ></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>11月份總銷售額</h2>
                    <h2 className="card-text">
                         $128,500                  
                    </h2>
                    
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i className=" text-info"></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>11月各品項總點擊數</h2>
                    <h2 className="card-text">18345次</h2>
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i className=" text-danger"></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>11月到訪人數</h2>
                    <h2 className="card-text">                   
                      3683人
                    </h2>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-center">銷售金額圖表</h2>
            <HorizontalBar
              options={{
                responsive: true,
              }}
              data={this.state.data}
              height={300}
              width={500}
            />
            {/* <Chart /> */}
            <h2 className="text-center">單位(萬)</h2>
          </div>

          <ChartRight />
          <ChartDown />
          <ChartDownR/>


          
        </div>
      </div>
    )
  }
}




export default withRouter(
MainPage
)
