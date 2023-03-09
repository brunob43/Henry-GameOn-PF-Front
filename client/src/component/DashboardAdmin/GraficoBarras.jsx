import { VStack, HStack, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class GraficoBarras extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      series:  [{
        name: '',
        data: this.props.games.map((g)=>g.game_likes)
      }],
      options: {
        chart: {
          height: 1000,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "Likes";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        // ["#304758"]
        xaxis: {
          categories: this.props.games.map((g)=>g.game_name),
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + " Likes";
            }
          }
        
        },
        title: {
          text: ' ',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        }
      }
    }

  render() {
    return (
      <>
      <VStack bg={"grey"} margin="20px" border="1px solid black">
        <Text fontSize={"30px"}>GAMES</Text>
        <HStack id="chart" mt="120px">
          <Chart

            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={300}
            width={600}
          />
        </HStack>
      </VStack>
        
      </>
    );
  }
}