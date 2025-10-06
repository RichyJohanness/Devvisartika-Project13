import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Kontak = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@devvisartika.org",
      subtitle: "Respons dalam 24 jam"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 xxx xxxx xxxx",
      subtitle: "Senin - Jumat, 09:00 - 17:00"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      content: "Indonesia",
      subtitle: "Melayani seluruh nusantara"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "09:00 - 17:00 WIB",
      subtitle: "Senin - Jumat"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hubungi <span className="text-warm">Kami</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Kami siap membantu Anda dalam perjalanan pendidikan dan 
            pengembangan diri yang inklusif
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardHeader>
                  <info.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-primary">Kirim Pesan</span>
              </h2>
              <div className="form-elegant">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Masukkan nama lengkap"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="nama@email.com"
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nomor Telepon
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+62 xxx xxxx xxxx"
                    className="form-input"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Kategori Layanan
                  </label>
                  <select className="form-input">
                    <option value="">Pilih kategori layanan</option>
                    <option value="education">Education & Training</option>
                    <option value="research">Riset & Konsultasi</option>
                    <option value="journal">Jurnal & Translation</option>
                    <option value="publishing">Penerbitan</option>
                    <option value="relations">Konsultasi Relasi</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subjek *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Subjek pesan Anda"
                    className="form-input"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan *
                  </label>
                  <Textarea 
                    placeholder="Tuliskan pesan atau pertanyaan Anda dengan detail..."
                    rows={6}
                    className="form-input resize-none"
                  />
                </div>

                <Button className="btn-hero w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-accent">Informasi Tambahan</span>
              </h2>
              
              <div className="space-y-6">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">Konsultasi Gratis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Kami menyediakan sesi konsultasi awal gratis untuk membantu 
                      Anda memahami layanan yang paling sesuai dengan kebutuhan.
                    </p>
                    <Button variant="outline" className="btn-outline-accent">
                      Jadwalkan Konsultasi
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">FAQ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Punya pertanyaan umum? Lihat halaman FAQ kami untuk mendapatkan 
                      jawaban cepat tentang layanan dan proses kerja kami.
                    </p>
                    <Button variant="outline" className="btn-outline-accent">
                      Lihat FAQ
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">Media Sosial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Ikuti media sosial kami untuk mendapatkan update terbaru 
                      tentang program dan kegiatan Devvisartika Movement.
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding section-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bergabung dengan <span className="text-gradient-accent">Komunitas</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Jadilah bagian dari gerakan pendidikan inklusif dan dapatkan akses 
            ke berbagai program dan resource eksklusif kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Daftar Newsletter
            </Button>
            <Button variant="outline" className="btn-outline-accent">
              Bergabung Komunitas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;