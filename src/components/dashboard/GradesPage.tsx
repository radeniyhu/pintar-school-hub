import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Award, 
  TrendingUp, 
  FileText, 
  Download,
  Eye,
  Calendar,
  BarChart3,
  Target,
  BookOpen,
  Trophy,
  Star
} from 'lucide-react';

const GradesPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('ganjil');

  // Mock data for demo
  const subjects = [
    {
      name: "Matematika",
      code: "MAT",
      teacher: "Ibu Sari Indah",
      grades: {
        tugas: [85, 90, 88, 92],
        ulangan: [88, 85],
        uts: 87,
        uas: 89,
        final: 88
      },
      kkm: 75,
      predicate: "B+"
    },
    {
      name: "Bahasa Indonesia", 
      code: "BIN",
      teacher: "Pak Ahmad Reza",
      grades: {
        tugas: [92, 88, 95, 90],
        ulangan: [90, 88],
        uts: 91,
        uas: 93,
        final: 91
      },
      kkm: 75,
      predicate: "A-"
    },
    {
      name: "Fisika",
      code: "FIS", 
      teacher: "Pak Budi Santoso",
      grades: {
        tugas: [80, 85, 82, 88],
        ulangan: [83, 86],
        uts: 84,
        uas: 87,
        final: 85
      },
      kkm: 75,
      predicate: "B"
    },
    {
      name: "Kimia",
      code: "KIM",
      teacher: "Ibu Diana Putri", 
      grades: {
        tugas: [87, 91, 89, 94],
        ulangan: [89, 92],
        uts: 90,
        uas: 93,
        final: 91
      },
      kkm: 75,
      predicate: "A-"
    },
    {
      name: "Biologi",
      code: "BIO",
      teacher: "Ibu Rina Sari",
      grades: {
        tugas: [89, 93, 91, 88],
        ulangan: [91, 89],
        uts: 92,
        uas: 94,
        final: 92
      },
      kkm: 75,
      predicate: "A-"
    },
    {
      name: "Bahasa Inggris",
      code: "ENG",
      teacher: "Miss Sarah",
      grades: {
        tugas: [94, 96, 92, 95],
        ulangan: [95, 93],
        uts: 94,
        uas: 96,
        final: 95
      },
      kkm: 75,
      predicate: "A"
    }
  ];

  const reports = [
    {
      id: 1,
      title: "Rapor Semester Ganjil 2023/2024",
      type: "semester",
      period: "Semester 1 - 2023/2024",
      date: "2024-01-15",
      status: "final",
      average: 89.2
    },
    {
      id: 2, 
      title: "Rapor Semester Genap 2022/2023",
      type: "semester",
      period: "Semester 2 - 2022/2023", 
      date: "2023-06-20",
      status: "final",
      average: 87.8
    },
    {
      id: 3,
      title: "Progress Report Mid Semester",
      type: "progress",
      period: "Mid Semester Ganjil 2023/2024",
      date: "2023-10-15", 
      status: "progress",
      average: 88.5
    }
  ];

  const achievements = [
    {
      title: "Juara 1 Olimpiade Matematika",
      category: "Prestasi Akademik",
      level: "Kabupaten",
      date: "2023-09-15",
      icon: Trophy
    },
    {
      title: "Peringkat 3 Kelas",
      category: "Prestasi Akademik", 
      level: "Sekolah",
      date: "2023-12-20",
      icon: Award
    },
    {
      title: "Best Student Award",
      category: "Karakter",
      level: "Sekolah", 
      date: "2023-11-10",
      icon: Star
    }
  ];

  const getGradeColor = (grade: number, kkm: number) => {
    if (grade >= 90) return "text-green-600 bg-green-50";
    if (grade >= kkm) return "text-blue-600 bg-blue-50";
    return "text-red-600 bg-red-50";
  };

  const getPredicateColor = (predicate: string) => {
    if (predicate.startsWith('A')) return "bg-green-100 text-green-800";
    if (predicate.startsWith('B')) return "bg-blue-100 text-blue-800";
    if (predicate.startsWith('C')) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const calculateAverage = () => {
    const total = subjects.reduce((sum, subject) => sum + subject.grades.final, 0);
    return (total / subjects.length).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-emerald-600" />
            Nilai & Rapor
          </h1>
          <p className="text-gray-600 mt-1">Lihat nilai dan rapor akademik Anda</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Tahun Ajaran 2023/2024
        </Badge>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rata-rata</p>
                <p className="text-xl font-bold text-emerald-600">{calculateAverage()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Mata Pelajaran</p>
                <p className="text-xl font-bold text-blue-600">{subjects.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Peringkat Kelas</p>
                <p className="text-xl font-bold text-green-600">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Prestasi</p>
                <p className="text-xl font-bold text-yellow-600">{achievements.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="grades" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="grades">Nilai Semester</TabsTrigger>
          <TabsTrigger value="reports">Rapor</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Prestasi</TabsTrigger>
        </TabsList>

        {/* Grades Tab */}
        <TabsContent value="grades" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Nilai Semester Ganjil 2023/2024</CardTitle>
                  <CardDescription>
                    Detail nilai untuk setiap mata pelajaran
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Mata Pelajaran</th>
                      <th className="text-left py-3 px-2">Guru</th>
                      <th className="text-center py-3 px-2">Tugas</th>
                      <th className="text-center py-3 px-2">Ulangan</th>
                      <th className="text-center py-3 px-2">UTS</th>
                      <th className="text-center py-3 px-2">UAS</th>
                      <th className="text-center py-3 px-2">Nilai Akhir</th>
                      <th className="text-center py-3 px-2">Predikat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2">
                          <div>
                            <p className="font-medium">{subject.name}</p>
                            <p className="text-sm text-gray-500">{subject.code}</p>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-sm">{subject.teacher}</td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${getGradeColor(Math.round(subject.grades.tugas.reduce((a, b) => a + b) / subject.grades.tugas.length), subject.kkm)}`}>
                            {Math.round(subject.grades.tugas.reduce((a, b) => a + b) / subject.grades.tugas.length)}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${getGradeColor(Math.round(subject.grades.ulangan.reduce((a, b) => a + b) / subject.grades.ulangan.length), subject.kkm)}`}>
                            {Math.round(subject.grades.ulangan.reduce((a, b) => a + b) / subject.grades.ulangan.length)}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${getGradeColor(subject.grades.uts, subject.kkm)}`}>
                            {subject.grades.uts}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${getGradeColor(subject.grades.uas, subject.kkm)}`}>
                            {subject.grades.uas}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-3 py-1 rounded font-medium ${getGradeColor(subject.grades.final, subject.kkm)}`}>
                            {subject.grades.final}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <Badge className={getPredicateColor(subject.predicate)}>
                            {subject.predicate}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rapor & Dokumen</CardTitle>
              <CardDescription>
                Download rapor dan dokumen nilai resmi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{report.title}</h3>
                        <p className="text-sm text-gray-600">{report.period}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <Badge variant={report.status === 'final' ? 'default' : 'secondary'}>
                            {report.status === 'final' ? 'Final' : 'Progress'}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            Rata-rata: {report.average}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Lihat
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Progress Akademik
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjects.slice(0, 4).map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{subject.name}</span>
                      <span className="font-medium">{subject.grades.final}%</span>
                    </div>
                    <Progress value={subject.grades.final} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Target vs Pencapaian</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-emerald-600">{calculateAverage()}</span>
                    </div>
                    <p className="text-sm text-gray-600">Rata-rata Saat Ini</p>
                    <p className="text-lg font-semibold">Target: 85.0</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Target Tercapai!
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Prestasi & Penghargaan
              </CardTitle>
              <CardDescription>
                Capaian dan prestasi akademik maupun non-akademik
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{achievement.title}</h3>
                          <p className="text-xs text-gray-600 mt-1">{achievement.category}</p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="outline" className="text-xs">
                              {achievement.level}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {new Date(achievement.date).toLocaleDateString('id-ID')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GradesPage;