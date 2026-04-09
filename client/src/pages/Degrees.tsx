import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Globe, CheckCircle, Clock, DollarSign, BookOpen } from "lucide-react";

export default function Degrees() {
  const doctoralPrograms = [
    {
      title: "Doctor of Divinity (D.Div.)",
      focus: "Chaplaincy & Pastoral Care",
      tuition: "$6,400",
      duration: "12-18 months",
      description: "Designed for ministry leaders seeking advanced credentials in pastoral care, chaplaincy, and spiritual leadership.",
      courses: ["Advanced Pastoral Theology", "Crisis Intervention Ministry", "Spiritual Care in Healthcare", "Leadership in Ministry"],
    },
    {
      title: "PhD in Practical Ministry",
      focus: "Ministry Leadership",
      tuition: "$6,400",
      duration: "18-24 months",
      description: "For pastors and church leaders seeking to deepen their theological knowledge and practical ministry skills.",
      courses: ["Church Growth Strategies", "Homiletics & Preaching", "Discipleship Development", "Ministry Administration"],
    },
    {
      title: "PhD in Christian Counseling",
      focus: "Counseling & Psychology",
      tuition: "$6,400",
      duration: "18-24 months",
      description: "Equip yourself to provide faith-based counseling and support to individuals and families in need.",
      courses: ["Biblical Counseling Methods", "Marriage & Family Therapy", "Addiction & Recovery Ministry", "Trauma-Informed Care"],
    },
    {
      title: "PhD in Christian Entrepreneurship",
      focus: "Business & Ministry",
      tuition: "$6,400",
      duration: "18-24 months",
      description: "Integrate faith and business principles to build kingdom-focused enterprises and ministries.",
      courses: ["Faith-Based Leadership", "Nonprofit Management", "Social Enterprise Development", "Stewardship & Finance"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0D3B1F] text-[#FFFFF0] py-16 lg:py-24 relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Doctoral <span className="text-[#C9A227]">Degree Programs</span>
            </h1>
            <p className="text-lg text-[#B8B8A8] leading-relaxed">
              Transform your ministry with a doctoral credential. Our programs are designed for busy professionals who want to advance their education without putting their calling on hold.
            </p>
          </div>
        </div>
      </section>

      {/* Tier 1: Honorary Doctorate */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-[#C9A227] text-[#0D3B1F] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Tier 1</span>
            <Award className="w-6 h-6 text-[#C9A227]" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Honorary <span className="text-[#C9A227]">Doctorate</span>
              </h2>
              <p className="text-lg text-[#5C5C5C] mb-6 leading-relaxed">
                For distinguished leaders whose lifetime of service has already earned them the highest recognition. The Honorary Doctorate celebrates your impact without requiring additional coursework.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D3B1F]">Recognition of Lifetime Achievement</h4>
                    <p className="text-sm text-[#5C5C5C]">Your ministry impact has already earned this honor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D3B1F]">Full Ceremony & Regalia</h4>
                    <p className="text-sm text-[#5C5C5C]">Cap, gown, hood, stole, and professional photography</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D3B1F]">Press Release Package</h4>
                    <p className="text-sm text-[#5C5C5C]">Professional announcement for your network and media</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0D3B1F]">No Coursework Required</h4>
                    <p className="text-sm text-[#5C5C5C]">This is a celebration of work already done</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div>
                  <span className="text-3xl font-bold text-[#C9A227]" style={{ fontFamily: 'Playfair Display, serif' }}>$7,500 - $15,000</span>
                  <p className="text-sm text-[#5C5C5C]">Based on package selected</p>
                </div>
              </div>

              <Link href="/apply">
                <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-3">
                  Apply for Honorary Doctorate
                </Button>
              </Link>
            </div>

            <div className="bg-[#0D3B1F] p-8 rounded-lg text-[#FFFFF0]">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Who Qualifies?</h3>
              <ul className="space-y-3 text-[#B8B8A8]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A227]">•</span>
                  Ministry leaders with 15+ years of service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A227]">•</span>
                  Published authors and speakers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A227]">•</span>
                  Founders of churches or ministries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A227]">•</span>
                  Community leaders with significant impact
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A227]">•</span>
                  Philanthropists and humanitarian workers
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-[#1A5C32]">
                <p className="text-sm italic text-[#C9A227]">
                  "Your work has already earned you a doctorate. Let us make it official."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 2: Doctoral Programs */}
      <section className="bg-[#F0EDE5] py-16 lg:py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-[#0D3B1F] text-[#FFFFF0] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Tier 2</span>
            <GraduationCap className="w-6 h-6 text-[#0D3B1F]" />
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Earned <span className="text-[#C9A227]">Doctoral Programs</span>
            </h2>
            <p className="text-lg text-[#5C5C5C] leading-relaxed">
              For credential seekers ready to advance their ministry with a recognized doctoral degree. Our self-paced, 100% online programs fit your busy schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {doctoralPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-[#D4C9A8] hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-sm text-[#5C5C5C] uppercase tracking-wide">{program.focus}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0D3B1F] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {program.title}
                  </h3>
                  
                  <p className="text-[#5C5C5C] text-sm mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-[#C9A227]" />
                      <span className="font-semibold text-[#0D3B1F]">{program.tuition}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#C9A227]" />
                      <span className="text-[#5C5C5C]">{program.duration}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#D4C9A8] pt-4">
                    <h4 className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-2">Sample Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.courses.map((course, cIndex) => (
                        <span key={cIndex} className="text-xs bg-[#F0EDE5] text-[#5C5C5C] px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F0EDE5] px-6 py-4">
                  <Link href="/apply">
                    <Button className="w-full bg-[#0D3B1F] hover:bg-[#1A5C32] text-[#FFFFF0] font-semibold">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3: International Programs */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-[#1A5C32] text-[#FFFFF0] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Tier 3</span>
            <Globe className="w-6 h-6 text-[#1A5C32]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B1F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                International <span className="text-[#C9A227]">Programs</span>
              </h2>
              <p className="text-lg text-[#5C5C5C] mb-6 leading-relaxed">
                A U.S. doctoral credential for global leaders. Our international programs are designed for ministry leaders around the world who need recognized credentials at an accessible price.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#F0EDE5] p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A227]" style={{ fontFamily: 'Playfair Display, serif' }}>$3,200</div>
                  <div className="text-sm text-[#5C5C5C]">Starting Tuition</div>
                </div>
                <div className="bg-[#F0EDE5] p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A227]" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                  <div className="text-sm text-[#5C5C5C]">Online Learning</div>
                </div>
                <div className="bg-[#F0EDE5] p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A227]" style={{ fontFamily: 'Playfair Display, serif' }}>24/7</div>
                  <div className="text-sm text-[#5C5C5C]">Access Anywhere</div>
                </div>
                <div className="bg-[#F0EDE5] p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#C9A227]" style={{ fontFamily: 'Playfair Display, serif' }}>Global</div>
                  <div className="text-sm text-[#5C5C5C]">Recognition</div>
                </div>
              </div>

              <Link href="/apply">
                <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-3">
                  Apply as International Student
                </Button>
              </Link>
            </div>

            <div className="bg-[#0D3B1F] p-8 rounded-lg text-[#FFFFF0]">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Why International Leaders Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">U.S. Doctoral Credential</h4>
                    <p className="text-sm text-[#B8B8A8]">Internationally recognized degree from an American institution</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">No Visa Required</h4>
                    <p className="text-sm text-[#B8B8A8]">Study from your home country with 100% online delivery</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Affordable Pricing</h4>
                    <p className="text-sm text-[#B8B8A8]">Special rates for international ministry leaders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A227] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Life Experience Credit</h4>
                    <p className="text-sm text-[#B8B8A8]">Your ministry experience counts toward your degree</p>
                  </div>
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
            Ready to Earn Your <span className="text-[#C9A227]">Doctorate</span>?
          </h2>
          <p className="text-[#B8B8A8] mb-8 max-w-2xl mx-auto">
            Speak with an admissions counselor today to find the right program for your calling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-8 py-3">
                Start Your Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0D3B1F] bg-transparent font-semibold px-8 py-3">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
