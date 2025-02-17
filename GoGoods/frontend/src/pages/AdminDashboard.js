 
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold">Manage Products</h2>
          <p>Add, edit, or remove products.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p>View and manage customer orders.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-semibold">Users</h2>
          <p>Manage registered users.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
