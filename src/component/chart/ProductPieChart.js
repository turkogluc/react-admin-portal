import React from 'react';
import { Interaction, PieChart } from 'bizcharts';
import { Card } from 'antd';

const pieData = [
  {
    type: 'home',
    value: 27,
  },
  {
    type: 'living',
    value: 25,
  },
  {
    type: 'accessories',
    value: 18,
  },
  {
    type: 'jewellery',
    value: 15,
  },
  {
    type: 'clothing',
    value: 10,
  },
  {
    type: 'handmade',
    value: 5,
  },
];

function ProductPieChart() {
  return (
    <Card bordered={false}>
      <PieChart
        forceFit
        height={250}
        data={pieData}
        radius={0.8}
        angleField="value"
        colorField="type"
        label={{
          visible: true,
          type: 'outer',
          offset: 20,
          formatter: val => `${val}%`,
        }}
      >
        <Interaction type="element-single-selected" />
      </PieChart>
    </Card>
  );
}

export default ProductPieChart;
