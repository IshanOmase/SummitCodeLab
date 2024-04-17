import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TimelineChartComponent = ({ data, interval }) => {
  const getStatusColor = status => {
    switch (status) {
      case 0:
        return 'yellow'; // Return yellow color for status 0
      case 1:
        return 'green'; // Return green color for status 1
      default:
        return 'red'; // Return red color for missing status
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
      fill: getStatusColor(item.machine_status) // Use getStatusColor to determine fill color
    }));
  };

  const formattedData = formatData();

  let tickCount, intervalProp;
  if (interval === '1hr') {
    tickCount = 5;
    intervalProp = 'preserveEnd';
  } else if (interval === '8hr') {
    tickCount = 8;
    intervalProp = 480;
  } else if (interval === '24hr') {
    tickCount = 24;
    intervalProp = 'preserveEnd';
  }

  return (
    <div style={{ width: '100%', height: 100 }}>
      <ResponsiveContainer>
        <BarChart data={formattedData}>
          <XAxis 
            dataKey="timestamp"
            tickCount={tickCount}
            interval={intervalProp}
          />
          <Tooltip />
          <Bar dataKey="status" fill={data => data.fill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChartComponent;
