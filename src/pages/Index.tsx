
import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import StudentDashboard from '../components/dashboard/StudentDashboard';
import OwnerDashboard from '../components/admin/OwnerDashboard';
import AdminDashboard from '../components/admin/AdminDashboard';
import ClientDashboard from '../components/admin/ClientDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'siswa' | 'guru' | 'admin' | 'wali' | 'owner' | 'client'>('siswa');

  const handleLogin = (role: 'siswa' | 'guru' | 'admin' | 'wali' | 'owner' | 'client') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  switch (userRole) {
    case 'owner':
      return <OwnerDashboard onLogout={handleLogout} />;
    case 'admin':
      return <AdminDashboard onLogout={handleLogout} />;
    case 'client':
      return <ClientDashboard onLogout={handleLogout} />;
    default:
      return <StudentDashboard onLogout={handleLogout} />;
  }
};

export default Index;
