import { Heart, Star, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dewisartikaImage from "@/assets/dewi-sartika-inspiration.jpg";

const TentangKami = () => {
  const values = [
    {
      icon: Heart,
      title: "Keberanian",
      description: "Berani menghadapi tantangan dan memperjuangkan keadilan sosial"
    },
    {
      icon: Users,
      title: "Inklusivitas",
      description: "Menciptakan ruang yang aman dan terbuka untuk semua identitas"
    },
    {
      icon: BookOpen,
      title: "Keadilan",
      description: "Memperjuangkan akses pendidikan yang setara untuk semua kalangan"
    },
    {
      icon: Star,
      title: "Integritas",
      description: "Berkomitmen pada transparansi dan akuntabilitas dalam setiap langkah"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tentang <span className="text-warm">Kami</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Mengenal lebih dekat perjalanan dan komitmen Devvisartika Movement 
            dalam mewujudkan pendidikan inklusif
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Latar Belakang Organisasi</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Devvisartika Movement lahir dari keprihatinan mendalam terhadap 
                  ketimpangan akses pendidikan dan kurangnya perspektif inklusif 
                  dalam sistem edukasi di Indonesia.
                </p>
                <p>
                  Kami percaya bahwa pendidikan adalah hak fundamental setiap individu, 
                  tanpa memandang latar belakang, identitas, atau orientasi mereka. 
                  Organisasi ini hadir sebagai jembatan untuk menciptakan ruang 
                  pembelajaran yang aman, suportif, dan memberdayakan.
                </p>
                <p>
                  Dengan menggabungkan nilai-nilai progresif dan pendekatan akademik 
                  yang rigorous, kami berkomitmen untuk mengembangkan ekosistem 
                  pendidikan yang tidak hanya berkualitas, tetapi juga berkeadilan.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="card-elegant overflow-hidden">
                <img 
                  src={dewisartikaImage} 
                  alt="Inspirasi Dewi Sartika"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dewi Sartika Inspiration */}
      <section className="section-padding section-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Inspirasi dari <span className="text-gradient-accent">Dewi Sartika</span>
          </h2>
          <div className="card-elegant p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic mb-6">
              "Pendidikan adalah kunci untuk membuka pintu kemerdekaan dan kesetaraan. 
              Setiap individu berhak mendapatkan akses pendidikan yang berkualitas, 
              tanpa dibatasi oleh gender, status sosial, atau latar belakang apapun."
            </blockquote>
            <div className="text-lg">
              <p className="mb-4">
                Dewi Sartika (1884-1947) adalah pionir pendidikan perempuan Indonesia 
                yang mendirikan Sekolah Istri pada tahun 1904. Visinya yang revolusioner 
                tentang pendidikan inklusif menjadi fondasi semangat kami.
              </p>
              <p>
                Seperti Dewi Sartika yang berjuang melawan keterbatasan zaman untuk 
                memberikan akses pendidikan kepada perempuan, kami melanjutkan perjuangan 
                tersebut dengan fokus pada inklusivitas yang lebih luas, mencakup 
                keberagaman identitas dan perspektif dalam dunia pendidikan modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Nilai-Nilai Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi pedoman dalam setiap langkah 
              dan keputusan organisasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardHeader>
                  <value.icon className="h-16 w-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-warm text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Komitmen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elegant p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-bold mb-4">Untuk Komunitas</h3>
              <p>
                Menciptakan ruang yang aman dan suportif bagi semua anggota komunitas 
                untuk belajar, berkembang, dan berkontribusi sesuai dengan potensi 
                dan identitas mereka.
              </p>
            </div>
            <div className="card-elegant p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-bold mb-4">Untuk Masa Depan</h3>
              <p>
                Membangun sistem pendidikan yang berkelanjutan, adaptif, dan mampu 
                merespons kebutuhan masyarakat yang terus berkembang dengan tetap 
                menjunjung tinggi nilai-nilai kemanusiaan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;