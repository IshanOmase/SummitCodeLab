// components/TimelineChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TimelineChartComponent = ({ data }) => {
  const getStatusColor = status => {
    switch (status) {
      case 0:
        return 'yellow';
      case 1:
        return 'green';
      default:
        return 'red';
    }
  };

  const formatData = () => {
    if (!Array.isArray(data)) {
      console.error('Data is not an array:', data);
      return [];
    }
    return data.map(item => ({
      timestamp: new Date(item.ts).toLocaleTimeString('en-US', { hour12: false }),
      status: item.machine_status,
      fill: getStatusColor(item.machine_status)
    }));
  };

  const formattedData = formatData();

  return (
    <div style={{ width: '100%', height: 100 }}>
      <ResponsiveContainer>
        <BarChart data={formattedData}>
          <XAxis dataKey="timestamp" />
          <Tooltip />
          <Bar dataKey="status" fill={data => data.fill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChartComponent;
