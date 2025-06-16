
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp } from 'lucide-react';

const GradesChartCard = () => {
  const progressData = [
    { month: 'Jan', nilai: 82, target: 85 },
    { month: 'Feb', nilai: 85, target: 85 },
    { month: 'Mar', nilai: 83, target: 85 },
    { month: 'Apr', nilai: 87, target: 85 },
    { month: 'Mei', nilai: 89, target: 85 },
    { month: 'Jun', nilai: 87, target: 85 }
  ];

  const subjectData = [
    { subject: 'Matematika', nilai: 95, kkm: 75 },
    { subject: 'B. Indonesia', nilai: 88, kkm: 75 },
    { subject: 'B. Inggris', nilai: 92, kkm: 75 },
    { subject: 'IPA', nilai: 85, kkm: 75 },
    { subject: 'IPS', nilai: 78, kkm: 75 },
    { subject: 'PKn', nilai: 90, kkm: 75 }
  ];

  const chartConfig = {
    nilai: {
      label: "Nilai",
      color: "#3b82f6",
    },
    target: {
      label: "Target",
      color: "#ef4444",
    },
    kkm: {
      label: "KKM",
      color: "#f59e0b",
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Perkembangan Nilai
          </CardTitle>
          <CardDescription>
            Tren nilai rata-rata selama 6 bulan terakhir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[70, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="nilai" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#ef4444" 
                strokeDasharray="5 5"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Subject Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Perbandingan Nilai per Mata Pelajaran</CardTitle>
          <CardDescription>
            Nilai saat ini vs KKM yang ditetapkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={subjectData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="subject" type="category" width={80} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="nilai" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              <Bar dataKey="kkm" fill="#f59e0b" radius={[0, 2, 2, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default GradesChartCard;
