import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Star, Users } from 'lucide-react';
import { toast } from 'sonner';

export default function Booking() {
  const [loading, setLoading] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Reservation request sent! Our VIP host will contact you shortly.");
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VIP BOTTLE SERVICE
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Experience Nova Sphere from the ultimate vantage point. Elevated platforms, dedicated hosts, and curated bottle menus.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                { icon: <Star className="text-primary" />, text: "Prime mezzanine views of the main stage" },
                { icon: <Users className="text-primary" />, text: "Priority entry for your entire group" },
                { icon: <Star className="text-primary" />, text: "Dedicated VIP host and security" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground/80">
                  <div className="p-2 rounded-full bg-primary/10">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-xl border border-primary/20 p-8 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 blur-3xl rounded-full" />
            
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
                <Input required placeholder="Alexander Nova" className="bg-background border-border/10 h-12 focus:ring-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input required type="date" className="bg-background border-border/10 h-12 pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input required type="number" min="1" max="20" placeholder="4" className="bg-background border-border/10 h-12 pl-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Special Requests</label>
                <textarea 
                  className="w-full min-h-[100px] rounded-md bg-background border border-border/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground"
                  placeholder="Birthday celebration, preferred bottle brands..."
                />
              </div>

              <Button 
                disabled={loading}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                {loading ? "REQUESTING..." : "RESERVE TABLE"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Reservations are subject to approval. A host will contact you within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
