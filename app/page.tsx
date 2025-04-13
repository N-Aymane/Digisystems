"use client"

import { ChevronRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import EngagementModel from "@/components/engagement-model"
import TechStack from "@/components/tech-stack"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between">
            <div className="h-14">
            <img
              src="https://digisystems.ma/wp-content/uploads/2024/11/logo-digisys.png"
              alt="digisystems"
              className="h-full object-contain drop-shadow-lg"
            />
            </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#models" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Engagement
            </a>
            <a href="#technologies" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Technologies
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="hidden md:flex bg-gray-900 hover:bg-gray-800 text-white" onClick={scrollToContact}>
            Discutons de votre projet
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
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
        {/* Hero Section */}
        <section className="py-24 md:py-36 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl text-gray-900 animate-fade-in">
                Des solutions numériques sur mesure pour vos projets ambitieux
              </h1>
              <p className="text-gray-600 md:text-xl max-w-[700px] animate-fade-in-delay">
                Experts en développement web, AI, mobile et data, nous accompagnons startups et entreprises dans leurs
                projets innovants.
              </p>
              <Button
                size="lg"
                className="mt-8 animate-fade-in-delay-2 bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToContact}
              >
                Discutons de votre projet
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">Nos Services</h2>
              <div className="w-20 h-1 bg-gray-900 mt-4 mb-6"></div>
              <p className="text-gray-600 mt-4 max-w-[700px]">
                Une approche complète pour répondre à tous vos besoins numériques
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Conception"
                description="Des solutions sur mesure, performantes et innovantes, adaptées à vos besoins métiers."
                icon="Lightbulb"
              />
              <ServiceCard
                title="Conseil"
                description="Nous vous aidons à définir votre stratégie numérique pour atteindre vos objectifs."
                icon="BarChart"
              />
              <ServiceCard
                title="Gestion de Projet"
                description="Approche rigoureuse, respect des délais, qualité optimale."
                icon="ClipboardList"
              />
              <ServiceCard
                title="Réalisation"
                description="Nous assurons la réalisation complète de vos projets, de A à Z."
                icon="Code"
              />
              <ServiceCard
                title="Formation & TMA"
                description="Formations personnalisées + maintenance évolutive de vos applications."
                icon="GraduationCap"
              />
              <ServiceCard
                title="Optimisation & Infogérance"
                description="Performance, sécurité et tranquillité d'esprit garanties."
                icon="Shield"
              />
            </div>
          </div>
        </section>

        {/* Engagement Models Section */}
        <section id="models" className="py-20 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">Modèles d'engagement</h2>
              <div className="w-20 h-1 bg-gray-900 mt-4 mb-6"></div>
              <p className="text-gray-600 mt-4 max-w-[700px]">
                Des solutions flexibles adaptées à vos besoins spécifiques
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EngagementModel
                title="Augmentation d'équipe"
                description="Renforcez vos équipes avec nos experts pour accélérer vos projets et apporter des compétences spécifiques."
              />
              <EngagementModel
                title="TMA (Support continu)"
                description="Bénéficiez d'un support technique continu et d'une maintenance évolutive pour vos applications existantes."
              />
              <EngagementModel
                title="Livraison de projet clé en main"
                description="Confiez-nous l'intégralité de votre projet, de la conception à la livraison finale."
              />
              <EngagementModel
                title="Nearshore"
                description="Profitez d'un développement agile et compétitif avec nos équipes dédiées."
              />
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">Technologies</h2>
              <div className="w-20 h-1 bg-gray-900 mt-4 mb-6"></div>
              <p className="text-gray-600 mt-4 max-w-[700px]">
                Notre expertise couvre un large éventail de technologies modernes
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="space-y-6 lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Un projet ambitieux ? Discutons-en.
                </h2>
                <div className="w-20 h-1 bg-gray-900 hidden lg:block"></div>
                <p className="text-gray-600 md:text-lg max-w-[600px]">
                  Contactez-nous pour échanger sur votre projet et découvrir comment nous pouvons vous accompagner dans
                  sa réalisation.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="h-16 mb-6">
                <img
                  src="https://digisystems.ma/wp-content/uploads/2024/11/logo-digisys.png"
                  alt="digisystems"
                  className="h-full object-contain bg-white p-2 rounded"
                />
              </div>
              <p className="text-sm">Des solutions numériques sur mesure pour vos projets ambitieux.</p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li>55 étage 2, Bureau 14, Angle Lalla Zhira et Boulevard Eucalyptus</li>
                <li>Aïn Sebaa, Casablanca</li>
                <li>Maroc</li>
                <li className="pt-2">+212.(0)5.20.62.99.22</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Liens</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#models" className="hover:text-white transition-colors">
                    Engagement
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="hover:text-white transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Légal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CGV
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>
              © {new Date().getFullYear()} digisystems est une marque enregistrée de Digi Systems & Services SARL AU.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
