"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import "../styles/dashboard.css";
import LoadingPage from "./loading";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/charts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <LoadingPage/>;

  return (
    <div className="dashboard">
      <h1>Analysis</h1>

      <div className="charts">
        {data.map((chart, index) => (
          <div className="chart" key={index}>
            <h2>{chart.type.replace(/([A-Z])/g, " $1").trim()}</h2>
            <PieChart width={300} height={300}>
              <Pie data={chart.data} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {chart.data.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
