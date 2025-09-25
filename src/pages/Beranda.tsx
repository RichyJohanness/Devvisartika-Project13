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
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    researchCollaboration,
    libraryStudy,
    heroImage
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
      name: "Dr. Sarah Ahmed",
      role: "Dosen & Researcher", 
      content: "Platform ini benar-benar mengubah cara saya memahami pendidikan inklusif. Materinya sangat aplikatif dan transformatif.",
      avatar: "SA"
    },
    {
      name: "Maya Kusuma",
      role: "Community Organizer",
      content: "Pendampingan dari Devvisartika membantu komunitas kami membangun ruang yang benar-benar aman dan partisipatif.",
      avatar: "MK"
    },
    {
      name: "Alex Jordan", 
      role: "Graduate Student",
      content: "Layanan konsultasi riset mereka luar biasa. Metodologi interseksional yang diajarkan sangat inovatif.",
      avatar: "AJ"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageCarousel 
            images={carouselImages}
            className="h-full w-full"
            autoplay={true}
            effect="fade"
          />
        </div>
        <div className="hero-overlay bg-gradient-to-r from-primary/80 via-primary/60 to-accent/40"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-6">
            <Star className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Menginspirasi Perubahan Melalui 
            <span className="block text-accent">Pendidikan Inklusif</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Platform edukasi yang meneladani semangat Dewi Sartika dalam mewujudkan 
            keadilan sosial dan kesetaraan melalui pendidikan berkualitas untuk semua
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4 rounded-xl">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary rounded-xl border-2">
              <Play className="mr-2 h-5 w-5" />
              Tonton Video
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Peserta Program</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/90">Riset Didampingi</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Dokumen Diterbitkan</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Mitra Kolaborasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-gradient-primary">Nilai-Nilai Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Berdasarkan semangat perjuangan Dewi Sartika, kami berkomitmen 
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Layanan <span className="text-gradient-accent">Unggulan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan pendidikan, riset, dan publikasi 
              dengan pendekatan yang inklusif dan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="max-w-7xl mx-auto">
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