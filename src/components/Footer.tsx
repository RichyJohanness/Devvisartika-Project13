import { Star, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Newsletter Section - Half embedded */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-6">
        <div className="form-elegant bg-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Bergabunglah dengan Komunitas
            </h3>
            <p className="text-muted-foreground mb-6">
              Dapatkan update terbaru tentang program pendidikan dan riset inklusif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="form-input flex-1"
              />
              <Button className="btn-hero">
                Daftar Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-8 w-8 text-accent star-float" />
                <span className="text-2xl font-bold">Devvisartika Movement</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Platform edukasi dan pendampingan inklusif yang meneladani semangat 
                Dewi Sartika dalam mewujudkan keadilan sosial dan kesetaraan pendidikan.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Layanan Utama</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="/education" className="hover:text-accent transition-colors">Education</a></li>
                <li><a href="/riset-konsultasi" className="hover:text-accent transition-colors">Riset & Konsultasi</a></li>
                <li><a href="/jurnal" className="hover:text-accent transition-colors">Jurnal & Translation</a></li>
                <li><a href="/penerbitan" className="hover:text-accent transition-colors">Penerbitan</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@devvisartika.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+62 xxx xxxx xxxx</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Devvisartika Movement. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;