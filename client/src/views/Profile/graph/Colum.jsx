import { VStack, HStack, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class Colum extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Like Games",
          data: [60, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Like Docs",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      }
    }
  }





  render() {
    return (
      <>
      <VStack>
        <Text>Likes Games and Docs</Text>
        <HStack id="chart" mt="120px">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={300}
            width={400}
          />
        </HStack>
      </VStack>
        
      </>
    );
  }
}