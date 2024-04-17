// containers/TimelineChartContainer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimelineChartComponent from '../Components/TimeLineChartComponent';

const TimelineChartContainer = ({ interval }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8005/samples");
        console.log('Fetched data:', response.data); // Log the fetched data
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

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {!isLoading && !isError && <TimelineChartComponent data={data} interval={interval} />}
    </div>
  );
};

export default TimelineChartContainer;
