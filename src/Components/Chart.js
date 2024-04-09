import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

function Charts() {
  // Sample data for demonstration
  const [votingResults, setVotingResults] = useState({
    options: ["Option 1", "Option 2", "Option 3"],
    votes: [25, 40, 35],
    demographics: {
      labels: ["Male", "Female"],
      data: [60, 40],
    },
    engagement: {
      labels: ["Positive", "Neutral", "Negative"],
      data: [45, 30, 25],
    },
    satisfaction: {
      labels: [
        "Very Satisfied",
        "Satisfied",
        "Neutral",
        "Unsatisfied",
        "Very Unsatisfied",
      ],
      data: [20, 30, 25, 15, 10],
    },
  });

  useEffect(() => {
    // Create charts once component is mounted
    createChart(
      "votingChart",
      "bar",
      votingResults.options,
      votingResults.votes,
      "Votes"
    );
    createChart(
      "demographicsChart",
      "doughnut",
      votingResults.demographics.labels,
      votingResults.demographics.data,
      "Demographics"
    );
    createChart(
      "engagementChart",
      "pie",
      votingResults.engagement.labels,
      votingResults.engagement.data,
      "Engagement"
    );
    createChart(
      "satisfactionChart",
      "radar",
      votingResults.satisfaction.labels,
      votingResults.satisfaction.data,
      "Satisfaction"
    );
  }, [votingResults]);

  const createChart = (id, type, labels, data, label) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: [
              "rgba(78, 115, 223, 0.8)", // Dark blue
              "rgba(94, 218, 128, 0.8)", // Dark green
              "rgba(247, 166, 15, 0.8)", // Dark yellow
            ],
            borderColor: [
              "rgba(78, 115, 223, 1)", // Dark blue
              "rgba(94, 218, 128, 1)", // Dark green
              "rgba(247, 166, 15, 1)", // Dark yellow
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Vote Count</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="mb-8">
          <canvas id="votingChart" width="400" height="200"></canvas>
        </div>
        <div className="mb-8">
          <canvas id="demographicsChart" width="400" height="200"></canvas>
        </div>
        <div className="mb-8">
          <canvas id="engagementChart" width="400" height="200"></canvas>
        </div>
        <div className="mb-8">
          <canvas id="satisfactionChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Charts;
