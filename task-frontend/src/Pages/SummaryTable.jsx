import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SummaryTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8005/samples"); // Replace '/api/data' with your actual API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateSummary = () => {
    let onesCount = 0;
    let zerosCount = 0;
    let continuousOnes = 0;
    let continuousZeros = 0;
    let maxContinuousOnes = 0;
    let maxContinuousZeros = 0;

    data.forEach(item => {
      if (item.machine_status === 1) {
        onesCount++;
        continuousOnes++;
        continuousZeros = 0;
        maxContinuousOnes = Math.max(maxContinuousOnes, continuousOnes);
      } else if (item.machine_status === 0) {
        zerosCount++;
        continuousZeros++;
        continuousOnes = 0;
        maxContinuousZeros = Math.max(maxContinuousZeros, continuousZeros);
      }
    });

    return {
      onesCount,
      zerosCount,
      maxContinuousOnes,
      maxContinuousZeros
    };
  };

  const summary = calculateSummary();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Summary</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of 1s</td>
            <td>{summary.onesCount}</td>
          </tr>
          <tr>
            <td>Number of 0s</td>
            <td>{summary.zerosCount}</td>
          </tr>
          <tr>
            <td>Max Continuous 1s</td>
            <td>{summary.maxContinuousOnes}</td>
          </tr>
          <tr>
            <td>Max Continuous 0s</td>
            <td>{summary.maxContinuousZeros}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
