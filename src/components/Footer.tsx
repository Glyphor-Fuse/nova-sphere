import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold tracking-tighter italic">
              NOVA<span className="text-primary">SPHERE</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              The apex of immersive nightlife entertainment.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">TikTok</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-xs text-muted-foreground text-center md:text-right">
            © 2024 Nova Sphere Las Vegas.<br />
            Designed for the future of sound.
          </div>
        </div>
      </div>
    </footer>
  );
}
