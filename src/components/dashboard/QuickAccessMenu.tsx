
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  badge: number | null;
  color: string;
  bgColor: string;
  hoverColor: string;
}

interface QuickAccessMenuProps {
  menuItems: MenuItem[];
  onMenuClick: (menuId: string) => void;
}

const QuickAccessMenu = ({ menuItems, onMenuClick }: QuickAccessMenuProps) => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onMenuClick(item.id)}
                className={`
                  group relative p-6 rounded-2xl border-2 border-transparent 
                  transition-all duration-300 ease-in-out transform
                  hover:scale-105 hover:shadow-xl hover:border-gray-200
                  ${item.bgColor} ${item.hoverColor}
                  focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-current
                  active:scale-95
                `}
              >
                {/* Badge for notifications */}
                {item.badge && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center text-xs font-bold animate-pulse shadow-lg"
                  >
                    {item.badge}
                  </Badge>
                )}
                
                {/* Icon Container */}
                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                  transition-all duration-300 group-hover:scale-110
                  bg-white shadow-md group-hover:shadow-lg
                  ${item.color}
                `}>
                  <Icon className="w-8 h-8" />
                </div>
                
                {/* Label */}
                <div className="text-center">
                  <p className={`
                    text-sm font-semibold transition-colors duration-200
                    ${item.color} group-hover:font-bold
                  `}>
                    {item.label}
                  </p>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            );
          })}
        </div>
        
        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            💡 <strong>Tips:</strong> Klik pada icon menu untuk mengakses fitur secara langsung
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAccessMenu;
