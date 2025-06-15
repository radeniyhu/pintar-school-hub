
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserCheck, 
  Clock, 
  MapPin, 
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Users,
  LogIn,
  LogOut
} from 'lucide-react';

const AttendancePage = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('id-ID'));

  // Update time every second
  useState(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('id-ID'));
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    console.log('Check-in at:', new Date().toISOString());
  };

  const handleCheckOut = () => {
    setIsCheckedOut(true);
    console.log('Check-out at:', new Date().toISOString());
  };

  // Mock data for attendance history
  const attendanceHistory = [
    { date: '2024-01-15', checkIn: '07:45', checkOut: '15:30', status: 'Hadir', late: false },
    { date: '2024-01-14', checkIn: '08:15', checkOut: '15:25', status: 'Terlambat', late: true },
    { date: '2024-01-13', checkIn: '07:50', checkOut: '15:35', status: 'Hadir', late: false },
    { date: '2024-01-12', checkIn: '-', checkOut: '-', status: 'Sakit', late: false },
    { date: '2024-01-11', checkIn: '07:40', checkOut: '15:20', status: 'Hadir', late: false },
  ];

  const stats = {
    totalDays: 20,
    present: 17,
    late: 2,
    absent: 1,
    percentage: 85
  };

  const getStatusBadge = (status: string, late: boolean) => {
    if (status === 'Hadir' && !late) {
      return <Badge className="bg-green-100 text-green-800">Hadir</Badge>;
    } else if (status === 'Terlambat' || late) {
      return <Badge className="bg-yellow-100 text-yellow-800">Terlambat</Badge>;
    } else if (status === 'Sakit') {
      return <Badge className="bg-blue-100 text-blue-800">Sakit</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-800">Tidak Hadir</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <UserCheck className="w-7 h-7 text-cyan-600" />
            Absensi Siswa
          </h1>
          <p className="text-gray-600 mt-1">Kelola kehadiran dan pantau statistik absensi Anda</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Waktu Sekarang</p>
          <p className="text-xl font-bold text-cyan-600">{currentTime}</p>
        </div>
      </div>

      {/* Tabs for Check-in and Check-out */}
      <Tabs defaultValue="masuk" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="masuk" className="flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            Absen Masuk
          </TabsTrigger>
          <TabsTrigger value="pulang" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Absen Pulang
          </TabsTrigger>
        </TabsList>

        {/* Absen Masuk Tab */}
        <TabsContent value="masuk" className="space-y-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <LogIn className="w-6 h-6" />
                Absen Masuk
              </CardTitle>
              <CardDescription>
                Tanggal: {new Date().toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-sm text-gray-600">SMA Negeri 1 Jakarta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Jam Masuk</p>
                      <p className="text-sm text-gray-600">07:30 - 08:00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  {!isCheckedIn ? (
                    <Button 
                      onClick={handleCheckIn}
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
                    >
                      <LogIn className="w-6 h-6 mr-2" />
                      Absen Masuk Sekarang
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        Sudah Absen Masuk pada 07:45
                      </div>
                      <div className="text-center p-4 bg-green-100 rounded-lg">
                        <p className="text-green-800 font-medium">Absen Masuk Berhasil!</p>
                        <p className="text-sm text-green-600">Selamat belajar hari ini</p>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-xs text-center text-gray-500">
                    * Pastikan Anda berada di area sekolah saat melakukan absensi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Absen Pulang Tab */}
        <TabsContent value="pulang" className="space-y-6">
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <LogOut className="w-6 h-6" />
                Absen Pulang
              </CardTitle>
              <CardDescription>
                Tanggal: {new Date().toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-sm text-gray-600">SMA Negeri 1 Jakarta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Jam Pulang</p>
                      <p className="text-sm text-gray-600">15:00 - 15:30 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  {!isCheckedIn ? (
                    <div className="space-y-3">
                      <div className="text-center p-4 bg-yellow-100 rounded-lg">
                        <p className="text-yellow-800 font-medium">Belum Absen Masuk</p>
                        <p className="text-sm text-yellow-600">Silakan absen masuk terlebih dahulu</p>
                      </div>
                      <Button 
                        disabled
                        size="lg"
                        className="w-full py-6"
                        variant="outline"
                      >
                        <LogOut className="w-6 h-6 mr-2" />
                        Absen Pulang
                      </Button>
                    </div>
                  ) : !isCheckedOut ? (
                    <Button 
                      onClick={handleCheckOut}
                      size="lg"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6"
                    >
                      <LogOut className="w-6 h-6 mr-2" />
                      Absen Pulang Sekarang
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-orange-600 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        Sudah Absen Pulang pada 15:20
                      </div>
                      <div className="text-center p-4 bg-orange-100 rounded-lg">
                        <p className="text-orange-800 font-medium">Absen Pulang Berhasil!</p>
                        <p className="text-sm text-orange-600">Selamat istirahat, sampai jumpa besok</p>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-xs text-center text-gray-500">
                    * Pastikan Anda berada di area sekolah saat melakukan absensi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Hari</p>
                <p className="text-2xl font-bold">{stats.totalDays}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hadir</p>
                <p className="text-2xl font-bold text-green-600">{stats.present}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Terlambat</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Persentase</p>
                <p className="text-2xl font-bold text-cyan-600">{stats.percentage}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-cyan-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Riwayat Absensi
          </CardTitle>
          <CardDescription>
            Riwayat kehadiran 5 hari terakhir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Jam Masuk</TableHead>
                  <TableHead>Jam Keluar</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceHistory.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {new Date(record.date).toLocaleDateString('id-ID', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                      })}
                    </TableCell>
                    <TableCell>{record.checkIn}</TableCell>
                    <TableCell>{record.checkOut}</TableCell>
                    <TableCell>
                      {getStatusBadge(record.status, record.late)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Tips Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Tips Absensi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-blue-800">Ketentuan Absensi:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Jam masuk: 07:30 - 08:00 WIB</li>
                <li>• Jam pulang: 15:00 - 15:30 WIB</li>
                <li>• Toleransi keterlambatan: 15 menit</li>
                <li>• Wajib absen di area sekolah</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-blue-800">Kategori Status:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• <span className="text-green-600">Hadir:</span> Masuk tepat waktu</li>
                <li>• <span className="text-yellow-600">Terlambat:</span> Masuk setelah 08:00</li>
                <li>• <span className="text-red-600">Alfa:</span> Tidak hadir tanpa keterangan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendancePage;
