import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import Layanan from "./pages/Layanan";
import KonsultasiBimbingan from "./pages/KonsultasiBimbingan";
import PelatihanKeterampilan from "./pages/PelatihanKeterampilan";
import PendampinganRelasi from "./pages/PendampinganRelasi";
import JembatanPeneliti from "./pages/JembatanPeneliti";
import Pricing from "./pages/Pricing";
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
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/layanan/konsultasi-bimbingan" element={<KonsultasiBimbingan />} />
              <Route path="/layanan/pelatihan-keterampilan" element={<PelatihanKeterampilan />} />
              <Route path="/layanan/pendampingan-relasi" element={<PendampinganRelasi />} />
              <Route path="/layanan/jembatan-peneliti" element={<JembatanPeneliti />} />
              <Route path="/pricing" element={<Pricing />} />
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
