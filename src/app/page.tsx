// src/app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header/Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-3">
              <img src="/logo2.svg" alt="Bella Casa Logo" className="w-14 h-14" />
              <h1 className="text-lg md:text-2xl font-bold text-slate-900">
                Bella Casa Inspections
              </h1>
            </div>
          </Link>
          <nav>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Save Money on Your Home Insurance with Wind Mitigation Inspection
            </h2>
            <p className="text-xl text-slate-100 mb-8">
              Louisiana homeowners can save thousands on insurance premiums through our professional wind mitigation surveys
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Schedule Inspection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Why Choose Wind Mitigation Inspection?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Save Money</CardTitle>
                  <CardDescription>
                    Louisiana homeowners can save up to $1,000 or more annually on insurance premiums.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>State Mandated</CardTitle>
                  <CardDescription>
                    Since January 2009, wind mitigation credits are mandated by the Louisiana Department of Insurance.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional Service</CardTitle>
                  <CardDescription>
                    Licensed and certified inspector with extensive experience in wind mitigation surveys.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">About Our Services</h3>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">
              Wind mitigation inspection is a detailed assessment of your home's wind-resistant features. The inspection
              takes roughly an hour and identifies specific construction aspects that help reduce losses in the event of a windstorm.
            </p>
            <p className="text-lg mb-6">
              Our comprehensive inspection includes evaluation of:
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-6">
              <li>Roof covering</li>
              <li>Roof deck attachment</li>
              <li>Roof-to-wall connection</li>
              <li>Secondary water barrier</li>
              <li>Opening protection</li>
              <li>Building code compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h4 className="text-2xl font-semibold mb-6">Licensed & Certified Professional</h4>
            <div className="space-y-2 mb-6">
              <p className="text-lg">License: LHI# 11384</p>
              <p className="text-lg">LSUCCC/OSFM # U02908</p>
            </div>
            <p className="text-lg text-slate-600">Serving Greater New Orleans and surrounding areas</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-600">
            <p>© 2024 Bella Casa Inspections, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}