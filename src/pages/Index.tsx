import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Film, PenTool, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary glow-primary">
              <Film className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Scriptopia</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#community" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Community</a>
            <Link to="/workspace">
              <Button size="sm" className="rounded-full px-6">Open Studio</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow pt-32 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            {/* Background Glow */}
            <div className="absolute -top-24 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-[100%] bg-primary/20 blur-[120px]" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-accent">AI-Powered Cinematic Forge</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
            >
              Where Your <span className="gradient-text">Reel Minds</span> <br />
              Come to Life.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              The ultimate collaborative platform for modern screenwriters and directors. 
              Draft, storyboard, and iterate with integrated AI insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/workspace">
                <Button size="lg" className="h-14 w-full rounded-full px-10 text-lg glow-primary sm:w-auto">
                  Start Writing Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="h-14 w-full rounded-full px-10 text-lg backdrop-blur-md sm:w-auto">
                  View Demo
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Feature Grid Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: <PenTool className="h-6 w-6" />,
                title: "Dynamic Scripting",
                description: "Industry-standard formatting with real-time collaborative editing."
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "AI Analysis",
                description: "Get feedback on pacing, character arcs, and dialogue instantly."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Production Board",
                description: "Seamlessly transition from script to storyboard and scheduling."
              }
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/5 py-12 text-center text-sm text-muted-foreground">
        <p>© 2026 Scriptopia Reel Minds. Forging the future of cinema.</p>
      </footer>
    </div>
  );
};

export default Index;

