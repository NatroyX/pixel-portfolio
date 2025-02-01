import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 pixel-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center pixel-text text-primary">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" className="pixel-borders pixel-shadow" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" className="pixel-borders pixel-shadow" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" className="pixel-borders pixel-shadow" rows={4} />
          </div>
          <Button type="submit" className="w-full pixel-borders pixel-shadow">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

