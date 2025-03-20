import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Proyectos | Logisoft",
  description:
    "Explora nuestros proyectos más destacados y descubre cómo transformamos ideas en soluciones de software innovadoras.",
};

export default function ProyectosPage() {
  const proyectos = [
    {
      id: 1,
      title: "Sistema de Gestión para Empresa Logística",
      excerpt:
        "Desarrollo de una plataforma integral que optimizó la gestión de rutas, inventario y seguimiento en tiempo real para una empresa líder en logística.",
      date: "Marzo, 2023",
      cliente: "LogiExpress S.A.",
      categoria: "Logística",
      image: "/img/blog1.jpg",
      slug: "sistema-gestion-logistica",
      tecnologias: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Aplicación Web para Sector Financiero",
      excerpt:
        "Plataforma financiera que permite el análisis de datos en tiempo real, gestión de portafolios y automatización de informes regulatorios.",
      date: "Enero, 2023",
      cliente: "FinTech Solutions",
      categoria: "Finanzas",
      image: "/img/blog2.jpg",
      slug: "app-web-finanzas",
      tecnologias: ["Angular", "Python", "AWS"]
    },
    {
      id: 3,
      title: "E-commerce para Cadena de Retail",
      excerpt:
        "Implementación completa de tienda online con integración a sistemas ERP existentes, pasarelas de pago y módulos personalizados de marketing.",
      date: "Noviembre, 2022",
      cliente: "Retail Global",
      categoria: "E-commerce",
      image: "/img/blog3.jpg",
      slug: "ecommerce-retail",
      tecnologias: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      id: 4,
      title: "App Móvil para Sector Salud",
      excerpt:
        "Aplicación móvil que facilita la gestión de citas médicas, acceso a historiales clínicos y seguimiento de tratamientos para pacientes.",
      date: "Octubre, 2022",
      cliente: "HealthTech Solutions",
      categoria: "Salud",
      image: "/img/blog4.jpg",
      slug: "app-movil-salud",
      tecnologias: ["React Native", "Firebase", "Node.js"]
    },
  ];

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
                Nuestros <span className="text-blue-400">Proyectos</span>
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
              <p className="max-w-[900px] text-gray-100 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed mt-6">
                Explora cómo hemos ayudado a empresas a transformar sus ideas en soluciones de software innovadoras y efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group flex flex-col h-full overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={proyecto.image || "/api/placeholder/800/450"}
                    alt={proyecto.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span key={index} className="inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{proyecto.date}</span>
                    <span>•</span>
                    <span>{proyecto.categoria}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{proyecto.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">
                    {proyecto.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Cliente: <span className="font-semibold">{proyecto.cliente}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium inline-flex items-center">
              Ver más proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Contacto para Proyectos */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Estamos listos para ayudarte a convertir tu idea en realidad. Nuestro equipo de expertos en desarrollo de software puede crear soluciones personalizadas que impulsen el crecimiento de tu negocio.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Soluciones personalizadas para tu negocio</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tecnologías de vanguardia</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acompañamiento durante todo el proceso</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Cuéntanos sobre tu proyecto</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">Nombre</label>
                    <input
                      id="nombre"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tu nombre"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="tu@email.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-medium">Empresa</label>
                  <input
                    id="empresa"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Nombre de tu empresa"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">Descripción del proyecto</label>
                  <textarea
                    id="mensaje"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Cuéntanos brevemente sobre tu proyecto y tus necesidades"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
                  Enviar consulta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}