import { useEffect } from "react";
import { BookOpen, Users, BarChart, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const KonsultasiBimbingan = () => {
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
      icon: Users,
      title: "Mentor dan Advisor Penelitian",
      description: "Peran mentor di Devvisartika adalah menemani peneliti sejak tahap awal, mulai dari memilih topik hingga menyusun rumusan masalah. Advisor akan membantu dalam menentukan metodologi yang sesuai, memastikan bahwa penelitian memiliki pijakan teori yang kuat sekaligus relevan dengan realitas sosial.",
      features: [
        "Diskusi topik penelitian",
        "Penentuan metodologi",
        "Penyusunan kerangka teori",
        "Supervisi berkala"
      ]
    },
    {
      icon: FileText,
      title: "Proofreader dan Editor Karya Tulis Ilmiah",
      description: "Banyak karya penelitian yang sebenarnya berkualitas, tetapi gagal tersampaikan dengan baik karena persoalan bahasa, struktur, atau gaya penulisan. Layanan proofreading dan editing hadir untuk menjawab kebutuhan ini.",
      features: [
        "Koreksi tata bahasa",
        "Penyelarasan struktur argumen",
        "Konsistensi sitasi",
        "Format akademik standar"
      ]
    },
    {
      icon: BarChart,
      title: "Analisis Data",
      description: "Devvisartika mendampingi proses analisis baik data kualitatif maupun kuantitatif. Untuk data kualitatif, layanan meliputi proses coding, analisis tematik, hingga penarikan kesimpulan berdasarkan pola yang muncul.",
      features: [
        "Coding & analisis tematik",
        "Penggunaan software statistik (SPSS, NVivo, AMOS)",
        "Interpretasi hasil pengujian",
        "Penyusunan narasi hasil"
      ]
    },
    {
      icon: BookOpen,
      title: "Terjemahan dan Review Artikel Jurnal",
      description: "Devvisartika menyediakan layanan penerjemahan naskah ke bahasa Inggris akademik dengan memperhatikan gaya bahasa ilmiah yang berlaku. Tidak hanya diterjemahkan, artikel juga direview agar sesuai dengan kaidah penulisan jurnal.",
      features: [
        "Terjemahan ke bahasa Inggris akademik",
        "Review kaidah penulisan jurnal",
        "Peningkatan peluang publikasi",
        "Konsultasi submission"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/research-collaboration.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <BookOpen className="h-16 w-16 text-accent mx-auto mb-6 star-float" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Konsultasi &
            <span className="block text-accent">Bimbingan Penelitian</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Pendampingan menyeluruh untuk perjalanan akademik Anda, dari perumusan topik hingga publikasi karya ilmiah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button className="btn-hero text-lg px-8 py-4">
                Konsultasi Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Lihat Harga
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Layanan Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Devvisartika memahami bahwa perjalanan akademik sering kali penuh tantangan. Kami hadir sebagai ruang dialog, pendampingan, sekaligus mentoring agar proses penelitian dapat berjalan lebih terarah dan bermakna.
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
                  <CardDescription className="text-base mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
              Mengapa <span className="text-gradient-accent">Memilih Kami?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Pendampingan Fleksibel</h3>
              <p className="text-muted-foreground">Supervisi berkala, konsultasi tematik, atau diskusi intensif sesuai kebutuhan Anda</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Tim Berpengalaman</h3>
              <p className="text-muted-foreground">Mentor dan advisor dengan latar belakang akademik dan penelitian yang solid</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Perspektif Inklusif</h3>
              <p className="text-muted-foreground">Penelitian yang relevan dengan realitas sosial dan perspektif interseksional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Memulai Perjalanan Penelitian?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Konsultasikan kebutuhan penelitian Anda dengan tim ahli kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Hubungi Kami
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Lihat Paket Harga
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KonsultasiBimbingan;