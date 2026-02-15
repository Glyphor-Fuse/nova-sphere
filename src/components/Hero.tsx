import { motion } from 'framer-motion';
import { Calendar, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background with Poster Fallback */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="/images/hero-fallback.png"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-4.5 rounded-full bg-background/10 backdrop-blur-md border border-border/20 text-xs font-bold tracking-widest text-primary uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live Now: The Odyssey Tour
          </div>

          <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter italic text-foreground leading-none">
            NOVA<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">SPHERE</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">
            Witness the world's most advanced audiovisual experience. 
            A multi-sensory journey into the heart of sound.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="h-16 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-foreground rounded-full group">
              <Star className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              GET TICKETS
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold text-foreground border-border/20 hover:bg-background/10 rounded-full backdrop-blur-sm">
              VIEW SCHEDULE
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-12 text-sm text-foreground/60 font-medium uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Las Vegas, NV
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-secondary" />
              Nightly 10PM - Late
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
