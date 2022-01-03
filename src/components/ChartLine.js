import React, { Component } from "react";
import Chart from "react-apexcharts";
import arrow from '../assets/arrow-down.svg';

class ChartLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 4
          }
        },
        xaxis: {
          categories: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: {
            style: {
              colors: ['#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3'],
              fontSize: '12',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              cssClass: 'apexcharts-xaxis-label',
          },
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#7356C0',
          }
        },
      },
      series: [
        {
          name: "week",
          data: [0, 20, 40, 50, 60, 80, 100]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="weekly_bar">
            <div className="weekly_bar_top">
              <div className="weekly_top_txt">
                <p>Weekly Driven miles Report</p>
                <span>How many miles weekly driven</span>
              </div>
              <div className="weekly_selectbox">
                <select name="" id="">
                  <option value="" disabled selected>Weekly</option>
                  <option value="">Mon</option>
                  <option value="">Tue</option>
                  <option value="">Wed</option>
                  <option value="">Thu</option>
                  <option value="">Fri</option>
                  <option value="">Sat</option>
                  <option value="">Sun</option>
                </select>
                <img src={arrow} alt="" className="weekly_icon"/>
              </div>
            </div>
            <div className="mixed-chart">
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="600"
                />
            </div>
        </div>
      </div>
    );
  }
}

export default ChartLine;