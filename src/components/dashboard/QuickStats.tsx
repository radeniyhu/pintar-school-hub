
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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-3 lg:p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                {/* Mobile: Icon and value stacked */}
                <div className="flex items-center justify-between lg:flex-col lg:items-start lg:flex-1 mb-2 lg:mb-0">
                  <div className={`w-8 h-8 lg:w-12 lg:h-12 ${stat.bgColor} rounded-lg flex items-center justify-center lg:mb-3 order-2 lg:order-none lg:self-end`}>
                    <Icon className={`w-4 h-4 lg:w-6 lg:h-6 ${stat.color}`} />
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <p className="text-xs lg:text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-lg lg:text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
                
                {/* Change indicator - simplified for mobile */}
                <div className="flex items-center gap-1 lg:mt-2">
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
              
              {/* Progress bar for attendance - simplified for mobile */}
              {stat.title === 'Kehadiran' && (
                <div className="mt-3 lg:mt-4">
                  <Progress value={94} className="h-1.5 lg:h-2" />
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
