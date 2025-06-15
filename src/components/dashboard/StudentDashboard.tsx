
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LayoutDashboard, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  Bell, 
  CreditCard, 
  FileText,
  Compass,
  Heart,
  LogOut,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Target,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  ClipboardList,
  PresentationChart,
  UserCheck,
  TestTube,
  Wallet,
  Megaphone,
  Star
} from 'lucide-react';
import Header from './Header';
import QuickStats from './QuickStats';
import ScheduleCard from './ScheduleCard';
import AssignmentCard from './AssignmentCard';
import AnnouncementCard from './AnnouncementCard';
import IslamicModule from '../islamic/IslamicModule';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { 
      id: 'dashboard', 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      badge: null,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    { 
      id: 'schedule', 
      icon: Calendar, 
      label: 'Jadwal Pelajaran', 
      badge: null,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    { 
      id: 'assignments', 
      icon: ClipboardList, 
      label: 'Tugas & Materi', 
      badge: 3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    { 
      id: 'grades', 
      icon: GraduationCap, 
      label: 'Nilai & Rapor', 
      badge: null,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    { 
      id: 'attendance', 
      icon: UserCheck, 
      label: 'Absensi', 
      badge: null,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100'
    },
    { 
      id: 'cbt', 
      icon: TestTube, 
      label: 'CBT/Ujian', 
      badge: 2,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    { 
      id: 'payment', 
      icon: Wallet, 
      label: 'Pembayaran', 
      badge: 1,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    { 
      id: 'islamic', 
      icon: Star, 
      label: 'Modul Keagamaan', 
      badge: null,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      hoverColor: 'hover:bg-teal-100'
    },
    { 
      id: 'announcements', 
      icon: Megaphone, 
      label: 'Pengumuman', 
      badge: 5,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <QuickStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScheduleCard />
              <AssignmentCard />
            </div>
            <AnnouncementCard />
          </div>
        );
      case 'islamic':
        return <IslamicModule />;
      default:
        const currentMenu = menuItems.find(item => item.id === activeTab);
        const MenuIcon = currentMenu?.icon || FileText;
        return (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`w-10 h-10 ${currentMenu?.bgColor} rounded-lg flex items-center justify-center`}>
                  <MenuIcon className={`w-5 h-5 ${currentMenu?.color}`} />
                </div>
                {currentMenu?.label || 'Module'}
                <Badge variant="outline" className="ml-auto">Coming Soon</Badge>
              </CardTitle>
              <CardDescription>
                Modul ini sedang dalam pengembangan dan akan segera tersedia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className={`w-24 h-24 mx-auto ${currentMenu?.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <MenuIcon className={`w-12 h-12 ${currentMenu?.color}`} />
                </div>
                <p className="text-gray-500 mb-4">Fitur akan segera hadir...</p>
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header 
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        onLogout={onLogout}
      />

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex justify-between items-center p-4 border-b lg:hidden">
            <h2 className="font-semibold text-gray-800">Menu Navigasi</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full group flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 relative overflow-hidden
                    ${isActive 
                      ? `${item.bgColor} ${item.color} shadow-sm border border-current/20 scale-105` 
                      : `text-gray-600 ${item.hoverColor} hover:shadow-sm`
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
                    ${isActive ? 'bg-white/50 shadow-sm' : item.bgColor}
                  `}>
                    <Icon className={`w-5 h-5 transition-all duration-200 ${
                      isActive ? item.color : `${item.color} group-hover:scale-110`
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`font-medium text-sm transition-all duration-200 ${
                      isActive ? 'text-current' : 'group-hover:text-gray-900'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <Badge 
                      variant={isActive ? "secondary" : "destructive"} 
                      className={`h-5 text-xs transition-all duration-200 ${
                        isActive ? 'bg-white/80 text-current' : ''
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                    isActive ? 'opacity-100 transform translate-x-1' : 'opacity-50 group-hover:opacity-100 group-hover:translate-x-1'
                  }`} />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-current rounded-r-full" />
                  )}
                </button>
              );
            })}
          </nav>
          
          {/* Footer info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-xs font-medium text-gray-700">PINTAR Education</span>
              </div>
              <p className="text-xs text-gray-500">Portal Informasi Terpadu</p>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
