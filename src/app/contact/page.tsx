"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, User, MessageSquare, Facebook, Twitter, Instagram, Loader2, AlertCircle, ChevronDown, Send, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type FormErrors = {
  [key: string]: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "¿Cuál es su metodología de desarrollo de software?",
    answer: "Utilizamos metodologías ágiles (Scrum/Kanban) para garantizar entregas incrementales, transparencia y adaptabilidad a cambios durante el desarrollo del proyecto."
  },
  {
    question: "¿Cuál es el tiempo estimado para desarrollar un proyecto?",
    answer: "El tiempo varía según la complejidad del proyecto. Típicamente, proyectos pequeños toman 4-8 semanas, mientras que proyectos más complejos pueden llevar 3-6 meses. Proporcionamos un cronograma detallado durante la fase de planificación."
  },
  {
    question: "¿Qué tecnologías y stack de desarrollo utilizan?",
    answer: "Trabajamos con tecnologías modernas como React, Next.js, Node.js, Python, y bases de datos SQL/NoSQL. Seleccionamos el stack más adecuado según los requerimientos específicos de cada proyecto."
  },
  {
    question: "¿Ofrecen mantenimiento post-desarrollo?",
    answer: "Sí, proporcionamos servicios de mantenimiento, actualizaciones y soporte técnico después del lanzamiento. Ofrecemos diferentes planes de mantenimiento según las necesidades del cliente."
  },
  {
    question: "¿Cómo gestionan la seguridad en sus desarrollos?",
    answer: "Implementamos las mejores prácticas de seguridad en todo el ciclo de desarrollo, incluyendo encriptación de datos, autenticación segura, y pruebas de vulnerabilidades regulares."
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/logisoft", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/logisoft", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/logisoft", label: "Instagram" }
];

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
  const [expandedFaqs, setExpandedFaqs] = useState(new Array(faqs.length).fill(false));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("form"); // 'form' or 'info'

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
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Mejora con un diseño más atractivo */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-sm">
                <span >Contáctanos</span>
              </h1>
              <p className="max-w-[900px] text-white/90 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed font-light">
                Estamos aquí para responder tus preguntas y ayudarte con tus
                necesidades. Nuestro equipo está listo para asistirte.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-medium text-primary hover:text-primary/90"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enviar mensaje
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver preguntas frecuentes
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
      </section>

      {/* Contact Form and Info - Con pestañas en todas las pantallas */}
      <section id="contact-form" className="w-full py-16 md:py-24 bg-white dark:bg-gray-950 relative">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          {/* Tabs para todas las pantallas */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden mb-8">
              <button
                onClick={() => setActiveTab("form")}
                className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                  activeTab === "form"
                    ? "bg-primary text-white"
                    : "bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                Formulario de Contacto
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${
                  activeTab === "info"
                    ? "bg-primary text-white"
                    : "bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                Información de Contacto
              </button>
            </div>
          </div>

          {/* Contenedor de contenido de pestañas */}
          <div className="max-w-4xl mx-auto">
            {/* Form Column */}
            {activeTab === "form" && (
              <div className="flex flex-col justify-center space-y-6 bg-white dark:bg-gray-950 rounded-xl p-6 shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                    Envíanos un mensaje
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completa el formulario a continuación y nos pondremos en
                    contacto contigo a la brevedad.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                      >
                        Nombre completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="pl-10 py-6 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                      >
                        Correo electrónico
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="pl-10 py-6 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                      >
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+593 XX XXX XXXX"
                          className="pl-10 py-6 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                          pattern="\+593\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                      >
                        Asunto
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Asunto de tu mensaje"
                          className="pl-10 py-6 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      className="min-h-[180px] bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-6 text-base font-medium flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}

            {/* Info Column */}
            {activeTab === "info" && (
              <div className="flex flex-col space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                    Información de contacto
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Puedes contactarnos directamente a través de los siguientes
                    medios o visitar nuestras oficinas.
                  </p>
                </div>
                
                {/* Contacto cards con sombra y bordes */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Av. Los Chasquis, Universidad Técnica de Ambato, Ambato, Ecuador
                    </p>
                  </div>
                  
                  <div className="flex flex-col bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +593 98 765 4321
                    </p>
                  </div>
                  
                  <div className="flex flex-col bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Correo electrónico</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@logisoft.com
                    </p>
                  </div>
                  
                  <div className="flex flex-col bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Horario</h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                      <li className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span>9:00 - 18:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sábado:</span>
                        <span>10:00 - 14:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Domingo:</span>
                        <span>Cerrado</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Mapa con bordes y sombra */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <GoogleMapComponent />
                </div>
                
                {/* Social Media */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Síguenos en redes sociales</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors"
                        aria-label={link.label}
                      >
                        <link.icon className="h-6 w-6 text-primary" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section - Mejorado con animaciones y estilos */}
      <section id="faq-section" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-xl mb-2">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed max-w-2xl">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y procesos de desarrollo.
            </p>
          </div>
          
          <div className="grid gap-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => {
                    const newExpandedState = [...expandedFaqs];
                    newExpandedState[index] = !newExpandedState[index];
                    setExpandedFaqs(newExpandedState);
                  }}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  aria-expanded={expandedFaqs[index]}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaqs[index] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {expandedFaqs[index] && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 overflow-hidden border-t border-gray-100 dark:border-gray-800"
                    >
                      <p className="text-gray-600 dark:text-gray-400 py-5">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          {/* CTA antes del footer */}
          <div className="mt-16 p-8 bg-primary rounded-xl text-white text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">¿No encontraste lo que buscabas?</h3>
            <p className="mb-6">Nuestro equipo está listo para ayudarte con cualquier duda o consulta adicional</p>
            <Button 
              variant="secondary" 
              size="lg"
              className="text-primary hover:text-primary/90 font-medium"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                setActiveTab("form"); // Cambiar al tab de formulario al hacer clic
              }}
            >
              Contáctanos ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}