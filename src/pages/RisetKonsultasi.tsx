import { useEffect } from "react";
import { BookOpen, Users, Target, CheckCircle, ArrowRight, Lightbulb, BarChart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RisetKonsultasi = () => {
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
      title: "Konsultasi Metodologi",
      description: "Pendampingan dalam merancang metodologi penelitian yang tepat dan sesuai dengan tujuan riset",
      features: ["Desain penelitian", "Pemilihan metode", "Instrumen penelitian", "Validasi metodologi"]
    },
    {
      icon: BarChart,
      title: "Analisis Data",
      description: "Bantuan analisis data kuantitatif dan kualitatif dengan tools modern",
      features: ["Analisis statistik", "Analisis naratif", "Visualisasi data", "Interpretasi hasil"]
    },
    {
      icon: FileText,
      title: "Penulisan Akademik",
      description: "Bimbingan penulisan paper, tesis, dan publikasi ilmiah",
      features: ["Struktur penulisan", "Referensi & sitasi", "Review draft", "Editing akademik"]
    },
    {
      icon: Target,
      title: "Riset Partisipatif",
      description: "Pendampingan riset berbasis komunitas dengan pendekatan interseksional",
      features: ["Community engagement", "Ethical research", "Inclusive methods", "Impact assessment"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi Awal",
      description: "Diskusi kebutuhan dan tujuan riset Anda"
    },
    {
      step: "02", 
      title: "Perencanaan",
      description: "Merancang strategi dan timeline penelitian"
    },
    {
      step: "03",
      title: "Pendampingan",
      description: "Monitoring dan mentoring selama proses riset"
    },
    {
      step: "04",
      title: "Evaluasi",
      description: "Review hasil dan rekomendasi publikasi"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary via-primary/90 to-accent/20">
        <div className="hero-overlay bg-primary/40"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-6">
            <Lightbulb className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Riset & 
            <span className="block text-accent">Konsultasi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Pendampingan riset akademik profesional dengan pendekatan interseksional dan metodologi inklusif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Layanan Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan riset akademik Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant group" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Proses <span className="text-gradient-accent">Kerja Sama</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tahapan sistematis untuk memastikan kesuksesan riset Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Memulai Riset Berkualitas?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Konsultasikan kebutuhan riset Anda dengan tim ahli kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Mulai Konsultasi
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Download Panduan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RisetKonsultasi;