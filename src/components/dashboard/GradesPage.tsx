
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  TrendingUp, 
  Award, 
  FileText, 
  Download,
  ChartBar,
  Calendar,
  BookOpen,
  Target
} from 'lucide-react';
import K13GradesComponent from './grades/K13GradesComponent';
import MerdekaGradesComponent from './grades/MerdekaGradesComponent';
import CintaGradesComponent from './grades/CintaGradesComponent';
import GradesSummaryCard from './grades/GradesSummaryCard';
import GradesChartCard from './grades/GradesChartCard';

const GradesPage = () => {
  const [activeTab, setActiveTab] = useState('k13');

  const curriculumOptions = [
    {
      id: 'k13',
      label: 'Kurikulum 2013',
      description: 'Penilaian berdasarkan KI/KD dengan skala 1-100',
      badge: 'Aktif',
      badgeVariant: 'default' as const
    },
    {
      id: 'merdeka',
      label: 'Kurikulum Merdeka',
      description: 'Penilaian berbasis Capaian Pembelajaran (CP)',
      badge: 'Transisi',
      badgeVariant: 'secondary' as const
    },
    {
      id: 'cinta',
      label: 'Kurikulum Cinta',
      description: 'Penilaian holistik dengan pendekatan karakter',
      badge: 'Preview',
      badgeVariant: 'outline' as const
    }
  ];

  const handleDownloadReport = (type: string) => {
    alert(`Mengunduh laporan ${type}...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            Nilai & Rapor
          </h1>
          <p className="text-gray-600 mt-1">
            Pantau perkembangan akademik dan unduh rapor
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => handleDownloadReport('semester')} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Unduh Rapor
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <GradesSummaryCard />
      </div>

      {/* Charts Section */}
      <GradesChartCard />

      {/* Main Content with Curriculum Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Detail Nilai per Kurikulum
          </CardTitle>
          <CardDescription>
            Pilih kurikulum untuk melihat detail penilaian
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              {curriculumOptions.map((curriculum) => (
                <TabsTrigger 
                  key={curriculum.id} 
                  value={curriculum.id}
                  className="flex items-center gap-2"
                >
                  {curriculum.label}
                  <Badge variant={curriculum.badgeVariant} className="ml-1 text-xs">
                    {curriculum.badge}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-6">
              {curriculumOptions.map((curriculum) => (
                <div key={curriculum.id} className="mb-4">
                  {activeTab === curriculum.id && (
                    <div className="p-4 bg-gray-50 rounded-lg mb-4">
                      <h3 className="font-semibold text-gray-900">{curriculum.label}</h3>
                      <p className="text-sm text-gray-600">{curriculum.description}</p>
                    </div>
                  )}
                </div>
              ))}

              <TabsContent value="k13">
                <K13GradesComponent />
              </TabsContent>

              <TabsContent value="merdeka">
                <MerdekaGradesComponent />
              </TabsContent>

              <TabsContent value="cinta">
                <CintaGradesComponent />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Additional Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <ChartBar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Analisis Nilai</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lihat tren dan pola perkembangan nilai
            </p>
            <Button variant="outline" size="sm">
              Lihat Analisis
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Target Nilai</h3>
            <p className="text-sm text-gray-600 mb-4">
              Atur dan pantau target pencapaian
            </p>
            <Button variant="outline" size="sm">
              Atur Target
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Jadwal Ujian</h3>
            <p className="text-sm text-gray-600 mb-4">
              Lihat jadwal ujian dan penilaian
            </p>
            <Button variant="outline" size="sm">
              Lihat Jadwal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GradesPage;
