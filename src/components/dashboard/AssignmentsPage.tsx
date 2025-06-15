
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  Search,
  Filter,
  Download,
  Upload,
  BookOpen,
  Clock,
  User,
  ChevronRight,
  Star,
  Eye
} from 'lucide-react';

const AssignmentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'Laporan Praktikum Fisika - Gerak Parabola',
      subject: 'Fisika',
      teacher: 'Pak Budi Santoso',
      description: 'Membuat laporan hasil praktikum tentang gerak parabola dengan analisis data dan grafik',
      dueDate: '2024-06-16',
      dueTime: '23:59',
      submittedDate: null,
      status: 'pending',
      priority: 'high',
      type: 'assignment',
      points: 100,
      attachments: ['panduan_praktikum.pdf'],
      submissionFormat: 'PDF, DOC'
    },
    {
      id: 2,
      title: 'Essay Bahasa Indonesia - Teks Argumentasi',
      subject: 'Bahasa Indonesia',
      teacher: 'Bu Siti Nurhaliza',
      description: 'Menulis essay argumentasi dengan tema lingkungan hidup minimal 1000 kata',
      dueDate: '2024-06-18',
      dueTime: '14:00',
      submittedDate: null,
      status: 'pending',
      priority: 'medium',
      type: 'assignment',
      points: 85,
      attachments: ['template_essay.docx'],
      submissionFormat: 'DOC, DOCX'
    },
    {
      id: 3,
      title: 'Soal Matematika Bab 5 - Integral',
      subject: 'Matematika',
      teacher: 'Pak Ahmad Wijaya',
      description: 'Mengerjakan 20 soal integral tingkat menengah',
      dueDate: '2024-06-20',
      dueTime: '16:00',
      submittedDate: '2024-06-15',
      status: 'submitted',
      priority: 'low',
      type: 'assignment',
      points: 90,
      attachments: ['soal_integral.pdf'],
      submissionFormat: 'PDF'
    },
    {
      id: 4,
      title: 'Presentasi Sejarah Indonesia',
      subject: 'Sejarah',
      teacher: 'Bu Ratna Sari',
      description: 'Presentasi kelompok tentang perjuangan kemerdekaan Indonesia',
      dueDate: '2024-06-25',
      dueTime: '10:00',
      submittedDate: null,
      status: 'pending',
      priority: 'medium',
      type: 'presentation',
      points: 95,
      attachments: ['template_presentasi.pptx'],
      submissionFormat: 'PPT, PPTX'
    }
  ];

  const materials = [
    {
      id: 1,
      title: 'Materi Fisika - Kinematika Gerak',
      subject: 'Fisika',
      teacher: 'Pak Budi Santoso',
      description: 'Materi lengkap tentang kinematika gerak lurus dan gerak parabola',
      uploadDate: '2024-06-10',
      type: 'material',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      downloads: 45,
      isNew: true
    },
    {
      id: 2,
      title: 'Video Pembelajaran - Teks Argumentasi',
      subject: 'Bahasa Indonesia',
      teacher: 'Bu Siti Nurhaliza',
      description: 'Video tutorial cara menulis teks argumentasi yang baik dan benar',
      uploadDate: '2024-06-12',
      type: 'video',
      fileType: 'MP4',
      fileSize: '45.2 MB',
      downloads: 32,
      duration: '25:30'
    },
    {
      id: 3,
      title: 'Rumus Integral Lengkap',
      subject: 'Matematika',
      teacher: 'Pak Ahmad Wijaya',
      description: 'Kumpulan rumus integral dasar hingga tingkat lanjut',
      uploadDate: '2024-06-08',
      type: 'material',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      downloads: 67,
      isImportant: true
    }
  ];

  const subjects = ['all', 'Fisika', 'Bahasa Indonesia', 'Matematika', 'Sejarah', 'Kimia', 'Biologi'];

  const getStatusInfo = (status: string, priority: string) => {
    if (status === 'submitted') {
      return {
        badge: <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Terkirim</Badge>,
        icon: <CheckCircle2 className="w-4 h-4 text-green-600" />
      };
    }
    
    if (priority === 'high') {
      return {
        badge: <Badge variant="destructive">Urgent</Badge>,
        icon: <AlertCircle className="w-4 h-4 text-red-600" />
      };
    }
    
    return {
      badge: <Badge variant="outline">Pending</Badge>,
      icon: <Clock className="w-4 h-4 text-orange-600" />
    };
  };

  const formatDueDate = (dateString: string, timeString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return `Hari ini, ${timeString}`;
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return `Besok, ${timeString}`;
    } else {
      return `${date.toLocaleDateString('id-ID')}, ${timeString}`;
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assignment.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || assignment.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || material.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Tugas & Materi Pembelajaran
          </CardTitle>
          <CardDescription>
            Kelola tugas dan akses materi pembelajaran dari semua mata pelajaran
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Cari tugas atau materi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'Semua Mata Pelajaran' : subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="assignments" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assignments" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Tugas ({filteredAssignments.length})
          </TabsTrigger>
          <TabsTrigger value="materials" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Materi ({filteredMaterials.length})
          </TabsTrigger>
        </TabsList>

        {/* Assignments Tab */}
        <TabsContent value="assignments" className="space-y-4">
          {filteredAssignments.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Tidak ada tugas ditemukan</p>
              </CardContent>
            </Card>
          ) : (
            filteredAssignments.map((assignment) => {
              const statusInfo = getStatusInfo(assignment.status, assignment.priority);
              return (
                <Card key={assignment.id} className={`transition-all hover:shadow-md ${
                  assignment.priority === 'high' && assignment.status === 'pending'
                    ? 'border-red-200 bg-red-50/30' 
                    : assignment.status === 'submitted'
                    ? 'border-green-200 bg-green-50/30'
                    : 'hover:bg-gray-50/50'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        {statusInfo.icon}
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{assignment.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              {assignment.subject}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {assignment.teacher}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {assignment.points} poin
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{assignment.description}</p>
                          
                          <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                            <Calendar className="w-3 h-3" />
                            <span className={assignment.priority === 'high' ? 'text-red-600 font-medium' : ''}>
                              Deadline: {formatDueDate(assignment.dueDate, assignment.dueTime)}
                            </span>
                          </div>

                          {assignment.attachments.length > 0 && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                              <Download className="w-3 h-3" />
                              <span>Lampiran: {assignment.attachments.join(', ')}</span>
                            </div>
                          )}

                          <div className="text-xs text-gray-500">
                            Format pengumpulan: {assignment.submissionFormat}
                          </div>
                        </div>
                      </div>
                      {statusInfo.badge}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      {assignment.status === 'pending' && (
                        <>
                          <Button 
                            size="sm" 
                            variant={assignment.priority === 'high' ? 'default' : 'outline'}
                            className="flex items-center gap-2"
                          >
                            <Upload className="w-3 h-3" />
                            Kumpulkan Tugas
                          </Button>
                          <Button size="sm" variant="ghost" className="flex items-center gap-2">
                            <Eye className="w-3 h-3" />
                            Lihat Detail
                          </Button>
                        </>
                      )}
                      
                      {assignment.status === 'submitted' && (
                        <>
                          <Button size="sm" variant="outline">
                            Lihat Pengumpulan
                          </Button>
                          <Button size="sm" variant="ghost">
                            Download Lampiran
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </TabsContent>

        {/* Materials Tab */}
        <TabsContent value="materials" className="space-y-4">
          {filteredMaterials.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Tidak ada materi ditemukan</p>
              </CardContent>
            </Card>
          ) : (
            filteredMaterials.map((material) => (
              <Card key={material.id} className="transition-all hover:shadow-md hover:bg-gray-50/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {material.type === 'video' ? (
                          <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                            <div className="w-0 h-0 border-l-2 border-l-white border-t-1 border-t-transparent border-b-1 border-b-transparent ml-0.5"></div>
                          </div>
                        ) : (
                          <FileText className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{material.title}</h3>
                          {material.isNew && (
                            <Badge variant="secondary" className="text-xs">Baru</Badge>
                          )}
                          {material.isImportant && (
                            <Badge variant="destructive" className="text-xs">Penting</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {material.subject}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {material.teacher}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(material.uploadDate).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{material.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{material.fileType} • {material.fileSize}</span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {material.downloads} unduhan
                          </span>
                          {material.duration && (
                            <span>Durasi: {material.duration}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex items-center gap-2">
                      <Download className="w-3 h-3" />
                      {material.type === 'video' ? 'Tonton' : 'Download'}
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Eye className="w-3 h-3" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssignmentsPage;
