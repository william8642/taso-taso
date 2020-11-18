import React, { Component, useState } from 'react'
import { Line } from 'react-chartjs-2'

export default class ChartRight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        labels: ['7月份','8月份', '9月份', '10月份', '11月份'],
        datasets: [
          {
            label: '身體清潔',
            fill: false,
            backgroundColor: 'rgba(19, 41 ,72, 0.8)',
            data: [50, 30, 80, 88, 50],
            borderColor: 'rgb(85, 149, 52)',
          },
          {
            label: '臉部保養',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [30, 40, 25, 35, 75],
            borderColor: 'rgb(98, 122, 134)',
          },
          {
            label: '頭髮護理',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [41, 21, 42, 52, 32],
            borderColor: 'rgb(236, 109, 106)',
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
      <div className="col-sm-6">
        <h2 className="text-center">銷售數量前三名商品</h2>
        <Line
          options={{
            responsive: true,
          }}
          data={this.state.data}
          height={300}
          width={500}
        />
        <h2 className="text-center">銷售數量</h2>
      </div>
    )
  }
}
