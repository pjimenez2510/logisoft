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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"> 
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-5">
                Sobre Nosotros
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-5">
                Somos <strong className="text-lg">Logisoft</strong> transformando el mundo mediante el desarrollo de software innovador.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-5">
                  Nuestra Historia
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                Fundada en 2024 por seis estudiantes de la <strong>Universidad Técnica de Ambato</strong>, nuestra empresa nació con la misión de ofrecer soluciones tecnológicas accesibles y de impacto. Lo que comenzó como un proyecto universitario se transformó rápidamente en una visión compartida. Con determinación y un enfoque colaborativo, nos dedicamos a crear herramientas que empoderan a individuos y empresas para alcanzar su máximo potencial.
                <br />
                
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-5">
                Hoy, somos más que un equipo de desarrollo; somos una familia de visionarios comprometidos con la excelencia y la creatividad. Cada proyecto y cada cliente representan una oportunidad para crecer y ofrecer soluciones que realmente marquen la diferencia. Nuestro viaje está apenas comenzando, y seguimos enfocados en utilizar el software como herramienta de transformación para un futuro mejor.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/Convenio.webp?height=350&width=600"
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
                  src="/mision.jpeg?height=350&width=600"
                  alt="Misión y Visión"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-5">
                  Conoce nuestros propósitos
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Nuestra Misión</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                    Nuestra misión es transformar la vida de las personas y empresas en Ecuador mediante el desarrollo de software innovador y accesible, que impulse su crecimiento y les permita enfrentar los desafíos del mundo digital con soluciones tecnológicas de vanguardia. Nos comprometemos a generar un impacto positivo en la comunidad ecuatoriana, mejorando la eficiencia, productividad y competitividad en todos los sectores.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Nuestra Visión</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                    Nuestra visión es ser un referente global en la creación de soluciones tecnológicas transformadoras, llevando el poder del software innovador a cada rincón del mundo. Aspiramos a ser líderes en la industria del software, contribuyendo al progreso de las sociedades y mejorando la calidad de vida de las personas, a través de herramientas que permitan un futuro más conectado, eficiente y sostenible.
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
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
