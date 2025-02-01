import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="bg-gray-800/50 backdrop-blur-sm pixel-borders"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-bold pixel-text text-white mb-4 md:mb-0">
          <span className="text-primary pixel-glow">Pixel</span> Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" className="pixel-borders pixel-hover text-white hover:text-primary" asChild>
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="pixel-borders pixel-hover text-white hover:text-primary" asChild>
                <Link href="/projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="pixel-borders pixel-hover text-white hover:text-primary" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

