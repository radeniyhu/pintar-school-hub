import { Home, MessageCircle, Menu, Calendar, Newspaper } from 'lucide-react';

interface BottomNavItem {
  id: string;
  icon: any;
  label: string;
  color: string;
  activeColor: string;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const bottomNavItems: BottomNavItem[] = [
    {
      id: 'beranda',
      icon: Home,
      label: 'Beranda',
      color: 'text-blue-600',
      activeColor: 'bg-blue-600'
    },
    {
      id: 'livechat',
      icon: MessageCircle,
      label: 'Live Chat',
      color: 'text-green-600',
      activeColor: 'bg-green-600'
    },
    {
      id: 'menu',
      icon: Menu,
      label: 'Menu',
      color: 'text-purple-600',
      activeColor: 'bg-purple-600'
    },
    {
      id: 'kalender',
      icon: Calendar,
      label: 'Kalender',
      color: 'text-orange-600',
      activeColor: 'bg-orange-600'
    },
    {
      id: 'berita',
      icon: Newspaper,
      label: 'Berita',
      color: 'text-red-600',
      activeColor: 'bg-red-600'
    }
  ];

  const handleBottomNavClick = (tabId: string) => {
    if (tabId === 'livechat') {
      // Redirect to WhatsApp admin
      window.open('https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20butuh%20bantuan', '_blank');
      return;
    }
    onTabChange(tabId);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl z-50">
      <div className="flex items-center justify-around py-2 px-2">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleBottomNavClick(item.id)}
              className={`
                flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300
                ${isActive ? 'scale-110 transform' : 'hover:scale-105'}
              `}
            >
              <div className={`
                p-2.5 rounded-xl transition-all duration-300 shadow-lg
                ${isActive 
                  ? `${item.activeColor} text-white shadow-lg` 
                  : `${item.color} bg-gray-50 hover:bg-gray-100`
                }
              `}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`
                text-xs mt-1.5 font-medium transition-colors duration-300
                ${isActive ? item.color : 'text-gray-500'}
              `}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;