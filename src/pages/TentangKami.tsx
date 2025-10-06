import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, BookOpen, Users, Heart, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "@/assets/dewi-sartika-inspiration.jpg";

const TentangKami = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const fullProfile = `Devvisartika lahir dari inspirasi perjuangan Dewi Sartika (1884–1947), seorang pahlawan nasional perempuan yang memberikan kontribusi nyata terhadap pendidikan Indonesia. Beliau mendirikan sekolah pertama khusus perempuan di Hindia Belanda, sebuah langkah berani yang pada masanya dianggap melawan arus. Melalui pendidikan, Dewi Sartika membuka jalan bagi banyak perempuan agar dapat mengakses keterampilan yang sebelumnya hanya diperuntukkan bagi laki-laki.

Namun, meski kontribusinya begitu besar, nama Dewi Sartika sering kali tenggelam dalam narasi sejarah. Ia tidak sepopuler tokoh perempuan lain seperti Raden Adjeng Kartini, meskipun kiprahnya berdampak luas dan aplikatif. Inilah yang menjadi dasar pemilihan nama organisasi Devvisartika. Organisasi ini hadir sebagai bentuk penghormatan sekaligus pengingat, bahwa sejarah tidak hanya dimiliki oleh tokoh yang populer, melainkan juga oleh mereka yang karyanya berakar pada kehidupan nyata masyarakat dan memberikan perubahan transformatif.

Devvisartika berdiri dengan semangat menghidupkan kembali nilai perjuangan Dewi Sartika: keberanian, inklusivitas, dan keberpihakan pada kelompok yang sering dipinggirkan. Organisasi ini menjadi ruang pendidikan, pendampingan, dan pelatihan yang berpijak pada prinsip interseksionalitas, yakni kesadaran bahwa ketidakadilan tidak hanya disebabkan oleh satu faktor tunggal, melainkan hasil persinggungan dari gender, kelas, etnis, orientasi seksual, disabilitas, dan konteks sosial lainnya. Melalui pendekatan ini, Devvisartika berkomitmen untuk menciptakan ruang belajar yang adil, terbuka, dan transformatif.`;

  const previewText = fullProfile.split('\n\n')[0];

  const values = [
    {
      icon: BookOpen,
      title: "Keberanian",
      description: "Berani melawan arus demi kesetaraan pendidikan"
    },
    {
      icon: Users,
      title: "Inklusivitas",
      description: "Terbuka untuk semua lapisan masyarakat"
    },
    {
      icon: Heart,
      title: "Keberpihakan",
      description: "Berpihak pada kelompok yang terpinggirkan"
    },
    {
      icon: Award,
      title: "Interseksionalitas",
      description: "Memahami kompleksitas identitas dan ketidakadilan"
    }
  ];

  const misi = [
    "Menyediakan pendampingan penelitian, penulisan, dan pengembangan akademik yang dapat diakses lintas latar belakang, gender, dan kelas sosial.",
    "Menghadirkan pelatihan yang tidak hanya menyiapkan individu memasuki dunia kerja, tetapi juga memperkuat kapasitas mereka dalam menghadapi ketidaksetaraan struktural.",
    "Memberikan ruang pendampingan relasi yang berperspektif queer-feminist, menghargai keberagaman identitas, dan mendorong kehidupan berelasi yang adil serta sehat.",
    "Menjadi penghubung antara peneliti dengan komunitas sosial, memastikan penelitian berjalan etis, partisipatif, dan bermanfaat bagi masyarakat yang diteliti.",
    "Mendorong praktik pendidikan yang interseksional—yang memahami kerentanan seseorang tidak hanya dari satu faktor, melainkan juga hasil persinggungan berbagai identitas sosial.",
    "Mengangkat kembali warisan tokoh yang kurang populer tetapi berdampak besar, sebagai simbol bahwa kontribusi bermakna tidak selalu lahir dari sorotan dan popularitas."
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Tentang Devvisartika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Menghidupkan kembali semangat Dewi Sartika untuk pendidikan inklusif dan berkeadilan
          </p>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-12 bg-accent/10" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-heading font-semibold text-primary">
              "Devvisartika: Ruang Belajar yang Inklusif dan Berkeadilan"
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center" data-aos="fade-up">
              Profil Organisasi
            </h2>
            
            <div className="card-elegant p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {isExpanded ? fullProfile : previewText}
                </p>
              </div>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mx-auto"
              >
                {isExpanded ? (
                  <>
                    <span>Tampilkan Lebih Sedikit</span>
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Baca Selengkapnya</span>
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center" data-aos="fade-up">
            Nilai-Nilai Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center group hover:border-accent/50"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center" data-aos="fade-up">
              Visi
            </h2>
            
            <div className="card-elegant p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20" data-aos="fade-up" data-aos-delay="100">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                Mewujudkan ruang pendidikan, pendampingan, dan pelatihan yang inklusif, berperspektif, interseksional, serta meneladani semangat Dewi Sartika dalam memperjuangkan hak belajar dan kesetaraan bagi semua lapisan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center" data-aos="fade-up">
              Misi
            </h2>
            
            <div className="space-y-4">
              {misi.map((item, index) => (
                <div
                  key={index}
                  className="card-elegant p-6 md:p-8 flex gap-4 group hover:border-accent/50"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                      <span className="text-accent font-heading font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="card-elegant p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-accent/20">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Mari Bergabung Bersama Kami
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Bersama kita ciptakan ruang belajar yang inklusif, adil, dan transformatif untuk semua
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/layanan"
                  className="btn-hero inline-block"
                >
                  Jelajahi Layanan
                </a>
                <a
                  href="/kontak"
                  className="btn-outline-accent inline-block"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
