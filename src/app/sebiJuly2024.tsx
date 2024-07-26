'use client'
// components/IntradayTradingInsights.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useTheme } from 'next-themes';

const IntradayTradingInsights = () => {
  const { setTheme } = useTheme();

  const data = {
    labels: ['FY19', 'FY20', 'FY21', 'FY22', 'FY23'],
    datasets: [
      {
        label: 'Number of Traders (in millions)',
        data: [1.49, 2.24, 3.96, 5.57, 6.89],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y1',
      },
      {
        label: 'Young Traders (%)',
        data: [18, 27, 38, 43, 48],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y2',
      },
      {
        label: 'Small Traders (%)',
        data: [27, 34, 46, 52, 56],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        yAxisID: 'y2',
      },
      {
        label: 'Loss Makers (%)',
        data: [70, 72, 74, 73, 71],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y1: {
        type: 'linear',
        position: 'left',
      },
      y2: {
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="div-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        Intraday Trading by Individuals in the Indian Equity Cash Segment: Key Insights
      </h1>
      <div className="mb-4">
        Intraday trading in the Indian equity cash segment has seen significant changes in recent years. This study by SEBI, conducted by the Department of Economic and Policy Analysis, explores the participation, profitability, and demographic shifts among individual intraday traders from FY19 to FY23. The findings provide a comprehensive understanding of the evolving landscape of intraday trading.
      </div>
      <h2 className="text-xl font-bold mb-2">Surge in Participation</h2>
      <div className="mb-4">
        From FY19 to FY23, the number of individual intraday traders increased from 1.49 million to 6.89 million, marking a 4.6-fold rise. This surge is notable among:
        <ul className="list-disc list-inside">
          <li><strong>Young Traders:</strong> The proportion of traders under 30 years increased from 18% in FY19 to 48% in FY23.</li>
          <li><strong>Small Traders:</strong> Those with an annual turnover of less than Rs. 50,000 grew from 27% to 56%.</li>
          <li><strong>Regional Shifts:</strong> More traders are now emerging from Tier-II and Tier-III cities.</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-2">Profitability and Losses</h2>
      <div className="mb-4">
        The study reveals a concerning trend in profitability:
        <ul className="list-disc list-inside">
          <li><strong>High Losses:</strong> 71% of intraday traders incurred net losses in FY23. This percentage rises to 80% among traders with very frequent trading activity.</li>
          <li><strong>Young Traders:</strong> Among traders under 30 years, 76% faced losses in FY23.</li>
          <li><strong>Experience Factor:</strong> Even after three years of experience, 54% of traders were loss-makers, though this is lower than the overall percentage.</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-2">Trading Patterns and Turnover Distribution</h2>
      <div className="mb-4">
        <ul className="list-disc list-inside">
          <li><strong>Skewed Turnover Distribution:</strong> The bottom 78% of traders accounted for less than 1% of the total intraday turnover, while the top 6% contributed over 90%.</li>
          <li><strong>High Turnover Traders:</strong> 76% of individuals with an annual turnover exceeding Rs. 1 crore were loss-makers, with average losses of Rs. 34,977.</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-2">Cost of Trading</h2>
      <div className="mb-4">
        <ul className="list-disc list-inside">
          <li><strong>Impact on Losses:</strong> Trading costs exacerbated losses by 57% for loss-makers, while profit-makers saw 19% of their profits consumed by trading costs.</li>
          <li><strong>Frequent Traders:</strong> Those trading very frequently faced higher trading costs, impacting their profitability adversely.</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-2">Conclusion</h2>
      <div className="mb-4">
        The study underscores the challenges faced by individual intraday traders in the Indian equity cash segment. The high rate of losses, particularly among young and frequent traders, highlights the need for better education and risk management practices in intraday trading.
      </div>
      <div className="my-8">
        <Line data={data} options={options} />
      </div>
      <div className="mb-4">
        This analysis provides critical insights for market participants and regulators, emphasizing the importance of informed trading strategies and the potential risks associated with high-frequency intraday trading.
      </div>
    </div>
  );
};

export default IntradayTradingInsights;
