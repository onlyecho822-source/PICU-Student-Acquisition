import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    tier: "",
    experience: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We will contact you within 24-48 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0D3B1F] text-[#FFFFF0] py-16 lg:py-20 relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Start Your <span className="text-[#C9A227]">Application</span>
            </h1>
            <p className="text-lg text-[#B8B8A8] leading-relaxed">
              Take the first step toward your doctoral degree. Complete the form below and an admissions counselor will contact you within 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Program Tier *</label>
                  <select
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                  >
                    <option value="">Select a program tier</option>
                    <option value="tier1">Tier 1: Honorary Doctorate ($7,500 - $15,000)</option>
                    <option value="tier2">Tier 2: Doctoral Programs ($6,400)</option>
                    <option value="tier3">Tier 3: International Programs ($3,200 - $4,800)</option>
                    <option value="tier4">Tier 4: Certificate Programs ($499 - $999)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Specific Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                  >
                    <option value="">Select a program</option>
                    <optgroup label="Doctoral Programs">
                      <option value="ddiv">Doctor of Divinity (D.Div.)</option>
                      <option value="phd-ministry">PhD in Practical Ministry</option>
                      <option value="phd-counseling">PhD in Christian Counseling</option>
                      <option value="phd-entrepreneurship">PhD in Christian Entrepreneurship</option>
                    </optgroup>
                    <optgroup label="Certificate Programs">
                      <option value="cert-biblical">Certificate in Biblical Studies</option>
                      <option value="cert-leadership">Certificate in Christian Leadership</option>
                      <option value="cert-chaplaincy">Certificate in Chaplaincy Basics</option>
                      <option value="cert-ministry">Certificate in Ministry Foundations</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Ministry/Professional Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white resize-none"
                    placeholder="Briefly describe your ministry or professional background..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">What are your goals for this program?</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white resize-none"
                    placeholder="What do you hope to achieve through this program?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold py-4 text-lg"
                >
                  Submit Application
                </Button>

                <p className="text-sm text-[#5C5C5C] text-center">
                  By submitting this form, you agree to be contacted by EchoPoinsettePower regarding your application.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0D3B1F] p-6 rounded-lg text-[#FFFFF0] sticky top-24">
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose EPP?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">100% online, self-paced learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Affordable tuition starting at $499</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Start anytime, no waiting for semesters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Life experience credit available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">ECAC accredited programs</span>
                  </li>
                </ul>

                <div className="border-t border-[#1A5C32] pt-6">
                  <h4 className="font-semibold mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <a href="tel:1-877-EPP-LEAD" className="flex items-center gap-2 text-[#C9A227] hover:underline">
                      <Phone className="w-4 h-4" />
                      <span>1-877-EPP-LEAD</span>
                    </a>
                    <a href="mailto:info@echopoinsette.com" className="flex items-center gap-2 text-[#C9A227] hover:underline">
                      <Mail className="w-4 h-4" />
                      <span>info@echopoinsette.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
