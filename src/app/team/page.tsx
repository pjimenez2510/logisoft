"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function TeamPage() {

  const teamMembers = [
    {
      id: 6,
      name: "Karen Guatumillo",
      position: "CEO / Fundadora",
      bio: "Especialista en tecnologías web y móviles con más de 10 años de experiencia, Karen lidera Logisoft con visión innovadora y enfoque centrado en el cliente, transformando ideas en soluciones tecnológicas efectivas.",
      image: "/img/karen.jpg",
      social: {
        linkedin: "http://www.linkedin.com/in/karen-guatumillo-9345b7226",
        whatsapp: "+593 99 512 9311",
      },
    },
    {
      id: 5,
      name: "Patricio Jimenez",
      position: "Consultor Senior",
      bio: "Con experiencia en diversas industrias y certificaciones en gestión de proyectos, Patricio proporciona asesoramiento estratégico personalizado para implementar sistemas que maximizan la eficiencia operativa de nuestros clientes.",
      image: "/img/patricio.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/pjimenez2510/",
        whatsapp: "+593 99 086 2306",
      },
    },
    {
      id: 4,
      name: "Alex Lizano",
      position: "Director de Operaciones",
      bio: "Experto en metodologías ágiles y optimización de procesos, Alex asegura que todos los proyectos de Logisoft se entreguen a tiempo y con la más alta calidad, garantizando la satisfacción de nuestros clientes.",
      image: "/img/alex.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/alex-lizano-8b333b226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        whatsapp: "+593 98 773 0252",
      },
    },
    {
      id: 3,
      name: "Santiago Lopez",
      position: "Director de Marketing",
      bio: "Con un enfoque creativo y analítico, Santiago desarrolla estrategias de marketing digital que impulsan la visibilidad de Logisoft y ayuda a nuestros clientes a potenciar su presencia en medios digitales.",
      image: "/img/santiago.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/thiag0/",
        whatsapp: "+593 93 929 4943",
      },
    },
    {
      id: 1,
      name: "Hamilton Jumbo",
      position: "Fundador",
      bio: "Con más de 15 años de experiencia en desarrollo de software, Hamilton ha liderado Logisoft desde su fundación, estableciendo una cultura de innovación continua y excelencia técnica en cada proyecto.",
      image: "/img/hamilton.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/hamilton-jumbo-b24a97330/",
        whatsapp: "+593 99 503 1688",
      },
    },
    {
      id: 2,
      name: "Oscar Ramirez",
      position: "Director de Tecnología",
      bio: "Experto en arquitectura de sistemas y nuevas tecnologías, Oscar lidera nuestro equipo técnico para crear soluciones de software innovadoras y escalables que responden a las necesidades específicas de cada cliente.",
      image: "/img/oscar.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/oscar-ram%C3%ADrez-manzano-b65941226",
        whatsapp: "099 284 9536",
      },
    },
  ];
  
  const formatWhatsAppNumber = (number: string) => {                   
    let formattedNumber = number.replace(/\s+/g, '');
    if (!formattedNumber.startsWith('+')) {
      if (formattedNumber.startsWith('0')) {
        formattedNumber = '+593' + formattedNumber.substring(1);
      } else {
        formattedNumber = '+593' + formattedNumber;
      }
    }
    return formattedNumber;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-[url('/images/pattern.svg')] bg-no-repeat bg-cover"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Nuestro <span className="text-blue-400">Equipo</span>
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
              <p className="max-w-[900px] text-gray-100 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed mt-6">
                Conoce a los profesionales apasionados que hacen posible nuestra misión de desarrollar soluciones de software personalizadas que transforman los negocios de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">Logisoft: Soluciones tecnológicas a la medida</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              En Logisoft nos especializamos en analizar las necesidades específicas de cada cliente para desarrollar soluciones de software 
              personalizadas que optimizan procesos, aumentan la productividad y potencian el crecimiento de su negocio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 shadow-md">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Análisis de Requisitos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Entendemos tu negocio y tus necesidades específicas</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 shadow-md">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Desarrollo a Medida</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creamos soluciones adaptadas a tus requerimientos exactos</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 shadow-md">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Soporte Continuo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Te acompañamos en todo el ciclo de vida de tu software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-blue-700 dark:text-blue-300">Conoce a nuestros especialistas</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Contamos con un equipo multidisciplinario de expertos comprometidos con la excelencia y la innovación tecnológica.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-xl border bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-indigo-500/10 z-10 rounded-lg shadow-inner"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-contain rounded-lg transition-transform group-hover:scale-105" 
                      style={{ 
                        filter: "brightness(1.05) contrast(1.05)", 
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mt-1">{member.position}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto my-3"></div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                  <div className="mt-6 flex space-x-4">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.social.whatsapp && (
                      <Link
                        href={`https://wa.me/${formatWhatsAppNumber(member.social.whatsapp).replace('+', '')}`}
                        className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="sr-only">WhatsApp</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700 dark:text-blue-300">
                  Únete al Equipo Logisoft
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Estamos siempre en busca de talentos apasionados por la tecnología y la innovación. 
                  Si tienes habilidades en desarrollo de software, análisis de sistemas o gestión de proyectos, 
                  queremos conocerte.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ¿Por qué trabajar con nosotros?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-sm font-bold">•</span>
                    <span>Ambiente de trabajo colaborativo y dinámico</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-sm font-bold">•</span>
                    <span>Oportunidades de crecimiento profesional y capacitación continua</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-sm font-bold">•</span>
                    <span>Proyectos desafiantes con tecnologías innovadoras</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-sm font-bold">•</span>
                    <span>Equilibrio entre vida laboral y personal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-sm font-bold">•</span>
                    <span>Paquete de beneficios competitivo</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Ver oportunidades de carrera
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10 rounded-xl"></div>
                <Image
                  src="/img/trabajo.jpg"
                  alt="Únete al Equipo Logisoft"
                  fill
                  className="object-contain rounded-xl transition-transform hover:scale-105" 
                  style={{ filter: "brightness(1.05) contrast(1.05)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}