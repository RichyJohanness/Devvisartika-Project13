import { useEffect } from "react";
import { Heart, Users, MessageCircle, Shield, ArrowRight, CheckCircle, Compass, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const KonsultasiRelasi = () => {
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
      icon: Heart,
      title: "Relationship Counseling",
      description: "Konseling relasi dengan pendekatan interseksional dan inklusif",
      features: ["Individual counseling", "Couple therapy", "Family dynamics", "Communication skills"],
      format: "1-on-1 / Group Session"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Pendampingan membangun komunitas yang aman dan partisipatif",
      features: ["Community design", "Safe space creation", "Conflict resolution", "Inclusive leadership"],
      format: "Workshop / Consultation"
    },
    {
      icon: MessageCircle,
      title: "Communication Training",
      description: "Pelatihan komunikasi empatis dan non-violent communication",
      features: ["Active listening", "Empathetic response", "Conflict mediation", "Boundary setting"],
      format: "Training / Coaching"
    },
    {
      icon: Compass,
      title: "Life Direction Guidance",
      description: "Bimbingan menemukan arah hidup yang autentik dan bermakna",
      features: ["Self-discovery", "Goal setting", "Value alignment", "Life transitions"],
      format: "Personal Mentoring"
    }
  ];

  const approaches = [
    {
      title: "Interseksional",
      description: "Memahami kompleksitas identitas dan pengalaman individu",
      icon: "🌈"
    },
    {
      title: "Trauma-Informed",
      description: "Pendekatan yang sensitif terhadap pengalaman trauma",
      icon: "🌱"
    },
    {
      title: "Strength-Based",
      description: "Fokus pada kekuatan dan potensi yang dimiliki",
      icon: "💪"
    },
    {
      title: "Culturally Responsive",
      description: "Menghormati keberagaman latar belakang budaya",
      icon: "🌍"
    }
  ];

  const testimonials = [
    {
      name: "Alex",
      role: "Community Leader",
      content: "Pendampingan dari Devvisartika membantu saya membangun ruang yang benar-benar aman untuk komunitas LGBTQ+ di kampus."
    },
    {
      name: "Maya & Sari",
      role: "Couple",
      content: "Terapi pasangan dengan perspektif queer-feminist membuka mata kami tentang komunikasi yang sehat dan setara."
    },
    {
      name: "Jordan",
      role: "Young Professional",
      content: "Life coaching dengan pendekatan interseksional membantu saya menemukan jati diri dan karir yang autentik."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-accent/40 via-primary to-warm/60">
        <div className="hero-overlay bg-primary/50"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-6">
            <Heart className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Konsultasi
            <span className="block text-accent">Relasi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Ruang aman untuk eksplorasi diri, penyembuhan relasi, dan pertumbuhan personal dengan pendekatan holistik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Book Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Layanan Konsultasi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pendampingan professional dengan pendekatan yang humanis dan inklusif
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
                  <p className="text-accent font-medium">{service.format}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="btn-outline-accent w-full">
                    Konsultasi Gratis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pendekatan <span className="text-gradient-accent">Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodologi yang berpusat pada manusia dan keunikan setiap individu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-6xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                <p className="text-muted-foreground text-sm">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Testimoni <span className="text-gradient-primary">Klien</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cerita perubahan dari mereka yang telah merasakan layanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <MessageCircle className="h-8 w-8 text-accent mb-4" />
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
            Mulai Perjalanan Penyembuhan Anda
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Buat appointment untuk sesi konsultasi pertama yang gratis dan confidential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Book Free Session
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Contact Counselor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KonsultasiRelasi;