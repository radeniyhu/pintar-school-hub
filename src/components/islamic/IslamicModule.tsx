
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Compass, 
  Clock, 
  BookOpen, 
  Heart, 
  MapPin,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  Navigation
} from 'lucide-react';

const IslamicModule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState('Maghrib');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const prayerTimes = [
    { name: 'Subuh', time: '04:32', icon: Sunrise, passed: true },
    { name: 'Dhuha', time: '06:15', icon: Sun, passed: true },
    { name: 'Dzuhur', time: '12:05', icon: Sun, passed: true },
    { name: 'Ashar', time: '15:25', icon: Sun, passed: false },
    { name: 'Maghrib', time: '18:12', icon: Sunset, passed: false },
    { name: 'Isya', time: '19:32', icon: Moon, passed: false }
  ];

  const dailyDuas = [
    {
      title: 'Doa Sebelum Belajar',
      arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
      latin: 'Rabbi syrah lii shadrii wa yassir lii amrii',
      meaning: 'Ya Allah, lapangkanlah dadaku dan mudahkanlah urusanku'
    },
    {
      title: 'Doa Sesudah Belajar',
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ',
      latin: 'Allahumma inni a\'uudzu bika min \'ilmin laa yanfa\'',
      meaning: 'Ya Allah, aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat'
    }
  ];

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Current Time & Location */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-700 mb-2">
              {formatTime(currentTime)}
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="mt-4">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                Waktu sholat berikutnya: {nextPrayer}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Prayer Times */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              Jadwal Sholat Hari Ini
            </CardTitle>
            <CardDescription>
              Kamis, 15 Juni 2024 • 9 Dzulhijjah 1445 H
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {prayerTimes.map((prayer, index) => {
                const Icon = prayer.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      prayer.name === nextPrayer 
                        ? 'bg-emerald-50 border border-emerald-200' 
                        : prayer.passed 
                        ? 'bg-gray-50' 
                        : 'bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${
                        prayer.name === nextPrayer 
                          ? 'text-emerald-600' 
                          : prayer.passed 
                          ? 'text-gray-400' 
                          : 'text-blue-600'
                      }`} />
                      <span className={`font-medium ${
                        prayer.passed ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {prayer.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono ${
                        prayer.passed ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {prayer.time}
                      </span>
                      {prayer.name === nextPrayer && (
                        <Badge variant="outline" className="text-xs">
                          Berikutnya
                        </Badge>
                      )}
                      {prayer.passed && (
                        <Badge variant="secondary" className="text-xs">
                          Selesai
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Qibla Direction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-600" />
              Arah Kiblat
            </CardTitle>
            <CardDescription>
              Dari lokasi: Jakarta, Indonesia
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <div className="w-full h-full border-4 border-gray-200 rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Navigation className="w-8 h-8 text-green-600 transform rotate-[294deg]" />
                </div>
                {/* Compass markings */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <span className="text-xs font-bold">U</span>
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
                  <span className="text-xs font-bold">T</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <span className="text-xs font-bold">S</span>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                  <span className="text-xs font-bold">B</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">294°</p>
              <p className="text-sm text-gray-600">Barat Laut</p>
              <Button variant="outline" size="sm" className="mt-2">
                <MapPin className="w-4 h-4 mr-2" />
                Buka di Maps
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Duas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-600" />
            Doa Harian Siswa
          </CardTitle>
          <CardDescription>
            Doa-doa yang dianjurkan untuk aktivitas belajar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {dailyDuas.map((dua, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-3">{dua.title}</h4>
                <div className="space-y-3">
                  <div className="text-right">
                    <p className="text-xl text-gray-800 font-arabic leading-relaxed">
                      {dua.arabic}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 italic">{dua.latin}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-gray-600">{dua.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Lihat Doa Lainnya
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IslamicModule;
