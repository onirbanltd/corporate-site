"use client"
import React from "react"
import Hero from "./components/hero/page"
import OurServices from "./components/services/page"
import Trends from "./components/trends/page"

export default function Home() {
  return (
    <><main>
      <Hero />
      <OurServices />
      <Trends />
    </main></>
  )
}
