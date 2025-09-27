import { useEffect } from "react";
import { ArrowRight, Sparkles, BookOpen, Users, Lightbulb, PenTool, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
      name: "Education & Training",
      description: "Program pelatihan dan modul interaktif dengan perspektif interseksional yang relevan dengan isu-isu sosial kontemporer.",
      icon: BookOpen,
      link: "/education",
      color: "bg-orange-500",
      delay: 100
    },
    {
      name: "Riset & Konsultasi",
      description: "Pendampingan riset akademik dan konsultasi metodologi penelitian, dari perumusan ide hingga analisis data.",
      icon: Lightbulb,
      link: "/riset-konsultasi",
      color: "bg-blue-500",
      delay: 200
    },
    {
      name: "Jurnal Proofread & Translate",
      description: "Layanan proofreading, editing, dan penerjemahan dokumen akademik, memastikan tulisan Anda siap untuk publikasi.",
      icon: PenTool,
      link: "/jurnal",
      color: "bg-purple-500",
      delay: 300
    },
    {
      name: "Penerbitan",
      description: "Dukungan komprehensif untuk publikasi buku dan jurnal dengan standar akademik tinggi, dari naskah hingga cetak.",
      icon: Globe,
      link: "/penerbitan",
      color: "bg-green-500",
      delay: 400
    },
    {
      name: "Konsultasi Relasi",
      description: "Layanan konseling dan pendampingan untuk membangun relasi yang sehat, inklusif, dan saling memberdayakan.",
      icon: Users,
      link: "/konsultasi-relasi",
      color: "bg-pink-500",
      delay: 500
    }
  ];

  return (
    <div className="pt-16 bg-background">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden py-24 md:py-32 text-center text-white bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '400px',
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4" data-aos="fade-up">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Layanan Komprehensif Kami
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Kami menyediakan beragam layanan yang dirancang untuk mendukung perjalanan pendidikan, riset, dan pengembangan pribadi Anda.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-elegant group relative overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up" 
                data-aos-delay={service.delay}
              >
                <div className={`absolute -top-16 -left-16 w-32 h-32 rounded-full ${service.color} opacity-30 blur-3xl transition-all duration-500 group-hover:scale-150`}></div>
                <CardHeader className="pb-4 pt-8 px-8">
                  <div className="flex items-center mb-4">
                    <service.icon className={`h-10 w-10 ${service.color.replace('bg-', 'text-')} transition-colors duration-300`} />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="outline" className="btn-outline-accent rounded-full group-hover:bg-accent group-hover:text-accent-foreground">
                      Lihat Detail
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grid with Image and Text Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Mendukung Setiap Langkah <span className="text-gradient-primary">Perjalanan Anda</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kami memahami bahwa setiap perjalanan akademis dan profesional itu unik. Oleh karena itu, layanan kami dirancang untuk fleksibel dan dapat disesuaikan dengan kebutuhan spesifik Anda. Dari tahap awal riset hingga publikasi, tim ahli kami siap memberikan dukungan yang Anda butuhkan.
              </p>
              <ul className="space-y-3 text-base text-muted-foreground mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span>Dukungan ahli dari tim profesional yang berpengalaman.</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span>Pendekatan yang personal dan solutif.</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span>Komitmen pada kualitas dan etika kerja.</span>
                </li>
              </ul>
              <Button className="text-lg px-8 py-4 rounded-xl">
                Konsultasi Gratis
              </Button>
            </div>
            <div className="relative mt-8 md:mt-0" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/originals/f3/d3/18/f3d318e8d890a8a65f973070490b6391.gif"
                  alt="A person collaborating on a project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Banner (from Beranda) - Optional */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Testimoni Klien
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
            Dengarkan apa kata mereka yang telah merasakan manfaat layanan kami.
          </p>
          {/* Tambahkan carousel testimoni di sini jika ada */}
        </div>
      </section>
    </div>
  );
};

export default Layanan;