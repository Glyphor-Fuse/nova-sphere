import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function GuestList() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You've been added to the Inner Circle. Watch your inbox.");
    setEmail('');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
              JOIN THE <span className="text-secondary">INNER CIRCLE</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Exclusive pre-sale access, secret lineup reveals, and member-only events.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="vanguard@email.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-background border-border/20 focus:ring-secondary text-lg"
            />
            <Button size="lg" className="h-14 px-8 bg-secondary hover:bg-secondary/80 font-bold text-foreground">
              JOIN NOW
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground">
            By joining, you agree to receive marketing communications from Nova Sphere. 
            Opt-out at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
