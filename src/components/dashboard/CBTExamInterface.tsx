import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  BookmarkCheck,
  AlertCircle,
  CheckCircle2,
  Eye,
  FileText,
  Send,
  RotateCcw,
  Calculator,
  ArrowLeft
} from 'lucide-react';

interface Question {
  id: string;
  number: number;
  text: string;
  type: 'multiple-choice' | 'essay' | 'true-false';
  options?: string[];
  correctAnswer?: string;
  points: number;
  image?: string;
}

interface CBTExamInterfaceProps {
  examId: string;
  onExit: () => void;
}

const CBTExamInterface = ({ examId, onExit }: CBTExamInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(5400); // 90 minutes in seconds
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showReview, setShowReview] = useState(false);

  // Mock exam data
  const examData = {
    id: examId,
    title: 'UTS Matematika',
    subject: 'Matematika',
    duration: 90,
    totalQuestions: 25
  };

  const questions: Question[] = [
    {
      id: 'q1',
      number: 1,
      text: 'Jika f(x) = 2x² + 3x - 1, maka nilai f(2) adalah...',
      type: 'multiple-choice',
      options: ['9', '11', '13', '15', '17'],
      points: 4
    },
    {
      id: 'q2',
      number: 2,
      text: 'Tentukan turunan dari fungsi f(x) = 3x³ - 2x² + x - 5',
      type: 'multiple-choice',
      options: ['9x² - 4x + 1', '9x² - 4x - 1', '6x² - 4x + 1', '6x² - 2x + 1', '3x² - 2x + 1'],
      points: 4
    },
    {
      id: 'q3',
      number: 3,
      text: 'Integral dari ∫(2x + 3)dx adalah...',
      type: 'multiple-choice',
      options: ['x² + 3x + C', 'x² + 6x + C', '2x² + 3x + C', 'x² + 3x', '2x + 3 + C'],
      points: 4
    },
    {
      id: 'q4',
      number: 4,
      text: 'Jelaskan konsep limit fungsi dan berikan contoh perhitungannya!',
      type: 'essay',
      points: 8
    },
    {
      id: 'q5',
      number: 5,
      text: 'Pernyataan "Setiap bilangan prima lebih besar dari 2 adalah bilangan ganjil" adalah benar.',
      type: 'true-false',
      options: ['Benar', 'Salah'],
      points: 2
    }
  ];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Auto submit when time runs out
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const toggleFlag = (questionNumber: number) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionNumber)) {
        newSet.delete(questionNumber);
      } else {
        newSet.add(questionNumber);
      }
      return newSet;
    });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    alert(`Ujian telah selesai!\n\nJawaban yang telah disimpan: ${Object.keys(answers).length} dari ${questions.length} soal\n\nAnda akan diarahkan ke halaman hasil...`);
    onExit();
  };

  const getQuestionStatus = (questionNumber: number) => {
    const questionId = questions[questionNumber - 1]?.id;
    const isAnswered = answers[questionId];
    const isFlagged = flaggedQuestions.has(questionNumber);
    const isCurrent = currentQuestion === questionNumber - 1;

    if (isCurrent) return 'current';
    if (isAnswered && isFlagged) return 'answered-flagged';
    if (isAnswered) return 'answered';
    if (isFlagged) return 'flagged';
    return 'unanswered';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-blue-600 text-white border-blue-600';
      case 'answered':
        return 'bg-green-600 text-white border-green-600';
      case 'answered-flagged':
        return 'bg-yellow-600 text-white border-yellow-600';
      case 'flagged':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200';
    }
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercentage = (answeredCount / questions.length) * 100;

  const currentQ = questions[currentQuestion];

  if (showReview) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Review Jawaban</span>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowReview(false)}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali
                  </Button>
                  <Button onClick={() => setShowConfirmSubmit(true)}>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Ujian
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Ringkasan Jawaban</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                      <span>Soal Terjawab</span>
                      <span className="font-semibold">{answeredCount}/{questions.length}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-yellow-50 rounded-lg">
                      <span>Soal Ditandai</span>
                      <span className="font-semibold">{flaggedQuestions.size}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                      <span>Belum Terjawab</span>
                      <span className="font-semibold">{questions.length - answeredCount}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Navigasi Soal</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((_, index) => {
                      const status = getQuestionStatus(index + 1);
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className={getStatusColor(status)}
                          onClick={() => {
                            setShowReview(false);
                            goToQuestion(index);
                          }}
                        >
                          {index + 1}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Timer and Controls */}
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={onExit}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Keluar
            </Button>
            <div>
              <h1 className="font-semibold">{examData.title}</h1>
              <p className="text-sm text-gray-600">{examData.subject}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-red-50 rounded-lg">
              <Clock className="w-4 h-4 text-red-600" />
              <span className="font-mono font-semibold text-red-600">
                {formatTime(timeLeft)}
              </span>
            </div>
            <Badge variant="outline">
              {answeredCount}/{questions.length} Terjawab
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    Soal {currentQ.number}
                    <Badge variant="outline">{currentQ.points} poin</Badge>
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFlag(currentQ.number)}
                    className={flaggedQuestions.has(currentQ.number) ? 'text-red-600' : ''}
                  >
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question Text */}
                <div className="text-lg leading-relaxed">
                  {currentQ.text}
                </div>

                {/* Answer Options */}
                {currentQ.type === 'multiple-choice' && (
                  <div className="space-y-3">
                    {currentQ.options?.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name={`question-${currentQ.id}`}
                          value={option}
                          checked={answers[currentQ.id] === option}
                          onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="font-medium text-gray-700">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQ.type === 'true-false' && (
                  <div className="space-y-3">
                    {currentQ.options?.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name={`question-${currentQ.id}`}
                          value={option}
                          checked={answers[currentQ.id] === option}
                          onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQ.type === 'essay' && (
                  <div>
                    <Textarea
                      placeholder="Tuliskan jawaban Anda di sini..."
                      value={answers[currentQ.id] || ''}
                      onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                      className="min-h-[200px]"
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Sebelumnya
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setShowReview(true)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Review
                    </Button>
                    {currentQuestion === questions.length - 1 ? (
                      <Button onClick={() => setShowConfirmSubmit(true)}>
                        <Send className="w-4 h-4 mr-2" />
                        Submit
                      </Button>
                    ) : (
                      <Button onClick={nextQuestion}>
                        Selanjutnya
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Navigasi Soal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 mb-6">
                  {questions.map((_, index) => {
                    const status = getQuestionStatus(index + 1);
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`h-10 ${getStatusColor(status)}`}
                        onClick={() => goToQuestion(index)}
                      >
                        {index + 1}
                      </Button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>Sedang dikerjakan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <span>Sudah dijawab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                    <span>Dijawab & ditandai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                    <span>Ditandai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                    <span>Belum dijawab</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setShowReview(true)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Review Semua
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Konfirmasi Submit Ujian</h3>
              <p className="text-gray-600 mb-4">
                Apakah Anda yakin ingin mengumpulkan ujian? Jawaban yang sudah dikumpulkan tidak dapat diubah lagi.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Soal terjawab:</span>
                    <span className="font-semibold">{answeredCount}/{questions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sisa waktu:</span>
                    <span className="font-semibold">{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowConfirmSubmit(false)}
                >
                  Batal
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleSubmitExam}
                >
                  Ya, Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CBTExamInterface;