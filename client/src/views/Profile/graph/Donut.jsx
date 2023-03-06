import { VStack, HStack, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class Donut extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      series:[44, 55, 41, 17, 15],
      options: {
        chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          }
        }
    }
  

  render() {
    return (
      <>
      <VStack>
        <Text>Docs Created</Text>
        <HStack id="chart" mt="120px">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={300}
            width={400}
          />
        </HStack>
      </VStack>
        
      </>
    );
  }
}