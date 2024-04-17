// containers/TimelineChartContainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimelineChartComponent from '../Components/TimeLineChartComponent';

const TimelineChartContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8005/samples");
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return <TimelineChartComponent data={data} />;
};

export default TimelineChartContainer;
