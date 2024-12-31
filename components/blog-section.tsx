import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Author {
  name: string
  image: string
  initials: string
}

interface BlogPost {
  category: string
  title: string
  excerpt: string
  image: string
  author: Author
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    category: "UI/UX Design",
    title: "Blog post title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
    author: {
      name: "Azunyan U. Wu",
      image: "/user/Avatar.png",
      initials: "AW"
    },
    readTime: "5min read"
  },
  {
    category: "UI/UX Design",
    title: "Blog post title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    author: {
      name: "Veronica D. White",
      image: "/user/Avatar02.png",
      initials: "VW"
    },
    readTime: "5min read"
  },
  {
    category: "UI/UX Design",
    title: "Blog post title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI",
    author: {
      name: "Jesse Pinkman",
      image: "/user/Avatar03.png",
      initials: "JP"
    },
    readTime: "5min read"
  }
]

export default function BlogSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-2 justify-between items-start mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Latest Article</h1>
            <p className="text-gray-600">
              Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at
              varius vel pharetra vel. Enim sed faucibus turpis in eu mi bibendum.
            </p>
          </div>
          <Button 
            variant="default" 
            asChild
            className="rounded-full"
          >
            <Link href="/posts" className="flex items-center gap-2">
              View All Posts
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="group">
            <Link href={`/posts/${index}`} className="block">
              <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover transition-transform group-hover:scale-105"
                  fill
                />
              </div>
              <div className="space-y-3">
                <div className="inline-block text-sm font-medium text-purple-600 mb-2">
                  {post.category}
                </div>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.author.image} alt={post.author.name} />
                    <AvatarFallback>{post.author.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">{post.author.name}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

