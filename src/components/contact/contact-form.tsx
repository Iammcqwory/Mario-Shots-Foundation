"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Contact Information */}
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-zinc-600">Studio Sitini Hub</p>
                <p className="text-zinc-600">123 Photography Lane</p>
                <p className="text-zinc-600">Nairobi, Kenya</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-zinc-600">+254 700 000 000</p>
                <p className="text-zinc-600 text-sm">(Mon-Fri, 9AM-5PM)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-zinc-600">info@marioshotsfoundation.org</p>
                <p className="text-zinc-600 text-sm">(We respond within 48 hours)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-1">Hours</h3>
                <p className="text-zinc-600">Monday - Friday: 9AM - 5PM</p>
                <p className="text-zinc-600">Saturday: 10AM - 2PM (By appointment)</p>
                <p className="text-zinc-600">Sunday: Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="bg-green-100 text-green-800 rounded-full p-3 inline-flex mb-4">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-zinc-600 mb-6">
                  Thank you for contacting the Mario Shots Foundation. We'll get back to you shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
