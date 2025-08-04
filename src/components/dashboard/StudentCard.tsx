import { QrCode, Download, Share2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudentCard = () => {
  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 right-0 w-16 h-16 bg-white rounded-full translate-x-8"></div>
      </div>

      <CardContent className="p-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-lg font-bold">SMA NEGERI 1 JAKARTA</h1>
          <p className="text-blue-100 text-sm">KARTU PELAJAR</p>
          <div className="w-16 h-0.5 bg-white mx-auto mt-2 opacity-60"></div>
        </div>

        {/* Student Photo and Info */}
        <div className="flex items-start gap-4 mb-6">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-24 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                AF
              </div>
            </div>
          </div>

          {/* Student Info */}
          <div className="flex-1 space-y-2">
            <div>
              <p className="text-xs text-blue-100 uppercase tracking-wide">Nama Lengkap</p>
              <p className="font-semibold text-sm">Ahmad Fauzi</p>
            </div>
            <div>
              <p className="text-xs text-blue-100 uppercase tracking-wide">NIS</p>
              <p className="font-mono text-sm font-semibold">2023110001</p>
            </div>
            <div>
              <p className="text-xs text-blue-100 uppercase tracking-wide">Kelas</p>
              <p className="font-semibold text-sm">XI IPA 2</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
          <div>
            <p className="text-blue-100 uppercase tracking-wide">NISN</p>
            <p className="font-mono font-semibold">0123456789</p>
          </div>
          <div>
            <p className="text-blue-100 uppercase tracking-wide">Tahun Masuk</p>
            <p className="font-semibold">2023</p>
          </div>
          <div>
            <p className="text-blue-100 uppercase tracking-wide">Status</p>
            <p className="font-semibold">Aktif</p>
          </div>
          <div>
            <p className="text-blue-100 uppercase tracking-wide">Berlaku</p>
            <p className="font-semibold">2023-2026</p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex items-center justify-between">
          <div className="text-xs">
            <p className="text-blue-100">Digital ID</p>
            <p className="font-mono text-xs">STD2023110001AF</p>
          </div>
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center">
              <QrCode className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* School Logo/Watermark */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xs">SMA</span>
          </div>
        </div>
      </CardContent>

      {/* Action Buttons */}
      <div className="px-6 pb-6">
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <Download className="w-4 h-4 mr-2" />
            Unduh
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Bagikan
          </Button>
        </div>
        <p className="text-center text-xs text-blue-100 mt-3">
          Kartu ini sah dengan validasi digital
        </p>
      </div>
    </Card>
  );
};

export default StudentCard;