import { useEffect } from "react";
import { GraduationCap, Users, BookOpen, Award, ArrowRight, CheckCircle, PlayCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const programs = [
    {
      icon: GraduationCap,
      title: "Inclusive Education Fundamentals",
      description: "Program dasar pendidikan inklusif dengan perspektif interseksional",
      duration: "4 minggu",
      level: "Beginner",
      price: "Rp 750.000",
      features: ["Video pembelajaran", "Live webinar", "Modul interaktif", "Sertifikat", "Komunitas eksklusif"]
    },
    {
      icon: Users,
      title: "Queer-Feminist Pedagogy",
      description: "Metodologi mengajar dengan pendekatan queer-feminist untuk ruang kelas yang aman",
      duration: "6 minggu", 
      level: "Intermediate",
      price: "Rp 1.200.000",
      features: ["Case study", "Peer discussion", "Teaching practice", "Mentoring", "Research project"]
    },
    {
      icon: BookOpen,
      title: "Critical Media Literacy",
      description: "Literasi media kritis untuk memahami representasi dan bias dalam media",
      duration: "3 minggu",
      level: "All Levels", 
      price: "Rp 500.000",
      features: ["Media analysis", "Workshop", "Group project", "Digital toolkit", "Resource library"]
    },
    {
      icon: Award,
      title: "Trauma-Informed Teaching",
      description: "Pendekatan mengajar yang sensitif trauma untuk menciptakan ruang belajar yang aman",
      duration: "5 minggu",
      level: "Advanced",
      price: "Rp 950.000", 
      features: ["Expert sessions", "Simulation", "Healing practices", "Support group", "Certification"]
    }
  ];

  const features = [
    {
      icon: PlayCircle,
      title: "Interactive Learning",
      description: "Video pembelajaran, quiz interaktif, dan simulasi kasus nyata"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Diskusi peer-to-peer dan networking dengan sesama learner"
    },
    {
      icon: Download,
      title: "Lifetime Access",
      description: "Akses seumur hidup ke materi dan update konten terbaru"
    }
  ];

  const instructors = [
    {
      name: "Dr. Maya Sari",
      expertise: "Gender Studies & Education",
      description: "15 tahun pengalaman dalam pendidikan inklusif"
    },
    {
      name: "Prof. Alex Rahman",
      expertise: "Queer Theory & Pedagogy", 
      description: "Peneliti terkemuka dalam metodologi queer-feminist"
    },
    {
      name: "Dr. Jordan Kim",
      expertise: "Psychology & Trauma Studies",
      description: "Spesialis trauma-informed approach dalam pendidikan"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary via-accent/20 to-warm/40">
        <div className="hero-overlay bg-primary/60"></div>
        <div className="hero-content max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-6">
            <GraduationCap className="h-16 w-16 text-accent mx-auto mb-4 star-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Education &
            <span className="block text-accent">Training</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Program pendidikan transformatif dengan pendekatan interseksional untuk menciptakan ruang belajar yang inklusif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Mulai Belajar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-accent text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Free Preview
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Program Unggulan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kursus berkualitas tinggi yang dirancang untuk transformasi personal dan profesional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="card-elegant group" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <program.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {program.title}
                    </CardTitle>
                    <span className="text-2xl font-bold text-accent">{program.price}</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">{program.duration}</span>
                    <span className="px-2 py-1 bg-warm/30 text-warm-foreground text-xs rounded">{program.level}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button className="btn-hero flex-1">Daftar Sekarang</Button>
                    <Button variant="outline" className="btn-outline-accent">Preview</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding section-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mengapa Pilih <span className="text-gradient-accent">Kami?</span>
            </h2>
          </div>

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

      {/* Instructors Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tim <span className="text-gradient-primary">Pengajar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Belajar dari para ahli dan praktisi terdepan di bidangnya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="card-elegant text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-accent font-medium mb-3">{instructor.expertise}</p>
                  <p className="text-muted-foreground text-sm">{instructor.description}</p>
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
            Transformasi Dimulai Dari Sini
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Bergabunglah dengan komunitas learner yang berkomitmen pada perubahan sosial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Mulai Perjalanan
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

export default Education;