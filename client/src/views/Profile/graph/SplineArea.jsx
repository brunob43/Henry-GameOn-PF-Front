import { VStack, HStack } from "@chakra-ui/react";
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class SplineArea extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [60, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <>
      <VStack>
        <HStack id="chart" mt="120px">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
            width={600}
          />
        </HStack>
      </VStack>
        
      </>
    );
  }
}