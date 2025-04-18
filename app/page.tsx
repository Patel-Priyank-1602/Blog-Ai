"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star, StarHalf, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 ml-auto">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden ml-auto p-0"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default function TechBlog() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (message && !isError) {
      const timeoutId = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [message, isError]);

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkerylr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setMessage("Thank you for your feedback!");
        setIsError(false);
        form.reset();
      } else {
        setMessage("Something went wrong. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="text-xl font-bold text-primary mr-16">
            Priyank_Patel
          </Link>
          <MainNav />
        </div>
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Top Coding AI Tools
              </h1><br/>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Which AI is the Best for Coding in 2025? A Comprehensive Comparison of the Top AI Coding Assistants on the Market Today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the fast-evolving world of software development, AI coding
              assistants have become indispensable tools for developers, from
              beginners to seasoned professionals. These tools streamline
              workflows, boost productivity, and help tackle complex coding
              challenges. But with so many options available, which AI stands out
              as the best for coding? In this blog, we dive into eight popular AI
              tools—ChatGPT, Claude, Grok, Versal, Gemini, GitHub Copilot,
              Blackbox, and Cursor AI—to evaluate their strengths, weaknesses, and
              ideal use cases for coding tasks. Let's find out which one reigns
              supreme in 2025!
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              AI Coding Tools Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AIToolCard
                name="ChatGPT"
                developer="OpenAI"
                color="bg-blue-500"
                description="ChatGPT, powered by models like GPT-4o and o1, is a general-purpose conversational AI that excels in a wide range of tasks, including coding."
                features={[
                  "Code Generation across multiple languages",
                  "Debugging capabilities",
                  "Customizability with APIs and plugins",
                  "Context awareness for moderate codebases",
                ]}
                strengths="Ideal for beginners and general-purpose coding tasks. Great for brainstorming algorithms or generating quick prototypes. Free tier available."
                weaknesses="Limited context window (128K tokens). Occasionally produces incorrect code. Not optimized for real-time IDE integration."
                bestFor="Developers needing a versatile AI for coding, debugging, and learning across various languages."
                rating={4.0}
              />

              <AIToolCard
                name="Claude"
                developer="Anthropic"
                color="bg-emerald-600"
                description="Claude, particularly the Claude 3.5 and 3.7 Sonnet models, is renowned for its strong performance in coding benchmarks and ethical approach."
                features={[
                  "Advanced coding capabilities",
                  "Large context window (200K tokens)",
                  "Ethical guardrails",
                  "File upload support",
                ]}
                strengths="Outperforms many competitors in coding benchmarks. Excellent for large-scale code reviews and architectural planning. Preferred by developers for accuracy."
                weaknesses="Limited multimodal capabilities. Subscription-based with no free tier for advanced models. Usage limits can be restrictive."
                bestFor="Professional developers working on large, complex codebases or in regulated industries."
                rating={4.8}
              />

              <AIToolCard
                name="Grok"
                developer="xAI"
                color="bg-purple-600"
                description="Grok, particularly Grok 3, is designed for technical reasoning and real-time data access, making it a strong contender for coding tasks."
                features={[
                  "Technical reasoning capabilities",
                  "Real-time data access",
                  "DeepSearch Mode",
                ]}
                strengths="Highly effective for technical precision. Competitive with Claude for coding. Free access with limited quotas available."
                weaknesses="Less versatile for non-coding tasks. Image generation capabilities not polished. Relatively new with less community feedback."
                bestFor="Developers needing a technically focused AI with real-time capabilities for algorithmic tasks."
                rating={4.3}
              />

              <AIToolCard
                name="Versal"
                developer="Versal AI"
                color="bg-indigo-600"
                description="Versal AI is an emerging tool focused on collaborative coding and real-time code assistance, leveraging advanced language models."
                features={[
                  "Real-time code collaboration",
                  "Code completion and suggestions",
                  "Team-oriented workflows",
                  "Cross-platform support",
                ]}
                strengths="Strong focus on team collaboration. Intuitive interface for pair programming. Competitive pricing with a free tier."
                weaknesses="Smaller community and fewer integrations compared to Copilot. Limited context for very large codebases."
                bestFor="Development teams needing collaborative coding tools with real-time assistance."
                rating={4.1}
              />

              <AIToolCard
                name="Gemini"
                developer="Google"
                color="bg-amber-500"
                description="Gemini is Google's AI family, with models like Gemini 1.5 Pro and 2.0 Flash optimized for coding, research, and multimodal tasks."
                features={[
                  "Code assistance in multiple languages",
                  "Multimodal inputs analysis",
                  "Large context window (1M tokens)",
                  "Google ecosystem integration",
                ]}
                strengths="Free tier available. Excel in research-heavy coding tasks. Fewer sign-in issues compared to competitors."
                weaknesses="Coding performance lags behind Claude and Grok in complex scenarios. Subpar image generation. Sometimes overly cautious."
                bestFor="Developers in Google's ecosystem or those needing multimodal coding support."
                rating={4.0}
              />

              <AIToolCard
                name="GitHub Copilot"
                developer="GitHub"
                color="bg-teal-600"
                description="GitHub Copilot is a veteran AI coding assistant that integrates directly into IDEs like VS Code, JetBrains, and Visual Studio."
                features={[
                  "Real-time code suggestions",
                  "IDE integration",
                  "Copilot Chat",
                  "Multi-model support",
                ]}
                strengths="Unmatched IDE integration. Cost-effective pricing. Strong for single-line predictions and context-aware suggestions."
                weaknesses="Struggles with large codebases. Suggestions can be incorrect. Occasional bugs or sign-in issues."
                bestFor="Developers seeking a tightly integrated coding assistant for daily programming tasks."
                rating={4.4}
              />

              <AIToolCard
                name="Blackbox"
                developer="Blackbox AI"
                color="bg-slate-800"
                description="Blackbox AI is a lesser-known but promising tool focused on code generation, completion, and debugging across multiple languages."
                features={[
                  "Code autocompletion",
                  "Multi-language support",
                  "Context-aware analysis",
                ]}
                strengths="Lightweight and fast. Competitive with Copilot for smaller projects. Free tier available for hobbyists."
                weaknesses="Less documentation and community support. Limited context for large codebases. Fewer advanced features."
                bestFor="Developers looking for a budget-friendly, code-focused alternative."
                rating={3.7}
              />

              <AIToolCard
                name="Cursor AI"
                developer="Anysphere"
                color="bg-red-600"
                description="Cursor AI is a VS Code fork that reimagines the IDE with AI at its core, using models like GPT-4o, Claude, and its own cursor-small model."
                features={[
                  "Full-context chat",
                  "Code diffs presentation",
                  "Agent mode for multi-step tasks",
                  "Privacy mode",
                ]}
                strengths="Outshines Copilot for large codebases. Familiar VS Code interface. Highly praised pair-programming experience."
                weaknesses="Pro tier is pricier than Copilot. Free tier has strict limits. Relies on external models, increasing costs for heavy users."
                bestFor="Developers working on large projects who want an AI-powered IDE experience."
                rating={4.5}
              />
            </div>
          </section>

          <section className="mb-16">
            <Tabs defaultValue="cards" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  Comparison Table
                </h2>
                <TabsList>
                  <TabsTrigger value="cards">Cards View</TabsTrigger>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="cards" className="mt-0">
                <p className="text-muted-foreground mb-4">
                  Cards view is active. Switch to table view for a detailed
                  comparison.
                </p>
              </TabsContent>

              <TabsContent value="table" className="mt-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>AI Tool</TableHead>
                        <TableHead>Best For</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Context Window
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          IDE Integration
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Free Tier
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Price
                        </TableHead>
                        <TableHead>Key Strength</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">ChatGPT</TableCell>
                        <TableCell>General-purpose coding, learning</TableCell>
                        <TableCell className="hidden md:table-cell">
                          128K tokens
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          No
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $20/month (Plus)
                        </TableCell>
                        <TableCell>Versatility, beginner-friendly</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Claude</TableCell>
                        <TableCell>Large codebases, complex projects</TableCell>
                        <TableCell className="hidden md:table-cell">
                          200K tokens
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          No
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          No
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $20/month (Pro)
                        </TableCell>
                        <TableCell>
                          Coding accuracy, ethical guardrails
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Grok</TableCell>
                        <TableCell>
                          Technical coding, real-time tasks
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Unknown
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          No
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          SuperGrok (TBD)
                        </TableCell>
                        <TableCell>
                          Real-time data, technical reasoning
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Versal</TableCell>
                        <TableCell>Collaborative coding, team workflows</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Unknown
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Partial
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          TBD
                        </TableCell>
                        <TableCell>Real-time collaboration</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Gemini</TableCell>
                        <TableCell>
                          Multimodal coding, Google ecosystem
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          1M tokens (Pro)
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Partial
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          TBD (Advanced)
                        </TableCell>
                        <TableCell>
                          Multimodal inputs, large context
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          GitHub Copilot
                        </TableCell>
                        <TableCell>Daily coding, IDE workflows</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Limited (2K files)
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $10/month (Pro)
                        </TableCell>
                        <TableCell>IDE integration, cost-effective</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Blackbox</TableCell>
                        <TableCell>Budget-friendly code completion</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Unknown
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Partial
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          TBD
                        </TableCell>
                        <TableCell>Fast, lightweight suggestions</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cursor AI</TableCell>
                        <TableCell>Large projects, AI-driven IDE</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Project-wide
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes (built-in)
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Yes (limited)
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $20/month (Pro)
                        </TableCell>
                        <TableCell>
                          Full-context coding, pair-programming
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section className="mb-16">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold tracking-tight">
                  The Verdict: Which AI is Best for Coding?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Choosing the best AI for coding depends on your specific needs,
                  project size, and workflow preferences. Here's a breakdown of
                  the top picks:
                </p>

                <ul className="space-y-3">
                  <VerdictItem
                    title="Best Overall for Coding:"
                    description="Claude (3.5/3.7 Sonnet) takes the crown for its unmatched accuracy, large context window, and ability to handle complex codebases."
                  />
                  <VerdictItem
                    title="Best for IDE Integration:"
                    description="GitHub Copilot excels for developers who prioritize seamless integration with IDEs like VS Code."
                  />
                  <VerdictItem
                    title="Best for Large Codebases:"
                    description="Cursor AI shines for projects requiring full-context awareness, offering a VS Code-like experience with powerful AI features."
                  />
                  <VerdictItem
                    title="Best for Budget-Conscious Developers:"
                    description="Blackbox AI and Gemini (free tier) are great for cost-effective coding."
                  />
                  <VerdictItem
                    title="Best for Real-Time Technical Tasks:"
                    description="Grok 3 is a strong contender for technical coding with real-time data needs."
                  />
                  <VerdictItem
                    title="Best for Collaborative Coding:"
                    description="Versal AI stands out for teams needing real-time collaboration and pair programming support."
                  />
                  <VerdictItem
                    title="Best for Beginners:"
                    description="ChatGPT remains the most accessible for learners and general-purpose coding."
                  />
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Final Thoughts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2025, the AI coding landscape is more competitive than ever, with
              each tool carving out its niche. For most developers, Claude and
              GitHub Copilot are the safest bets for professional-grade coding,
              while Cursor AI is a game-changer for large projects. Grok and
              Gemini offer unique strengths for real-time and multimodal tasks,
              respectively, while ChatGPT and Blackbox cater to beginners and
              budget-conscious users. Versal AI brings a fresh perspective with
              its focus on collaborative coding, making it a great choice for
              team-oriented workflows. Experiment with free tiers where available,
              and consider your project's complexity and IDE preferences when
              choosing.
            </p>
          </section>

          <section className="mb-16">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold tracking-tight">
                  Share Your Thoughts
                </h2>
                <p className="text-muted-foreground">
                  Which AI coding tool are you using, and how's it working for
                  you?
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Your email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email..."
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Your comment
                    </label>
                    <Textarea
                      name="message"
                      id="message"
                      placeholder="Enter your comment here..."
                      className="mt-1 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit">Post Comment</Button>
                  {message && (
                    <p
                      className={`text-sm ${isError ? "text-red-500" : "text-green-500"
                        } mt-2`}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © 2025 Priyank Patel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/Priyank_P16"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="https://www.linkedin.com/in/patel-priyank-945131288/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Patel-Priyank-1602"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface AIToolCardProps {
  name: string;
  developer: string;
  color: string;
  description: string;
  features: string[];
  strengths: string;
  weaknesses: string;
  bestFor: string;
  rating: number;
}

function AIToolCard({
  name,
  developer,
  color,
  description,
  features,
  strengths,
  weaknesses,
  bestFor,
  rating,
}: AIToolCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className={`${color} text-white p-4`}>
        <h3 className="text-xl font-bold">
          {name}{" "}
          <span className="text-sm font-normal opacity-90">by {developer}</span>
        </h3>
      </div>
      <CardContent className="flex-1 p-6 pt-6">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
          <ul className="text-sm space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-sm">Strengths:</h4>
          <p className="text-sm text-muted-foreground">{strengths}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-sm">Weaknesses:</h4>
          <p className="text-sm text-muted-foreground">{weaknesses}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-sm">Best For:</h4>
          <p className="text-sm">{bestFor}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <div className="flex items-center">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
            {rating % 1 !== 0 && (
              <StarHalf className="h-4 w-4 fill-primary text-primary" />
            )}
            {Array.from({ length: Math.floor(5 - rating) }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-muted-foreground" />
            ))}
          </div>
          <span className="text-sm font-medium">{rating.toFixed(1)}/5.0</span>
        </div>
      </CardContent>
    </Card>
  );
}

function VerdictItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start gap-2">
      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div>
        <span className="font-medium">{title}</span> {description}
      </div>
    </li>
  );
}