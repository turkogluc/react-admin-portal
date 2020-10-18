import React from 'react';
import { Chart, Interval, Tooltip } from 'bizcharts';
import { Card } from 'antd';

const barData = [
  { x: 'W-1', y: 44 },
  { x: 'W-2', y: 201 },
  { x: 'W-3', y: 41 },
  { x: 'W-4', y: 197 },
  { x: 'W-5', y: 173 },
  { x: 'W-6', y: 184 },
  { x: 'W-7', y: 109 },
  { x: 'W-8', y: 55 },
  { x: 'W-9', y: 28 },
  { x: 'W-10', y: 153 },
  { x: 'W-11', y: 76 },
  { x: 'W-12', y: 27 },
];

function ProductBarChart() {
  return (
    <Card bordered={false}>
      <Chart
        height={250}
        autoFit
        data={barData}
        interactions={['active-region']}
      >
        <Interval position="x*y" />
        <Tooltip shared />
      </Chart>
    </Card>
  );
}

export default ProductBarChart;
