import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Heart, Network, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layanan = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const services = [
    {
      icon: BookOpen,
      title: "Konsultasi & Bimbingan Penelitian",
      description: "Pendampingan lengkap dari perumusan topik hingga analisis data dan publikasi karya ilmiah",
      features: [
        "Mentor & Advisor Penelitian",
        "Proofreading & Editing",
        "Analisis Data Kualitatif & Kuantitatif",
        "Terjemahan & Review Artikel Jurnal"
      ],
      path: "/layanan/konsultasi-bimbingan",
      color: "from-[#1E3D73] to-[#2a5298]"
    },
    {
      icon: Users,
      title: "Pelatihan Keterampilan & Dunia Kerja",
      description: "Program pelatihan praktis untuk meningkatkan kapasitas profesional dan keterampilan menulis",
      features: [
        "Workplace Communication Training",
        "Persiapan Dunia Kerja",
        "Penulisan Kreatif & Artikel Ilmiah",
        "Corporate Training"
      ],
      path: "/layanan/pelatihan-keterampilan",
      color: "from-[#f29bd1] to-[#e67ab8]"
    },
    {
      icon: Heart,
      title: "Pendampingan Relasi Queer-Feminist",
      description: "Konseling dan pendampingan relasi dengan perspektif inklusif yang menghargai keberagaman identitas",
      features: [
        "Konseling Personal",
        "Diskusi Kelompok",
        "Refleksi Kolektif",
        "Ruang Aman & Inklusif"
      ],
      path: "/layanan/pendampingan-relasi",
      color: "from-[#FADAC4] to-[#f5c9a8]"
    },
    {
      icon: Network,
      title: "Jembatan Peneliti-Komunitas",
      description: "Memfasilitasi kolaborasi etis antara peneliti akademik dengan komunitas sosial di Indonesia",
      features: [
        "Koneksi dengan Komunitas",
        "Penelitian Partisipatif",
        "Etika Penelitian",
        "Dampak Sosial Bermakna"
      ],
      path: "/layanan/jembatan-peneliti",
      color: "from-[#1E3D73] to-[#f29bd1]"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary via-primary/90 to-accent/20">
        <div className="hero-overlay bg-primary/40"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Layanan
            <span className="block text-accent">Devvisartika</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Pendampingan komprehensif untuk penelitian, pengembangan keterampilan, dan pemberdayaan komunitas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Pilihan Layanan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi terpadu untuk kebutuhan akademik, profesional, dan pengembangan personal Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-elegant group overflow-hidden relative" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader>
                  <service.icon className="h-14 w-14 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.path}>
                    <Button className="w-full group/btn">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lihat Paket & Harga Kami
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Temukan paket layanan yang sesuai dengan kebutuhan dan anggaran Anda
          </p>
          <Link to="/pricing">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Lihat Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Layanan;