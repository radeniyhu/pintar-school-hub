
import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import StudentDashboard from '../components/dashboard/StudentDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'siswa' | 'guru' | 'admin' | 'wali'>('siswa');

  const handleLogin = (role: 'siswa' | 'guru' | 'admin' | 'wali') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <StudentDashboard onLogout={handleLogout} />;
};

export default Index;
