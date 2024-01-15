import React, { useEffect } from 'react';

const SkillsChart = () => {
  useEffect(() => {
    const data = {
      labels: ['HTML5', 'CSS3', 'JavaScript', 'NodeJs', 'React JS', 'Express', 'MongoDB', 'Angular'],
      datasets: [{
        data: [90, 90, 88, 80, 85, 80, 85, 75],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF5733',
          '#9C27B0',
          '#FF9800',
          '#607D8B',
        ],
      }],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false, 
    };

    const ctx = document.getElementById('skillsChart').getContext('2d');

    new window.Chart(ctx, {
      type: 'doughnut',
      data,
      options,
    });
  }, []);

  return (
    <div className="chart-container">
      <canvas id="skillsChart" width="300" height="300"></canvas>
    </div>
  );
};

export default SkillsChart;
