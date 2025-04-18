import { MainNav } from "@/components/main-nav"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            TechInsight
          </Link>
          <MainNav />
          <button className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechInsight</h1>
              <p className="text-muted-foreground md:text-xl">
                Your trusted source for technology news, reviews, and insights.
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TechInsight, we're dedicated to providing clear, unbiased, and in-depth coverage of the technology
                landscape. Our mission is to help our readers navigate the rapidly evolving world of tech through
                thoughtful analysis, comprehensive reviews, and accessible explanations of complex topics.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team consists of experienced technology journalists, developers, and industry experts who are
                passionate about technology and its impact on society. With backgrounds spanning software development,
                AI research, cybersecurity, and product design, our diverse team brings a wealth of knowledge and
                perspectives to every article we publish.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <TeamMember
                  name="Alex Johnson"
                  role="Editor-in-Chief"
                  bio="Former software engineer with 15 years of experience in tech journalism."
                />
                <TeamMember
                  name="Sarah Chen"
                  role="Senior AI Reporter"
                  bio="PhD in Machine Learning with a focus on natural language processing."
                />
                <TeamMember
                  name="Michael Rodriguez"
                  role="Development Tools Analyst"
                  bio="Full-stack developer and open source contributor."
                />
                <TeamMember
                  name="Jamie Williams"
                  role="Product Review Lead"
                  bio="Hardware specialist with background in electrical engineering."
                />
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in thorough research, hands-on testing, and clear communication. Every review undergoes
                rigorous testing, and every article is fact-checked before publication. We maintain editorial
                independence from the companies we cover, ensuring our readers get honest assessments they can trust.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a question, suggestion, or feedback? We'd love to hear from you! Visit our
                <Link href="/contact" className="text-primary hover:underline mx-1">
                  contact page
                </Link>
                to get in touch with our team.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">&copy; 2025 TechInsight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TeamMember({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-xl font-bold text-primary">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-primary mb-2">{role}</p>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>
  )
}
