import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Heart, BookOpen, Users, Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0D3B1F] text-[#FFFFF0] py-16 lg:py-24 relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About <span className="text-[#C9A227]">EchoPoinsettePower</span>
            </h1>
            <p className="text-lg text-[#B8B8A8] leading-relaxed">
              A veteran-founded, faith-based educational institution dedicated to transforming lives through accessible, affordable doctoral education.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F0EDE5] px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-[#C9A227]" />
                <span className="text-sm font-medium text-[#0D3B1F]">Veteran-Founded</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Founded by a <span className="text-[#C9A227]">Disabled Combat Veteran</span>
              </h2>
              <p className="text-lg text-[#5C5C5C] mb-6 leading-relaxed">
                EchoPoinsettePower was founded with a mission to serve those who serve. As a disabled Army veteran and wartime service member, our founder understands the unique challenges faced by ministry leaders, veterans, and professionals seeking to advance their education while balancing demanding responsibilities.
              </p>
              <p className="text-lg text-[#5C5C5C] mb-6 leading-relaxed">
                Our programs are designed with flexibility, affordability, and accessibility at their core—because we believe that financial barriers should never stand between a called leader and their credentials.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0D3B1F] rounded-full flex items-center justify-center">
                  <span className="text-[#C9A227] text-2xl">🎖️</span>
                </div>
                <div>
                  <p className="font-semibold text-[#0D3B1F]">Serving Those Who Serve</p>
                  <p className="text-sm text-[#5C5C5C]">Military veterans receive special consideration</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0D3B1F] p-8 rounded-lg text-[#FFFFF0]">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-[#C9A227] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Faith-Centered</h4>
                    <p className="text-sm text-[#B8B8A8]">Christ is at the center of everything we do</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-[#C9A227] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Accessible Education</h4>
                    <p className="text-sm text-[#B8B8A8]">Removing barriers to advanced learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#C9A227] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Community</h4>
                    <p className="text-sm text-[#B8B8A8]">Building a network of kingdom leaders</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-[#C9A227] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-sm text-[#B8B8A8]">Committed to quality in all we do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#F0EDE5] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="text-[#C9A227]">Mission</span>
            </h2>
            <p className="text-xl text-[#5C5C5C] leading-relaxed mb-8">
              To equip and empower ministry leaders, professionals, and called servants with accessible, affordable, and faith-centered doctoral education that transforms lives and advances the Kingdom of God.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                <p className="text-[#5C5C5C]">Online Learning</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>4</div>
                <p className="text-[#5C5C5C]">Program Tiers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Global</div>
                <p className="text-[#5C5C5C]">Student Body</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Accreditation & <span className="text-[#C9A227]">Recognition</span>
              </h2>
            </div>
            <div className="bg-[#0D3B1F] p-8 rounded-lg text-[#FFFFF0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1A5C32] rounded-full flex items-center justify-center border-2 border-[#C9A227]">
                  <span className="text-[#C9A227] font-bold text-xl">ECAC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Echo Christian Accreditation Council</h3>
                  <p className="text-[#B8B8A8]">Faith-Based Educational Standards</p>
                </div>
              </div>
              <p className="text-[#B8B8A8] mb-6 leading-relaxed">
                EchoPoinsettePower is accredited by the Echo Christian Accreditation Council (ECAC), ensuring our programs meet rigorous standards for faith-based theological education. Our accreditation reflects our commitment to academic excellence and spiritual formation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                  <span>Recognized faith-based accreditation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                  <span>Rigorous academic standards</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                  <span>Commitment to spiritual formation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                  <span>Continuous quality improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0D3B1F] py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#FFFFF0] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Join the <span className="text-[#C9A227]">EchoPoinsettePower</span> Family
          </h2>
          <p className="text-[#B8B8A8] mb-8 max-w-2xl mx-auto">
            Discover how our programs can help you fulfill your calling and advance your ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-3">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0D3B1F] bg-transparent font-semibold px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
