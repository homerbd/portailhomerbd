import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import avatarImg from "@/assets/avatarhomerbd.jpg.asset.json";
import photo1 from "@/assets/carousel/avatarhomerbd-2.jpg.asset.json";
import photo2 from "@/assets/carousel/Avatarhomerbd2.jpg.asset.json";
import photo3 from "@/assets/carousel/images-2-gigapixel-high_fidelity_v2-4x.jpg.asset.json";
import photo4 from "@/assets/carousel/images-3-gigapixel-high_fidelity_v2-4x.jpg.asset.json";
import photo5 from "@/assets/carousel/images-gigapixel-high_fidelity_v2-4x.jpg.asset.json";
import photo6 from "@/assets/carousel/lespotos.jpg.asset.json";
import bandoPortfolio from "@/assets/banner-portfoliohomerbd.jpg.asset.json";
import bandoAlbums from "@/assets/bando-albumsphotoshomerbd.jpg.asset.json";
import galAlbums from "@/assets/galerie/albumsfacebookhomerbd.jpg.asset.json";
import galPhotosFb from "@/assets/galerie/photosfacebookhomerbd.jpg.asset.json";
import galPhotosIg from "@/assets/galerie/photosinstagramhomerbd.jpg.asset.json";
import galPhotosFlickr from "@/assets/galerie/photosflickrhomerbd.jpg.asset.json";
import galFtbx from "@/assets/galerie/homerbdgaleriedephotosftbxv2.jpg.asset.json";
import galArchives from "@/assets/galerie/visuelarchiveshomerbd.jpg.asset.json";
import galMegaphone from "@/assets/galerie/homerbd-megaphone.jpg.asset.json";
import galBureau from "@/assets/galerie/homerbd-bureau-ftbxmag.jpg.asset.json";
import galSelfie from "@/assets/galerie/homerbd-selfie.jpg.asset.json";
import galPortrait from "@/assets/galerie/portraithomerbd.jpg.asset.json";
import { 
  BookOpen, 
  Tv, 
  Gamepad2, 
  Sparkles, 
  Heart, 
  Flame, 
  Compass, 
  Cpu, 
  Calendar,
  Layers,
  ChevronRight,
  TrendingUp,
  MapPin,
  ExternalLink,
  Code,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Palette,
  Image as ImageIcon,
  Camera,
  X
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Homerbd Portal" },
      { name: "description", content: "Homerbd - Since 1963. BDs, Skateboard, and Geekeries." },
      { property: "og:title", content: "Homerbd Portal" },
      { property: "og:description", content: "Homerbd - Since 1963. BDs, Skateboard, and Geekeries." },
      { property: "og:image", content: avatarImg.url },
    ],
  }),
  component: Index,
});

type Section = "homerbd" | "skateboard" | "geekeries";

function Index() {
  const [activeSection, setActiveSection] = useState<Section>("homerbd");
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Photos homerbd (mode vignette)
  const albumsLink = "https://homerbdporfolio.pages-perso.free.fr/photoshomerbd/";
  const photos: { src: string; caption: string }[] = [
    { src: photo6.url, caption: "Les potos" },
    { src: photo3.url, caption: "Karaoké" },
    { src: photo4.url, caption: "Fuck the Blaireaux" },
    { src: galPortrait.url, caption: "Portrait homerbd" },
    { src: photo5.url, caption: "Session skate" },
    { src: photo1.url, caption: "Avatar dessin" },
    { src: photo2.url, caption: "Avatar collage" },
    { src: galAlbums.url, caption: "Albums Facebook" },
    { src: galPhotosFb.url, caption: "Photos Facebook" },
    { src: galPhotosIg.url, caption: "Photos Instagram" },
    { src: galPhotosFlickr.url, caption: "Photos Flickr" },
    { src: galFtbx.url, caption: "Galerie de photos FTBX" },
    { src: galArchives.url, caption: "Visuel Archives FTBX" },
    { src: galMegaphone.url, caption: "Au mégaphone" },
    { src: galBureau.url, caption: "Le bureau du FTBX Mag" },
    { src: galSelfie.url, caption: "Selfie" },
  ];

  // Mock data for Homerbd
  const bds = [
    { title: "Gaston Lagaffe", author: "Franquin", year: 1957, rating: 5, category: "Franco-Belge", review: "L'âge d'or de l'humour absurde et de l'invention farfelue. Indétrônable." },
    { title: "Tintin au Tibet", author: "Hergé", year: 1960, rating: 5, category: "Franco-Belge", review: "Le chef-d'œuvre absolu d'Hergé, d'une pureté graphique et d'une intensité émotionnelle inégalée." },
    { title: "La Rubrique-à-Brac", author: "Gotlib", year: 1968, rating: 5, category: "Humour", review: "Le génie du non-sens absolu et du dessin expressif. Gotlib au sommet de son art." },
    { title: "Akira", author: "Katsuhiro Otomo", year: 1982, rating: 5, category: "Manga", review: "Un monument de la science-fiction cyber-punk avec un dynamisme graphique hallucinant." }
  ];


  // Mock data for Geekeries
  const geekItems = [
    { title: "Amiga 500", year: 1987, type: "Micro-ordinateur", status: "Restauré & Fonctionnel", icon: Cpu, desc: "L'ordinateur culte avec ses puces graphiques et sonores d'exception pour l'époque." },
    { title: "Custom Mechanical Keyboard", year: 2025, type: "Hardware", status: "Switchs Lubrifiés Tangerine", icon: Gamepad2, desc: "Un clavier mécanique de compèt' assemblé et soudé à la main, pour un confort de frappe ultime." },
    { title: "Atari 2600", year: 1977, type: "Console de jeu", status: "Boîtier bois d'origine", icon: Tv, desc: "La console rétro emblématique qui a popularisé Space Invaders et Pac-Man à la maison." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans overflow-x-hidden pb-16">
      {/* Background Graphic Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-20 blur-3xl overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500"></div>
        <div className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full bg-emerald-500"></div>
      </div>

      {/* Main Portal Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 flex flex-col items-center">
        
        {/* Avatar Area */}
        <div className="group relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 blur-md opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
          <div className="relative w-36 h-36 md:w-40 md:h-30 rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl bg-slate-900">
            <img 
              src={avatarImg.url} 
              alt="Homerbd" 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 p-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <Sparkles className="w-5 h-5 font-bold" />
          </div>
        </div>

        {/* Title & Brand */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent uppercase font-mono">
            Homerbd
          </h1>
          <p className="mt-2 text-sm md:text-base font-medium tracking-widest text-emerald-400/80 uppercase font-mono">
            Since 1963
          </p>
        </div>

        {/* Portal Core Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-12">
          
          {/* Homerbd Button */}
          <button
            onClick={() => setActiveSection("homerbd")}
            className={`relative group px-6 py-4 rounded-xl border font-bold text-lg transition-all duration-300 flex items-center justify-between overflow-hidden shadow-lg ${
              activeSection === "homerbd"
                ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-teal-500 text-teal-400 shadow-teal-500/10 scale-[1.02]"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              homerbd
            </span>
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
              activeSection === "homerbd" ? "translate-x-1 text-teal-400" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-slate-500"
            }`} />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>

          {/* Skateboard Button */}
          <button
            onClick={() => setActiveSection("skateboard")}
            className={`relative group px-6 py-4 rounded-xl border font-bold text-lg transition-all duration-300 flex items-center justify-between overflow-hidden shadow-lg ${
              activeSection === "skateboard"
                ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-teal-500 text-teal-400 shadow-teal-500/10 scale-[1.02]"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Flame className="w-5 h-5" />
              Skateboard
            </span>
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
              activeSection === "skateboard" ? "translate-x-1 text-teal-400" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-slate-500"
            }`} />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>

          {/* Geekeries Button */}
          <button
            onClick={() => setActiveSection("geekeries")}
            className={`relative group px-6 py-4 rounded-xl border font-bold text-lg transition-all duration-300 flex items-center justify-between overflow-hidden shadow-lg ${
              activeSection === "geekeries"
                ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-teal-500 text-teal-400 shadow-teal-500/10 scale-[1.02]"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Gamepad2 className="w-5 h-5" />
              Geekeries
            </span>
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
              activeSection === "geekeries" ? "translate-x-1 text-teal-400" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-slate-500"
            }`} />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>

        </div>

        {/* Dynamic Showcase Content Card */}
        <div className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
          
          {/* Homerbd Section */}
          {activeSection === "homerbd" && (
            <div className="space-y-6 animate-fade-in">
              {/* Bandeau portfolio Homerbd */}
              <a
                href="https://homerbdporfolio.pages-perso.free.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group/banner"
                aria-label="Portfolio Homerbd"
              >
                <img
                  src={bandoPortfolio.url}
                  alt="Portfolio Homerbd"
                  loading="lazy"
                  className="h-[120px] w-auto mx-auto rounded-lg border border-slate-800/80 shadow-lg group-hover/banner:border-teal-500/40 transition-all duration-300"
                />
              </a>

              {/* Bandeau albums photos Homerbd */}
              <a
                href="https://homerbdporfolio.pages-perso.free.fr/photoshomerbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group/banner"
                aria-label="Albums Photos Homerbd"
              >
                <img
                  src={bandoAlbums.url}
                  alt="Albums Photos Homerbd"
                  loading="lazy"
                  className="h-[120px] w-auto mx-auto rounded-lg border border-slate-800/80 shadow-lg group-hover/banner:border-teal-500/40 transition-all duration-300"
                />
              </a>

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <BookOpen className="w-6 h-6 text-teal-400" />
                <h2 className="text-xl font-bold font-mono tracking-wide text-slate-200">
                  Contacts & Réseaux
                </h2>
              </div>
              
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Retrouvez mes différents canaux de communication et réseaux sociaux pour me contacter ou suivre mes actualités.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Email */}
                <a 
                  href="mailto:homerbd@gmail.com"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        Email homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">homerbd@gmail.com</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>

                {/* Instagram */}
                <a 
                  href="http://instagram.com/homerbd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        Instagram homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">@homerbd</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/homerbd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        Facebook homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">homerbd</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@homerbd_ftbxmag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        TikTok homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">@homerbd_ftbxmag</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>

                {/* Portfolio */}
                <a 
                  href="https://homerbdporfolio.pages-perso.free.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        Portfolio vidéos homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">@homerbd</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>

                {/* Albums Photos */}
                <a 
                  href="https://homerbdporfolio.pages-perso.free.fr/photoshomerbd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        Albums Photos Homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">photoshomerbd</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>

                {/* YouTube */}
                <a 
                  href="http://youtube.com/@homerbd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-r hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300 group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-all duration-300">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-teal-400 transition-colors">
                        YouTube homerbd
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">@homerbd</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover/item:text-teal-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>
              </div>

              {/* Galerie photos - mode vignette */}
              <div className="pt-2">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                  <a
                    href={albumsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/link"
                    aria-label="Galerie photos — ouvrir les albums photos Homerbd"
                  >
                    <ImageIcon className="w-6 h-6 text-teal-400" />
                    <h3 className="text-lg font-bold font-mono tracking-wide text-slate-200 group-hover/link:text-teal-400 transition-colors">
                      Galerie photos
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-teal-400 group-hover/link:translate-x-0.5 transition-all" />
                  </a>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {photos.map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightbox(i)}
                      className="group/photo relative aspect-square overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      aria-label={p.caption}
                    >
                      <img
                        src={p.src}
                        alt={p.caption}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/photo:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Skateboard Section */}
          {activeSection === "skateboard" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Flame className="w-6 h-6 text-teal-400" />
                <h2 className="text-xl font-bold font-mono tracking-wide text-slate-200">
                  Skateboard Culture
                </h2>
              </div>

              {/* Slogan / Résumé */}
              <div className="bg-teal-950/20 border border-teal-900/40 rounded-xl p-4 md:p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
                <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium italic">
                  "Homerbd skateboarder depuis 1976 ; chef du FTBX Mag depuis 1988 ; patron de Sk8picardie, vieux skaters de France et Paris Old School Skate Jam"
                </p>
              </div>

              {/* Links Grid */}
              <div className="space-y-6">
                
                {/* FTBX & Association */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-400/80 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    FTBX & Association
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {/* Portail Asso FTBX */}
                    <a 
                      href="http://portailasso.ftbx.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] bg-teal-950 text-teal-400 border border-teal-900/60 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                            Portail Officiel
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-teal-400 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-teal-400 transition-colors mt-2 text-sm md:text-base">
                          Portail Asso FTBX Skateboard Générations
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-mono">portailasso.ftbx.net</span>
                    </a>

                    {/* Asso FTBX */}
                    <a 
                      href="http://asso.ftbx.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] bg-teal-950 text-teal-400 border border-teal-900/60 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                            Association
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-teal-400 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-teal-400 transition-colors mt-2 text-sm md:text-base">
                          Asso FTBX skateboard générations
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-mono">asso.ftbx.net</span>
                    </a>

                    {/* FTBX Mag */}
                    <a 
                      href="http://www.ftbx.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                            Magazine
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-emerald-400 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-emerald-400 transition-colors mt-2 text-sm md:text-base">
                          FTBX Mag
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-mono">www.ftbx.net</span>
                    </a>

                    {/* Archives FTBX */}
                    <a 
                      href="http://archives.ftbx.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                            Rétro / Histoire
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-slate-300 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-slate-300 transition-colors mt-2 text-sm md:text-base">
                          Archives FTBX
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-mono">archives.ftbx.net</span>
                    </a>
                  </div>
                </div>

                {/* Sk8picardie */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-400/80 flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5" />
                    Sk8picardie & Réseaux
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {/* Website */}
                    <a 
                      href="http://sk8picardie.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] bg-teal-950 text-teal-400 border border-teal-900/60 px-1.5 py-0.5 rounded font-mono uppercase font-semibold">
                            Site Web
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-teal-400" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-teal-400 text-xs md:text-sm mt-2 transition-colors">
                          Sk8picardie
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-2 font-mono">sk8picardie.net</span>
                    </a>

                    {/* YouTube */}
                    <a 
                      href="https://www.youtube.com/c/sk8picardiefr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] bg-red-950 text-red-400 border border-red-900/60 px-1.5 py-0.5 rounded font-mono uppercase font-semibold">
                            YouTube
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-red-400" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-red-400 text-xs md:text-sm mt-2 transition-colors">
                          YouTube Sk8picardie
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-2 font-mono">@sk8picardiefr</span>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/sk8picardiefr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] bg-teal-950 text-teal-400 border border-teal-900/60 px-1.5 py-0.5 rounded font-mono uppercase font-semibold">
                            Instagram
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-teal-400" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-teal-400 text-xs md:text-sm mt-2 transition-colors">
                          Instagram Sk8picardie
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-2 font-mono">@sk8picardiefr</span>
                    </a>
                  </div>
                </div>

                {/* Communauté & Événements */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-400/80 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    Communauté & Événements (Facebook)
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {/* Vieux Skaters de France */}
                    <a 
                      href="https://www.facebook.com/vieuxskatersdefrance/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] bg-teal-950 text-teal-400 border border-teal-900/60 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                            Groupe Facebook
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-teal-400 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-teal-400 transition-colors mt-2 text-sm md:text-base">
                          Vieux Skaters de France
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-mono">/vieuxskatersdefrance</span>
                    </a>

                    {/* Paris Old School Skate Jam */}
                    <a 
                      href="https://www.facebook.com/ParisOldSchoolSkateJam/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex flex-col justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-teal-500/30 hover:bg-gradient-to-tr hover:from-teal-950/20 hover:to-slate-900/60 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                            Événement FB
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-emerald-400 transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-200 group-hover/link:text-emerald-400 transition-colors mt-2 text-sm md:text-base">
                          Paris Old School Skate Jam
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-mono">/ParisOldSchoolSkateJam</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Geekeries Section */}
          {activeSection === "geekeries" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Gamepad2 className="w-6 h-6 text-teal-400" />
                <h2 className="text-xl font-bold font-mono tracking-wide text-slate-200">
                  Geekeries & Tech Rétro
                </h2>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Fasciné par le matériel informatique vintage, la restauration de consoles rétro et la personnalisation hardware. Un amour assumé pour les pixels et la belle mécanique.
              </p>

              {/* Webmacouille Site Link */}
              <div className="relative group/link overflow-hidden rounded-xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900/50 to-slate-900/80 p-5 shadow-lg shadow-teal-950/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none group-hover/link:bg-teal-500/10 transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] bg-teal-950 text-teal-400 border border-teal-900/60 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                      Site Personnel Historique
                    </span>
                    <h4 className="font-bold text-slate-200 text-base md:text-lg group-hover/link:text-teal-400 transition-colors mt-1.5">
                      Webmacouille — Le repaire retro
                    </h4>
                    <p className="text-xs text-slate-400">
                      Un plongeon dans l'histoire, la bidouille, et d'autres projets passionnés de tech.
                    </p>
                  </div>
                  <div className="flex flex-col items-stretch sm:items-end gap-1 shrink-0">
                    <a
                      href="https://webmacouille.pages-perso.free.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md shadow-teal-500/10"
                    >
                      Explorer le site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <span className="text-[10px] text-slate-500 text-center sm:text-right mt-1 font-mono italic">
                      D'autres liens à venir...
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-400/80 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  Collection & Projets Actuels
                </h3>

                <div className="grid gap-3">
                  {geekItems.map((item, i) => {
                    const IconComp = item.icon;
                    return (
                      <div key={i} className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-teal-950/50 border border-teal-900/40 text-teal-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex justify-between items-start gap-2 flex-wrap">
                            <h4 className="font-semibold text-slate-200 text-sm md:text-base">
                              {item.title}
                            </h4>
                            <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-900/60 px-2 py-0.5 rounded-full font-mono">
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">
                            {item.type} • Lancé en {item.year}
                          </p>
                          <p className="text-xs text-slate-400 mt-1.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Social / Contact quick links */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-500/60" /> Page mise à jour en octobre 2026
            </span>
            <span className="flex items-center gap-1.5">
              Fait avec passion <Heart className="w-3 h-3 text-emerald-500 fill-current" />
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 animate-fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-teal-400 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full">
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].caption}
              className="w-full max-h-[80vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-400 font-mono">
              {photos[lightbox].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
