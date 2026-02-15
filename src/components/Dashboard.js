import React from 'react';

function Dashboard() {
  return (
    <div>
      <div className="card">
        <h3>Total Customers</h3>
        <p>120</p>
      </div>
      <div className="card">
        <h3>New Leads</h3>
        <p>35</p>
      </div>
      <div className="card">
        <h3>Monthly Revenue</h3>
        <p>$15,000</p>
      </div>
    </div>
  );
}

export default Dashboard;
