"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Componente del mapa de Google
function GoogleMapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.24116715457!2d-78.70582225168158!3d-1.3016395278740565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38225e088295f%3A0xb16c26da66e6e4b3!2sUniversidad%20T%C3%A9cnica%20de%20Ambato!5e0!3m2!1ses!2sec!4v1742308183877!5m2!1ses!2sec"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Mensaje enviado", {
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Contáctanos
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos aquí para responder tus preguntas y ayudarte con tus
                necesidades. No dudes en ponerte en contacto con nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Completa el formulario a continuación y nos pondremos en
                  contacto contigo a la brevedad.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+593 XX XXX XXXX"
                        className="pl-10"
                        pattern="\+593\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Asunto
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Asunto de tu mensaje"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Información de contacto
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Puedes contactarnos directamente a través de los siguientes
                  medios.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Av. Los Chasquis, Universidad Técnica de Ambato, Ambato, Ecuador
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      +593 98 765 4321
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Correo electrónico</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      info@logisoft.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <GoogleMapComponent />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Horario de atención</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-500 dark:text-gray-400">
                  <div>Lunes - Viernes</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Sábado</div>
                  <div>10:00 AM - 2:00 PM</div>
                  <div>Domingo</div>
                  <div>Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
