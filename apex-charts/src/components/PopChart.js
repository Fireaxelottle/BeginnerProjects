import { Fragment } from "react";
import React from "react";
import Chart from 'react-apexcharts'

const PopChart = ({ options, series }) => {
  
  return (
    <Fragment>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="500px"
      />
      
    </Fragment>
  );
};

export default PopChart;
