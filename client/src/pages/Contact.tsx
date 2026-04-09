import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will respond within 24-48 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
              Contact <span className="text-[#C9A227]">Us</span>
            </h1>
            <p className="text-lg text-[#B8B8A8] leading-relaxed">
              Have questions about our programs? Ready to take the next step? We're here to help you on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#FFFFF0] py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0D3B1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D3B1F] mb-1">Phone</h3>
                    <a href="tel:1-877-EPP-LEAD" className="text-[#5C5C5C] hover:text-[#C9A227] transition-colors">
                      1-877-EPP-LEAD
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D3B1F] mb-1">Email</h3>
                    <a href="mailto:info@echopoinsette.com" className="text-[#5C5C5C] hover:text-[#C9A227] transition-colors">
                      info@echopoinsette.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D3B1F] mb-1">Office Hours</h3>
                    <p className="text-[#5C5C5C]">Monday - Friday</p>
                    <p className="text-[#5C5C5C]">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EDE5] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D3B1F] mb-1">Location</h3>
                    <p className="text-[#5C5C5C]">100% Online Institution</p>
                    <p className="text-[#5C5C5C]">United States</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-[#0D3B1F] rounded-lg text-[#FFFFF0]">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/degrees" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">
                      → View Doctoral Programs
                    </a>
                  </li>
                  <li>
                    <a href="/certificates" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">
                      → View Certificate Programs
                    </a>
                  </li>
                  <li>
                    <a href="/apply" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">
                      → Start Your Application
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">
                      → About EchoPoinsettePower
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F0EDE5] p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-[#0D3B1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                        placeholder="Enter your name"
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="tuition">Tuition & Financial Aid</option>
                      <option value="honorary">Honorary Doctorate Inquiry</option>
                      <option value="international">International Student Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0D3B1F] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#D4C9A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold py-4 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0D3B1F] py-12 text-center">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#FFFFF0] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Begin Your <span className="text-[#C9A227]">Journey</span>?
          </h2>
          <p className="text-[#B8B8A8] mb-6">
            Call us now at <a href="tel:1-877-EPP-LEAD" className="text-[#C9A227] font-semibold">1-877-EPP-LEAD</a>
          </p>
        </div>
      </section>
    </div>
  );
}
