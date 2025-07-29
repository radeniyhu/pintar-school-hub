import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu,
  FileText,
  Compass,
  Calendar, 
  Users, 
  Award, 
  Bell, 
  CreditCard, 
  ChevronRight,
  GraduationCap,
  ClipboardList,
  UserCheck,
  Calculator,
  Wallet,
  Library,
  BookMarked,
  Newspaper,
  Home,
  MessageCircle
} from 'lucide-react';
import Header from './Header';
import IslamicModule from '../islamic/IslamicModule';
import QuickAccessMenu from './QuickAccessMenu';
import SchedulePage from './SchedulePage';
import AttendancePage from './AttendancePage';
import AssignmentsPage from './AssignmentsPage';
import GradesPage from './GradesPage';
import CBTPage from './CBTPage';
import DigitalLibraryPage from './DigitalLibraryPage';
import WelcomeSection from './WelcomeSection';
import BottomNavigation from './BottomNavigation';

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


  const renderContent = () => {
    switch (activeTab) {
      case 'beranda':
        return (
          <div className="space-y-6">
            <WelcomeSection 
              userName="Ahmad Fauzi"
              balance={250000}
              onTopUpClick={() => setActiveTab('payment')}
            />
            
            <QuickAccessMenu
              menuItems={menuItems} 
              onMenuClick={setActiveTab}
            />
          </div>
        );
      case 'grades':
        return <GradesPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'schedule':
        return <SchedulePage />;
      case 'assignments':
        return <AssignmentsPage />;
      case 'cbt':
        return <CBTPage />;
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
        return <DigitalLibraryPage />;
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
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default StudentDashboard;
