
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User } from 'lucide-react';

const ScheduleCard = () => {
  const todaySchedule = [
    {
      time: '07:30 - 08:15',
      subject: 'Matematika',
      teacher: 'Pak Budi Santoso',
      room: 'Lab Komputer',
      status: 'ongoing'
    },
    {
      time: '08:15 - 09:00',
      subject: 'Bahasa Indonesia',
      teacher: 'Bu Siti Aminah',
      room: 'Ruang XI-2',
      status: 'upcoming'
    },
    {
      time: '09:15 - 10:00',
      subject: 'Fisika',
      teacher: 'Pak Ahmad Yusuf',
      room: 'Lab IPA',
      status: 'upcoming'
    },
    {
      time: '10:00 - 10:45',
      subject: 'Bahasa Inggris',
      teacher: 'Miss Sarah',
      room: 'Ruang XI-2',
      status: 'upcoming'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ongoing':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Berlangsung</Badge>;
      case 'upcoming':
        return <Badge variant="outline">Mendatang</Badge>;
      default:
        return <Badge variant="secondary">Selesai</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-600" />
          Jadwal Hari Ini
        </CardTitle>
        <CardDescription>
          Kamis, 15 Juni 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todaySchedule.map((schedule, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border transition-colors ${
                schedule.status === 'ongoing' 
                  ? 'bg-emerald-50 border-emerald-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{schedule.subject}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {schedule.time}
                  </p>
                </div>
                {getStatusBadge(schedule.status)}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {schedule.teacher}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {schedule.room}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-center text-gray-500">
            Total 8 mata pelajaran hari ini
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
