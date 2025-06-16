
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, BookOpen, Users, Lightbulb } from 'lucide-react';

const MerdekaGradesComponent = () => {
  const merdekaSubjects = [
    {
      subject: 'Bahasa Indonesia',
      phase: 'Fase E',
      cp: 'Menulis teks dengan struktur yang jelas dan koheren',
      achievement: 'Berkembang Sesuai Harapan',
      progress: 85,
      color: 'bg-blue-500',
      description: 'Mampu menulis berbagai jenis teks dengan struktur yang baik dan menggunakan kaidah bahasa yang tepat'
    },
    {
      subject: 'Matematika',
      phase: 'Fase E',
      cp: 'Menyelesaikan masalah yang berkaitan dengan persamaan dan fungsi',
      achievement: 'Sangat Berkembang',
      progress: 95,
      color: 'bg-green-500',
      description: 'Sangat mahir dalam memecahkan masalah matematika kompleks dan menerapkan konsep dalam situasi nyata'
    },
    {
      subject: 'Bahasa Inggris',
      phase: 'Fase E',
      cp: 'Berkomunikasi secara lisan dan tulisan dengan lancar',
      achievement: 'Berkembang Sesuai Harapan',
      progress: 88,
      color: 'bg-purple-500',
      description: 'Kemampuan komunikasi bahasa Inggris baik, dapat berinteraksi dalam berbagai konteks'
    },
    {
      subject: 'Ilmu Pengetahuan Alam',
      phase: 'Fase E',
      cp: 'Menganalisis fenomena alam dan menerapkan metode ilmiah',
      achievement: 'Mulai Berkembang',
      progress: 75,
      color: 'bg-orange-500',
      description: 'Memahami konsep dasar IPA, perlu peningkatan dalam penerapan metode ilmiah'
    },
    {
      subject: 'Ilmu Pengetahuan Sosial',
      phase: 'Fase E',
      cp: 'Menganalisis interaksi manusia dengan lingkungan sosial',
      achievement: 'Berkembang Sesuai Harapan',
      progress: 82,
      color: 'bg-indigo-500',
      description: 'Baik dalam memahami dinamika sosial dan hubungan manusia dengan lingkungan'
    }
  ];

  const projectP5 = [
    {
      title: 'Bhinneka Tunggal Ika',
      theme: 'Profil Pelajar Pancasila',
      status: 'Selesai',
      score: 'Sangat Baik',
      description: 'Proyek tentang keberagaman budaya Indonesia'
    },
    {
      title: 'Kewirausahaan Sosial',
      theme: 'Profil Pelajar Pancasila',
      status: 'Berlangsung',
      score: 'Baik',
      description: 'Mengembangkan ide bisnis yang berdampak sosial'
    },
    {
      title: 'Teknologi Ramah Lingkungan',
      theme: 'Profil Pelajar Pancasila',
      status: 'Perencanaan',
      score: '-',
      description: 'Inovasi teknologi untuk mengatasi masalah lingkungan'
    }
  ];

  const getAchievementColor = (achievement: string) => {
    switch (achievement) {
      case 'Sangat Berkembang': return 'bg-green-100 text-green-800';
      case 'Berkembang Sesuai Harapan': return 'bg-blue-100 text-blue-800';
      case 'Mulai Berkembang': return 'bg-yellow-100 text-yellow-800';
      case 'Perlu Bimbingan': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai': return 'bg-green-100 text-green-800';
      case 'Berlangsung': return 'bg-blue-100 text-blue-800';
      case 'Perencanaan': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Merdeka Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Kurikulum Merdeka - Capaian Pembelajaran
          </CardTitle>
          <CardDescription>
            Penilaian berbasis profil pelajar Pancasila dan capaian pembelajaran
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Beriman & Bertaqwa</h4>
              </div>
              <p className="text-sm text-blue-700 mb-2">Akhlak mulia kepada Tuhan YME</p>
              <Badge className="bg-blue-600">Berkembang Baik</Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Gotong Royong</h4>
              </div>
              <p className="text-sm text-green-700 mb-2">Kolaborasi dan kepedulian</p>
              <Badge className="bg-green-600">Sangat Baik</Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Kreatif & Kritis</h4>
              </div>
              <p className="text-sm text-purple-700 mb-2">Berpikir kritis dan inovatif</p>
              <Badge className="bg-purple-600">Berkembang Baik</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Capaian Pembelajaran per Mata Pelajaran</CardTitle>
          <CardDescription>
            Progress pencapaian berdasarkan fase pembelajaran
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {merdekaSubjects.map((subject, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{subject.subject}</h4>
                    <p className="text-sm text-gray-600">{subject.phase}</p>
                  </div>
                  <Badge className={getAchievementColor(subject.achievement)}>
                    {subject.achievement}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium mb-2">Capaian Pembelajaran:</p>
                  <p className="text-sm text-gray-700">{subject.cp}</p>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-semibold">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{subject.description}</p>
                
                <Button size="sm" variant="outline">
                  Lihat Detail Assessment
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project P5 */}
      <Card>
        <CardHeader>
          <CardTitle>Projek Penguatan Profil Pelajar Pancasila (P5)</CardTitle>
          <CardDescription>
            Pembelajaran berbasis projek untuk mengembangkan karakter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectP5.map((project, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">{project.title}</h4>
                    <Badge className={getProjectStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.theme}</p>
                  <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                  {project.score !== '-' && (
                    <Badge variant="outline" className="mb-3">
                      Nilai: {project.score}
                    </Badge>
                  )}
                  <Button size="sm" variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MerdekaGradesComponent;
