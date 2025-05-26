import {
    CheckCircle,
    ChevronRight,
  Code,
  Cpu,
  FileText,
  Globe,
  Layers,
  Lock,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#000000] via-[#111827] to-[#1e3a8a] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Next.js <span className="text-blue-400">Framework</span>
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
              <p className="max-w-[900px] text-gray-100 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed mt-6">
                Next.js es un framework de React ideal para producción. Te permite crear aplicaciones web rápidas y escalables con renderizado híbrido y optimizaciones automáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* What is Next.js */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    ¿Qué es Next.js?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Next.js es un framework de desarrollo web basado en React, desarrollado por Vercel. Su principal objetivo es facilitar la creación de aplicaciones web modernas con un alto rendimiento, brindando soporte tanto para renderizado del lado del servidor (SSR) como generación de sitios estáticos (SSG). Es ampliamente usado por empresas y desarrolladores que buscan escalabilidad, velocidad y optimización SEO.
                  </p>

                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/_sY0ibEa79Q"
                      title="Explicación de Next.js"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Características principales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Renderizado híbrido (SSR, SSG, ISR)",
                        description: "Next.js soporta múltiples estrategias de renderizado para optimizar el rendimiento y SEO. El Incremental Static Regeneration (ISR) permite actualizar páginas estáticas sin reconstruir todo el sitio.",
                        icon: <Server className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Enrutamiento basado en archivos",
                        description: "El sistema de rutas automático basado en la estructura de carpetas en /pages simplifica la navegación. Soporta rutas dinámicas y anidadas con sintaxis intuitiva.",
                        icon: <Globe className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Optimización de imágenes",
                        description: "El componente <Image /> optimiza automáticamente las imágenes (formato, tamaño y carga lazy) mejorando el rendimiento y Core Web Vitals.",
                        icon: <Layers className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "API Routes",
                        description: "Permite crear endpoints backend dentro del mismo proyecto Next.js, eliminando la necesidad de un servidor separado para funciones API básicas.",
                        icon: <Code className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Middleware",
                        description: "Ejecuta lógica antes de que una solicitud sea completada, ideal para redirecciones, reescrituras, autenticación y personalización de respuestas.",
                        icon: <Shield className="h-4 w-4 text-primary" />
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Advantages */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Ventajas frente a otras herramientas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Rendimiento optimizado",
                        description: "Gracias al renderizado híbrido (SSR/SSG/ISR) y optimizaciones automáticas como code splitting.",
                      },
                      {
                        title: "Mejor SEO",
                        description: "Comparado con React puro, por renderizar contenido en el servidor.",
                      },
                      {
                        title: "Despliegue sencillo",
                        description: "Integración perfecta con Vercel para despliegues instantáneos.",
                      },
                      {
                        title: "Menor configuración",
                        description: "Comparado con frameworks como Angular o Gatsby.",
                      },
                      {
                        title: "Arquitectura completa",
                        description: "Frontend + backend (con API Routes) en un solo proyecto.",
                      },
                      {
                        title: "Internacionalización",
                        description: "Soporte nativo para i18n sin librerías adicionales.",
                      },
                    ].map((ventaja, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border bg-slate-50 dark:bg-slate-900"
                      >
                        <h3 className="font-semibold text-lg">
                          {ventaja.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {ventaja.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Functionalities */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Funcionalidades destacadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "getStaticProps",
                        description: "Genera contenido estático en tiempo de build",
                        icon: <FileText />,
                      },
                      {
                        title: "getServerSideProps",
                        description: "Renderiza en cada petición (ideal para datos dinámicos)",
                        icon: <Server />,
                      },
                      {
                        title: "Image Component",
                        description: "Optimiza imágenes automáticamente",
                        icon: <Layers />,
                      },
                      {
                        title: "API Routes",
                        description: "Crea endpoints backend dentro del proyecto",
                        icon: <Code />,
                      },
                      {
                        title: "Middleware",
                        description: "Ejecuta lógica antes del renderizado",
                        icon: <Shield />,
                      },
                      {
                        title: "Layouts",
                        description: "Comparte UI entre páginas",
                        icon: <Cpu />,
                      },
                    ].map((funcionalidad, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 rounded-lg border hover:shadow-md transition-shadow"
                      >
                        <div className="text-3xl mb-2 text-primary bg-primary/10 rounded-full p-2">
                          {funcionalidad.icon}
                        </div>
                        <h3 className="font-semibold">{funcionalidad.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {funcionalidad.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Architecture */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Arquitectura de Next.js
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        name: "/pages",
                        description: "Corazón del enrutamiento. Cada archivo se convierte en una ruta accesible. Rutas dinámicas con [id].js",
                      },
                      {
                        name: "/components",
                        description: "Componentes reutilizables como Navbar, Footer, Cards, etc.",
                      },
                      {
                        name: "/public",
                        description: "Archivos estáticos accesibles desde la raíz del sitio.",
                      },
                      {
                        name: "/styles",
                        description: "Estilos globales o modulares (CSS Modules).",
                      },
                      {
                        name: "/api",
                        description: "Endpoints backend dentro del mismo proyecto.",
                      },
                      {
                        name: "/app",
                        description: "Sistema de rutas moderno con layouts anidados y más control.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="rounded-lg border p-4 bg-slate-50 dark:bg-slate-900">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Integrations */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Integraciones comunes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Vercel",
                        description: "Plataforma de despliegue creada por los desarrolladores de Next.js con soporte para ISR y dominios gratuitos.",
                        icon: <Rocket className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Tailwind CSS",
                        description: "Framework de utilidades CSS para construir interfaces rápidamente con integración nativa.",
                        icon: <Zap className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Auth.js (NextAuth)",
                        description: "Librería de autenticación con soporte para múltiples proveedores (Google, GitHub, etc.).",
                        icon: <Lock className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Prisma ORM",
                        description: "ORM moderno para gestión de bases de datos con TypeScript support.",
                        icon: <Terminal className="h-4 w-4 text-primary" />
                      },
                      {
                        title: "Stripe",
                        description: "Plataforma de pagos con fácil integración mediante API Routes.",
                        icon: <Smartphone className="h-4 w-4 text-primary" />
                      },
                    ].map((integration, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                          {integration.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{integration.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* License */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Licencia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Next.js se distribuye bajo la Licencia MIT, lo que la convierte en una herramienta libre de uso para proyectos personales, académicos o comerciales.
                  </p>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Casos de uso
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Sitios estáticos",
                      description: "Blogs, portfolios y sitios de marketing con SSG"
                    },
                    {
                      title: "Aplicaciones dinámicas",
                      description: "Dashboards, e-commerce con SSR"
                    },
                    {
                      title: "Aplicaciones híbridas",
                      description: "Mezcla de páginas estáticas y dinámicas con ISR"
                    },
                    {
                      title: "Aplicaciones fullstack",
                      description: "Con API Routes para lógica backend"
                    },
                  ].map((useCase, index) => (
                    <div key={index} className="p-3 rounded-lg border bg-slate-50 dark:bg-slate-900">
                      <h3 className="font-semibold">{useCase.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Learning Resources */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Recursos de aprendizaje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      {
                        name: "Documentación oficial",
                        url: "https://nextjs.org/docs"
                      },
                      {
                        name: "Curso de Next.js en Vercel",
                        url: "https://nextjs.org/learn"
                      },
                      {
                        name: "Ejemplos oficiales",
                        url: "https://github.com/vercel/next.js/tree/canary/examples"
                      },
                      {
                        name: "Next.js en YouTube",
                        url: "https://www.youtube.com/c/Nextjs"
                      },
                    ].map((resource, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <ChevronRight className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                            {resource.name}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Best Practices */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Buenas prácticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {[
                      "Usar TypeScript para mayor seguridad",
                      "Separar componentes lógicos",
                      "Optimizar imágenes con el componente Image",
                      "Usar ISR para contenido semi-dinámico",
                      "Implementar layouts compartidos",
                      "Proteger rutas con middleware",
                      "Monitorear Core Web Vitals"
                    ].map((practice, index) => (
                      <li
                        key={index}
                        className="text-sm flex items-center gap-2"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}