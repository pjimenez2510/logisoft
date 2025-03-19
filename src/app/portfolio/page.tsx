import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Portafolio | Empresa Innovadora",
  description: "Descubre nuestros proyectos más destacados y casos de éxito.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Nuestro Portafolio
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre algunos de nuestros proyectos más destacados y cómo
                hemos ayudado a nuestros clientes a alcanzar sus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project 1 */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        id="alpha"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Caso de Éxito
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  RentCar
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sistema de gestión de alquiler de vehículos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">El Desafío</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    La empresa necesitaba modernizar sus sistemas obsoletos y
                    mejorar la eficiencia operativa para mantenerse competitiva
                    en un mercado en rápida evolución.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Nuestra Solución</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Desarrollamos e implementamos una plataforma digital
                    integral que automatizó procesos clave, mejoró la
                    colaboración interna y proporcionó análisis de datos en
                    tiempo real.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Resultados</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Aumento del 40% en la productividad, reducción del 25% en
                    los costos operativos y mejora significativa en la
                    satisfacción del cliente.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    Solicitar un proyecto similar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/img/project-1.png"
                  alt="Proyecto Alpha"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900"
        id="beta"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/img/project-2.png"
                  alt="Proyecto Beta"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Innovación
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Livestock Management
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sistema de gestión de ganadería.
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">El Desafío</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    La empresa necesitaba modernizar sus sistemas obsoletos y
                    mejorar la eficiencia operativa para mantenerse competitiva
                    en un mercado en rápida evolución.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Nuestra Solución</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Desarrollamos e implementamos una plataforma digital
                    integral que automatizó procesos clave, mejoró la
                    colaboración interna y proporcionó análisis de datos en
                    tiempo real.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Resultados</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Aumento del 60% en la participación del usuario, incremento
                    del 35% en las conversiones y reconocimiento de la industria
                    por el diseño innovador.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    Solicitar un proyecto similar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a
                convertir tu visión en realidad.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100">
                  Hablemos de tu proyecto
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
