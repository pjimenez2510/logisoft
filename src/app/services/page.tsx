import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Servicios | Empresa Innovadora",
  description:
    "Descubre nuestra amplia gama de servicios diseñados para impulsar tu negocio.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Nuestros Servicios
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos soluciones integrales diseñadas para impulsar el
                crecimiento y éxito de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        id="consultoria"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:gap-24">
            {/* Service 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Servicio Destacado
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Consultoría Estratégica
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Asesoramiento experto para optimizar tus procesos de negocio
                    y maximizar resultados.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Análisis de mercado y competencia</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Planificación estratégica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Optimización de procesos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestión del cambio</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=350&width=600"
                    alt="Consultoría Estratégica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div
              className="grid gap-6 lg:grid-cols-2 lg:gap-12"
              id="desarrollo"
            >
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=350&width=600"
                    alt="Desarrollo Tecnológico"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Innovación Digital
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Desarrollo Tecnológico
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Soluciones digitales a medida que transforman la manera en
                    que operas.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Desarrollo de aplicaciones web y móviles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Sistemas de gestión empresarial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Integración de sistemas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Soluciones en la nube</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12" id="marketing">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Visibilidad Online
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Marketing Digital
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Estrategias efectivas para aumentar tu visibilidad online y
                    atraer nuevos clientes.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>SEO y SEM</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Marketing de contenidos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestión de redes sociales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Email marketing</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=350&width=600"
                    alt="Marketing Digital"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12" id="gestion">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=350&width=600"
                    alt="Gestión de Proyectos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Eficiencia Operativa
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Gestión de Proyectos
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Coordinación profesional para asegurar que tus proyectos se
                    completen a tiempo y dentro del presupuesto.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Planificación y seguimiento de proyectos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestión de recursos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Control de calidad</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Evaluación y reportes</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para impulsar tu negocio?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo nuestros servicios pueden
                ayudarte a alcanzar tus objetivos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100">
                  Contáctanos ahora
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
