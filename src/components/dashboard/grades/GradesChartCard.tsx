
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { Award, BookOpen } from 'lucide-react';

const GradesChartCard = () => {
  const gradeDistributionData = [
    { grade: 'A', count: 8, percentage: 40 },
    { grade: 'B', count: 6, percentage: 30 },
    { grade: 'C', count: 4, percentage: 20 },
    { grade: 'D', count: 2, percentage: 10 }
  ];

  const topSubjectsData = [
    { subject: 'Matematika', nilai: 95 },
    { subject: 'B. Inggris', nilai: 92 },
    { subject: 'PKn', nilai: 90 },
    { subject: 'B. Indonesia', nilai: 88 },
    { subject: 'IPA', nilai: 85 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  const chartConfig = {
    nilai: {
      label: "Nilai",
      color: "#3b82f6",
    },
    count: {
      label: "Jumlah",
      color: "#10b981",
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Grade Distribution Chart - Mobile First */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
            <Award className="w-5 h-5 text-blue-600" />
            Distribusi Nilai
          </CardTitle>
          <CardDescription className="text-sm">
            Sebaran nilai berdasarkan grade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Bar Chart */}
            <div className="order-2 lg:order-1">
              <ChartContainer config={chartConfig} className="h-[250px] md:h-[300px]">
                <BarChart data={gradeDistributionData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="grade" 
                    tick={{ fontSize: 12 }}
                    tickLine={{ stroke: '#666' }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickLine={{ stroke: '#666' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="count" 
                    fill="#3b82f6" 
                    radius={[4, 4, 0, 0]}
                    maxBarSize={60}
                  />
                </BarChart>
              </ChartContainer>
            </div>
            
            {/* Pie Chart */}
            <div className="order-1 lg:order-2">
              <ChartContainer config={chartConfig} className="h-[250px] md:h-[300px]">
                <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <Pie
                    data={gradeDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={2}
                    dataKey="count"
                    label={({ grade, percentage }) => `${grade}: ${percentage}%`}
                    labelLine={false}
                    fontSize={12}
                  >
                    {gradeDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Subjects Chart - Mobile Responsive */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
            <BookOpen className="w-5 h-5 text-green-600" />
            Top 5 Mata Pelajaran
          </CardTitle>
          <CardDescription className="text-sm">
            Mata pelajaran dengan nilai tertinggi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] md:h-[350px]">
            <BarChart 
              data={topSubjectsData} 
              layout="horizontal"
              margin={{ top: 20, right: 30, bottom: 20, left: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                domain={[0, 100]} 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#666' }}
              />
              <YAxis 
                dataKey="subject" 
                type="category" 
                width={50}
                tick={{ fontSize: 10 }}
                tickLine={{ stroke: '#666' }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar 
                dataKey="nilai" 
                fill="#10b981" 
                radius={[0, 4, 4, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default GradesChartCard;
