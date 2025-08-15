
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BookOpen, GraduationCap, School } from 'lucide-react';

interface LoginFormProps {
  onLogin: (role: 'siswa' | 'guru' | 'admin' | 'wali' | 'owner' | 'client') => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app this would validate with backend
    // Demo login logic based on NISN
    if (nisn === 'owner123') {
      onLogin('owner');
    } else if (nisn === 'admin123') {
      onLogin('admin');
    } else if (nisn === 'client123') {
      onLogin('client');
    } else {
      onLogin('siswa');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg">
            <School className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            PINTAR
          </h1>
          <p className="text-gray-600 mt-2">Portal Informasi Terpadu</p>
          <p className="text-sm text-gray-500">Madrasah dan Sekolah</p>
        </div>

        {/* Login Card */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-gray-800">Masuk ke Akun Anda</CardTitle>
            <CardDescription>Gunakan NISN dan password untuk masuk</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nisn">NISN</Label>
                <Input
                  id="nisn"
                  type="text"
                  placeholder="Masukkan NISN"
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium shadow-lg"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Masuk
              </Button>
            </form>

            {/* Demo Accounts */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Demo Accounts:</p>
              <div className="space-y-1">
                <p className="text-xs text-gray-500"><strong>Owner:</strong> owner123 / password</p>
                <p className="text-xs text-gray-500"><strong>Admin:</strong> admin123 / password</p>
                <p className="text-xs text-gray-500"><strong>Client:</strong> client123 / password</p>
                <p className="text-xs text-gray-500"><strong>Siswa:</strong> 1234567890 / siswa123</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            © 2024 PINTAR - Portal Pendidikan Terpadu
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
