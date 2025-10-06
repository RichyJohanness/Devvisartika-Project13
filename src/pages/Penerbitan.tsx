import { useEffect } from "react";
import { Book, Sparkles, Users, Target, ArrowRight, CheckCircle, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Penerbitan = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const packages = [
    {
      name: "Basic Publishing",
      price: "Rp 5.000.000",
      description: "Paket dasar untuk publikasi buku pertama Anda",
      features: [
        "Editing & proofreading",
        "Layout profesional",
        "Cover design",
        "ISBN registration",
        "100 copies printed",
        "Digital distribution"
      ],
      recommended: false
    },
    {
      name: "Premium Publishing",
      price: "Rp 8.500.000",
      description: "Paket lengkap dengan marketing support",
      features: [
        "Semua fitur Basic",
        "Marketing consultation",
        "Social media kit",
        "Press release",
        "200 copies printed",
        "Bookstore distribution",
        "Author website"
      ],
      recommended: true
    },
    {
      name: "Academic Publishing",
      price: "Rp 12.000.000",
      description: "Khusus untuk publikasi akademik dan jurnal",
      features: [
        "Academic peer review",
        "Journal submission",
        "Citation formatting", 
        "Research indexing",
        "Conference presentation",
        "Academic distribution",
        "Impact tracking"
      ],
      recommended: false
    }
  ];

  const process = [
    {
      step: "Konsultasi",
      description: "Diskusi konsep, target audience, dan tujuan publikasi",
      icon: Users
    },
    {
      step: "Development", 
      description: "Editing, design, dan persiapan naskah untuk publikasi",
      icon: Sparkles
    },
    {
      step: "Production",
      description: "Proses cetak, binding, dan quality control",
      icon: Zap
    },
    {
      step: "Launch",
      description: "Distribusi, marketing, dan peluncuran buku",
      icon: Award
    }
  ];

  const achievements = [
    { number: "200+", label: "Buku Diterbitkan" },
    { number: "150+", label: "Penulis Terpublikasi" },
    { number: "25+", label: "Penghargaan" },
    { number: "95%", label: "Kepuasan Klien" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary via-warm/30 to-accent/40">
        <div className="hero-overlay bg-primary/60"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-6">
            <Book className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Penerbitan
            <span className="block text-accent">Profesional</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Wujudkan mimpi menjadi penulis dengan layanan penerbitan berkualitas tinggi dan distribusi luas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Konsultasi Penerbitan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Lihat Portofolio
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Paket Penerbitan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-elegant ${pkg.recommended ? 'ring-2 ring-accent' : ''} relative`} data-aos="fade-up" data-aos-delay={index * 100}>
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.recommended ? 'btn-hero' : 'btn-outline-accent'}`}>
                    Pilih Paket
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proses <span className="text-gradient-accent">Penerbitan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dari naskah hingga buku jadi dalam 4 tahap mudah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pencapaian <span className="text-gradient-primary">Kami</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-5xl font-bold text-accent mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Menerbitkan Karya Anda?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Bergabunglah dengan ratusan penulis yang telah mempercayai kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Mulai Penerbitan
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Download Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Penerbitan;