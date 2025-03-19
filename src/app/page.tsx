import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <Image
            src="/img/imagenDev.jpg"
            alt="Equipo de Desarrollo"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center space-y-6 text-white max-w-xl">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight">
                Desarrollando software con pasión y propósito
              </h1>
              <p className="text-lg">
                Somos un equipo de estudiantes comprometidos con el aprendizaje,
                la innovación y el desarrollo de proyectos reales en el ámbito
                del software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md border text-primary border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    Contáctanos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Nuestros Proyectos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Nuestras Fortalezas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary dark:text-white">
                Por qué destacamos
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Estos son los pilares que guían nuestro trabajo y reflejan
                nuestro compromiso como estudiantes en formación y desarrollo
                constante.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                title: "Colaboración Activa",
                description:
                  "Trabajamos en equipo para lograr soluciones eficientes",
              },
              {
                title: "Aprendizaje Continuo",
                description:
                  "Nos mantenemos actualizados en tecnologías y metodologías.",
              },
              {
                title: "Creatividad Aplicada",
                description:
                  "Transformamos ideas en soluciones que generan impacto real.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary dark:text-white">
                Nuestros Servicios
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ofrecemos una amplia gama de servicios diseñados para impulsar
                tu negocio.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            {[
              {
                title: "Consultoría Estratégica",
                description:
                  "Asesoramiento experto para optimizar tus procesos de negocio y maximizar resultados.",
                link: "/services#consultoria",
              },
              {
                title: "Desarrollo Tecnológico",
                description:
                  "Soluciones digitales a medida que transforman la manera en que operas.",
                link: "/services#desarrollo",
              },
              {
                title: "Marketing Digital",
                description:
                  "Estrategias efectivas para aumentar tu visibilidad online y atraer nuevos clientes.",
                link: "/services#marketing",
              },
              {
                title: "Gestión de Proyectos",
                description:
                  "Coordinación profesional para asegurar que tus proyectos se completen a tiempo y dentro del presupuesto.",
                link: "/services#gestion",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary hover:underline mt-4"
                  >
                    Saber más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary dark:text-white">
                Nuestro Portafolio
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Descubre algunos de nuestros proyectos más destacados.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            {[
              {
                title: "RentCar",
                description: "Sistema de gestión de alquiler de vehículos.",
                image: "/img/project-1.png",
                link: "/portfolio#alpha",
              },
              {
                title: "Livestock Management",
                description: "Sistema de gestión de ganadería.",
                image: "/img/project-2.png",
                link: "/portfolio#beta",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <Link href={project.link}>
                        <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/portfolio">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Ver todo el portafolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Quieres ver lo que somos capaces de hacer?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explora nuestro portafolio y sé testigo de nuestro crecimiento a
                través de cada proyecto.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100">
                  Conócenos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
