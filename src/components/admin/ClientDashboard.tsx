import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  UserPlus, 
  Settings, 
  BarChart3, 
  BookOpen, 
  GraduationCap,
  LogOut,
  Plus,
  ChevronRight,
  Activity,
  School,
  UserCheck,
  ClipboardList,
  Eye,
  Edit
} from 'lucide-react';
import Header from '../dashboard/Header';

interface ClientDashboardProps {
  onLogout: () => void;
}

const ClientDashboard = ({ onLogout }: ClientDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Total Siswa",
      value: "450",
      change: "+12 siswa baru",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Total Guru",
      value: "32",
      change: "2 guru baru",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Wali Murid",
      value: "380",
      change: "Active users",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Admin Sekolah",
      value: "5",
      change: "All active",
      icon: UserCheck,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const userRoles = [
    { 
      name: "Guru", 
      count: 32, 
      permissions: ["Kelola Kelas", "Input Nilai", "Absensi", "Materi"], 
      icon: BookOpen,
      color: "text-blue-600"
    },
    { 
      name: "Siswa", 
      count: 450, 
      permissions: ["Lihat Nilai", "Akses Materi", "Ujian Online"], 
      icon: GraduationCap,
      color: "text-green-600"
    },
    { 
      name: "Wali Murid", 
      count: 380, 
      permissions: ["Lihat Nilai Anak", "Komunikasi Guru", "Jadwal"], 
      icon: Users,
      color: "text-purple-600"
    },
    { 
      name: "Admin Sekolah", 
      count: 5, 
      permissions: ["Full Access", "User Management", "Reports"], 
      icon: Settings,
      color: "text-orange-600"
    }
  ];

  const recentUsers = [
    { name: "Ahmad Fauzi", role: "Siswa", class: "XII IPA 1", status: "active", lastLogin: "2 jam lalu" },
    { name: "Siti Nurhaliza", role: "Guru", subject: "Matematika", status: "active", lastLogin: "1 hari lalu" },
    { name: "Budi Santoso", role: "Wali Murid", child: "Budi Jr", status: "active", lastLogin: "3 hari lalu" },
    { name: "Dr. Sri Mulyani", role: "Admin Sekolah", department: "Akademik", status: "active", lastLogin: "1 jam lalu" },
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

            {/* Role Management Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Role Management Overview</CardTitle>
                <CardDescription>Kelola peran pengguna di sekolah Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userRoles.map((role, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <role.icon className={`w-5 h-5 ${role.color}`} />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{role.name}</h3>
                            <p className="text-sm text-gray-600">{role.count} pengguna</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600 font-medium">Permissions:</p>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.map((permission, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent User Activity</CardTitle>
                <CardDescription>Aktivitas pengguna terbaru</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{user.name}</h4>
                          <p className="text-sm text-gray-600">
                            {user.role} • {user.class || user.subject || user.child || user.department} • {user.lastLogin}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {user.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Kelola semua pengguna sekolah</CardDescription>
                  </div>
                  <Button>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Tambah User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{user.name}</h3>
                          <p className="text-sm text-gray-600">
                            {user.role} • {user.class || user.subject || user.child || user.department}
                          </p>
                          <p className="text-xs text-gray-500">Login terakhir: {user.lastLogin}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {user.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'roles':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Role & Permission Management</CardTitle>
                    <CardDescription>Kelola peran dan hak akses pengguna</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Buat Role Baru
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {userRoles.map((role, index) => (
                    <div key={index} className="p-6 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <role.icon className={`w-6 h-6 ${role.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{role.name}</h3>
                            <p className="text-sm text-gray-600">{role.count} pengguna dengan role ini</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Permissions:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {role.permissions.map((permission, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                              <Activity className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">{permission}</span>
                            </div>
                          ))}
                        </div>
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
        userRole="client"
        userName="Admin Sekolah"
        userEmail="admin@sekolah.edu"
        onLogout={onLogout}
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
              <p className="text-gray-600">Kelola pengguna dan sistem sekolah</p>
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
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'users'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'roles'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Roles & Permissions
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ClientDashboard;