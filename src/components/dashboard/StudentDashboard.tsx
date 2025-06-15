
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
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
  GraduationCap,
  ClipboardList,
  UserCheck,
  Calculator,
  Wallet,
  Megaphone,
  Home,
  BookMarked
} from 'lucide-react';
import Header from './Header';
import QuickStats from './QuickStats';
import ScheduleCard from './ScheduleCard';
import AssignmentCard from './AssignmentCard';
import AnnouncementCard from './AnnouncementCard';
import IslamicModule from '../islamic/IslamicModule';
import QuickAccessMenu from './QuickAccessMenu';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { 
      id: 'dashboard', 
      icon: Home, 
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
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    { 
      id: 'assignments', 
      icon: BookMarked, 
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
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    { 
      id: 'attendance', 
      icon: UserCheck, 
      label: 'Absensi', 
      badge: null,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100'
    },
    { 
      id: 'cbt', 
      icon: Calculator, 
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
      icon: Compass, 
      label: 'Modul Keagamaan', 
      badge: null,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100'
    },
    { 
      id: 'announcements', 
      icon: Megaphone, 
      label: 'Pengumuman', 
      badge: 5,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <QuickStats />
            <QuickAccessMenu 
              menuItems={menuItems.filter(item => item.id !== 'dashboard')} 
              onMenuClick={setActiveTab}
            />
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
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {menuItems.find(item => item.id === activeTab)?.label || 'Module'}
                <Badge variant="outline">Coming Soon</Badge>
              </CardTitle>
              <CardDescription>
                Modul ini sedang dalam pengembangan dan akan segera tersedia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500">Fitur akan segera hadir...</p>
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
          fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-all duration-300 ease-in-out
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
          
          <nav className="p-4 space-y-1">
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                Menu Utama
              </h3>
            </div>
            
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
                    group w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ease-in-out
                    ${isActive 
                      ? `${item.bgColor} ${item.color} shadow-sm border-l-4 border-current scale-[1.02]` 
                      : `text-gray-600 hover:text-gray-800 ${item.hoverColor} hover:shadow-sm hover:scale-[1.01]`
                    }
                  `}
                >
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200
                    ${isActive 
                      ? `${item.color} bg-white shadow-sm` 
                      : `text-gray-500 group-hover:${item.color} group-hover:bg-white group-hover:shadow-sm`
                    }
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className={`
                      block text-sm font-medium truncate
                      ${isActive ? 'font-semibold' : 'group-hover:font-medium'}
                    `}>
                      {item.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <Badge 
                        variant="destructive" 
                        className="h-5 text-xs font-medium px-2 animate-pulse"
                      >
                        {item.badge}
                      </Badge>
                    )}
                    <ChevronRight className={`
                      w-4 h-4 transition-all duration-200
                      ${isActive 
                        ? `${item.color} transform rotate-90` 
                        : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                      }
                    `} />
                  </div>
                </button>
              );
            })}
          </nav>
          
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
            <div className="text-xs text-gray-500 text-center">
              <p className="font-medium">PINTAR Education Portal</p>
              <p>v2.0.1 - Modern Interface</p>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
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
