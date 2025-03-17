import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Nosotros | Empresa Innovadora",
  description:
    "Conoce más sobre nuestra empresa y nuestra misión de impulsar negocios.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Sobre Nosotros
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos una empresa comprometida con la excelencia y la
                innovación, dedicada a proporcionar soluciones que impulsan el
                crecimiento de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Nuestra Historia
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Fundada en 2010, nuestra empresa nació con la visión de
                  transformar la manera en que las empresas abordan sus
                  desafíos. Desde entonces, hemos crecido constantemente,
                  expandiendo nuestros servicios y equipo para satisfacer las
                  necesidades cambiantes del mercado.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A lo largo de los años, hemos tenido el privilegio de trabajar
                  con empresas de diversos sectores, desde startups emergentes
                  hasta corporaciones establecidas, ayudándoles a alcanzar sus
                  objetivos y superar sus expectativas.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Nuestra Historia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Misión y Visión"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Misión y Visión
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Nuestra Misión</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Proporcionar soluciones innovadoras y de alta calidad que
                      impulsen el crecimiento y éxito de nuestros clientes,
                      mientras fomentamos un ambiente de trabajo colaborativo y
                      de desarrollo profesional para nuestro equipo.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Nuestra Visión</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Ser reconocidos como líderes en nuestro sector, destacando
                      por nuestra excelencia, innovación y compromiso con la
                      satisfacción del cliente, contribuyendo positivamente a la
                      sociedad y al entorno empresarial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Nuestros Valores
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Los principios que guían nuestras acciones y decisiones cada
                día.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            {[
              {
                title: "Excelencia",
                description:
                  "Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos.",
              },
              {
                title: "Integridad",
                description:
                  "Actuamos con honestidad, transparencia y ética en todas nuestras interacciones.",
              },
              {
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas ideas y soluciones creativas para los desafíos.",
              },
              {
                title: "Colaboración",
                description:
                  "Trabajamos juntos, aprovechando nuestras diversas habilidades y perspectivas.",
              },
              {
                title: "Compromiso",
                description:
                  "Nos dedicamos plenamente a cumplir nuestras promesas y superar expectativas.",
              },
              {
                title: "Responsabilidad",
                description:
                  "Asumimos la responsabilidad de nuestras acciones y su impacto en la sociedad.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
