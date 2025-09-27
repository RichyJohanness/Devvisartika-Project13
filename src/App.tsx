import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import VisiMisi from "./pages/VisiMisi";
import Kontak from "./pages/Kontak";
import Layanan from "./pages/Layanan"; // Import page Layanan
import Education from "./pages/Education";
import RisetKonsultasi from "./pages/RisetKonsultasi";
import JurnalProofread from "./pages/JurnalProofread";
import Penerbitan from "./pages/Penerbitan";
import KonsultasiRelasi from "./pages/KonsultasiRelasi";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/tentang" element={<TentangKami />} />
              <Route path="/visi-misi" element={<VisiMisi />} />
              {/* Tambahkan rute untuk halaman Layanan */}
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/education" element={<Education />} />
              <Route path="/riset-konsultasi" element={<RisetKonsultasi />} />
              <Route path="/jurnal" element={<JurnalProofread />} />
              <Route path="/penerbitan" element={<Penerbitan />} />
              <Route path="/konsultasi-relasi" element={<KonsultasiRelasi />} />
              <Route path="/kontak" element={<Kontak />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;