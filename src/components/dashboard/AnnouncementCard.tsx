
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Pin, ArrowRight } from 'lucide-react';

const AnnouncementCard = () => {
  const announcements = [
    {
      title: 'Ujian Tengah Semester Dimulai Senin Depan',
      content: 'Persiapkan diri untuk UTS yang akan dilaksanakan mulai tanggal 19 Juni 2024. Pastikan membawa alat tulis lengkap.',
      date: '2024-06-15',
      time: '08:00',
      category: 'Ujian',
      priority: 'high',
      pinned: true
    },
    {
      title: 'Libur Idul Adha 1445 H',
      content: 'Sekolah libur pada tanggal 17-18 Juni 2024 dalam rangka memperingati hari raya Idul Adha.',
      date: '2024-06-14',
      time: '10:30',
      category: 'Libur',
      priority: 'medium',
      pinned: false
    },
    {
      title: 'Pendaftaran Ekstrakurikuler Gelombang 2',
      content: 'Pendaftaran ekstrakurikuler gelombang 2 dibuka hingga tanggal 25 Juni 2024. Daftar di ruang OSIS.',
      date: '2024-06-13',
      time: '14:15',
      category: 'Kegiatan',
      priority: 'low',
      pinned: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ujian':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      case 'libur':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'kegiatan':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  const formatDate = (dateString: string, timeString: string) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString('id-ID')} • ${timeString}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-orange-600" />
          Pengumuman Terbaru
        </CardTitle>
        <CardDescription>
          Informasi penting dari sekolah
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border transition-colors ${
                announcement.pinned 
                  ? 'bg-yellow-50 border-yellow-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-start gap-2">
                  {announcement.pinned && (
                    <Pin className="w-4 h-4 text-yellow-600 mt-1" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {announcement.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {announcement.content}
                    </p>
                  </div>
                </div>
                <Badge className={getCategoryColor(announcement.category)}>
                  {announcement.category}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  {formatDate(announcement.date, announcement.time)}
                </div>
                <Button size="sm" variant="ghost" className="text-xs">
                  Baca Selengkapnya
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <Button variant="ghost" className="w-full">
            Lihat Semua Pengumuman
            <Badge variant="destructive" className="ml-2">5</Badge>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
