import React from 'react';
import { Chart, Interval, Interaction } from 'bizcharts';
import './chart.less';
import autoHeight from './autoHeight';

function MiniBar(props) {
  const data = [
    { year: '1951 year', sales: 38 },
    { year: '1952 year', sales: 52 },
    { year: '1956 year', sales: 61 },
    { year: '1957 year', sales: 45 },
    { year: '1958 year', sales: 48 },
    { year: '1959 year', sales: 38 },
    { year: '1960 year', sales: 38 },
    { year: '1962 year', sales: 38 },
    { year: '1963 year', sales: 10 },
    { year: '1965 year', sales: 90 },
    { year: '1966 year', sales: 80 },
    { year: '1967 year', sales: 20 },
    { year: '1968 year', sales: 80 },
    { year: '1970 year', sales: 50 },
  ];

  return (
    <div style={{ paddingTop: '20px' }}>
      <Chart autoFit pure data={data}>
        <Interval position="year*sales" />
        <Interaction type="element-highlight" />
        <Interaction type="active-region" />
      </Chart>
    </div>
  );
}

export default MiniBar;
