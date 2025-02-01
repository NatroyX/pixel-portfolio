"use client"

import { motion } from "framer-motion"
import { Loader2 } from 'lucide-react'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="inline-block"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="h-16 w-16 text-primary" />
        </motion.div>
        <motion.h2
          className="mt-4 text-2xl font-bold pixel-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.h2>
        <motion.div
          className="mt-4 h-2 w-48 overflow-hidden rounded-full bg-muted mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-full w-full bg-primary animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  )
}
