import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Mario Shots Foundation team.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Have questions or want to get involved? We're here to help you connect with the
          Mario Shots Foundation.
        </p>
      </div>

      <ContactForm />

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <div className="h-96 bg-zinc-200 rounded-lg overflow-hidden">
          {/* In a real app, this would be a Google Maps or Mapbox integration */}
          <div className="h-full w-full flex items-center justify-center bg-zinc-200">
            <div className="text-center">
              <div className="mx-auto mb-2 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="text-lg text-zinc-600">
                Studio Sitini Hub, 123 Photography Lane, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">How can I join a workshop?</h3>
            <p className="text-zinc-600">
              You can sign up for our workshops through the Events page. Registration opens approximately
              one month before each scheduled workshop.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Do I need to bring my own camera?</h3>
            <p className="text-zinc-600">
              No, we provide cameras and equipment for participants who don't have their own. Just bring
              your creativity and enthusiasm!
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">How can I apply for a grant?</h3>
            <p className="text-zinc-600">
              Grant applications are accepted quarterly. Visit our Programs page for detailed
              information on the application process and requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Can I volunteer as a mentor?</h3>
            <p className="text-zinc-600">
              Yes! We're always looking for experienced photographers to mentor our participants.
              Fill out the volunteer form on our Volunteer page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
