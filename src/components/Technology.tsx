import { motion } from 'framer-motion';
import { Zap, Volume2, Monitor, Cpu } from 'lucide-react';

const TECH_FEATURES = [
  {
    title: "16K OMNI-LED",
    description: "The world's highest resolution wrap-around display, covering 360 degrees of your visual field.",
    icon: <Monitor className="h-8 w-8 text-primary" />,
    color: "from-primary/20 to-background-600/10",
    span: "md:col-span-2"
  },
  {
    title: "SPATIAL AUDIO",
    description: "167,000 speaker drivers beam sound directly to your coordinates.",
    icon: <Volume2 className="h-8 w-8 text-secondary" />,
    color: "from-secondary/20 to-background-600/10",
    span: "md:col-span-1"
  },
  {
    title: "HAPTIC FLOORING",
    description: "Feel the bass through your body with infra-sonic vibrations.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    color: "from-background-500/20 to-primary/10",
    span: "md:col-span-1"
  },
  {
    title: "AI ATMOSPHERE",
    description: "Real-time visuals reacting to the DJ's BPM and crowd energy.",
    icon: <Cpu className="h-8 w-8 text-secondary" />,
    color: "from-background-800/20 to-background",
    span: "md:col-span-2"
  }
];

export default function Technology() {
  return (
    <section id="tech" className="py-24 relative bg-background overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter italic text-foreground">
            THE <span className="text-primary">SPHERE</span> TECH
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Beyond virtual reality. This is physical reality, upgraded. Our venue 
            utilizes proprietary processing to redefine live music.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TECH_FEATURES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${item.span} p-8 rounded-3xl border border-border/10 bg-gradient-to-br ${item.color} backdrop-blur-sm flex flex-col justify-between group hover:border-primary/50 transition-colors`}
            >
              <div className="p-3 rounded-2xl bg-background/40 w-fit mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-bold text-foreground tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
