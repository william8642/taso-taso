import React, { Component, useState } from 'react'
import { Bar } from 'react-chartjs-2'

export default class ChartRightR extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        labels: ['7月份','8月份', '9月份', '10月份', '11月份'],
        datasets: [
          {
            label: '個月份到訪人數',
            fill: false,
            backgroundColor: ['rgb(255, 127,	80)',
            'rgba(241, 141 ,0, 0.8)',
            'rgba(142, 35, 107, 0.8)',
            'rgba(135, 206, 235, 0.8)',
            'rgba(0, 47, 176, 0.8)',],
            data: [2245, 1989, 2760, 4040, 3683],

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
    return (
      <div className="col-sm-6 pt-md-5">
        <h2 className="text-center">各月網站到訪次數</h2>
        <Bar
          options={{
            responsive: true,
          }}
          data={this.state.data}
          height={300}
          width={500}
        />
        <h2 className="text-center">各品項合計</h2>
      </div>
    )
  }
}
