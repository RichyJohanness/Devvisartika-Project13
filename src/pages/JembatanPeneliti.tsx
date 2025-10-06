import { useEffect } from "react";
import { Network, Users, Heart, Shield, CheckCircle, ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const JembatanPeneliti = () => {
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
      icon: Network,
      title: "Koneksi dengan Komunitas",
      description: "Memfasilitasi akses peneliti ke berbagai komunitas sosial di Indonesia, membangun jembatan yang etis dan saling menguntungkan antara dunia akademik dan masyarakat."
    },
    {
      icon: Users,
      title: "Penelitian Partisipatif",
      description: "Melibatkan komunitas sebagai mitra sejajar dalam setiap tahapan penelitian, bukan sekadar objek kajian. Komunitas memiliki suara dan kepentingan yang dihargai."
    },
    {
      icon: Shield,
      title: "Etika Penelitian",
      description: "Memastikan proses penelitian berjalan dengan standar etika yang tinggi, menghormati privasi, keamanan, dan kepentingan komunitas yang diteliti."
    },
    {
      icon: Target,
      title: "Dampak Sosial Bermakna",
      description: "Hasil penelitian tidak hanya untuk kepentingan akademik, tetapi juga memberikan dampak positif dan manfaat nyata bagi masyarakat yang diteliti."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi Kebutuhan",
      description: "Diskusi mendalam tentang tujuan penelitian dan komunitas yang ingin diteliti"
    },
    {
      step: "02",
      title: "Pemetaan Komunitas",
      description: "Identifikasi dan pemetaan komunitas yang relevan dengan topik penelitian"
    },
    {
      step: "03",
      title: "Membangun Kepercayaan",
      description: "Proses komunikasi dan pendekatan untuk membangun trust dengan komunitas"
    },
    {
      step: "04",
      title: "Fasilitasi Kolaborasi",
      description: "Pendampingan selama proses penelitian berlangsung"
    },
    {
      step: "05",
      title: "Evaluasi Dampak",
      description: "Memastikan hasil penelitian bermanfaat bagi komunitas"
    }
  ];

  const principles = [
    "Komunitas sebagai mitra, bukan objek",
    "Penelitian berbasis kepercayaan dan transparansi",
    "Menghormati otonomi dan keputusan komunitas",
    "Proses yang partisipatif dan inklusif",
    "Hasil penelitian yang memberdayakan",
    "Komitmen jangka panjang, bukan ekstraktif"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1E3D73] to-[#f29bd1]/20"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/research-collaboration.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <Network className="h-16 w-16 text-accent mx-auto mb-6 star-float" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Jembatan
            <span className="block text-accent">Peneliti-Komunitas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Memfasilitasi kolaborasi etis antara peneliti akademik dengan komunitas sosial di Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button className="btn-hero text-lg px-8 py-4">
                Mulai Kolaborasi
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
            <span className="text-gradient-primary">Mengapa Layanan Ini Penting?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Devvisartika berperan sebagai jembatan antara peneliti dan komunitas sosial di Indonesia. Banyak penelitian yang membutuhkan data lapangan, tetapi akses menuju komunitas sering kali terbatas. Di sinilah Devvisartika hadir sebagai penghubung, memastikan proses penelitian berjalan secara etis dan saling menguntungkan.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Komunitas tidak diperlakukan sekadar sebagai objek penelitian, melainkan sebagai mitra sejajar yang punya suara dan kepentingan. Peneliti dibantu dalam proses komunikasi, membangun kepercayaan, dan melibatkan komunitas dalam setiap tahapan penelitian. Dengan demikian, hasil penelitian tidak hanya bermanfaat untuk kepentingan akademik, tetapi juga memberi dampak positif bagi masyarakat yang diteliti.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan <span className="text-gradient-accent">Kami</span>
            </h2>
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
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Proses Kerja Sama</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tahapan sistematis untuk memastikan kolaborasi yang etis dan bermakna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding section-warm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-accent">Prinsip Kerja</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Nilai-nilai yang melandasi setiap kolaborasi penelitian
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start p-4 bg-card rounded-lg border hover:border-accent transition-colors">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Manfaat <span className="text-gradient-primary">Kolaborasi</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card rounded-lg border" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-4 text-accent">Untuk Peneliti</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Akses ke komunitas yang relevan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Data berkualitas dan kontekstual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Penelitian yang lebih bermakna</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dukungan etika penelitian</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-lg border" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-4 text-accent">Untuk Komunitas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Suara yang didengar dan dihargai</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hasil penelitian yang bermanfaat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pemberdayaan dan pengembangan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Perlindungan hak dan privasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mari Berkolaborasi untuk Dampak Nyata
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Hubungi kami untuk memulai penelitian yang etis dan bermakna
          </p>
          <Link to="/kontak">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JembatanPeneliti;