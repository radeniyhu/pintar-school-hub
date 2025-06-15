
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  Search,
  Bell,
  Download
} from 'lucide-react';
import { Input } from "@/components/ui/input";

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState('senin');
  const [currentWeek, setCurrentWeek] = useState(0); // 0 = minggu ini, 1 = minggu depan
  const [searchTerm, setSearchTerm] = useState('');

  const weeklySchedule = {
    senin: [
      {
        time: '07:30 - 08:15',
        subject: 'Upacara Bendera',
        teacher: 'Pak Budi Santoso',
        room: 'Lapangan Utama',
        type: 'ceremony',
        description: 'Upacara bendera rutin setiap hari Senin'
      },
      {
        time: '08:15 - 09:00',
        subject: 'Matematika',
        teacher: 'Bu Siti Rahayu',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Integral dan Diferensial'
      },
      {
        time: '09:15 - 10:00',
        subject: 'Bahasa Indonesia',
        teacher: 'Pak Ahmad Yusuf',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Teks Argumentasi'
      },
      {
        time: '10:00 - 10:45',
        subject: 'Fisika',
        teacher: 'Bu Diana Sari',
        room: 'Lab IPA',
        type: 'lab',
        description: 'Praktikum: Hukum Newton'
      },
      {
        time: '11:00 - 11:45',
        subject: 'Bahasa Inggris',
        teacher: 'Miss Sarah',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Grammar - Past Perfect Tense'
      },
      {
        time: '12:30 - 13:15',
        subject: 'Kimia',
        teacher: 'Pak Ridwan',
        room: 'Lab Kimia',
        type: 'lab',
        description: 'Praktikum: Reaksi Asam Basa'
      }
    ],
    selasa: [
      {
        time: '07:30 - 08:15',
        subject: 'Pendidikan Agama Islam',
        teacher: 'Ustadz Abdul Rahman',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Akhlak Mulia dalam Islam'
      },
      {
        time: '08:15 - 09:00',
        subject: 'Biologi',
        teacher: 'Bu Fitri Handayani',
        room: 'Lab Biologi',
        type: 'lab',
        description: 'Praktikum: Sistem Peredaran Darah'
      },
      {
        time: '09:15 - 10:00',
        subject: 'Sejarah',
        teacher: 'Pak Bambang',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Perjuangan Kemerdekaan Indonesia'
      },
      {
        time: '10:00 - 10:45',
        subject: 'Matematika',
        teacher: 'Bu Siti Rahayu',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Aplikasi Integral'
      },
      {
        time: '11:00 - 11:45',
        subject: 'Geografi',
        teacher: 'Bu Maya Sari',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Dinamika Atmosfer'
      }
    ],
    rabu: [
      {
        time: '07:30 - 08:15',
        subject: 'Ekonomi',
        teacher: 'Pak Hendra',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Pasar Modal dan Investasi'
      },
      {
        time: '08:15 - 09:00',
        subject: 'Bahasa Inggris',
        teacher: 'Miss Sarah',
        room: 'Lab Bahasa',
        type: 'lab',
        description: 'Listening Practice - TOEFL Preparation'
      },
      {
        time: '09:15 - 10:00',
        subject: 'Fisika',
        teacher: 'Bu Diana Sari',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Gelombang dan Bunyi'
      },
      {
        time: '10:00 - 10:45',
        subject: 'Pendidikan Kewarganegaraan',
        teacher: 'Pak Sugeng',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Hak dan Kewajiban Warga Negara'
      }
    ],
    kamis: [
      {
        time: '07:30 - 08:15',
        subject: 'Matematika',
        teacher: 'Bu Siti Rahayu',
        room: 'Lab Komputer',
        type: 'lab',
        description: 'Ulangan Harian - Integral dan Diferensial'
      },
      {
        time: '08:15 - 09:00',
        subject: 'Bahasa Indonesia',
        teacher: 'Pak Ahmad Yusuf',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Presentasi Tugas Teks Argumentasi'
      },
      {
        time: '09:15 - 10:00',
        subject: 'Kimia',
        teacher: 'Pak Ridwan',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Kesetimbangan Kimia'
      },
      {
        time: '10:00 - 10:45',
        subject: 'Seni Budaya',
        teacher: 'Bu Rina',
        room: 'Ruang Seni',
        type: 'creative',
        description: 'Praktik: Seni Rupa Tradisional'
      }
    ],
    jumat: [
      {
        time: '07:30 - 08:15',
        subject: 'Senam Pagi',
        teacher: 'Pak Wahyu',
        room: 'Lapangan Olahraga',
        type: 'sport',
        description: 'Senam kesehatan jasmani'
      },
      {
        time: '08:15 - 09:00',
        subject: 'Pendidikan Jasmani',
        teacher: 'Pak Wahyu',
        room: 'Lapangan Olahraga',
        type: 'sport',
        description: 'Olahraga: Bola Voli'
      },
      {
        time: '09:15 - 10:00',
        subject: 'Tahfidz Al-Quran',
        teacher: 'Ustadz Mahmud',
        room: 'Masjid Sekolah',
        type: 'religious',
        description: 'Hafalan: Surah Al-Mulk ayat 15-20'
      },
      {
        time: '10:00 - 10:45',
        subject: 'Bahasa Arab',
        teacher: 'Ustadz Said',
        room: 'Ruang XI-2',
        type: 'regular',
        description: 'Materi: Qiroah dan Mufrodat'
      }
    ]
  };

  const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
  const dayNames = {
    senin: 'Senin',
    selasa: 'Selasa', 
    rabu: 'Rabu',
    kamis: 'Kamis',
    jumat: 'Jumat'
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lab':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'sport':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'religious':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'creative':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'ceremony':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'lab':
        return 'Praktikum';
      case 'sport':
        return 'Olahraga';
      case 'religious':
        return 'Keagamaan';
      case 'creative':
        return 'Seni';
      case 'ceremony':
        return 'Upacara';
      default:
        return 'Reguler';
    }
  };

  const currentSchedule = weeklySchedule[selectedDay as keyof typeof weeklySchedule] || [];
  const filteredSchedule = currentSchedule.filter(item =>
    item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-emerald-600" />
                Jadwal Pelajaran
              </CardTitle>
              <CardDescription>
                Jadwal lengkap mata pelajaran dan kegiatan sekolah
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifikasi
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari mata pelajaran atau guru..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={currentWeek === 0 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentWeek(0)}
              >
                Minggu Ini
              </Button>
              <Button
                variant={currentWeek === 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentWeek(1)}
              >
                Minggu Depan
              </Button>
            </div>
          </div>

          {/* Day Tabs */}
          <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {days.map((day) => (
                <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
                  {dayNames[day as keyof typeof dayNames]}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day} value={day} className="mt-6">
                <div className="space-y-4">
                  {filteredSchedule.length > 0 ? (
                    <>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {dayNames[day as keyof typeof dayNames]}, 
                          {currentWeek === 0 ? ' 17 Juni 2024' : ' 24 Juni 2024'}
                        </h3>
                        <Badge variant="outline">
                          {filteredSchedule.length} Jadwal
                        </Badge>
                      </div>
                      
                      {filteredSchedule.map((schedule, index) => (
                        <Card key={index} className="border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-start gap-3">
                                  <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                    {schedule.time}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                      {schedule.subject}
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-2">
                                      {schedule.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                                      <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {schedule.teacher}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {schedule.room}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge 
                                variant="outline" 
                                className={getTypeColor(schedule.type)}
                              >
                                {getTypeLabel(schedule.type)}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Calendar className="w-12 h-12 text-gray-400" />
                      </div>
                      <p className="text-gray-500">
                        {searchTerm ? 'Tidak ada jadwal yang sesuai dengan pencarian' : 'Tidak ada jadwal untuk hari ini'}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Mapel</p>
                <p className="text-xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Jam/Minggu</p>
                <p className="text-xl font-bold">35</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Guru</p>
                <p className="text-xl font-bold">15</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Ruang</p>
                <p className="text-xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchedulePage;
