import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Library,
  Search,
  BookOpen,
  Download,
  Eye,
  Bookmark,
  Star,
  Filter,
  Grid,
  List,
  Clock,
  FileText,
  Video,
  Headphones,
  BookMarked,
  GraduationCap,
  Users,
  TrendingUp
} from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  subject: string;
  grade: string;
  type: 'textbook' | 'reference' | 'novel' | 'guide';
  pages: number;
  rating: number;
  downloads: number;
  thumbnail: string;
  description: string;
  publishYear: number;
  isBookmarked: boolean;
  lastRead?: string;
}

interface DigitalResource {
  id: string;
  title: string;
  type: 'video' | 'audio' | 'document' | 'interactive';
  subject: string;
  duration?: string;
  size?: string;
  thumbnail: string;
  description: string;
  isBookmarked: boolean;
}

const DigitalLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data - in real app this would come from API
  const books: Book[] = [
    {
      id: '1',
      title: 'Matematika Kelas XII',
      author: 'Dr. Ahmad Suryadi',
      subject: 'Matematika',
      grade: 'XII',
      type: 'textbook',
      pages: 248,
      rating: 4.8,
      downloads: 1250,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      description: 'Buku matematika lengkap untuk kelas XII dengan pembahasan mendalam tentang kalkulus dan statistika.',
      publishYear: 2023,
      isBookmarked: true,
      lastRead: '2 hari lalu'
    },
    {
      id: '2',
      title: 'Fisika Modern',
      author: 'Prof. Siti Nurhaliza',
      subject: 'Fisika',
      grade: 'XII',
      type: 'textbook',
      pages: 312,
      rating: 4.6,
      downloads: 890,
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      description: 'Eksplorasi mendalam tentang fisika modern, quantum, dan relativitas.',
      publishYear: 2023,
      isBookmarked: false
    },
    {
      id: '3',
      title: 'Sejarah Indonesia',
      author: 'Dr. Bambang Sutrisno',
      subject: 'Sejarah',
      grade: 'XI',
      type: 'textbook',
      pages: 195,
      rating: 4.7,
      downloads: 756,
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      description: 'Perjalanan sejarah Indonesia dari masa pra-kolonial hingga reformasi.',
      publishYear: 2022,
      isBookmarked: true
    },
    {
      id: '4',
      title: 'Panduan Olimpiade Sains',
      author: 'Tim Guru Berprestasi',
      subject: 'Sains',
      grade: 'X-XII',
      type: 'guide',
      pages: 156,
      rating: 4.9,
      downloads: 2100,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'Strategi dan materi persiapan olimpiade sains nasional dan internasional.',
      publishYear: 2023,
      isBookmarked: false
    }
  ];

  const digitalResources: DigitalResource[] = [
    {
      id: '1',
      title: 'Video Tutorial Kalkulus Integral',
      type: 'video',
      subject: 'Matematika',
      duration: '45 menit',
      thumbnail: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
      description: 'Penjelasan lengkap tentang teknik integrasi dengan contoh soal',
      isBookmarked: true
    },
    {
      id: '2',
      title: 'Audio Lesson: English Grammar',
      type: 'audio',
      subject: 'Bahasa Inggris',
      duration: '30 menit',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      description: 'Pembelajaran grammar bahasa Inggris dengan pronunciation guide',
      isBookmarked: false
    },
    {
      id: '3',
      title: 'Simulasi Laboratorium Kimia',
      type: 'interactive',
      subject: 'Kimia',
      size: '125 MB',
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      description: 'Eksperimen virtual untuk praktikum kimia yang aman',
      isBookmarked: true
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua', count: books.length },
    { id: 'textbook', label: 'Buku Pelajaran', count: books.filter(b => b.type === 'textbook').length },
    { id: 'reference', label: 'Referensi', count: books.filter(b => b.type === 'reference').length },
    { id: 'guide', label: 'Panduan', count: books.filter(b => b.type === 'guide').length },
  ];

  const subjects = ['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (bookId: string) => {
    // In real app, this would update the backend
    console.log('Toggle bookmark for book:', bookId);
  };

  const downloadBook = (bookId: string) => {
    // In real app, this would handle the download
    console.log('Download book:', bookId);
  };

  const readBook = (bookId: string) => {
    // In real app, this would open the book reader
    console.log('Read book:', bookId);
  };

  const BookCard = ({ book }: { book: Book }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={book.thumbnail} 
          alt={book.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => toggleBookmark(book.id)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
            book.isBookmarked 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Bookmark className="w-4 h-4" />
        </button>
        <Badge 
          variant="secondary" 
          className="absolute bottom-3 left-3 bg-white/90 text-gray-700"
        >
          {book.subject}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600">oleh {book.author}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {book.pages} hal
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {book.rating}
            </span>
            <span className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              {book.downloads}
            </span>
          </div>
          
          {book.lastRead && (
            <div className="flex items-center gap-1 text-sm text-blue-600">
              <Clock className="w-4 h-4" />
              Terakhir dibaca {book.lastRead}
            </div>
          )}
          
          <p className="text-sm text-gray-600 line-clamp-2">
            {book.description}
          </p>
          
          <div className="flex gap-2 pt-2">
            <Button
              onClick={() => readBook(book.id)}
              className="flex-1"
              size="sm"
            >
              <Eye className="w-4 h-4 mr-2" />
              Baca
            </Button>
            <Button
              onClick={() => downloadBook(book.id)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ResourceCard = ({ resource }: { resource: DigitalResource }) => {
    const getIcon = () => {
      switch (resource.type) {
        case 'video': return <Video className="w-6 h-6" />;
        case 'audio': return <Headphones className="w-6 h-6" />;
        case 'interactive': return <GraduationCap className="w-6 h-6" />;
        default: return <FileText className="w-6 h-6" />;
      }
    };

    const getTypeColor = () => {
      switch (resource.type) {
        case 'video': return 'bg-red-100 text-red-700';
        case 'audio': return 'bg-green-100 text-green-700';
        case 'interactive': return 'bg-purple-100 text-purple-700';
        default: return 'bg-blue-100 text-blue-700';
      }
    };

    return (
      <Card className="group hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden">
          <img 
            src={resource.thumbnail} 
            alt={resource.title}
            className="w-full h-32 object-cover"
          />
          <div className={`absolute top-3 left-3 p-2 rounded-full ${getTypeColor()}`}>
            {getIcon()}
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-2 mb-2">{resource.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{resource.subject}</p>
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{resource.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {resource.duration || resource.size}
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                variant={resource.isBookmarked ? "default" : "outline"}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Library className="w-7 h-7 text-indigo-600" />
            Perpustakaan Digital
          </h1>
          <p className="text-gray-600 mt-1">
            Akses ribuan buku dan materi pembelajaran digital
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari buku, penulis, atau mata pelajaran..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="lg:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-sm text-gray-600">Total Buku</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">856</div>
            <div className="text-sm text-gray-600">Pembaca Aktif</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Download className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12,356</div>
            <div className="text-sm text-gray-600">Total Download</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-sm text-gray-600">Kepuasan</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="books" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="books">Koleksi Buku</TabsTrigger>
          <TabsTrigger value="resources">Materi Digital</TabsTrigger>
          <TabsTrigger value="bookmarks">Favorit Saya</TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="space-y-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Subject Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 py-2">Mata Pelajaran:</span>
            {subjects.map((subject) => (
              <Badge key={subject} variant="outline" className="cursor-pointer hover:bg-gray-100">
                {subject}
              </Badge>
            ))}
          </div>

          {/* Books Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Tidak ada buku yang ditemukan</p>
              <p className="text-sm text-gray-400">Coba ubah kata kunci pencarian atau filter</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookmarks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.filter(book => book.isBookmarked).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          
          {books.filter(book => book.isBookmarked).length === 0 && (
            <div className="text-center py-12">
              <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Belum ada buku favorit</p>
              <p className="text-sm text-gray-400">Tandai buku sebagai favorit untuk akses cepat</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigitalLibraryPage;