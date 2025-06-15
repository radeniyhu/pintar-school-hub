
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Award,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      title: 'Rata-rata Nilai',
      value: '85.4',
      icon: Award,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      change: '+2.5',
      changeType: 'positive'
    },
    {
      title: 'Kehadiran',
      value: '94%',
      icon: CheckCircle2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: 'Bulan ini',
      changeType: 'neutral'
    },
    {
      title: 'Tugas Pending',
      value: '3',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '2 deadline hari ini',
      changeType: 'warning'
    },
    {
      title: 'Mata Pelajaran',
      value: '12',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: 'Semester ini',
      changeType: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1">
                    {stat.changeType === 'positive' && (
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    )}
                    <span className={`text-xs ${
                      stat.changeType === 'positive' ? 'text-green-600' :
                      stat.changeType === 'warning' ? 'text-orange-600' :
                      'text-gray-500'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              
              {/* Progress bar for attendance */}
              {stat.title === 'Kehadiran' && (
                <div className="mt-4">
                  <Progress value={94} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickStats;
