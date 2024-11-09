import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PieChart, Pie, Cell } from 'recharts';
import { setRandomValue } from './gaugeSlice';
import RandomUpdateButton from '../../components/RandomUpdateButton';

const GaugeChart = () => {
  const value = useSelector((state) => state.gauge.value);
  const dispatch = useDispatch();

  // Define gauge segments and color
  const data = [
    { value: value },
    { value: 100 - value },
  ];
  const COLORS = ['#4a90e2', '#1c1c1c']; // Dark-themed palette

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2>Gauge Chart</h2>
      <PieChart width={1400} height={300}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        {/* Labels at 0%, 25%, 50%, 75%, 100% */}
        <text x={600} y={170} z={0} fill="white" textAnchor="middle">0%</text>
        <text x={610} y={75} fill="white" textAnchor="middle">25%</text>
        <text x={700} y={45} fill="white" textAnchor="middle">50%</text>
        <text x={785} y={75} fill="white" textAnchor="middle">75%</text>
        <text x={800} y={170} fill="white" textAnchor="middle">100%</text>

        {/* Needle to indicate current value */}
        <line
          x1={700}
          y1={150}
          x2={700 + 60 * Math.cos((value / 100) * Math.PI - Math.PI)}
          y2={150 - 60 * Math.sin((value / 100) * Math.PI)}
          stroke="#ff4500"
          strokeWidth="4"
        />
      </PieChart>

      <RandomUpdateButton onClick={() => dispatch(setRandomValue())} />
    </div>
  );
};

export default GaugeChart;
