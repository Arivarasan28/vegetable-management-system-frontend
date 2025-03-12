import React from 'react';
import { ChartBarIcon, ShoppingCartIcon, UserGroupIcon, TruckIcon, CurrencyDollarIcon, CogIcon, BellIcon } from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  // Stats Data
  const stats = [
    { title: 'Total Products', value: '245', icon: ChartBarIcon, color: 'bg-green-500' },
    { title: "Today's Orders", value: '32', icon: ShoppingCartIcon, color: 'bg-blue-500' },
    { title: 'Active Farmers', value: '89', icon: UserGroupIcon, color: 'bg-yellow-500' },
    { title: 'Pending Deliveries', value: '15', icon: TruckIcon, color: 'bg-red-500' },
  ];

  // Recent Orders Data
  const recentOrders = [
    { id: '#1234', product: 'Organic Tomatoes', date: '2023-07-25', status: 'Delivered', amount: '$45' },
    { id: '#1235', product: 'Fresh Carrots', date: '2023-07-25', status: 'Processing', amount: '$32' },
    { id: '#1236', product: 'Green Spinach', date: '2023-07-24', status: 'Pending', amount: '$28' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Vegetable Management Dashboard</h1>
        <div className="flex items-center space-x-4">
          <BellIcon className="h-6 w-6 text-gray-300" />
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
            <span className="text-gray-300">Admin</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b border-gray-700 last:border-b-0">
                  <td className="py-3 text-gray-300">{order.id}</td>
                  <td className="py-3 text-gray-300">{order.product}</td>
                  <td className="py-3 text-gray-300">{order.date}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      order.status === 'Delivered' ? 'bg-green-800/30 text-green-400' :
                      order.status === 'Processing' ? 'bg-yellow-800/30 text-yellow-400' :
                      'bg-red-800/30 text-red-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-300">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-white mb-4">Top Selling Vegetables</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Organic Potatoes</span>
              <span className="text-green-400">450 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Fresh Carrots</span>
              <span className="text-green-400">320 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Cherry Tomatoes</span>
              <span className="text-green-400">275 kg</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-white mb-4">Farmers Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Farmers</span>
              <span className="text-blue-400">89</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">New Farmers (7d)</span>
              <span className="text-blue-400">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Pending Approvals</span>
              <span className="text-red-400">5</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-3 bg-green-800/30 rounded-lg hover:bg-green-800/40 text-white transition-colors">
              <TruckIcon className="h-5 w-5 inline mr-2 text-green-400" />
              Add Delivery
            </button>
            <button className="p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/40 text-white transition-colors">
              <ShoppingCartIcon className="h-5 w-5 inline mr-2 text-blue-400" />
              New Order
            </button>
            <button className="p-3 bg-yellow-800/30 rounded-lg hover:bg-yellow-800/40 text-white transition-colors">
              <UserGroupIcon className="h-5 w-5 inline mr-2 text-yellow-400" />
              Add Farmer
            </button>
            <button className="p-3 bg-purple-800/30 rounded-lg hover:bg-purple-800/40 text-white transition-colors">
              <CogIcon className="h-5 w-5 inline mr-2 text-purple-400" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;