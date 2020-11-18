import React, { Component, useState } from 'react'
import { Pie } from 'react-chartjs-2'

export default class ChartDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        datasets: [{
          data: [
            10345,
             9345,
              14877,
              21345,
              18345,
          ],
          backgroundColor: [
            'rgba(255, 127,	80, 0.7)',
            'rgba(241, 141 ,0, 0.7)',
            'rgba(142, 35, 107, 0.7)',
            'rgba(135, 206, 235, 0.7)',
            'rgba(0, 47, 176, 0.7)',
          ],
          label: 'Dataset 1'
      }],
      labels: [
          '7月',
          '8月',
          '9月',
          '10月',
          '11月'
      ]
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
        <h2 className="text-center">各月份商品觸擊次數</h2>
        <Pie
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
