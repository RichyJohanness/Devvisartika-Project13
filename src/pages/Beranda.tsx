import { ArrowRight, BookOpen, Users, Heart, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-education.jpg";
import starsPattern from "@/assets/stars-pattern.jpg";

const Beranda = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Pendidikan Inklusif",
      description: "Program edukasi yang mengutamakan keberagaman dan kesetaraan untuk semua"
    },
    {
      icon: Users,
      title: "Komunitas Suportif", 
      description: "Jejaring yang aman dan partisipatif untuk berbagi pengalaman dan pengetahuan"
    },
    {
      icon: Heart,
      title: "Pendampingan Holistik",
      description: "Layanan konsultasi dan mentoring yang memahami kebutuhan individual"
    }
  ];

  const services = [
    {
      title: "Education & Training",
      description: "Program pelatihan dan modul interaktif dengan perspektif interseksional",
      link: "/education"
    },
    {
      title: "Riset & Konsultasi",
      description: "Pendampingan riset akademik dan konsultasi metodologi penelitian",
      link: "/riset-konsultasi"
    },
    {
      title: "Jurnal & Translation",
      description: "Layanan proofreading, editing, dan penerjemahan dokumen akademik",
      link: "/jurnal"
    },
    {
      title: "Penerbitan",
      description: "Dukungan publikasi buku dan jurnal dengan standar akademik tinggi",
      link: "/penerbitan"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content max-w-4xl mx-auto">
          <div className="mb-6">
            <Star className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Menginspirasi Perubahan Melalui 
            <span className="block text-accent">Pendidikan Inklusif</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Platform edukasi yang meneladani semangat Dewi Sartika dalam mewujudkan 
            keadilan sosial dan kesetaraan melalui pendidikan berkualitas untuk semua
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Gabung Komunitas
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Nilai-Nilai Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Berdasarkan semangat perjuangan Dewi Sartika, kami berkomitmen 
              untuk menciptakan ruang pendidikan yang inklusif dan berkeadilan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-elegant p-8 text-center group">
                <feature.icon className="h-16 w-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan <span className="text-gradient-accent">Unggulan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan pendidikan, riset, dan publikasi 
              dengan pendekatan yang inklusif dan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant group cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" className="btn-outline-accent">
                    Pelajari Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${starsPattern})`, backgroundRepeat: 'repeat' }}
        ></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Bergabung dengan Gerakan Perubahan?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Mari bersama-sama membangun masa depan pendidikan yang lebih inklusif 
            dan berkeadilan untuk semua
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Mulai Perjalanan Anda
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Peserta Program</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Riset Didampingi</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-muted-foreground">Dokumen Diterbitkan</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Mitra Kolaborasi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;