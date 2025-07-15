import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calculator, 
  Clock, 
  FileText, 
  Play, 
  CheckCircle, 
  AlertCircle,
  Trophy,
  BarChart3,
  Calendar,
  User,
  Timer,
  Target,
  Zap,
  BookOpen,
  Award,
  TrendingUp,
  Eye,
  Download,
  History,
  Star,
  Users,
  Bell
} from 'lucide-react';

const CBTPage = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  // Mock data for active exams
  const activeExams = [
    {
      id: 'uts-math-2024',
      title: 'UTS Matematika',
      subject: 'Matematika',
      type: 'UTS',
      duration: 90,
      questions: 25,
      startTime: '2024-06-20T08:00:00',
      endTime: '2024-06-20T09:30:00',
      status: 'available',
      attempts: 0,
      maxAttempts: 1,
      description: 'Ujian Tengah Semester mata pelajaran Matematika kelas XI IPA',
      instructions: [
        'Bacalah setiap soal dengan teliti',
        'Pilih jawaban yang paling tepat',
        'Waktu ujian tidak dapat diperpanjang',
        'Pastikan koneksi internet stabil'
      ]
    },
    {
      id: 'quiz-physics-2024',
      title: 'Kuis Fisika - Gerak Lurus',
      subject: 'Fisika',
      type: 'Kuis',
      duration: 30,
      questions: 10,
      startTime: '2024-06-19T10:00:00',
      endTime: '2024-06-19T10:30:00',
      status: 'in-progress',
      attempts: 1,
      maxAttempts: 2,
      timeLeft: 15,
      progress: 60,
      description: 'Kuis harian tentang materi Gerak Lurus Beraturan'
    }
  ];

  // Mock data for completed exams
  const completedExams = [
    {
      id: 'quiz-biology-2024',
      title: 'Kuis Biologi - Sel',
      subject: 'Biologi',
      type: 'Kuis',
      score: 85,
      maxScore: 100,
      grade: 'A',
      completedAt: '2024-06-18T11:30:00',
      duration: 20,
      questions: 15,
      correctAnswers: 13,
      ranking: 5,
      totalParticipants: 32
    },
    {
      id: 'uas-chemistry-2024',
      title: 'UAS Kimia Semester Ganjil',
      subject: 'Kimia',
      type: 'UAS',
      score: 92,
      maxScore: 100,
      grade: 'A+',
      completedAt: '2024-06-15T14:00:00',
      duration: 120,
      questions: 40,
      correctAnswers: 37,
      ranking: 2,
      totalParticipants: 28
    }
  ];

  // Mock data for scheduled exams
  const scheduledExams = [
    {
      id: 'uas-english-2024',
      title: 'UAS Bahasa Inggris',
      subject: 'Bahasa Inggris',
      type: 'UAS',
      duration: 100,
      questions: 35,
      scheduledDate: '2024-06-25T08:00:00',
      endDate: '2024-06-25T09:40:00',
      description: 'Ujian Akhir Semester mata pelajaran Bahasa Inggris'
    },
    {
      id: 'quiz-chemistry-2024',
      title: 'Kuis Kimia - Asam Basa',
      subject: 'Kimia',
      type: 'Kuis',
      duration: 25,
      questions: 12,
      scheduledDate: '2024-06-22T13:00:00',
      endDate: '2024-06-22T13:25:00',
      description: 'Kuis tentang materi Asam dan Basa'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
      case 'A':
        return 'text-green-600 bg-green-50';
      case 'B+':
      case 'B':
        return 'text-blue-600 bg-blue-50';
      case 'C+':
      case 'C':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-red-600 bg-red-50';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const ExamDetailModal = ({ exam, onClose, onStart }: any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{exam.title}</h3>
              <p className="text-gray-600">{exam.subject} • {exam.type}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Durasi</p>
              <p className="font-semibold">{exam.duration} menit</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <FileText className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Soal</p>
              <p className="font-semibold">{exam.questions} soal</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <Target className="w-6 h-6 text-orange-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Percobaan</p>
              <p className="font-semibold">{exam.attempts}/{exam.maxAttempts}</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <p className="text-sm text-gray-600">Waktu</p>
              <p className="font-semibold text-xs">{formatTime(exam.startTime)}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Deskripsi:</h4>
            <p className="text-gray-600 text-sm">{exam.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Petunjuk Ujian:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {exam.instructions?.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>

          {exam.status === 'in-progress' && (
            <Alert className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Anda sedang mengerjakan ujian ini. Sisa waktu: {exam.timeLeft} menit
              </AlertDescription>
            </Alert>
          )}

          <div className="flex gap-3">
            <Button 
              onClick={onStart}
              className="flex-1"
              disabled={exam.attempts >= exam.maxAttempts && exam.status !== 'in-progress'}
            >
              {exam.status === 'in-progress' ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Lanjutkan Ujian
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Mulai Ujian
                </>
              )}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const startExam = (examId: string) => {
    alert(`Memulai ujian: ${examId}\n\nAnda akan diarahkan ke halaman ujian...`);
    setSelectedExam(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Calculator className="w-7 h-7 text-red-600" />
            CBT/Ujian
          </h1>
          <p className="text-gray-600">Computer Based Test dan Ujian Online</p>
        </div>
        <Badge variant="outline" className="w-fit">
          2 Ujian Aktif
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-600">Ujian Selesai</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-gray-600">Sedang Berlangsung</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-gray-600">Terjadwal</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold">87.5</p>
            <p className="text-sm text-gray-600">Rata-rata Nilai</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Ujian Aktif</TabsTrigger>
          <TabsTrigger value="completed">Riwayat</TabsTrigger>
          <TabsTrigger value="scheduled">Terjadwal</TabsTrigger>
        </TabsList>

        {/* Active Exams Tab */}
        <TabsContent value="active" className="space-y-4">
          {activeExams.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500">Tidak ada ujian aktif saat ini</p>
              </CardContent>
            </Card>
          ) : (
            activeExams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exam.title}</h3>
                          <p className="text-gray-600">{exam.subject} • {exam.type}</p>
                        </div>
                        <Badge className={getStatusColor(exam.status)}>
                          {exam.status === 'available' ? 'Tersedia' : 'Sedang Berlangsung'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{exam.duration} menit</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{exam.questions} soal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{exam.attempts}/{exam.maxAttempts} percobaan</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{formatTime(exam.startTime)}</span>
                        </div>
                      </div>

                      {exam.status === 'in-progress' && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress: {exam.progress}%</span>
                            <span>Sisa waktu: {exam.timeLeft} menit</span>
                          </div>
                          <Progress value={exam.progress} className="h-2" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 lg:w-auto w-full">
                      <Button 
                        onClick={() => setSelectedExam(exam.id)}
                        className="w-full lg:w-auto"
                        disabled={exam.attempts >= exam.maxAttempts && exam.status !== 'in-progress'}
                      >
                        {exam.status === 'in-progress' ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Lanjutkan
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 mr-2" />
                            Mulai Ujian
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm" className="w-full lg:w-auto">
                        <Eye className="w-4 h-4 mr-2" />
                        Detail
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Completed Exams Tab */}
        <TabsContent value="completed" className="space-y-4">
          {completedExams.map((exam) => (
            <Card key={exam.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exam.title}</h3>
                        <p className="text-gray-600">{exam.subject} • {exam.type}</p>
                        <p className="text-sm text-gray-500">
                          Dikerjakan: {formatDate(exam.completedAt)}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className={getGradeColor(exam.grade)}>
                          {exam.grade}
                        </Badge>
                        <p className="text-lg font-bold mt-1">{exam.score}/{exam.maxScore}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{exam.correctAnswers}/{exam.questions} benar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{exam.duration} menit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">Peringkat #{exam.ranking}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{exam.totalParticipants} peserta</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Skor</span>
                        <span>{exam.score}%</span>
                      </div>
                      <Progress value={exam.score} className="h-2" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:w-auto w-full">
                    <Button variant="outline" size="sm" className="w-full lg:w-auto">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Analisis
                    </Button>
                    <Button variant="outline" size="sm" className="w-full lg:w-auto">
                      <Download className="w-4 h-4 mr-2" />
                      Unduh
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Scheduled Exams Tab */}
        <TabsContent value="scheduled" className="space-y-4">
          {scheduledExams.map((exam) => (
            <Card key={exam.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exam.title}</h3>
                        <p className="text-gray-600">{exam.subject} • {exam.type}</p>
                        <p className="text-sm text-gray-500">{exam.description}</p>
                      </div>
                      <Badge className={getStatusColor('scheduled')}>
                        Terjadwal
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{formatDate(exam.scheduledDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{exam.duration} menit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{exam.questions} soal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">{formatTime(exam.scheduledDate)} - {formatTime(exam.endDate)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:w-auto w-full">
                    <Button variant="outline" size="sm" className="w-full lg:w-auto">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Pelajari
                    </Button>
                    <Button variant="outline" size="sm" className="w-full lg:w-auto">
                      <Bell className="w-4 h-4 mr-2" />
                      Ingatkan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Exam Detail Modal */}
      {selectedExam && (
        <ExamDetailModal
          exam={activeExams.find(e => e.id === selectedExam)}
          onClose={() => setSelectedExam(null)}
          onStart={startExam}
        />
      )}
    </div>
  );
};

export default CBTPage;