"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { Card } from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  WalletIcon,
  LineChartIcon,
  BarChartIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState("overview");

  if (!isLoaded) {
    return <Loader />;
  }

  if (!user) {
    return <div>Please sign in to access the dashboard</div>;
  }

  const stats = [
    {
      title: "Total Balance",
      value: "$12,345.67",
      change: "+12.3%",
      icon: WalletIcon,
      trend: "up",
    },
    {
      title: "Monthly Income",
      value: "$4,567.89",
      change: "+5.7%",
      icon: ArrowUpIcon,
      trend: "up",
    },
    {
      title: "Monthly Expenses",
      value: "$2,345.67",
      change: "-2.3%",
      icon: ArrowDownIcon,
      trend: "down",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      description: "Grocery Shopping",
      amount: -123.45,
      date: "2024-01-26",
      category: "Food",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 5000.00,
      date: "2024-01-25",
      category: "Income",
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: -15.99,
      date: "2024-01-24",
      category: "Entertainment",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mt-16">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, {user.firstName}! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Here's what's happening with your finances today.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-3 rounded-full ${
                    stat.trend === "up"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions List */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <Button variant="outline" size="sm">
                View All <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {transaction.date} • {transaction.category}
                    </p>
                  </div>
                  <span
                    className={`font-semibold ${
                      transaction.amount > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Right Sidebar */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <WalletIcon className="w-4 h-4 mr-2" />
                Add New Account
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ArrowUpIcon className="w-4 h-4 mr-2" />
                Record Income
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ArrowDownIcon className="w-4 h-4 mr-2" />
                Record Expense
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <LineChartIcon className="w-4 h-4 mr-2" />
                View Reports
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChartIcon className="w-4 h-4 mr-2" />
                Budget Overview
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;