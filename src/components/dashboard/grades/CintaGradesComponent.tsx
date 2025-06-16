
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Lightbulb, Globe, Users, Leaf, Star } from 'lucide-react';

const CintaGradesComponent = () => {
  const cintaDimensions = [
    {
      dimension: 'Cinta kepada Tuhan',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      score: 92,
      level: 'Sangat Baik',
      description: 'Menunjukkan ketaqwaan dan spiritualitas yang mendalam',
      indicators: ['Konsisten beribadah', 'Akhlak mulia', 'Syukur dan tawakal']
    },
    {
      dimension: 'Cinta kepada Ilmu',
      icon: Lightbulb,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      score: 88,
      level: 'Baik',
      description: 'Memiliki rasa ingin tahu tinggi dan semangat belajar',
      indicators: ['Aktif bertanya', 'Gemar membaca', 'Berpikir kritis']
    },
    {
      dimension: 'Cinta kepada Bangsa',
      icon: Globe,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      score: 85,
      level: 'Baik',
      description: 'Menunjukkan nasionalisme dan cinta tanah air',
      indicators: ['Menghormati budaya', 'Bangga menjadi WNI', 'Toleransi']
    },
    {
      dimension: 'Cinta kepada Sesama',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      score: 90,
      level: 'Sangat Baik',
      description: 'Memiliki empati dan kepedulian sosial yang tinggi',
      indicators: ['Tolong menolong', 'Empati tinggi', 'Kerja sama']
    },
    {
      dimension: 'Cinta kepada Alam',
      icon: Leaf,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      score: 87,
      level: 'Baik',
      description: 'Peduli lingkungan dan kelestarian alam',
      indicators: ['Menjaga kebersihan', 'Hemat energi', 'Cinta lingkungan']
    },
    {
      dimension: 'Cinta kepada Diri',
      icon: Star,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      score: 89,
      level: 'Baik',
      description: 'Memiliki harga diri dan mampu mengembangkan potensi',
      indicators: ['Percaya diri', 'Mandiri', 'Bertanggung jawab']
    }
  ];

  const holisticProjects = [
    {
      title: 'Gerakan Cinta Lingkungan',
      theme: 'Sustainability Action',
      impact: 'Komunitas Sekolah',
      achievement: 'Outstanding',
      description: 'Memimpin kampanye pengurangan sampah plastik di sekolah'
    },
    {
      title: 'Bimbingan Belajar Anak Jalanan',
      theme: 'Social Compassion',
      impact: '25 Anak Terbantu',
      achievement: 'Excellent',
      description: 'Memberikan pendampingan belajar untuk anak-anak kurang mampu'
    },
    {
      title: 'Festival Budaya Nusantara',
      theme: 'Cultural Pride',
      impact: 'Sekolah & Masyarakat',
      achievement: 'Very Good',
      description: 'Mengorganisir pertunjukan seni dan budaya tradisional'
    }
  ];

  const characterStrengths = [
    { strength: 'Integritas', score: 95, description: 'Konsisten antara nilai dan tindakan' },
    { strength: 'Empati', score: 92, description: 'Mampu memahami perasaan orang lain' },
    { strength: 'Kreativitas', score: 88, description: 'Menghasilkan ide-ide inovatif' },
    { strength: 'Kepemimpinan', score: 85, description: 'Mampu memotivasi dan menginspirasi' },
    { strength: 'Resiliensi', score: 90, description: 'Bangkit kembali dari kesulitan' },
    { strength: 'Kolaborasi', score: 93, description: 'Bekerja sama dengan efektif' }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Sangat Baik': return 'bg-green-100 text-green-800';
      case 'Baik': return 'bg-blue-100 text-blue-800';
      case 'Cukup Baik': return 'bg-yellow-100 text-yellow-800';
      case 'Perlu Pengembangan': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAchievementColor = (achievement: string) => {
    switch (achievement) {
      case 'Outstanding': return 'bg-gold-100 text-yellow-800 border-yellow-300';
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Very Good': return 'bg-blue-100 text-blue-800';
      case 'Good': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Kurikulum Cinta Overview */}
      <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-800">
            <Heart className="w-6 h-6" />
            Kurikulum Cinta - Penilaian Holistik
          </CardTitle>
          <CardDescription className="text-pink-700">
            Pengembangan karakter melalui 6 dimensi cinta yang terintegrasi dengan akademik
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-center mb-2">Skor Holistik Keseluruhan</h4>
            <div className="text-center">
              <span className="text-4xl font-bold text-pink-600">89.2</span>
              <p className="text-sm text-gray-600">Dari 100 (Sangat Baik)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 6 Dimensions of Love */}
      <Card>
        <CardHeader>
          <CardTitle>6 Dimensi Cinta - Penilaian Karakter</CardTitle>
          <CardDescription>
            Evaluasi holistik berdasarkan dimensi-dimensi cinta dalam kehidupan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cintaDimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <div key={index} className={`border rounded-lg p-4 ${dimension.bgColor}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-full bg-white`}>
                      <Icon className={`w-5 h-5 ${dimension.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{dimension.dimension}</h4>
                      <Badge className={getLevelColor(dimension.level)}>
                        {dimension.level}
                      </Badge>
                    </div>
                    <div className="ml-auto text-2xl font-bold text-gray-700">
                      {dimension.score}
                    </div>
                  </div>
                  
                  <Progress value={dimension.score} className="mb-3" />
                  
                  <p className="text-sm text-gray-700 mb-3">{dimension.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {dimension.indicators.map((indicator, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {indicator}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Character Strengths */}
      <Card>
        <CardHeader>
          <CardTitle>Kekuatan Karakter</CardTitle>
          <CardDescription>
            Analisis mendalam terhadap kekuatan karakter yang dimiliki
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {characterStrengths.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{item.strength}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-xl font-bold text-blue-600">{item.score}</div>
                  <Progress value={item.score} className="w-16 h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Holistic Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Projek Holistik & Dampak Sosial</CardTitle>
          <CardDescription>
            Kontribusi nyata dalam mengembangkan masyarakat dan lingkungan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {holisticProjects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-sm text-blue-600 font-medium">{project.theme}</p>
                  </div>
                  <Badge className={getAchievementColor(project.achievement)}>
                    {project.achievement}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Dampak:</span>
                    <Badge variant="outline">{project.impact}</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Lihat Portfolio
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Future Development Plan */}
      <Card className="border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">Rencana Pengembangan Diri</CardTitle>
          <CardDescription>
            Rekomendasi untuk pengembangan karakter dan potensi di masa depan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Area Pengembangan</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Mengembangkan jiwa kepemimpinan dalam organisasi</li>
                <li>• Meningkatkan keterampilan komunikasi publik</li>
                <li>• Memperdalam pemahaman teknologi berkelanjutan</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Kekuatan untuk Dipertahankan</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Konsistensi dalam beribadah dan akhlak</li>
                <li>• Kemampuan berempati dan membantu sesama</li>
                <li>• Kreativitas dalam menyelesaikan masalah</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CintaGradesComponent;
