
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Award, BookOpen } from 'lucide-react';

const GradesSummaryCard = () => {
  const summaryData = [
    {
      title: 'Rata-rata Keseluruhan',
      value: '87.5',
      subtitle: 'Dari semua mata pelajaran',
      trend: 'up',
      trendValue: '+2.3',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Peringkat Kelas',
      value: '3',
      subtitle: 'Dari 32 siswa',
      trend: 'up',
      trendValue: '+1',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Mata Pelajaran Tertinggi',
      value: '95',
      subtitle: 'Matematika',
      trend: 'up',
      trendValue: '+5',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Perlu Perbaikan',
      value: '2',
      subtitle: 'Mata pelajaran',
      trend: 'down',
      trendValue: '-1',
      icon: TrendingDown,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <>
      {summaryData.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${item.bgColor}`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <Badge 
                  variant={item.trend === 'up' ? 'default' : 'destructive'}
                  className="text-xs"
                >
                  {item.trendValue}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {item.value}
                  </span>
                  {item.title.includes('Peringkat') && (
                    <span className="text-sm text-gray-500">/ 32</span>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  {item.title}
                </p>
                <p className="text-xs text-gray-600">
                  {item.subtitle}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default GradesSummaryCard;
