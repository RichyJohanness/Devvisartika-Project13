import { useEffect } from "react";
import { ArrowRight, BookOpen, Users, Heart, Star, CheckCircle, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel";
import heroImage from "@/assets/hero-education.jpg";
import starsPattern from "@/assets/stars-pattern.jpg";
import educationClassroom from "@/assets/education-classroom.jpg";
import researchCollaboration from "@/assets/research-collaboration.jpg";
import libraryStudy from "@/assets/library-study.jpg";
import herocr1 from "@/assets/hero-cr1.png";
import herocr2 from "@/assets/hero-cr2.png";
import herocr3 from "@/assets/hero-cr3.png";
import hero1 from "@/assets/hero-1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import gambar artikel
import artikel1 from "@/assets/artikel1.jpg";
import artikel2 from "@/assets/hero-cr1.png";
import artikel3 from "@/assets/hero-cr3.png";

const Beranda = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const carouselImages = [
    educationClassroom,

    libraryStudy,
    educationClassroom,
    libraryStudy
    
  ];

  const carouselImages2 = [
    herocr1,
    herocr2,
    herocr3,
    herocr1
  ];

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

  const testimonials = [
    {
      name: "Elia",
      role: "Dosen & Researcher",
      content: "Platform ini benar-benar mengubah cara saya memahami pendidikan inklusif. Materinya sangat aplikatif dan transformatif.",
      avatar: "SA"
    },
    {
      name: "Mba Mekei",
      role: "Community Organizer",
      content: "Pendampingan dari Devvisartika membantu komunitas kami membangun ruang yang benar-benar aman dan partisipatif.",
      avatar: "MK"
    },
    {
      name: "Kak Angel",
      role: "Graduate Student",
      content: "Layanan konsultasi riset mereka luar biasa. Metodologi interseksional yang diajarkan sangat inovatif.",
      avatar: "AJ"
    }
  ];

  const articles = [
    {
      image: artikel1,
      title: "Cth : Membangun Masa Depan Pendidikan yang Lebih Inklusif",
      link: "/artikel/artikel-1"
    },
    {
      image: artikel2,
      title: "Cth : Peran Teknologi dalam Mendukung Pembelajaran Interseksional",
      link: "/artikel/artikel-2"
    },
    {
      image: artikel3,
      title: "Cth : Pemberdayaan Komunitas melalui Akses Pendidikan",
      link: "/artikel/artikel-3"
    }
  ];

  const stats = [
    { value: "500+", label: "Peserta Program" },
    { value: "100+", label: "Riset Didampingi" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden h-screen flex items-center text-white text-left">
      <div className="absolute inset-0">
        <ImageCarousel
          images={carouselImages}
          className="h-full w-full object-cover"
          autoplay={true}
          effect="fade"
        />
        <div className="absolute inset-0 bg-[#1E3D73] bg-opacity-30 z-10"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/40"></div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Grid 1: Content (Judul, Buttons, Stats) */}
        <div className="flex flex-col items-start text-center md:text-left" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight text-white">
            Devvisartika
            <span className="block text-accent">Tagline!</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="btn-hero text-lg px-8 py-4 rounded-xl">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary rounded-xl border-2">
              <Play className="mr-2 h-5 w-5" />
              Tonton Video
            </Button>
          </div>
          
          {/* Stats Card */}
          <div className="relative w-full max-w-lg mx-auto md:mx-0">
            <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl overflow-hidden glossy-effect" data-aos="fade-up" data-aos-delay="500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10 blur-3xl opacity-50"></div>
              <div className="grid grid-cols-2 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1 stat-shine">{stat.value}</div>
                    <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2: Carousel Images */}
        <div className="hidden md:block h-full">
          <ImageCarousel
            images={carouselImages2}
            className="h-full w-full object-cover rounded-3xl shadow-2xl"
            autoplay={true}
            effect="fade"
          />
        </div>
      </div>
      </section>

      {/* Grid Konten: Info & Gambar */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Misi Kami<span className="text-gradient-primary">Menciptakan Akses Setara</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Mewujudkan ruang pendidikan, pendampingan, dan pelatihan
                yang inklusif, berperspektif, interseksional, serta meneladani
                semangat Dewi Sartika dalam memperjuangkan hak belajar
                dan kesetaraan bagi semua lapisan masyarakat.
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Membangun kurikulum yang relevan dan inklusif.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Mendorong kolaborasi riset lintas disiplin.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Menyediakan platform publikasi yang mudah diakses.</span>
                </li>
              </ul>
              <Button className="mt-8 text-lg px-8 py-4 rounded-xl">
                Bergabung Sekarang
              </Button>
            </div>
            <div className="relative mt-8 md:mt-0" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={herocr3}
                  alt="Tim berkolaborasi"
                  className="w-full h-full object-cover"
                />
                <br />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent/90 w-48 h-48 rounded-full blur-2xl opacity-50 -z-10"></div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Banner dengan Radius */}
      <section className="section-padding py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: `url(${starsPattern})`, backgroundRepeat: 'repeat' }}
            ></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Temukan Potensi Penuh Anda
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Jelajahi berbagai program kami yang dirancang untuk memberdayakan individu dan komunitas.
              </p>
              <Button variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full">
                Lihat Semua Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Artikel <span className="text-gradient-primary">Terbaru</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Baca wawasan terbaru kami seputar pendidikan, riset, dan inovasi sosial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="card-elegant group cursor-pointer rounded-2xl border-0 shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:filter group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-4 line-clamp-2">{article.title}</h3>
                  <Button variant="outline" className="btn-outline-accent rounded-xl w-full">
                    Lihat Artikel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-gradient-primary">Nilai-Nilai Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Berani dari semangat perjuangan Dewi Sartika, kami berkomitmen
              untuk menciptakan ruang pendidikan yang inklusif dan berkeadilan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-elegant p-8 text-center group rounded-2xl" data-aos="fade-up" data-aos-delay={index * 100}>
                <feature.icon className="h-16 w-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Layanan <span className="text-gradient-accent">Unggulan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan pendidikan, riset, dan publikasi
              dengan pendekatan yang inklusif dan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant group cursor-pointer rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-heading group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="btn-outline-accent rounded-xl group-hover:bg-accent group-hover:text-accent-foreground">
                    Pelajari Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Apa Kata <span className="text-gradient-primary">Mereka</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Testimoni dari peserta yang telah merasakan transformasi melalui program kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant rounded-2xl border-0 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-accent font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
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
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Konten Teks */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-accent">Siap</span> Bergabung dengan{" "}
              <span className="text-accent">Gerakan</span> Perubahan?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Mari bersama-sama membangun masa depan pendidikan yang lebih inklusif
              dan berkeadilan untuk semua
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Mulai Perjalanan Anda
              </Button>
              <Button variant="outline" className="border-white text-accent hover:bg-white hover:text-accent text-lg px-8 py-4">
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Grid GIF */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://i.pinimg.com/originals/dc/2a/5e/dc2a5eab0e4bb80545392ecff137d299.gif" 
              alt="Animation" 
              className="rounded-2xl shadow-lg max-w-sm w-full"
            />
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Beranda;