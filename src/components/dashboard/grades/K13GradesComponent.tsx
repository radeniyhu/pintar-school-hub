
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Eye, Download } from 'lucide-react';

const K13GradesComponent = () => {
  const k13Subjects = [
    {
      subject: 'Pendidikan Agama Islam',
      kkm: 75,
      pengetahuan: 88,
      keterampilan: 85,
      sikap: 'B',
      predikat: 'B',
      deskripsi: 'Menguasai materi dengan baik, perlu peningkatan dalam praktik ibadah'
    },
    {
      subject: 'Pendidikan Pancasila dan Kewarganegaraan',
      kkm: 75,
      pengetahuan: 90,
      keterampilan: 87,
      sikap: 'A',
      predikat: 'A',
      deskripsi: 'Sangat baik dalam memahami nilai-nilai Pancasila dan penerapannya'
    },
    {
      subject: 'Bahasa Indonesia',
      kkm: 75,
      pengetahuan: 85,
      keterampilan: 88,
      sikap: 'B',
      predikat: 'B',
      deskripsi: 'Kemampuan berbahasa baik, perlu peningkatan dalam menulis kreatif'
    },
    {
      subject: 'Matematika',
      kkm: 75,
      pengetahuan: 95,
      keterampilan: 92,
      sikap: 'A',
      predikat: 'A',
      deskripsi: 'Sangat unggul dalam pemahaman konsep dan pemecahan masalah matematika'
    },
    {
      subject: 'Sejarah Indonesia',
      kkm: 75,
      pengetahuan: 82,
      keterampilan: 80,
      sikap: 'B',
      predikat: 'B',
      deskripsi: 'Memahami kronologi sejarah dengan baik, perlu peningkatan analisis'
    },
    {
      subject: 'Bahasa Inggris',
      kkm: 75,
      pengetahuan: 92,
      keterampilan: 89,
      sikap: 'A',
      predikat: 'A',
      deskripsi: 'Kemampuan berbahasa Inggris sangat baik dalam semua aspek'
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-blue-100 text-blue-800';
      case 'C': return 'bg-yellow-100 text-yellow-800';
      case 'D': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number, kkm: number) => {
    if (score >= kkm + 10) return 'text-green-600 font-semibold';
    if (score >= kkm) return 'text-blue-600 font-medium';
    return 'text-red-600 font-medium';
  };

  return (
    <div className="space-y-6">
      {/* K13 Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Kurikulum 2013 - Penilaian Autentik
          </CardTitle>
          <CardDescription>
            Penilaian berdasarkan Kompetensi Inti (KI) dan Kompetensi Dasar (KD)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900">KI-1: Spiritual</h4>
              <p className="text-sm text-blue-700">Sikap spiritual dan ketaqwaan</p>
              <Badge className="mt-2 bg-blue-600">Baik (B)</Badge>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900">KI-2: Sosial</h4>
              <p className="text-sm text-green-700">Sikap sosial dan karakter</p>
              <Badge className="mt-2 bg-green-600">Sangat Baik (A)</Badge>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900">KI-3 & KI-4</h4>
              <p className="text-sm text-purple-700">Pengetahuan & Keterampilan</p>
              <Badge className="mt-2 bg-purple-600">Rata-rata: 87.8</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detail Nilai per Mata Pelajaran</CardTitle>
          <CardDescription>
            Nilai pengetahuan, keterampilan, dan sikap berdasarkan K13
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mata Pelajaran</TableHead>
                  <TableHead className="text-center">KKM</TableHead>
                  <TableHead className="text-center">Pengetahuan</TableHead>
                  <TableHead className="text-center">Keterampilan</TableHead>
                  <TableHead className="text-center">Sikap</TableHead>
                  <TableHead className="text-center">Predikat</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {k13Subjects.map((subject, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{subject.subject}</TableCell>
                    <TableCell className="text-center">{subject.kkm}</TableCell>
                    <TableCell className={`text-center ${getScoreColor(subject.pengetahuan, subject.kkm)}`}>
                      {subject.pengetahuan}
                    </TableCell>
                    <TableCell className={`text-center ${getScoreColor(subject.keterampilan, subject.kkm)}`}>
                      {subject.keterampilan}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={getGradeColor(subject.sikap)}>
                        {subject.sikap}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={getGradeColor(subject.predikat)}>
                        {subject.predikat}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" className="mr-2">
                        <Eye className="w-3 h-3 mr-1" />
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes Description */}
      <Card>
        <CardHeader>
          <CardTitle>Deskripsi Capaian Pembelajaran</CardTitle>
          <CardDescription>
            Penjelasan detail pencapaian kompetensi per mata pelajaran
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {k13Subjects.map((subject, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{subject.subject}</h4>
                  <Badge className={getGradeColor(subject.predikat)}>
                    {subject.predikat}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{subject.deskripsi}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default K13GradesComponent;
