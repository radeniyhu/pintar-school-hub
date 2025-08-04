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
  Newspaper,
  Plus,
  QrCode,
  Camera
} from 'lucide-react';
import Header from './Header';
import ScheduleCard from './ScheduleCard';
import AssignmentCard from './AssignmentCard';
import AnnouncementCard from './AnnouncementCard';
import IslamicModule from '../islamic/IslamicModule';
import QuickAccessMenu from './QuickAccessMenu';
import SchedulePage from './SchedulePage';
import AttendancePage from './AttendancePage';
import AssignmentsPage from './AssignmentsPage';
import GradesPage from './GradesPage';
import CBTPage from './CBTPage';
import DigitalLibraryPage from './DigitalLibraryPage';
import NewsPage from './NewsPage';
import StudentCard from './StudentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState('beranda');
  const [subTab, setSubTab] = useState('pendidikan'); // For managing sub-tabs within beranda
  const [profileTab, setProfileTab] = useState('info'); // For managing profile tabs

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
      id: 'academic-calendar', 
      icon: Calendar, 
      label: 'Kalender Akademik', 
      badge: null,
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
      icon: QrCode,
      label: 'QRIS',
      color: 'text-purple-600',
      activeColor: 'bg-purple-600'
    },
    {
      id: 'berita',
      icon: Newspaper,
      label: 'Berita',
      color: 'text-red-600',
      activeColor: 'bg-red-600'
    },
    {
      id: 'profil',
      icon: Users,
      label: 'Profil',
      color: 'text-orange-600',
      activeColor: 'bg-orange-600'
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
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm text-gray-500">Selamat datang,</p>
                  <h2 className="text-lg font-semibold text-gray-900">Ahmad Fauzi</h2>
                </div>
                <div className="flex flex-col items-center gap-1 text-green-600">
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    <Plus className="w-4 h-4 bg-green-600 text-white rounded-full p-0.5 hover:bg-green-700 cursor-pointer transition-colors" />
                  </div>
                  <span className="text-sm font-medium">Rp. 1.500.738</span>
                </div>
              </div>
            </div>
            
            {/* Main Tab Navigation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setSubTab('pendidikan')}
                  className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                    subTab === 'pendidikan'
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">Pendidikan</span>
                  </div>
                </button>
                <button
                  onClick={() => setSubTab('pembayaran')}
                  className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                    subTab === 'pembayaran'
                      ? 'bg-green-50 text-green-600 border-b-2 border-green-600'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm">Pembayaran</span>
                  </div>
                </button>
              </div>
              
               <div className="p-6">
                {subTab === 'pendidikan' && (
                  <QuickAccessMenu
                    menuItems={menuItems} 
                    onMenuClick={setActiveTab}
                  />
                )}
                
                {subTab === 'pembayaran' && (
                  <div className="space-y-6">
                    {/* Tagihan Pending */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Bell className="w-5 h-5 text-orange-600" />
                          Tagihan Tertunda
                          <Badge variant="destructive">2</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                            <div>
                              <p className="font-medium text-gray-900">SPP Bulan Juni 2024</p>
                              <p className="text-sm text-gray-600">Jatuh tempo: 15 Juni 2024</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-red-600">Rp. 450.000</p>
                              <Button size="sm" className="mt-1">Bayar</Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <div>
                              <p className="font-medium text-gray-900">Biaya Kegiatan Ekstrakurikuler</p>
                              <p className="text-sm text-gray-600">Jatuh tempo: 20 Juni 2024</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-orange-600">Rp. 150.000</p>
                              <Button size="sm" className="mt-1">Bayar</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Menu Pembayaran */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Menu Pembayaran</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <GraduationCap className="w-6 h-6 text-blue-600" />
                            <span className="text-sm">SPP</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <BookOpen className="w-6 h-6 text-green-600" />
                            <span className="text-sm">Buku & Seragam</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <Users className="w-6 h-6 text-purple-600" />
                            <span className="text-sm">Kegiatan</span>
                          </Button>
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <Calendar className="w-6 h-6 text-orange-600" />
                            <span className="text-sm">Ujian</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Menu PPOB */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                          PPOB (Payment Point Online Bank)
                        </CardTitle>
                        <CardDescription>
                          Bayar berbagai tagihan dan kebutuhan sehari-hari
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {/* Listrik */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                              <span className="text-yellow-600 text-xs font-bold">⚡</span>
                            </div>
                            <span className="text-sm">Listrik PLN</span>
                          </Button>
                          
                          {/* Air PDAM */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 text-xs font-bold">💧</span>
                            </div>
                            <span className="text-sm">Air PDAM</span>
                          </Button>
                          
                          {/* Pulsa */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 text-xs font-bold">📱</span>
                            </div>
                            <span className="text-sm">Pulsa & Data</span>
                          </Button>
                          
                          {/* Internet */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 text-xs font-bold">🌐</span>
                            </div>
                            <span className="text-sm">Internet</span>
                          </Button>
                          
                          {/* TV Kabel */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-red-600 text-xs font-bold">📺</span>
                            </div>
                            <span className="text-sm">TV Kabel</span>
                          </Button>
                          
                          {/* BPJS */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                              <span className="text-teal-600 text-xs font-bold">🏥</span>
                            </div>
                            <span className="text-sm">BPJS</span>
                          </Button>
                          
                          {/* Asuransi */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                              <span className="text-indigo-600 text-xs font-bold">🛡️</span>
                            </div>
                            <span className="text-sm">Asuransi</span>
                          </Button>
                          
                          {/* Multifinance */}
                          <Button variant="outline" className="h-20 flex flex-col gap-2">
                            <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                              <span className="text-pink-600 text-xs font-bold">🏦</span>
                            </div>
                            <span className="text-sm">Multifinance</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Riwayat Transaksi */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-gray-600" />
                          Riwayat Transaksi
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="font-medium">SPP Bulan Mei 2024</p>
                              <p className="text-sm text-gray-600">12 Mei 2024 • 14:30</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-green-600">- Rp. 450.000</p>
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                Berhasil
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="font-medium">Top Up Saldo</p>
                              <p className="text-sm text-gray-600">10 Mei 2024 • 09:15</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-blue-600">+ Rp. 1.000.000</p>
                              <Badge variant="outline" className="text-blue-600 border-blue-600">
                                Berhasil
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" className="w-full mt-4">
                          Lihat Semua Riwayat
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
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
            <CardContent className="p-6">
              <div className="relative bg-gray-100 rounded-lg p-8 text-center">
                <div className="w-64 h-64 mx-auto bg-white rounded-lg border-2 border-dashed border-purple-300 flex flex-col items-center justify-center">
                  <QrCode className="w-16 h-16 text-purple-400 mb-4" />
                  <p className="text-purple-600 font-medium">Area Scan QR Code</p>
                  <p className="text-gray-500 text-sm mt-2">Posisikan QR code di dalam frame</p>
                </div>
                
                {/* Corner markers */}
                <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-purple-500 rounded-tl-lg"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-purple-500 rounded-tr-lg"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-purple-500 rounded-bl-lg"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-purple-500 rounded-br-lg"></div>
              </div>
            </CardContent>
          </Card>
        );
      case 'profil':
        return (
          <div className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      AF
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">Ahmad Fauzi</h1>
                    <p className="text-gray-600">Kelas XI IPA 2</p>
                    <p className="text-sm text-gray-500">NIS: 2023110001</p>
                    <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Status Aktif
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        Siswa Reguler
                      </Badge>
                    </div>
                  </div>
                  <Button className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Edit Profil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs value={profileTab} onValueChange={setProfileTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Informasi
                </TabsTrigger>
                <TabsTrigger value="card" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Kartu Pelajar
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-6 mt-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Informasi Pribadi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Nama Lengkap</label>
                          <p className="text-gray-900 font-medium">Ahmad Fauzi bin Abdullah</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Tempat, Tanggal Lahir</label>
                          <p className="text-gray-900">Jakarta, 15 Agustus 2007</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Jenis Kelamin</label>
                          <p className="text-gray-900">Laki-laki</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Agama</label>
                          <p className="text-gray-900">Islam</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Alamat</label>
                          <p className="text-gray-900">Jl. Pendidikan No. 123, Kelurahan Ilmu, Kecamatan Pengetahuan, Jakarta Selatan 12345</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">No. Telepon</label>
                          <p className="text-gray-900">+62 812-3456-7890</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Email</label>
                          <p className="text-gray-900">ahmad.fauzi@student.sekolah.sch.id</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Academic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-green-600" />
                      Informasi Akademik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <label className="text-sm font-medium text-gray-500">NIS</label>
                        <p className="text-gray-900 font-medium">2023110001</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">NISN</label>
                        <p className="text-gray-900 font-medium">0123456789</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Kelas</label>
                        <p className="text-gray-900 font-medium">XI IPA 2</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Tahun Masuk</label>
                        <p className="text-gray-900">2023</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Semester</label>
                        <p className="text-gray-900">Genap 2023/2024</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Status</label>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Aktif
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Parent Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      Informasi Orang Tua/Wali
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 border-b pb-2">Ayah</h4>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Nama</label>
                          <p className="text-gray-900">Abdullah bin Ahmad</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Pekerjaan</label>
                          <p className="text-gray-900">Wiraswasta</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">No. Telepon</label>
                          <p className="text-gray-900">+62 811-2233-4455</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 border-b pb-2">Ibu</h4>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Nama</label>
                          <p className="text-gray-900">Siti Fatimah</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Pekerjaan</label>
                          <p className="text-gray-900">Ibu Rumah Tangga</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">No. Telepon</label>
                          <p className="text-gray-900">+62 812-3344-5566</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Aksi Cepat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-blue-50 hover:border-blue-300">
                        <FileText className="w-6 h-6 text-blue-600" />
                        <span className="text-sm">Edit Profil</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-green-50 hover:border-green-300">
                        <Users className="w-6 h-6 text-green-600" />
                        <span className="text-sm">Ubah Password</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-purple-50 hover:border-purple-300">
                        <Bell className="w-6 h-6 text-purple-600" />
                        <span className="text-sm">Pengaturan</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-orange-50 hover:border-orange-300">
                        <LogOut className="w-6 h-6 text-orange-600" />
                        <span className="text-sm">Keluar</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="card" className="mt-6">
                <div className="space-y-6">
                  {/* Card Title */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        Kartu Pelajar Digital
                      </CardTitle>
                      <CardDescription>
                        Kartu identitas digital untuk keperluan akademik dan administrasi sekolah
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  {/* Student Card */}
                  <StudentCard />

                  {/* Card Info */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-gray-900">Gunakan kartu ini untuk:</p>
                            <ul className="text-sm text-gray-600 mt-1 space-y-1">
                              <li>• Absensi dengan QR code scanner</li>
                              <li>• Akses perpustakaan digital</li>
                              <li>• Verifikasi identitas dalam ujian CBT</li>
                              <li>• Transaksi di kantin sekolah</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-gray-900">Fitur digital:</p>
                            <ul className="text-sm text-gray-600 mt-1 space-y-1">
                              <li>• QR code untuk identifikasi cepat</li>
                              <li>• Dapat diunduh dan disimpan offline</li>
                              <li>• Validasi real-time dengan database sekolah</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );
      case 'academic-calendar':
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
                <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-12 h-12 text-yellow-500" />
                </div>
                <p className="text-gray-500">Kalender akademik akan segera hadir...</p>
              </div>
            </CardContent>
          </Card>
        );
      case 'berita':
        return <NewsPage />;
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
