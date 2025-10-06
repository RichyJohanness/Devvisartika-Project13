import { useEffect } from "react";
import { Users, Briefcase, PenTool, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PelatihanKeterampilan = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const trainings = [
    {
      icon: Users,
      title: "Workplace Communication Training",
      description: "Di dunia kerja, komunikasi menjadi kunci utama. Pelatihan ini membantu peserta menguasai keterampilan menyampaikan ide dengan jelas, menyusun laporan profesional, hingga membangun relasi kerja yang sehat.",
      features: [
        "Komunikasi efektif di tempat kerja",
        "Penulisan laporan profesional",
        "Presentasi yang meyakinkan",
        "Etika komunikasi kerja"
      ]
    },
    {
      icon: Briefcase,
      title: "Pelatihan Persiapan Dunia Kerja",
      description: "Lulusan baru sering kali belum siap menghadapi dinamika rekrutmen. Devvisartika memberikan pelatihan khusus tentang cara membuat CV yang menonjol, strategi menghadapi wawancara, dan etika profesional di tempat kerja.",
      features: [
        "Pembuatan CV & cover letter efektif",
        "Simulasi wawancara kerja",
        "Etika profesional",
        "Strategi rekrutmen"
      ]
    },
    {
      icon: PenTool,
      title: "Pelatihan Penulisan Kreatif dan Artikel Ilmiah",
      description: "Devvisartika percaya bahwa menulis adalah keterampilan yang bisa diasah dengan latihan. Pelatihan ini melatih ekspresi, imajinasi, gaya personal, serta penulisan akademik yang siap dipublikasikan.",
      features: [
        "Teknik menulis kreatif (esai, opini, cerpen)",
        "Penulisan artikel ilmiah",
        "Penyampaian ide sistematis",
        "Persiapan publikasi"
      ]
    },
    {
      icon: Building2,
      title: "Corporate Training",
      description: "Program pelatihan eksklusif untuk perusahaan dan lembaga dengan kustomisasi materi sesuai kebutuhan organisasi, termasuk evaluasi peserta dan konsultasi HR.",
      features: [
        "Kustomisasi materi pelatihan",
        "Maksimal 25 peserta per batch",
        "Laporan evaluasi peserta",
        "Konsultasi HR terkait hasil"
      ]
    }
  ];

  const format = [
    {
      label: "Durasi",
      value: "3x Pertemuan (2 jam/sesi)"
    },
    {
      label: "Total Waktu",
      value: "6 Jam"
    },
    {
      label: "Minimal Peserta",
      value: "10 Orang/Batch"
    },
    {
      label: "Metode",
      value: "Online (Zoom) / Offline"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f29bd1] via-[#e67ab8] to-primary/30"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/education-classroom.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <Users className="h-16 w-16 text-white mx-auto mb-6 star-float" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Pelatihan Keterampilan &
            <span className="block text-[#1E3D73]">Dunia Kerja</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Program pelatihan praktis dan aplikatif untuk meningkatkan kapasitas profesional Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4">
                Daftar Pelatihan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Lihat Harga
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Format Pelatihan</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {format.map((item, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border" data-aos="fade-up" data-aos-delay={index * 50}>
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 rounded-lg p-6 mb-8" data-aos="fade-up">
            <h3 className="font-bold text-lg mb-3">Fasilitas Pelatihan:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                <span>Modul pelatihan (PDF)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                <span>Rekaman materi (untuk online)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                <span>Sertifikat pelatihan</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                <span>Konsultasi lanjutan</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Program <span className="text-gradient-accent">Pelatihan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pelatihan dirancang agar praktis, aplikatif, dan relevan dengan kebutuhan era modern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <Card key={index} className="card-elegant group" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <training.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {training.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-3">
                    {training.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {training.features.map((feature, idx) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mengapa <span className="text-gradient-primary">Ikut Pelatihan Kami?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Praktis & Aplikatif</h3>
              <p className="text-muted-foreground">Materi langsung bisa diterapkan dengan latihan praktik intensif</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Instruktur Berpengalaman</h3>
              <p className="text-muted-foreground">Dibimbing oleh praktisi dan akademisi yang kompeten</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Fleksibel & Terjangkau</h3>
              <p className="text-muted-foreground">Pilihan online/offline dengan harga yang kompetitif</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#f29bd1] to-primary text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tingkatkan Keterampilan Anda Sekarang
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Investasi terbaik adalah investasi pada diri sendiri
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

export default PelatihanKeterampilan;