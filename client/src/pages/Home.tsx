import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Award, BookOpen, ChevronRight, CheckCircle } from "lucide-react";

export default function Home() {
  const tiers = [
    {
      tier: "Tier 1",
      title: "Honorary Doctorate",
      subtitle: "For Distinguished Leaders",
      price: "$7,500 - $15,000",
      icon: Award,
      features: ["Recognition of lifetime achievement", "Full ceremony & regalia", "Press release package", "No coursework required"],
      color: "#C9A227",
      bgColor: "#0D3B1F",
    },
    {
      tier: "Tier 2",
      title: "Doctoral Programs",
      subtitle: "For Credential Seekers",
      price: "$6,400",
      icon: GraduationCap,
      features: ["D.Div., PhD programs", "100% online, self-paced", "12-18 month completion", "Life experience credit"],
      color: "#0D3B1F",
      bgColor: "#FFFFF0",
    },
    {
      tier: "Tier 3",
      title: "International Programs",
      subtitle: "For Global Leaders",
      price: "$3,200 - $4,800",
      icon: Globe,
      features: ["U.S. doctoral credential", "Worldwide recognition", "Flexible scheduling", "Multi-language support"],
      color: "#0D3B1F",
      bgColor: "#FFFFF0",
    },
    {
      tier: "Tier 4",
      title: "Certificate Programs",
      subtitle: "For Emerging Leaders",
      price: "$499 - $999",
      icon: BookOpen,
      features: ["Biblical Studies", "Christian Leadership", "Chaplaincy Basics", "3-6 month completion"],
      color: "#FFFFF0",
      bgColor: "#722F37",
    },
  ];

  const stats = [
    { value: "100%", label: "Online Learning" },
    { value: "$6,400", label: "Doctoral Tuition" },
    { value: "12-36", label: "Months to Complete" },
    { value: "24/7", label: "Start Anytime" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0D3B1F] text-[#FFFFF0] overflow-hidden">
        {/* Diagonal Gold Stripe */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A227] to-transparent transform skew-x-12" />
        </div>
        
        <div className="container relative py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1A5C32] px-4 py-2 rounded-full mb-6">
              <span className="text-[#C9A227]">🎖️</span>
              <span className="text-sm font-medium tracking-wide">Veteran-Founded Institution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Become a <span className="text-[#C9A227]">Kingdom Leader</span> at EchoPoinsettePower
            </h1>
            
            <p className="text-lg md:text-xl text-[#B8B8A8] leading-relaxed mb-8 max-w-2xl">
              Transform your calling into credentials. Our faith-based doctoral programs are designed for busy ministry leaders, entrepreneurs, and professionals seeking affordable, flexible education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply">
                <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-6 text-lg tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Apply Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/degrees">
                <Button variant="outline" className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0D3B1F] font-semibold px-8 py-6 text-lg tracking-wide bg-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
      </section>

      {/* Stats Bar */}
      <section className="bg-[#FFFFF0] border-b border-[#D4C9A8]">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#5C5C5C] uppercase tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Education that Cultivates <span className="text-[#C9A227]">Christ-Centered Leaders</span>
            </h2>
            <p className="text-lg text-[#5C5C5C] leading-relaxed mb-8">
              At EchoPoinsettePower, we believe that advanced theological education should be accessible, affordable, and flexible. Our mission is to equip ministry leaders with the knowledge and credentials to serve God's kingdom more effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-[#0D3B1F]">
                <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">100% Online</span>
              </div>
              <div className="flex items-center gap-2 text-[#0D3B1F]">
                <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">Start Anytime</span>
              </div>
              <div className="flex items-center gap-2 text-[#0D3B1F]">
                <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">Affordable Tuition</span>
              </div>
              <div className="flex items-center gap-2 text-[#0D3B1F]">
                <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">ECAC Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Tier Programs Section */}
      <section className="bg-[#F0EDE5] py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Find Your <span className="text-[#C9A227]">Path</span>
            </h2>
            <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto">
              Four distinct pathways designed to meet you where you are and take you where God is calling you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300"
                  style={{ backgroundColor: tier.bgColor, color: tier.color === "#FFFFF0" ? "#FFFFF0" : "#2C2C2C" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: tier.color === "#C9A227" ? "rgba(201,162,39,0.2)" : tier.color === "#FFFFF0" ? "rgba(255,255,240,0.2)" : "rgba(13,59,31,0.1)",
                          color: tier.color
                        }}
                      >
                        {tier.tier}
                      </span>
                      <Icon className="w-8 h-8" style={{ color: tier.color }} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: tier.bgColor === "#0D3B1F" || tier.bgColor === "#722F37" ? "#FFFFF0" : "#0D3B1F" }}>
                      {tier.title}
                    </h3>
                    <p className="text-sm mb-4 opacity-80" style={{ color: tier.bgColor === "#0D3B1F" || tier.bgColor === "#722F37" ? "#B8B8A8" : "#5C5C5C" }}>
                      {tier.subtitle}
                    </p>
                    
                    <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: tier.color }}>
                      {tier.price}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm" style={{ color: tier.bgColor === "#0D3B1F" || tier.bgColor === "#722F37" ? "#B8B8A8" : "#5C5C5C" }}>
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={tier.tier === "Tier 4" ? "/certificates" : "/degrees"}>
                      <Button 
                        className="w-full font-semibold tracking-wide"
                        style={{ 
                          backgroundColor: tier.color,
                          color: tier.color === "#C9A227" || tier.color === "#FFFFF0" ? "#0D3B1F" : "#FFFFF0"
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0D3B1F] py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#C9A227] to-transparent" />
        </div>
        
        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFF0] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Begin Your <span className="text-[#C9A227]">Journey</span>?
          </h2>
          <p className="text-lg text-[#B8B8A8] mb-8 max-w-2xl mx-auto">
            Enrollment is open now. Join thousands of ministry leaders who have transformed their calling into credentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-6 text-lg tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Start Your Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0D3B1F] font-semibold px-8 py-6 text-lg tracking-wide bg-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Speak to an Advisor
              </Button>
            </Link>
          </div>
          <p className="text-[#C9A227] mt-6 font-medium">
            Call Now: 1-877-EPP-LEAD
          </p>
        </div>
      </section>
    </div>
  );
}
