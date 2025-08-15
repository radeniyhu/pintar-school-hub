import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Users, 
  Building, 
  Settings, 
  BarChart3, 
  Shield, 
  Database,
  LogOut,
  Plus,
  ChevronRight,
  Activity,
  DollarSign,
  TrendingUp,
  Eye,
  UserPlus,
  Server
} from 'lucide-react';
import Header from '../dashboard/Header';

interface OwnerDashboardProps {
  onLogout: () => void;
}

const OwnerDashboard = ({ onLogout }: OwnerDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Total Clients",
      value: "12",
      change: "+2 bulan ini",
      icon: Building,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Total Users",
      value: "2,847",
      change: "+12% dari bulan lalu",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Revenue",
      value: "Rp 45.2M",
      change: "+18% dari bulan lalu",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Server Status",
      value: "99.9%",
      change: "Uptime bulan ini",
      icon: Server,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  const clients = [
    { name: "SMP Negeri 1 Jakarta", users: 450, status: "active", plan: "Premium" },
    { name: "MTS Al-Hikmah", users: 320, status: "active", plan: "Standard" },
    { name: "SMA Budi Mulia", users: 680, status: "active", plan: "Premium" },
    { name: "SMK Teknologi", users: 280, status: "trial", plan: "Trial" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                      </div>
                      <div className={`${stat.bgColor} p-3 rounded-full`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Clients Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Client Management</CardTitle>
                    <CardDescription>Kelola semua klien yang terdaftar</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Client
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{client.name}</h3>
                          <p className="text-sm text-gray-600">{client.users} pengguna aktif</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={client.status === 'active' ? 'default' : 'secondary'}
                          className={client.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {client.status === 'active' ? 'Aktif' : 'Trial'}
                        </Badge>
                        <Badge variant="outline">{client.plan}</Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'admins':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Admin Management</CardTitle>
                    <CardDescription>Kelola admin platform</CardDescription>
                  </div>
                  <Button>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Tambah Admin
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Admin Utama</h3>
                        <p className="text-sm text-gray-600">admin@pintar.com</p>
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Super Admin</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Admin Support</h3>
                        <p className="text-sm text-gray-600">support@pintar.com</p>
                      </div>
                    </div>
                    <Badge variant="outline">Admin</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Konfigurasi umum platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Maintenance Mode</h3>
                      <p className="text-sm text-gray-600">Aktifkan mode maintenance</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">System Backup</h3>
                      <p className="text-sm text-gray-600">Kelola backup sistem</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Email Configuration</h3>
                      <p className="text-sm text-gray-600">Konfigurasi email server</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userRole="owner"
        userName="Super Admin"
        userEmail="owner@pintar.com"
        onLogout={onLogout}
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
              <p className="text-gray-600">Kelola seluruh platform PINTAR</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('admins')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'admins'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Admin Management
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'settings'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Platform Settings
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default OwnerDashboard;