import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-background/40 backdrop-blur-xl border border-border/10 px-8 py-3 rounded-full">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-display font-black tracking-tighter italic text-foreground">
            NOVA<span className="text-primary">SPHERE</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-foreground/70">
            <a href="#lineup" className="hover:text-primary transition-colors">Lineup</a>
            <a href="#tech" className="hover:text-primary transition-colors">Technology</a>
            <a href="#booking" className="hover:text-primary transition-colors">VIP</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex text-foreground font-bold hover:bg-background/10">
            LOG IN
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-foreground font-bold px-6 rounded-full shadow-[0_0_20px_rgba(255,0,127,0.4)]">
            BOOK NOW
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
