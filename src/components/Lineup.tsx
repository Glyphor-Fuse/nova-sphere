import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const ARTISTS = [
  {
    name: "CYBERPUNK X",
    date: "FRI OCT 24",
    image: "/images/dj-1.png",
    genre: "Techno / Industrial",
    tag: "World Tour"
  },
  {
    name: "NEON MISTRESS",
    date: "SAT OCT 25",
    image: "/images/dj-2.png",
    genre: "Melodic House",
    tag: "Sold Out"
  },
  {
    name: "PRISM VORTEX",
    date: "SUN OCT 26",
    image: "/images/dj-3.png",
    genre: "Hardstyle",
    tag: "Exclusive"
  }
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h3 className="text-primary font-bold tracking-[0.3em] text-sm uppercase">The Lineup</h3>
            <h2 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter text-foreground">
              PRISM <span className="text-muted-foreground/30">EXPERIENCE</span>
            </h2>
          </div>
          <Button variant="link" className="text-primary font-bold tracking-widest text-lg p-0 h-auto">
            VIEW ALL ARTISTS →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border/5 bg-card/20 backdrop-blur-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Refractive Prism Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity bg-[conic-gradient(from_0deg,transparent,rgba(255,0,127,0.4),transparent,rgba(120,81,169,0.4),transparent)] animate-spin-slow" />
                
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/50 backdrop-blur-md border-primary/50 text-foreground font-bold px-3 py-4">
                    {artist.tag}
                  </Badge>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 space-y-4">
                  <div className="space-y-1">
                    <p className="text-primary font-bold text-sm tracking-widest">{artist.date}</p>
                    <h4 className="text-3xl font-display font-bold text-foreground tracking-tight">{artist.name}</h4>
                    <p className="text-foreground/60 text-sm font-medium">{artist.genre}</p>
                  </div>
                  
                  <Button className="w-full bg-background/10 hover:bg-background/20 backdrop-blur-md border border-border/20 text-foreground font-bold py-6 group">
                    <Star className="mr-2 h-4 w-4" />
                    SECURE PASSES
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
