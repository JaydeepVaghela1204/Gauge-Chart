import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
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

  // Center coordinates and adjusted radius for needle
  const centerX = 150; 
  const centerY = 150; 
  const radius = 90;   // Slightly larger radius for better alignment

  // Calculate the angle and needle position
  const angle = (value / 100) * Math.PI; // Map value to angle in radians (0 to PI)
  const needleX = centerX + radius * Math.cos(Math.PI - angle);
  const needleY = centerY - radius * Math.sin(Math.PI - angle);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>Gauge Chart</h2>
      <div
        style={{
          width: "300px",
          height: "300px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width="100%" height="100%">
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
            <text x="7%" y="50%" fill="white" textAnchor="middle">
              0%
            </text>
            <text x="17%" y="25%" fill="white" textAnchor="middle">
              25%
            </text>
            <text x="50%" y="10%" fill="white" textAnchor="middle">
              50%
            </text>
            <text x="78%" y="22%" fill="white" textAnchor="middle">
              75%
            </text>
            <text x="94%" y="50%" fill="white" textAnchor="middle">
              100%
            </text>

            {/* Needle to indicate current value */}
            <line
              x1={centerX}
              y1={centerY}
              x2={needleX}
              y2={needleY}
              stroke="#ff4500"
              strokeWidth="4"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <RandomUpdateButton onClick={() => dispatch(setRandomValue())} />
    </div>
  );
};

export default GaugeChart;
