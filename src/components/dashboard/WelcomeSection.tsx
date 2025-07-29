import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, CreditCard, User } from 'lucide-react';

interface WelcomeSectionProps {
  userName: string;
  balance: number;
  onTopUpClick: () => void;
}

const WelcomeSection = ({ userName, balance, onTopUpClick }: WelcomeSectionProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white shadow-xl">
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* User Welcome */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-blue-100 text-sm font-medium">Selamat datang,</p>
              <h2 className="text-xl font-bold text-white">{userName}</h2>
            </div>
          </div>

          {/* Balance and Top Up */}
          <div className="flex items-center gap-4">
            {/* Balance Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
              <div className="flex items-center gap-2 mb-1">
                <Wallet className="w-4 h-4 text-green-300" />
                <span className="text-xs font-medium text-blue-100">Saldo Anda</span>
              </div>
              <p className="text-lg font-bold text-white">{formatCurrency(balance)}</p>
            </div>

            {/* Top Up Button */}
            <Button 
              variant="secondary"
              size="sm"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
              onClick={onTopUpClick}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Top Up
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeSection;