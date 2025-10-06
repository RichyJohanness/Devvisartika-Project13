import { useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const consultingPrices = [
    {
      title: "Mentoring Zoom Meeting",
      price: "Rp150.000 - Rp250.000",
      unit: "per jam",
      features: ["Diskusi topik penelitian", "Metodologi", "Penyusunan kerangka teori"]
    },
    {
      title: "Pendampingan WhatsApp",
      price: "Rp400.000 - Rp600.000",
      unit: "per bulan",
      features: ["Konsultasi ringan", "Diskusi progress", "Feedback singkat"]
    },
    {
      title: "Proofreading Artikel Jurnal",
      price: "Rp350.000 - Rp500.000",
      unit: "per naskah",
      features: ["5-10 halaman", "Koreksi bahasa", "Format akademik"]
    },
    {
      title: "Proofreading Skripsi",
      price: "Rp1.200.000 - Rp2.000.000",
      unit: "per naskah",
      features: ["50-80 halaman", "Struktur argumen", "Sitasi konsisten"]
    },
    {
      title: "Proofreading Tesis",
      price: "Rp2.500.000 - Rp3.500.000",
      unit: "per naskah",
      features: ["80-120 halaman", "Review menyeluruh", "Format akademik"]
    },
    {
      title: "Proofreading Disertasi",
      price: "Rp4.500.000 - Rp6.500.000",
      unit: "per naskah",
      features: ["150-250 halaman", "Editing mendalam", "Alur argumen"]
    },
    {
      title: "Analisis Data Kualitatif",
      price: "Rp750.000 - Rp1.500.000",
      unit: "per proyek",
      features: ["Coding & analisis tematik", "Tergantung jumlah transkrip"]
    },
    {
      title: "Analisis Data Kuantitatif",
      price: "Rp1.000.000 - Rp2.500.000",
      unit: "per proyek",
      features: ["SPSS, NVivo, AMOS", "Interpretasi hasil", "Visualisasi data"]
    }
  ];

  const trainingPublic = [
    {
      title: "Workplace Communication Training",
      price: "Rp450.000 - Rp600.000",
      unit: "per peserta",
      features: ["3x pertemuan (6 jam)", "Modul PDF", "Rekaman materi", "Sertifikat"]
    },
    {
      title: "Pelatihan Persiapan Dunia Kerja",
      price: "Rp500.000 - Rp750.000",
      unit: "per peserta",
      features: ["3x pertemuan (6 jam)", "Simulasi wawancara", "Modul PDF", "Sertifikat"]
    },
    {
      title: "Penulisan Kreatif & Artikel Ilmiah",
      price: "Rp500.000 - Rp750.000",
      unit: "per peserta",
      features: ["3x pertemuan (6 jam)", "Latihan menulis", "Modul PDF", "Sertifikat"]
    }
  ];

  const trainingCorporate = [
    {
      title: "Workplace Communication Training",
      price: "Rp6.000.000 - Rp8.000.000",
      unit: "per batch",
      features: ["Maks 25 peserta", "Kustomisasi materi", "Laporan evaluasi", "Konsultasi HR"]
    },
    {
      title: "Government Readiness Training",
      price: "Rp10.000.000",
      unit: "per batch",
      features: ["Khusus lembaga pemerintah", "Maks 25 peserta", "Materi eksklusif", "Evaluasi peserta"]
    },
    {
      title: "Creative & Academic Writing Workshop",
      price: "Rp3.000.000 - Rp6.000.000",
      unit: "per batch",
      features: ["Maks 25 peserta", "Kustomisasi materi", "Workshop intensif", "Sertifikat"]
    }
  ];

  return (
    <div className="pt-16">
      <section className="hero-section bg-gradient-to-br from-primary via-primary/90 to-accent/20">
        <div className="hero-overlay bg-primary/40"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Paket & <span className="block text-accent">Harga Layanan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Investasi terbaik untuk pengembangan akademik dan profesional Anda
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Konsultasi & Bimbingan Penelitian</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingPrices.map((item, index) => (
              <Card key={index} className="card-elegant" data-aos="fade-up" data-aos-delay={index * 50}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>
                    <div className="text-2xl font-bold text-accent mt-2">{item.price}</div>
                    <div className="text-sm text-muted-foreground">{item.unit}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-accent">Pelatihan Publik</span>
            </h2>
            <p className="text-muted-foreground">Minimal 10 peserta per batch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPublic.map((item, index) => (
              <Card key={index} className="card-elegant" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>
                    <div className="text-3xl font-bold text-accent mt-2">{item.price}</div>
                    <div className="text-sm text-muted-foreground">{item.unit}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Corporate Training</span>
            </h2>
            <p className="text-muted-foreground">Untuk perusahaan dan lembaga</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingCorporate.map((item, index) => (
              <Card key={index} className="card-elegant" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>
                    <div className="text-3xl font-bold text-accent mt-2">{item.price}</div>
                    <div className="text-sm text-muted-foreground">{item.unit}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Memulai?</h2>
          <p className="text-xl mb-8 text-white/90">Hubungi kami untuk konsultasi gratis dan penawaran terbaik</p>
          <Link to="/kontak">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Hubungi Kami <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;