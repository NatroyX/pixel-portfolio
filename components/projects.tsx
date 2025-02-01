import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  { id: 1, title: "Pixel Game", description: "A retro-style platformer game" },
  { id: 2, title: "Pixel Art Generator", description: "Create pixel art with ease" },
  { id: 3, title: "Pixel Weather App", description: "Check the weather in pixel style" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-200 pixel-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center pixel-text text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="pixel-borders pixel-shadow bg-white">
              <CardHeader>
                <CardTitle className="pixel-text">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-gray-300 mb-4 pixel-borders overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=192&width=320&text=${project.title}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardDescription className="pixel-text">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

