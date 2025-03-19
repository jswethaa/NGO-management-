"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  Users,
  Heart,
  Calendar,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Clock,
  Filter,
} from "lucide-react"
import AnimatedSection from "../../components/common/AnimatedSection"
import Card from "../../components/common/Card"

const AdminDashboard = () => {
  const [dateRange, setDateRange] = useState("month");
  const [campaignFilter, setCampaignFilter] = useState("all");

  // Dummy data for charts
  const donationData = [
    { name: "Jan", donations: 12000 },
    { name: "Feb", donations: 19000 },
    { name: "Mar", donations: 15000 },
    { name: "Apr", donations: 21000 },
    { name: "May", donations: 18000 },
    { name: "Jun", donations: 25000 },
    { name: "Jul", donations: 22000 },
    { name: "Aug", donations: 30000 },
    { name: "Sep", donations: 28000 },
    { name: "Oct", donations: 32000 },
    { name: "Nov", donations: 35000 },
    { name: "Dec", donations: 40000 },
  ];

  const userGrowthData = [
    { name: "Jan", donors: 120, volunteers: 45, beneficiaries: 78 },
    { name: "Feb", donors: 140, volunteers: 50, beneficiaries: 82 },
    { name: "Mar", donors: 170, volunteers: 55, beneficiaries: 85 },
    { name: "Apr", donors: 190, volunteers: 60, beneficiaries: 90 },
    { name: "May", donors: 220, volunteers: 65, beneficiaries: 95 },
    { name: "Jun", donors: 250, volunteers: 70, beneficiaries: 100 },
  ];

  const campaignPerformanceData = [
    { name: "Clean Water", raised: 32500, goal: 50000 },
    { name: "Education", raised: 30000, goal: 75000 },
    { name: "Health Camp", raised: 20000, goal: 25000 },
    { name: "Disaster Relief", raised: 60000, goal: 100000 },
    { name: "Women Empowerment", raised: 10500, goal: 35000 },
  ];

  const donationSourceData = [
    { name: "Individual Donors", value: 65 },
    { name: "Corporate Sponsors", value: 20 },
    { name: "Grants", value: 10 },
    { name: "Events", value: 5 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  const stats = [
    {
      title: "Total Donations",
      value: "$247,500",
      change: "+12.5%",
      isPositive: true,
      icon: <DollarSign className="text-primary" />,
    },
    {
      title: "Active Donors",
      value: "1,250",
      change: "+8.2%",
      isPositive: true,
      icon: <Heart className="text-primary" />,
    },
    {
      title: "Volunteers",
      value: "370",
      change: "+15.3%",
      isPositive: true,
      icon: <Users className="text-primary" />,
    },
    {
      title: "Active Campaigns",
      value: "12",
      change: "-2",
      isPositive: false,
      icon: <Calendar className="text-primary" />,
    },
  ];

  const recentDonations = [
    { id: 1, name: "John Smith", amount: 250, campaign: "Clean Water Initiative", date: "2 hours ago" },
    { id: 2, name: "Sarah Johnson", amount: 500, campaign: "Education for All", date: "5 hours ago" },
    { id: 3, name: "Michael Chen", amount: 1000, campaign: "Disaster Relief Fund", date: "1 day ago" },
    { id: 4, name: "Emily Davis", amount: 150, campaign: "Community Health Camp", date: "1 day ago" },
    { id: 5, name: "Robert Wilson", amount: 300, campaign: "Women Empowerment Workshop", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening with your NGO.</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-muted-foreground" />
                <select
                  value={campaignFilter}
                  onChange={(e) => setCampaignFilter(e.target.value)}
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  <option value="all">All Campaigns</option>
                  <option value="active">Active Campaigns</option>
                  <option value="completed">Completed Campaigns</option>
                </select>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className={`flex items-center mt-4 text-sm ${
                  stat.isPositive ? "text-green-500" : "text-red-500"
                }`}>
                  {stat.isPositive ? (
                    <ArrowUpRight size={16} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={16} className="mr-1" />
                  )}
                  <span>{stat.change} from last period</span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AnimatedSection>
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Donation Trends</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp size={16} className="mr-1 text-green-500" />
                  <span>+18.2% from last year</span>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={donationData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.8)",
                        border: "none",
                        borderRadius: "4px",
                        color: "#f9fafb",
                      }}
                      formatter={(value) => [`$${value}`, "Donations"]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="donations"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">User Growth</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Globe size={16} className="mr-1" />
                  <span>Global Statistics</span>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={userGrowthData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.8)",
                        border: "none",
                        borderRadius: "4px",
                        color: "#f9fafb",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="donors" fill="#3b82f6" name="Donors" />
                    <Bar dataKey="volunteers" fill="#10b981" name="Volunteers" />
                    <Bar dataKey="beneficiaries" fill="#f59e0b" name="Beneficiaries" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <AnimatedSection className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Campaign Performance</h3>
                <select
                  className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs"
                  defaultValue="all"
                >
                  <option value="all">All Campaigns</option>
                  <option value="active">Active Only</option>
                  <option value="completed">Completed Only</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={campaignPerformanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                    <XAxis type="number" stroke="#6b7280" />
                    <YAxis dataKey="name" type="category" stroke="#6b7280" width={100} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.8)",
                        border: "none",
                        borderRadius: "4px",
                        color: "#f9fafb",
                      }}
                      formatter={(value) => [`$${value}`, ""]}
                    />
                    <Legend />
                    <Bar dataKey="raised" fill="#3b82f6" name="Amount Raised" />
                    <Bar dataKey="goal" fill="#6b7280" name="Goal" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Donation Sources</h3>
              </div>
              <div className="h-80 flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                    <Pie
                      data={donationSourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {donationSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.8)",
                        border: "none",
                        borderRadius: "4px",
                        color: "#f9fafb",
                      }}
                      formatter={(value) => [`${value}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 w-full mt-4">
                  {donationSourceData.map((entry, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span>{entry.name}: {entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </AnimatedSection>
  
          <AnimatedSection>
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Recent Donations</h3>
                <a href="#" className="text-sm text-primary hover:underline">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Donor</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Campaign</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentDonations.map((donation) => (
                      <tr key={donation.id} className="border-b border-border">
                        <td className="py-3 px-4">{donation.name}</td>
                        <td className="py-3 px-4 font-medium">${donation.amount}</td>
                        <td className="py-3 px-4">{donation.campaign}</td>
                        <td className="py-3 px-4 text-muted-foreground">{donation.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
  
export default AdminDashboard;

