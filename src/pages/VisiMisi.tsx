import { Target, Compass, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisiMisi = () => {
  const misiItems = [
    {
      number: "01",
      title: "Ruang Edukasi Inklusif",
      description: "Memberikan ruang edukasi, pendampingan, dan pelatihan yang inklusif dengan pendekatan interseksional yang menghargai keberagaman identitas dan pengalaman."
    },
    {
      number: "02", 
      title: "Layanan Riset & Konsultasi",
      description: "Menyediakan layanan riset dan konsultasi akademik yang berkualitas tinggi dengan metodologi yang etis dan perspektif yang beragam."
    },
    {
      number: "03",
      title: "Dukungan Publikasi",
      description: "Mendukung publikasi karya akademik melalui layanan jurnal, proofreading, translation, dan penerbitan yang mengutamakan standar kualitas internasional."
    },
    {
      number: "04",
      title: "Jejaring Partisipatif",
      description: "Membangun jejaring yang etis dan partisipatif antara peneliti, akademisi, dan komunitas untuk menciptakan dampak positif yang berkelanjutan."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Fokus pada Dampak",
      description: "Setiap program dirancang untuk memberikan dampak nyata bagi komunitas dan masyarakat luas"
    },
    {
      icon: Compass,
      title: "Pendekatan Interseksional", 
      description: "Mengakui dan menghargai kompleksitas identitas dan pengalaman setiap individu"
    },
    {
      icon: CheckCircle,
      title: "Standar Kualitas Tinggi",
      description: "Berkomitmen pada excellence dalam setiap layanan dan program yang dijalankan"
    },
    {
      icon: Star,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi untuk merespons kebutuhan dan tantangan zaman"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Visi & <span className="text-warm">Misi</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Arah dan tujuan yang memandu setiap langkah Devvisartika Movement 
            dalam mewujudkan pendidikan inklusif
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Target className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-gradient-primary">Visi Kami</span>
            </h2>
          </div>
          
          <div className="card-elegant p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              "Mewujudkan ruang pendidikan, pendampingan, dan publikasi yang 
              <span className="text-gradient-accent"> inklusif dan berperspektif interseksional</span>, 
              meneladani semangat Dewi Sartika dalam menciptakan akses pendidikan 
              yang berkeadilan untuk semua."
            </blockquote>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">Inklusif</div>
              <p className="text-muted-foreground">Terbuka untuk semua latar belakang dan identitas</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">Interseksional</div>
              <p className="text-muted-foreground">Mengakui kompleksitas pengalaman manusia</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-accent mb-2">Berkeadilan</div>
              <p className="text-muted-foreground">Memperjuangkan kesetaraan akses dan kesempatan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Compass className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-accent">Misi Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Langkah-langkah konkret yang kami lakukan untuk mewujudkan visi 
              pendidikan inklusif dan berkeadilan
            </p>
          </div>

          <div className="space-y-8">
            {misiItems.map((item, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-24 bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center p-6">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {item.number}
                    </span>
                  </div>
                  <div className="flex-1 p-6 lg:p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Prinsip Operasional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nilai-nilai yang menjadi pedoman dalam implementasi visi dan misi kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardHeader>
                  <value.icon className="h-16 w-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bergabunglah dalam Misi Kami
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Bersama-sama kita dapat mewujudkan visi pendidikan yang inklusif 
            dan berkeadilan untuk semua
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Mulai Berkontribusi
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisiMisi;