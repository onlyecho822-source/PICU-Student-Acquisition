import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Clock, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Certificate in Biblical Studies",
      price: "$499",
      duration: "3-4 months",
      description: "Build a strong foundation in Scripture with this comprehensive introduction to biblical studies.",
      courses: ["Old Testament Survey", "New Testament Survey", "Biblical Interpretation", "Bible Study Methods"],
      ideal: "New believers, Sunday school teachers, curious learners",
    },
    {
      title: "Certificate in Christian Leadership",
      price: "$699",
      duration: "4 months",
      description: "Develop essential leadership skills grounded in biblical principles for ministry and marketplace.",
      courses: ["Leadership Principles", "Team Building", "Vision Casting", "Conflict Resolution"],
      ideal: "Small group leaders, volunteers, aspiring ministry leaders",
    },
    {
      title: "Certificate in Chaplaincy Basics",
      price: "$799",
      duration: "4-5 months",
      description: "Prepare for volunteer or professional chaplaincy in hospitals, prisons, and other settings.",
      courses: ["Introduction to Chaplaincy", "Crisis Intervention", "Pastoral Care Basics", "Ethics in Ministry"],
      ideal: "Hospital volunteers, prison ministry workers, retirees",
    },
    {
      title: "Certificate in Ministry Foundations",
      price: "$999",
      duration: "6 months",
      description: "Comprehensive preparation for those considering full-time ministry or church leadership.",
      courses: ["Theology Foundations", "Preaching Basics", "Pastoral Care", "Church Administration"],
      ideal: "Those exploring ministry calling, lay leaders, church staff",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0D3B1F] text-[#FFFFF0] py-16 lg:py-24 relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#C9A227] text-[#0D3B1F] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Tier 4</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Certificate <span className="text-[#C9A227]">Programs</span>
            </h1>
            <p className="text-lg text-[#B8B8A8] leading-relaxed">
              Start your theological education journey with affordable, focused certificate programs. Perfect for personal growth, volunteer ministry, or exploring a calling.
            </p>
          </div>
        </div>
      </section>

      {/* Why Certificates Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F0EDE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D3B1F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Affordable</h3>
              <p className="text-[#5C5C5C]">Starting at just $499, less than a single seminary course</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F0EDE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D3B1F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Flexible</h3>
              <p className="text-[#5C5C5C]">100% online, self-paced learning that fits your schedule</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F0EDE5] rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D3B1F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Pathway</h3>
              <p className="text-[#5C5C5C]">Credits can apply toward doctoral programs when you're ready</p>
            </div>
          </div>

          {/* Certificate Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-[#D4C9A8] hover:shadow-lg transition-shadow">
                <div className="bg-[#0D3B1F] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#C9A227]" />
                      <span className="text-[#FFFFF0] font-semibold">{cert.title}</span>
                    </div>
                    <span className="text-[#C9A227] font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>{cert.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-[#5C5C5C] mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <Clock className="w-4 h-4 text-[#C9A227]" />
                    <span className="text-[#5C5C5C]">{cert.duration}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-2">Courses Included</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.courses.map((course, cIndex) => (
                        <span key={cIndex} className="text-xs bg-[#F0EDE5] text-[#5C5C5C] px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#D4C9A8] pt-4 mb-4">
                    <h4 className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1">Ideal For</h4>
                    <p className="text-sm text-[#0D3B1F]">{cert.ideal}</p>
                  </div>

                  <Link href="/apply">
                    <Button className="w-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      <section className="bg-[#F0EDE5] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready for <span className="text-[#C9A227]">More</span>?
            </h2>
            <p className="text-lg text-[#5C5C5C] mb-8 leading-relaxed">
              Your certificate is just the beginning. When you're ready to take the next step, your credits can apply toward our doctoral programs. Many of our doctoral students started right where you are.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md inline-block">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <div className="text-sm text-[#5C5C5C] uppercase tracking-wide mb-1">Certificate</div>
                  <div className="text-2xl font-bold text-[#0D3B1F]">$499 - $999</div>
                </div>
                <ArrowRight className="w-8 h-8 text-[#C9A227]" />
                <div className="text-center">
                  <div className="text-sm text-[#5C5C5C] uppercase tracking-wide mb-1">Doctorate</div>
                  <div className="text-2xl font-bold text-[#C9A227]">$3,200 - $6,400</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/degrees">
                <Button variant="outline" className="border-[#0D3B1F] text-[#0D3B1F] hover:bg-[#0D3B1F] hover:text-[#FFFFF0]">
                  Explore Doctoral Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#0D3B1F] text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Frequently Asked <span className="text-[#C9A227]">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#F0EDE5] p-6 rounded-lg">
              <h3 className="font-bold text-[#0D3B1F] mb-2">Do I need any prerequisites?</h3>
              <p className="text-[#5C5C5C]">No prerequisites are required for our certificate programs. They are designed for learners at all levels, from new believers to experienced ministry workers.</p>
            </div>
            <div className="bg-[#F0EDE5] p-6 rounded-lg">
              <h3 className="font-bold text-[#0D3B1F] mb-2">How long do I have to complete the program?</h3>
              <p className="text-[#5C5C5C]">You have up to 12 months to complete any certificate program, though most students finish in 3-6 months depending on their pace.</p>
            </div>
            <div className="bg-[#F0EDE5] p-6 rounded-lg">
              <h3 className="font-bold text-[#0D3B1F] mb-2">Will I receive a physical certificate?</h3>
              <p className="text-[#5C5C5C]">Yes! Upon completion, you will receive a professional certificate suitable for framing, along with a digital copy for your records.</p>
            </div>
            <div className="bg-[#F0EDE5] p-6 rounded-lg">
              <h3 className="font-bold text-[#0D3B1F] mb-2">Can I apply these credits toward a doctorate?</h3>
              <p className="text-[#5C5C5C]">Absolutely. Certificate credits can be applied toward our doctoral programs when you're ready to continue your education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0D3B1F] py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#FFFFF0] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Start Your Journey <span className="text-[#C9A227]">Today</span>
          </h2>
          <p className="text-[#B8B8A8] mb-8 max-w-2xl mx-auto">
            For less than the cost of a single seminary course, you can begin building your theological foundation.
          </p>
          <Link href="/apply">
            <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-3">
              Enroll Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
