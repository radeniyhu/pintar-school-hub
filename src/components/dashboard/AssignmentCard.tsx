import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

interface AssignmentCardProps {
  onNavigateToAssignments?: () => void;
}

const AssignmentCard = ({ onNavigateToAssignments }: AssignmentCardProps) => {
  const assignments = [
    {
      title: 'Laporan Praktikum Fisika',
      subject: 'Fisika',
      dueDate: '2024-06-16',
      dueTime: '23:59',
      status: 'pending',
      priority: 'high'
    },
    {
      title: 'Essay Bahasa Indonesia',
      subject: 'Bahasa Indonesia',
      dueDate: '2024-06-18',
      dueTime: '14:00',
      status: 'pending',
      priority: 'medium'
    },
    {
      title: 'Soal Matematika Bab 5',
      subject: 'Matematika',
      dueDate: '2024-06-20',
      dueTime: '16:00',
      status: 'completed',
      priority: 'low'
    }
  ];

  const getStatusInfo = (status: string, priority: string) => {
    if (status === 'completed') {
      return {
        badge: <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Selesai</Badge>,
        icon: <CheckCircle2 className="w-4 h-4 text-green-600" />
      };
    }
    
    if (priority === 'high') {
      return {
        badge: <Badge variant="destructive">Urgent</Badge>,
        icon: <AlertCircle className="w-4 h-4 text-red-600" />
      };
    }
    
    return {
      badge: <Badge variant="outline">Pending</Badge>,
      icon: <FileText className="w-4 h-4 text-gray-600" />
    };
  };

  const formatDueDate = (dateString: string, timeString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return `Hari ini, ${timeString}`;
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return `Besok, ${timeString}`;
    } else {
      return `${date.toLocaleDateString('id-ID')}, ${timeString}`;
    }
  };

  const handleAssignmentClick = (assignmentTitle: string) => {
    alert(`Membuka detail tugas: ${assignmentTitle}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Tugas & Penilaian
        </CardTitle>
        <CardDescription>
          Tugas yang perlu diselesaikan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((assignment, index) => {
            const statusInfo = getStatusInfo(assignment.status, assignment.priority);
            return (
              <div 
                key={index}
                className={`p-4 rounded-lg border transition-colors ${
                  assignment.priority === 'high' && assignment.status === 'pending'
                    ? 'bg-red-50 border-red-200' 
                    : assignment.status === 'completed'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-start gap-2">
                    {statusInfo.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">{assignment.subject}</p>
                    </div>
                  </div>
                  {statusInfo.badge}
                </div>
                
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <Calendar className="w-3 h-3" />
                  Deadline: {formatDueDate(assignment.dueDate, assignment.dueTime)}
                </div>
                
                {assignment.status === 'pending' && (
                  <Button 
                    size="sm" 
                    variant={assignment.priority === 'high' ? 'default' : 'outline'}
                    className="w-full"
                    onClick={() => handleAssignmentClick(assignment.title)}
                  >
                    Kerjakan Tugas
                  </Button>
                )}
                
                {assignment.status === 'completed' && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleAssignmentClick(assignment.title)}
                  >
                    Lihat Detail
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={onNavigateToAssignments}
          >
            Lihat Semua Tugas
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentCard;
