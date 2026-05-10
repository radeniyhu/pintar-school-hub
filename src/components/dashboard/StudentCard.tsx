import { QrCode, Download, Share2, GraduationCap, ShieldCheck, Calendar, MapPin, Phone } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const StudentCard = () => {
  return (
    <div className="max-w-md mx-auto space-y-4">
      {/* Card */}
      <div className="relative [perspective:1000px]">
        <Card className="relative overflow-hidden rounded-2xl border-0 shadow-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 blur-3xl" />

          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top bar: Logo + School */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Republik Indonesia</p>
                <p className="text-sm font-semibold">SMA Negeri 1 Jakarta</p>
              </div>
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
              Aktif
            </Badge>
          </div>

          {/* Title */}
          <div className="relative z-10 px-6 mt-5">
            <p className="text-[11px] tracking-[0.35em] text-white/50 uppercase">Kartu Tanda Pelajar</p>
            <div className="mt-1 h-px bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
          </div>

          {/* Photo + identity */}
          <div className="relative z-10 px-6 mt-5 flex gap-4">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 blur-sm opacity-70" />
              <div className="relative w-24 h-28 rounded-2xl overflow-hidden ring-1 ring-white/20 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-3xl font-bold tracking-tight">AF</span>
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900 flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-slate-900" />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">Nama</p>
                <p className="text-base font-semibold leading-tight truncate">Ahmad Fauzi</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Kelas</p>
                  <p className="text-sm font-medium">XI IPA 2</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Jurusan</p>
                  <p className="text-sm font-medium">IPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="relative z-10 px-6 mt-5">
            <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">NIS</p>
                <p className="font-mono text-sm font-semibold">2023110001</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">NISN</p>
                <p className="font-mono text-sm font-semibold">0123456789</p>
              </div>
              <div className="flex items-start gap-1.5">
                <Calendar className="w-3.5 h-3.5 mt-0.5 text-white/50" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Berlaku</p>
                  <p className="text-sm font-medium">2023 — 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <Phone className="w-3.5 h-3.5 mt-0.5 text-white/50" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Kontak</p>
                  <p className="text-sm font-medium">0812-3456-789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with QR */}
          <div className="relative z-10 px-6 mt-5 pb-6 flex items-end justify-between">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 text-white/50" />
              <div className="text-[11px] leading-tight text-white/70 max-w-[180px]">
                Jl. Budi Utomo No.7, Jakarta Pusat, DKI Jakarta 10710
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-400/40 to-purple-500/40 blur-md" />
              <div className="relative w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <QrCode className="w-12 h-12 text-slate-900" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Chip-like accent bar */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-6 rounded-md bg-gradient-to-br from-yellow-300/80 to-amber-500/80 opacity-0" />
        </Card>
      </div>

      {/* Digital ID strip */}
      <div className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 shadow-sm">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Digital ID</p>
          <p className="font-mono text-sm font-semibold">STD-2023110001-AF</p>
        </div>
        <Badge variant="secondary" className="gap-1">
          <ShieldCheck className="w-3 h-3" />
          Terverifikasi
        </Badge>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Unduh Kartu
        </Button>
        <Button className="w-full">
          <Share2 className="w-4 h-4 mr-2" />
          Bagikan
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Kartu ini sah dengan validasi digital melalui sistem sekolah
      </p>
    </div>
  );
};

export default StudentCard;
