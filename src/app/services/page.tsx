import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Servicios | Empresa Innovadora",
  description:
    "Explora nuestras soluciones tecnológicas diseñadas para impulsar la innovación, el crecimiento y el éxito de tu negocio.",
};

const services = [
  {
    id: "consultoria",
    title: "Consultoría en Transformación Digital",
    description:
      "Optimiza tus procesos empresariales con estrategias digitales avanzadas y toma decisiones informadas con datos en tiempo real.",
    highlights: [
      "Análisis de mercado y competencia",
      "Optimización de procesos",
      "Estrategias de transformación digital",
      "Automatización empresarial",
    ],
    image: "/img-services/consultoria.webp",
    tag: "Estrategia y Crecimiento",
  },
  {
    id: "desarrollo",
    title: "Desarrollo de Software Personalizado",
    description:
      "Creamos soluciones tecnológicas a medida, desde aplicaciones Web hasta aplicaciones móviles empresariales.",
    highlights: [
      "Desarrollo de aplicaciones web y móviles",
      "Sistemas de gestión empresarial",
      "Integración de APIs y microservicios",
      "Integración con sistemas existentes",
    ],
    image: "/img-services/software_development.webp",
    tag: "Innovación Digital",
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad y Protección de Datos",
    description:
      "Garantizamos la seguridad de tu infraestructura tecnológica con auditorías y el uso de protocolos avanzados.",
    highlights: [
      "Pruebas y auditoría de seguridad informática",
      "Protección contra ataques cibernéticos",
      "Cifrado de datos y cumplimiento normativo",
      "Implementación de firewalls y sistemas de protección",
    ],
    image: "/img-services/ciberseguridad.jpg",
    tag: "Seguridad Digital",
  },
  {
    id: "inteligencia-artificial",
    title: "Inteligencia Artificial y Automatización",
    description:
      "Implementamos soluciones basadas en IA para mejorar la eficiencia y la toma de decisiones en tu empresa.",
    highlights: [
      "Modelos de machine learning",
      "Automatización con IA generativa",
      "Procesamiento de lenguaje natural",
      "Análisis predictivo y big data",
    ],
    image: "/img-services/inteligencia-artificial.jpg",
    tag: "Tecnología Avanzada",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-24 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"> 
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-5">
                Nuestros Servicios
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-5">
                Explora nuestras soluciones tecnológicas diseñadas para impulsar la innovación, el crecimiento y el éxito de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <section className="w-full py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-12 grid gap-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex flex-col space-y-4">
                <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-lg">{service.tag}</span>
                <h2 className="text-3xl font-bold sm:text-4xl">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="mt-4 bg-primary text-white hover:bg-primary/90 px-6 py-2 text-lg font-medium rounded-md flex items-center">
                    Más información <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src={service.image} alt={service.title} width={600} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-20 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"> 
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white md:text-5xl">
                ¿Listo para impulsar tu negocio?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed text-white xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo nuestros servicios pueden
                ayudarte a alcanzar tus objetivos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
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
