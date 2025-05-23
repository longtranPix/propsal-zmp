"use client"

import { useEffect } from "react"
// import Reveal from "reveal.js"
import "reveal.js/dist/reveal.css"

import IntroSlide from "@/components/slides/intro-slide"
import MarketSlide from "@/components/slides/market-slide"
import ChallengesSlide from "@/components/slides/challenges-slide"
import ZaloPotentialSlide from "@/components/slides/zalo-potential-slide"
import MiniAppIntroSlide from "@/components/slides/mini-app-intro-slide"
import AppointmentFeatureSlide from "@/components/slides/appointment-feature-slide"
import ServiceFeatureSlide from "@/components/slides/service-feature-slide"
import PaymentFeatureSlide from "@/components/slides/payment-feature-slide"
import XrayFeatureSlide from "@/components/slides/xray-feature-slide"
import AdditionalFeaturesSlide from "@/components/slides/additional-features-slide"
import ROISlide from "@/components/slides/roi-slide"
import ImplementationSlide from "@/components/slides/implementation-slide"
import ConclusionSlide from "@/components/slides/conclusion-slide"

export default function Home() {

  useEffect(() => {
    import("reveal.js").then((Reveal) => {
      const deck = new Reveal.default({
        hash: true,
        controls: true,
        progress: true,
        center: false,
        transition: "slide",
        width: 1180,
        height: 820,
        margin: 0,
      })
      deck.initialize()
      return () => {
        deck.destroy()
      }
    })

  }, [])

  return (
    <div className="reveal">
      <div className="slides overflow-y-auto">
        <section>
          <IntroSlide />
        </section>
        <section>
          <MarketSlide />
        </section>
        <section>
          <ChallengesSlide />
        </section>
        <section>
          <ZaloPotentialSlide />
        </section>
        <section>
          <MiniAppIntroSlide />
        </section>
        <section>
          <AppointmentFeatureSlide />
        </section>
        <section>
          <ServiceFeatureSlide />
        </section>
        <section>
          <PaymentFeatureSlide />
        </section>
        <section>
          <XrayFeatureSlide />
        </section>
        <section>
          <AdditionalFeaturesSlide />
        </section>
        <section>
          <ROISlide />
        </section>
        <section>
          <ImplementationSlide />
        </section>
        <section>
          <ConclusionSlide />
        </section>
      </div>
    </div>
  )
}
