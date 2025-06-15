
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
  Presentation,
  UserCheck,
  TestTube,
  Wallet,
  Megaphone,
  Star,
  School,
  Users2,
  FileBarChart,
  MapPin,
  Building2,
  UserCog,
  Database,
  Shield,
  Bookmark,
  Calculator,
  Globe,
  MessageCircle,
  Printer,
  Download,
  Archive,
  ClipboardCheck,
  ScrollText,
  PieChart,
  BarChart3,
  Settings,
  HelpCircle
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
      id: 'biodata', 
      icon: Users2, 
      label: 'Biodata Siswa', 
      badge: null,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100'
    },
    { 
      id: 'academic', 
      icon: GraduationCap, 
      label: 'Data Akademik', 
      badge: null,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    { 
      id: 'kurikulum', 
      icon: BookOpen, 
      label: 'Kurikulum & Materi', 
      badge: 2,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
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
      id: 'attendance', 
      icon: UserCheck, 
      label: 'Absensi Harian', 
      badge: null,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      hoverColor: 'hover:bg-teal-100'
    },
    { 
      id: 'grades', 
      icon: FileBarChart, 
      label: 'Nilai & Rapor', 
      badge: 1,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100'
    },
    { 
      id: 'assignments', 
      icon: ClipboardList, 
      label: 'Tugas & Penilaian', 
      badge: 3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    { 
      id: 'cbt', 
      icon: TestTube, 
      label: 'CBT/Ujian Online', 
      badge: 2,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    { 
      id: 'islamic', 
      icon: Star, 
      label: 'Pendidikan Agama', 
      badge: null,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      hoverColor: 'hover:bg-amber-100'
    },
    { 
      id: 'eskul', 
      icon: Users, 
      label: 'Ekstrakurikuler', 
      badge: null,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      hoverColor: 'hover:bg-violet-100'
    },
    { 
      id: 'prestasi', 
      icon: Award, 
      label: 'Prestasi & Pencapaian', 
      badge: null,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    { 
      id: 'payment', 
      icon: Wallet, 
      label: 'Pembayaran SPP', 
      badge: 1,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    { 
      id: 'library', 
      icon: Bookmark, 
      label: 'Perpustakaan Digital', 
      badge: null,
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
      hoverColor: 'hover:bg-slate-100'
    },
    { 
      id: 'reports', 
      icon: PieChart, 
      label: 'Laporan Akademik', 
      badge: null,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      hoverColor: 'hover:bg-rose-100'
    },
    { 
      id: 'communication', 
      icon: MessageCircle, 
      label: 'Komunikasi Guru', 
      badge: 4,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
      hoverColor: 'hover:bg-sky-100'
    },
    { 
      id: 'announcements', 
      icon: Megaphone, 
      label: 'Pengumuman', 
      badge: 5,
      color: 'text-fuchsia-600',
      bgColor: 'bg-fuchsia-50',
      hoverColor: 'hover:bg-fuchsia-100'
    },
    { 
      id: 'settings', 
      icon: Settings, 
      label: 'Pengaturan', 
      badge: null,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100'
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
                Modul ini sedang dalam pengembangan dan akan segera tersedia untuk mendukung pengelolaan data siswa madrasah.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className={`w-24 h-24 mx-auto ${currentMenu?.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <MenuIcon className={`w-12 h-12 ${currentMenu?.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentMenu?.label}</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Fitur ini akan segera hadir untuk membantu pengelolaan administrasi dan akademik siswa madrasah sesuai standar Kementerian Agama.
                </p>
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
          fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-lg transform transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex justify-between items-center p-4 border-b lg:hidden">
            <h2 className="font-semibold text-gray-800">Menu PUSAKA</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Menu Section Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <School className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">PUSAKA Madrasah</h3>
                <p className="text-white/80 text-xs">Portal Siswa Agama</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
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
                    w-full group flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 relative overflow-hidden text-sm
                    ${isActive 
                      ? `${item.bgColor} ${item.color} shadow-sm border border-current/20 font-medium` 
                      : `text-gray-700 ${item.hoverColor} hover:shadow-sm hover:font-medium`
                    }
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 flex-shrink-0
                    ${isActive ? 'bg-white/70 shadow-sm' : item.bgColor}
                  `}>
                    <Icon className={`w-4 h-4 transition-all duration-200 ${
                      isActive ? item.color : `${item.color} group-hover:scale-110`
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`transition-all duration-200 ${
                      isActive ? 'text-current' : 'group-hover:text-gray-900'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <Badge 
                      variant={isActive ? "secondary" : "destructive"} 
                      className={`h-5 text-xs transition-all duration-200 flex-shrink-0 ${
                        isActive ? 'bg-white/80 text-current' : ''
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight className={`w-3 h-3 transition-all duration-200 flex-shrink-0 ${
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
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3 border border-emerald-100">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-medium text-emerald-800">PUSAKA Kemenag</span>
              </div>
              <p className="text-xs text-emerald-600">Portal Unggul Siswa Agama</p>
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
