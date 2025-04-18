import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import Link from "next/link"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            TechInsight
          </Link>
          <MainNav />
          <Button variant="outline" size="icon" className="md:hidden">
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
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Articles</h1>
              <p className="text-muted-foreground md:text-xl">
                Explore our latest articles on technology, AI, and software development.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <ArticleCard
              title="Which AI is the Best for Coding in 2025?"
              description="A comprehensive comparison of the top AI coding assistants in the market today."
              date="April 18, 2025"
              category="AI"
              href="/"
            />
            <ArticleCard
              title="The Future of Web Development: 2025 and Beyond"
              description="Exploring emerging trends and technologies shaping the future of web development."
              date="April 15, 2025"
              category="Web Development"
              href="#"
            />
            <ArticleCard
              title="Quantum Computing: A Beginner's Guide"
              description="Understanding the basics of quantum computing and its potential applications."
              date="April 10, 2025"
              category="Quantum Computing"
              href="#"
            />
            <ArticleCard
              title="The Rise of No-Code Development Platforms"
              description="How no-code platforms are democratizing software development."
              date="April 5, 2025"
              category="Development"
              href="#"
            />
            <ArticleCard
              title="Cybersecurity Best Practices for 2025"
              description="Essential security measures every organization should implement."
              date="March 28, 2025"
              category="Security"
              href="#"
            />
            <ArticleCard
              title="Machine Learning for Predictive Maintenance"
              description="How AI is revolutionizing equipment maintenance across industries."
              date="March 20, 2025"
              category="Machine Learning"
              href="#"
            />
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

function ArticleCard({
  title,
  description,
  date,
  category,
  href,
}: {
  title: string
  description: string
  date: string
  category: string
  href: string
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-col space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">{category}</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter>
        <Link href={href} className="text-sm font-medium text-primary hover:underline">
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}
