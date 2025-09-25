import { useEffect } from "react";
import { FileCheck, Globe, Users, Star, ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const JurnalProofread = () => {
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
      icon: FileCheck,
      title: "Proofreading Akademik",
      description: "Koreksi tata bahasa, ejaan, dan struktur kalimat untuk dokumen akademik",
      features: ["Grammar & spelling check", "Struktur kalimat", "Konsistensi style", "Academic tone"],
      price: "Mulai dari Rp 15.000/halaman"
    },
    {
      icon: Globe,
      title: "Translation Services",
      description: "Penerjemahan berkualitas Indonesia-Inggris dan sebaliknya",
      features: ["Academic translation", "Technical translation", "Cultural adaptation", "Native review"],
      price: "Mulai dari Rp 25.000/halaman"
    },
    {
      icon: Star,
      title: "Journal Editing",
      description: "Editing komprehensif untuk submission ke jurnal internasional",
      features: ["Structure optimization", "Citation formatting", "Journal guidelines", "Revision support"],
      price: "Mulai dari Rp 50.000/halaman"
    },
    {
      icon: Users,
      title: "Collaborative Review",
      description: "Review kolaboratif dengan perspektif multiple expertise",
      features: ["Multi-expert review", "Inclusive perspective", "Feedback report", "Revision guidance"],
      price: "Custom pricing"
    }
  ];

  const workflow = [
    {
      step: "Submit",
      description: "Upload dokumen dan pilih layanan",
      icon: "📄"
    },
    {
      step: "Review",
      description: "Tim ahli melakukan review mendalam",
      icon: "🔍"
    },
    {
      step: "Edit",
      description: "Proses editing/proofreading berlangsung", 
      icon: "✏️"
    },
    {
      step: "Deliver",
      description: "Dokumen final + feedback report",
      icon: "✅"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Proses cepat 2-5 hari kerja"
    },
    {
      icon: Shield,
      title: "Confidential",
      description: "Kerahasiaan dokumen terjamin"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Quality check berlapis"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary via-accent/30 to-warm/50">
        <div className="hero-overlay bg-primary/50"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-6">
            <FileCheck className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Jurnal Proofread 
            <span className="block text-accent">& Translation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Layanan profesional untuk meningkatkan kualitas publikasi akademik Anda dengan standar internasional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Cek Harga Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Sample Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Layanan Unggulan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan editing dan translasi dokumen akademik
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
                  <p className="text-accent font-semibold">{service.price}</p>
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
                  <Button variant="outline" className="btn-outline-accent mt-6 w-full">
                    Order Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proses <span className="text-gradient-accent">Kerja</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Workflow sederhana dan transparan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <feature.icon className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tingkatkan Kualitas Publikasi Anda
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Dapatkan layanan profesional dengan harga terjangkau
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Upload Dokumen
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JurnalProofread;