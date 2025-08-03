import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Newspaper, 
  Search, 
  Clock, 
  Eye, 
  Share2, 
  BookOpen,
  Trophy,
  Calendar,
  Users,
  GraduationCap,
  Heart
} from 'lucide-react';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredNews = {
    title: 'Siswa SMA Negeri 1 Raih Juara 1 Olimpiade Sains Nasional',
    summary: 'Tim OSN dari sekolah berhasil meraih prestasi gemilang dalam kompetisi tingkat nasional bidang Fisika dan Matematika.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop',
    category: 'Prestasi',
    date: '2024-06-15',
    readTime: '3 menit',
    views: 1250
  };

  const newsCategories = [
    { id: 'semua', label: 'Semua', icon: Newspaper },
    { id: 'prestasi', label: 'Prestasi', icon: Trophy },
    { id: 'kegiatan', label: 'Kegiatan', icon: Calendar },
    { id: 'akademik', label: 'Akademik', icon: GraduationCap },
    { id: 'sosial', label: 'Sosial', icon: Heart }
  ];

  const newsList = [
    {
      id: 1,
      title: 'Pelaksanaan Ujian Akhir Semester Genap 2024',
      summary: 'Informasi terkait jadwal dan tata tertib pelaksanaan UAS semester genap tahun ajaran 2023/2024.',
      category: 'Akademik',
      date: '2024-06-14',
      readTime: '2 menit',
      views: 892,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=150&fit=crop'
    },
    {
      id: 2,
      title: 'Kegiatan Bakti Sosial Ramadhan 1445 H',
      summary: 'Siswa dan guru berbagi kebahagiaan dengan masyarakat sekitar melalui program bakti sosial.',
      category: 'Sosial',
      date: '2024-06-13',
      readTime: '4 menit',
      views: 567,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=150&fit=crop'
    },
    {
      id: 3,
      title: 'Workshop Digital Marketing untuk Siswa Kelas XII',
      summary: 'Mempersiapkan siswa menghadapi era digital dengan pelatihan marketing dan kewirausahaan.',
      category: 'Kegiatan',
      date: '2024-06-12',
      readTime: '3 menit',
      views: 743,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=150&fit=crop'
    },
    {
      id: 4,
      title: 'Tim Futsal Sekolah Juara 2 Kompetisi Antar SMA',
      summary: 'Prestasi membanggakan dari tim futsal sekolah dalam turnamen tingkat kabupaten.',
      category: 'Prestasi',
      date: '2024-06-11',
      readTime: '2 menit',
      views: 1034,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=150&fit=crop'
    },
    {
      id: 5,
      title: 'Penerimaan Peserta Didik Baru Tahun 2024/2025',
      summary: 'Informasi lengkap tentang syarat, jadwal, dan prosedur pendaftaran siswa baru.',
      category: 'Akademik',
      date: '2024-06-10',
      readTime: '5 menit',
      views: 2145,
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=150&fit=crop'
    }
  ];

  const filteredNews = newsList.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'prestasi':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'kegiatan':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'akademik':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'sosial':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-red-600" />
              Berita & Artikel
            </h1>
            <p className="text-gray-600 mt-1">Informasi terbaru dari sekolah</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Cari berita atau artikel..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Featured News */}
      <Card className="overflow-hidden">
        <div className="relative">
          <img 
            src={featuredNews.image} 
            alt={featuredNews.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getCategoryColor(featuredNews.category)}>
              {featuredNews.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {featuredNews.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {featuredNews.summary}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {featuredNews.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {featuredNews.views.toLocaleString()}
              </div>
              <span>{formatDate(featuredNews.date)}</span>
            </div>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Baca Selengkapnya
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* News Categories */}
      <Tabs defaultValue="semua" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {newsCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col gap-1 py-3"
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{category.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="semua" className="mt-6">
          <div className="grid gap-4">
            {filteredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-24 h-24 object-cover flex-shrink-0"
                  />
                  <CardContent className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">
                        {news.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`ml-2 ${getCategoryColor(news.category)} text-xs`}
                      >
                        {news.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {news.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{formatDate(news.date)}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {news.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {news.views}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-6 px-2">
                          <Share2 className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 px-2 text-red-600">
                          <BookOpen className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Other category tabs would show filtered content */}
        {newsCategories.slice(1).map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid gap-4">
              {filteredNews
                .filter(news => news.category.toLowerCase() === category.label.toLowerCase())
                .map((news) => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-24 h-24 object-cover flex-shrink-0"
                      />
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">
                            {news.title}
                          </h3>
                          <Badge 
                            variant="outline" 
                            className={`ml-2 ${getCategoryColor(news.category)} text-xs`}
                          >
                            {news.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                          {news.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span>{formatDate(news.date)}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {news.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {news.views}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="h-6 px-2">
                              <Share2 className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-red-600">
                              <BookOpen className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              {filteredNews.filter(news => news.category.toLowerCase() === category.label.toLowerCase()).length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Belum ada berita untuk kategori {category.label}</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NewsPage;
