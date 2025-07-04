import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Award, 
  Bell, 
  CreditCard, 
  FileText,
  Compass,
  Heart,
  LogOut,
  Menu,
  ChevronRight,
  GraduationCap,
  ClipboardList,
  UserCheck,
  Calculator,
  Wallet,
  Library,
  Home,
  BookMarked,
  MessageCircle,
  Newspaper
} from 'lucide-react';
import Header from './Header';
import QuickStats from './QuickStats';
import ScheduleCard from './ScheduleCard';
import AssignmentCard from './AssignmentCard';
import AnnouncementCard from './AnnouncementCard';
import IslamicModule from '../islamic/IslamicModule';
import QuickAccessMenu from './QuickAccessMenu';
import SchedulePage from './SchedulePage';
import AttendancePage from './AttendancePage';
import AssignmentsPage from './AssignmentsPage';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState('beranda');

  const menuItems = [
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
      id: 'cbt', 
      icon: Calculator, 
      label: 'CBT/Ujian', 
      badge: 2,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    { 
      id: 'library', 
      icon: Library, 
      label: 'Perpustakaan Digital', 
      badge: null,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
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
      id: 'payment', 
      icon: Wallet, 
      label: 'Pembayaran', 
      badge: 1,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
  ];

  const bottomNavItems = [
    {
      id: 'beranda',
      icon: Home,
      label: 'Beranda',
      color: 'text-blue-600',
      activeColor: 'bg-blue-600'
    },
    {
      id: 'livechat',
      icon: MessageCircle,
      label: 'Live Chat',
      color: 'text-green-600',
      activeColor: 'bg-green-600'
    },
    {
      id: 'menu',
      icon: Menu,
      label: 'Menu',
      color: 'text-purple-600',
      activeColor: 'bg-purple-600'
    },
    {
      id: 'kalender',
      icon: Calendar,
      label: 'Kalender',
      color: 'text-orange-600',
      activeColor: 'bg-orange-600'
    },
    {
      id: 'berita',
      icon: Newspaper,
      label: 'Berita',
      color: 'text-red-600',
      activeColor: 'bg-red-600'
    }
  ];

  const handleBottomNavClick = (tabId: string) => {
    if (tabId === 'livechat') {
      // Redirect to WhatsApp admin
      window.open('https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20butuh%20bantuan', '_blank');
      return;
    }
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'beranda':
        return (
          <div className="space-y-6">
            {/* Welcome Message */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AF</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Selamat datang,</p>
                  <h2 className="text-lg font-semibold text-gray-900">Ahmad Fauzi</h2>
                  <Badge variant="outline" className="text-xs mt-1">
                    Kelas XI IPA 2
                  </Badge>
                </div>
              </div>
            </div>
            
            <QuickStats />
            <QuickAccessMenu 
              menuItems={menuItems} 
              onMenuClick={setActiveTab}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScheduleCard />
              <AssignmentCard onNavigateToAssignments={() => setActiveTab('assignments')} />
            </div>
            <AnnouncementCard />
          </div>
        );
      case 'attendance':
        return <AttendancePage />;
      case 'schedule':
        return <SchedulePage />;
      case 'assignments':
        return <AssignmentsPage />;
      case 'menu':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Menu className="w-6 h-6" />
                Menu Aplikasi
              </CardTitle>
              <CardDescription>
                Pilih menu untuk mengakses fitur yang Anda butuhkan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuickAccessMenu 
                menuItems={menuItems} 
                onMenuClick={setActiveTab}
              />
            </CardContent>
          </Card>
        );
      case 'kalender':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Kalender Akademik
              </CardTitle>
              <CardDescription>
                Lihat jadwal dan agenda akademik
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-12 h-12 text-orange-500" />
                </div>
                <p className="text-gray-500">Kalender akademik akan segera hadir...</p>
              </div>
            </CardContent>
          </Card>
        );
      case 'berita':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="w-6 h-6" />
                Berita & Artikel
              </CardTitle>
              <CardDescription>
                Baca berita terbaru dan artikel pendidikan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Newspaper className="w-12 h-12 text-red-500" />
                </div>
                <p className="text-gray-500">Berita dan artikel akan segera hadir...</p>
              </div>
            </CardContent>
          </Card>
        );
      case 'islamic':
        return <IslamicModule />;
      case 'library':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="w-6 h-6" />
                Perpustakaan Digital
              </CardTitle>
              <CardDescription>
                Akses koleksi buku dan materi pembelajaran digital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Library className="w-12 h-12 text-indigo-500" />
                </div>
                <p className="text-gray-500">Perpustakaan digital akan segera hadir...</p>
                <p className="text-sm text-gray-400 mt-2">Akses ribuan buku dan materi pembelajaran</p>
              </div>
            </CardContent>
          </Card>
        );
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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <Header 
        onMenuToggle={() => {}} // Keep for interface compatibility but no longer used
        onLogout={onLogout}
      />

      {/* Main Content */}
      <main className="p-4 lg:p-6">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex items-center justify-around py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleBottomNavClick(item.id)}
                className={`
                  flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200
                  ${isActive ? 'scale-110' : 'hover:scale-105'}
                `}
              >
                <div className={`
                  p-2 rounded-full transition-all duration-200
                  ${isActive 
                    ? `${item.activeColor} text-white shadow-lg` 
                    : `${item.color} hover:bg-gray-100`
                  }
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`
                  text-xs mt-1 font-medium transition-colors duration-200
                  ${isActive ? item.color : 'text-gray-500'}
                `}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
