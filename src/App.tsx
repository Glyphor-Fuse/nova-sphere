import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Lineup from "@/components/Lineup";
import Technology from "@/components/Technology";
import Booking from "@/components/Booking";
import GuestList from "@/components/GuestList";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster theme="dark" position="top-center" richColors />
        <main className="min-h-screen bg-background text-foreground font-body">
          <Navbar />
          <Hero />
          <Lineup />
          <Technology />
          <Booking />
          <GuestList />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
