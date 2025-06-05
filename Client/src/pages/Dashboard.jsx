import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Users, ShoppingCart, TrendingUp, BarChart3, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '1,234',
      change: '+12%',
      icon: Package,
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      textColor: 'text-purple-700'
    },
    {
      title: 'Active Suppliers',
      value: '89',
      change: '+8%',
      icon: Users,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      textColor: 'text-pink-700'
    },
    {
      title: 'Recent Purchases',
      value: '456',
      change: '+15%',
      icon: ShoppingCart,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      textColor: 'text-emerald-700'
    },
    {
      title: 'Stock Movements',
      value: '2,789',
      change: '+23%',
      icon: TrendingUp,
      color: 'from-amber-400 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      textColor: 'text-amber-700'
    }
  ];

  const quickActions = [
    {
      title: 'Manage Products',
      description: 'Add, edit, and organize your inventory',
      path: '/products',
      icon: Package,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Supplier Network',
      description: 'Manage your supplier relationships',
      path: '/suppliers',
      icon: Users,
      color: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Purchase Orders',
      description: 'Track and manage purchase orders',
      path: '/purchases',
      icon: ShoppingCart,
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Stock Analytics',
      description: 'Monitor stock movements and trends',
      path: '/stock-movements',
      icon: TrendingUp,
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const alerts = [
    { message: 'Low stock alert: 5 products need restocking', type: 'warning' },
    { message: '3 new purchase orders require approval', type: 'info' },
    { message: 'Inventory audit completed successfully', type: 'success' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Welcome back to your dashboard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Inventory Management
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Streamline your inventory operations with intelligent insights and seamless management tools.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-200/20 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-800 mb-2">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
                    <span className="text-xs text-slate-500">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <stat.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-800">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.path}
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-200/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${action.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-purple-700 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">{action.description}</p>
                      <div className="flex items-center text-purple-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <span>Get started</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <action.icon className="w-20 h-20" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <AlertCircle className="w-5 h-5 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-800">Recent Alerts</h2>
            </div>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                    alert.type === 'warning'
                      ? 'bg-amber-50/70 border-amber-200/50 text-amber-800'
                      : alert.type === 'info'
                      ? 'bg-blue-50/70 border-blue-200/50 text-blue-800'
                      : 'bg-emerald-50/70 border-emerald-200/50 text-emerald-800'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Ready to optimize your inventory?</h3>
            <p className="text-purple-100 mb-6">Explore our powerful features and take control of your stock management.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Manage Products
              </Link>
              <Link
                to="/stock-movements"
                className="px-6 py-3 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border border-white/30"
              >
                View Analytics
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;