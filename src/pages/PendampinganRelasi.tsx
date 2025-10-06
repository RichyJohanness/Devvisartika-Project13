import { useEffect } from "react";
import { Heart, Users, Shield, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PendampinganRelasi = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Konseling Personal",
      description: "Sesi individual yang memberikan ruang aman untuk mengeksplorasi pengalaman personal, tantangan relasi, dan pengembangan diri dengan pendekatan yang empatik dan non-judgmental."
    },
    {
      icon: Users,
      title: "Diskusi Kelompok",
      description: "Forum diskusi bersama komunitas untuk berbagi pengalaman, saling belajar, dan membangun solidaritas dalam konteks keberagaman identitas dan orientasi."
    },
    {
      icon: Shield,
      title: "Refleksi Kolektif",
      description: "Kegiatan refleksi bersama yang mendorong kesadaran kritis terhadap norma sosial yang membatasi dan membangun pemahaman interseksional."
    },
    {
      icon: Sparkles,
      title: "Ruang Aman & Inklusif",
      description: "Lingkungan yang sepenuhnya menghargai keberagaman identitas gender, orientasi seksual, dan latar belakang tanpa diskriminasi atau stigma."
    }
  ];

  const values = [
    "Perspektif queer-feminist yang menolak norma patriarkal",
    "Penghargaan terhadap keberagaman identitas",
    "Pendekatan interseksional dalam memahami pengalaman",
    "Relasi yang sehat, setara, dan adil",
    "Kerahasiaan dan privasi terjamin",
    "Pendampingan tanpa judgment"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FADAC4] via-[#f5c9a8] to-[#f29bd1]/30"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/library-study.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <Heart className="h-16 w-16 text-[#f29bd1] mx-auto mb-6 star-float" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-primary">
            Pendampingan Relasi
            <span className="block text-[#f29bd1]">Queer-Feminist</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Konseling dan pendampingan relasi dengan perspektif inklusif yang menghargai keberagaman identitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button className="bg-[#f29bd1] text-white hover:bg-[#e67ab8] text-lg px-8 py-4">
                Mulai Konseling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Tentang Layanan Ini</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Devvisartika meyakini bahwa pendidikan sejati juga mencakup kehidupan personal dan sosial. Karena itu, organisasi ini membuka layanan pendampingan relasi yang berlandaskan perspektif queer-feminist. Perspektif ini menolak norma patriarkal yang kaku dan mengakui keragaman identitas gender serta orientasi seksual.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dalam praktiknya, layanan ini berupa sesi konseling personal, diskusi kelompok, maupun refleksi kolektif. Pendampingan dilakukan dengan tujuan menciptakan ruang aman, di mana individu bisa berbicara tentang pengalaman hidupnya tanpa takut dihakimi. Peserta didampingi untuk membangun relasi yang sehat, setara, dan adil, baik dalam konteks personal, keluarga, maupun komunitas.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Bentuk <span className="text-gradient-accent">Pendampingan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant group" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Prinsip Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Nilai-nilai yang melandasi setiap sesi pendampingan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up">
            {values.map((value, index) => (
              <div key={index} className="flex items-start p-4 bg-card rounded-lg border hover:border-accent transition-colors">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Untuk <span className="text-gradient-accent">Siapa Layanan Ini?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6" data-aos="fade-up">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Individu LGBTQIA+</h3>
              <p className="text-muted-foreground">Yang mencari ruang aman untuk eksplorasi identitas dan pengembangan diri</p>
            </div>
            <div className="text-center p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Pasangan & Keluarga</h3>
              <p className="text-muted-foreground">Yang ingin membangun relasi yang lebih sehat, setara, dan saling mendukung</p>
            </div>
            <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Komunitas</h3>
              <p className="text-muted-foreground">Yang membutuhkan fasilitasi diskusi dan refleksi kolektif</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#f29bd1] to-[#FADAC4] text-primary">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Temukan Ruang Aman untuk Tumbuh
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kami hadir untuk mendengarkan, mendampingi, dan mendukung perjalanan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PendampinganRelasi;