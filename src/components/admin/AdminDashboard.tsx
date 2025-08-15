import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Building, 
  Settings, 
  BarChart3, 
  HeadphonesIcon, 
  AlertTriangle,
  LogOut,
  Plus,
  ChevronRight,
  Activity,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';
import Header from '../dashboard/Header';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Active Clients",
      value: "11",
      change: "1 client baru",
      icon: Building,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Support Tickets",
      value: "24",
      change: "8 pending",
      icon: HeadphonesIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "System Health",
      value: "Good",
      change: "All systems operational",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Issues",
      value: "3",
      change: "1 critical",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const clients = [
    { name: "SMP Negeri 1 Jakarta", users: 450, status: "active", lastActivity: "2 jam lalu" },
    { name: "MTS Al-Hikmah", users: 320, status: "active", lastActivity: "1 hari lalu" },
    { name: "SMA Budi Mulia", users: 680, status: "active", lastActivity: "30 menit lalu" },
    { name: "SMK Teknologi", users: 280, status: "trial", lastActivity: "5 jam lalu" },
  ];

  const supportTickets = [
    { id: "#TK001", client: "SMP Negeri 1", issue: "Login bermasalah", priority: "high", status: "open" },
    { id: "#TK002", client: "MTS Al-Hikmah", issue: "Data siswa tidak sync", priority: "medium", status: "in-progress" },
    { id: "#TK003", client: "SMA Budi Mulia", issue: "Laporan tidak muncul", priority: "low", status: "resolved" },
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

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Activity</CardTitle>
                  <CardDescription>Status klien terbaru</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {clients.map((client, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Building className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{client.name}</h4>
                            <p className="text-xs text-gray-600">{client.users} users • {client.lastActivity}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={client.status === 'active' ? 'default' : 'secondary'}
                          className={client.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {client.status === 'active' ? 'Aktif' : 'Trial'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Tickets</CardTitle>
                  <CardDescription>Tiket dukungan terbaru</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportTickets.map((ticket, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{ticket.id}</span>
                            <Badge 
                              variant="outline"
                              className={
                                ticket.priority === 'high' ? 'border-red-500 text-red-600' :
                                ticket.priority === 'medium' ? 'border-orange-500 text-orange-600' :
                                'border-green-500 text-green-600'
                              }
                            >
                              {ticket.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{ticket.client}</p>
                          <p className="text-sm">{ticket.issue}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {ticket.status === 'open' && <Clock className="w-4 h-4 text-orange-500" />}
                          {ticket.status === 'in-progress' && <Activity className="w-4 h-4 text-blue-500" />}
                          {ticket.status === 'resolved' && <CheckCircle className="w-4 h-4 text-green-500" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'clients':
        return (
          <div className="space-y-6">
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
                          <p className="text-sm text-gray-600">{client.users} pengguna • Aktif {client.lastActivity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={client.status === 'active' ? 'default' : 'secondary'}
                          className={client.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {client.status === 'active' ? 'Aktif' : 'Trial'}
                        </Badge>
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

      case 'support':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Support Center</CardTitle>
                    <CardDescription>Kelola tiket dukungan</CardDescription>
                  </div>
                  <Button>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    New Ticket
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          <HeadphonesIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-900">{ticket.id}</h3>
                            <Badge 
                              variant="outline"
                              className={
                                ticket.priority === 'high' ? 'border-red-500 text-red-600' :
                                ticket.priority === 'medium' ? 'border-orange-500 text-orange-600' :
                                'border-green-500 text-green-600'
                              }
                            >
                              {ticket.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{ticket.client} • {ticket.issue}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {ticket.status === 'open' && <Clock className="w-4 h-4 text-orange-500" />}
                          {ticket.status === 'in-progress' && <Activity className="w-4 h-4 text-blue-500" />}
                          {ticket.status === 'resolved' && <CheckCircle className="w-4 h-4 text-green-500" />}
                          <span className="text-sm text-gray-600 capitalize">{ticket.status}</span>
                        </div>
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

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userRole="admin"
        userName="Admin User"
        userEmail="admin@pintar.com"
        onLogout={onLogout}
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Kelola klien dan dukungan sistem</p>
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
            onClick={() => setActiveTab('clients')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'clients'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Client Management
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'support'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Support Center
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;