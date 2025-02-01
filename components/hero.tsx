import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 bg-gray-100 pixel-bg">
      <div className="container mx-auto px-4 text-center">
        <div className="w-32 h-32 mx-auto mb-8 bg-gray-300 pixel-borders pixel-shadow overflow-hidden">
          <img
            src="/placeholder.svg?height=128&width=128"
            alt="Pixelated Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 pixel-text text-primary">John Doe</h1>
        <p className="text-xl mb-8 pixel-text">Pixel Artist & Web Developer</p>
        <Button asChild className="pixel-borders pixel-shadow">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

