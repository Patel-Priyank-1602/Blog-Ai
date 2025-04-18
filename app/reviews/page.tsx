import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Star, StarHalf } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Reviews</h1>
              <p className="text-muted-foreground md:text-xl">
                In-depth reviews of the latest tech products and software.
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-8">
            <ReviewCard
              title="Claude 3.5 Sonnet Review: The New Coding Assistant Champion"
              description="We put Claude 3.5 Sonnet through rigorous testing to see if it lives up to the hype as the best AI for coding tasks."
              rating={4.8}
              author="Alex Johnson"
              date="April 16, 2025"
              category="AI"
            />

            <ReviewCard
              title="GitHub Copilot vs Cursor AI: Battle of the IDE Assistants"
              description="A head-to-head comparison of the two leading IDE-integrated AI coding assistants to determine which offers the best developer experience."
              rating={4.5}
              author="Sarah Chen"
              date="April 12, 2025"
              category="Development Tools"
            />

            <ReviewCard
              title="Gemini 2.0 Flash: Google's Answer to GPT-4o"
              description="An in-depth look at Google's latest AI model and how it stacks up against OpenAI's offerings for developers."
              rating={4.0}
              author="Michael Rodriguez"
              date="April 8, 2025"
              category="AI"
            />

            <ReviewCard
              title="Blackbox AI: The Budget-Friendly Coding Assistant You Should Try"
              description="This lesser-known AI coding tool might be the perfect solution for developers on a budget. Here's our comprehensive review."
              rating={3.7}
              author="Jamie Williams"
              date="April 2, 2025"
              category="Development Tools"
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

function ReviewCard({
  title,
  description,
  rating,
  author,
  date,
  category,
}: {
  title: string
  description: string
  rating: number
  author: string
  date: string
  category: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">{category}</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              {rating % 1 !== 0 && <StarHalf className="h-4 w-4 fill-primary text-primary" />}
              {Array.from({ length: Math.floor(5 - rating) }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-muted-foreground" />
              ))}
            </div>
            <span className="text-sm font-medium">{rating.toFixed(1)}/5.0</span>
          </div>
          <span className="text-sm text-muted-foreground">By {author}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="#" className="text-sm font-medium text-primary hover:underline">
          Read full review
        </Link>
      </CardFooter>
    </Card>
  )
}
