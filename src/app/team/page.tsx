import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const metadata = {
  title: "Equipo | Empresa Innovadora",
  description:
    "Conoce al equipo de profesionales que hacen posible nuestra misión.",
};

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Ana Rodríguez",
      position: "CEO / Fundadora",
      bio: "Con más de 15 años de experiencia en el sector, Ana ha liderado la empresa desde su fundación, estableciendo una visión clara y una cultura de excelencia.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Carlos Martínez",
      position: "Director de Tecnología",
      bio: "Experto en desarrollo de software y arquitectura de sistemas, Carlos lidera nuestro equipo técnico para crear soluciones innovadoras y escalables.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Laura Sánchez",
      position: "Directora de Marketing",
      bio: "Con un enfoque creativo y analítico, Laura desarrolla estrategias de marketing efectivas que impulsan el crecimiento y la visibilidad de nuestros clientes.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Miguel González",
      position: "Director de Operaciones",
      bio: "Miguel asegura que todos los proyectos se entreguen a tiempo y con la más alta calidad, optimizando procesos y recursos para maximizar resultados.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Elena Pérez",
      position: "Consultora Senior",
      bio: "Con experiencia en diversas industrias, Elena proporciona asesoramiento estratégico personalizado para ayudar a nuestros clientes a alcanzar sus objetivos.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "David López",
      position: "Desarrollador Principal",
      bio: "Especialista en tecnologías web y móviles, David lidera el desarrollo de aplicaciones innovadoras que transforman la experiencia del usuario.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Nuestro Equipo
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Conoce a los profesionales apasionados que hacen posible nuestra
                misión de impulsar el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mt-1">{member.position}</p>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {member.bio}
                  </p>
                  <div className="mt-6 flex space-x-4">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-gray-500 hover:text-primary dark:text-gray-400"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-gray-500 hover:text-primary dark:text-gray-400"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    )}
                    {member.social.instagram && (
                      <Link
                        href={member.social.instagram}
                        className="text-gray-500 hover:text-primary dark:text-gray-400"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Únete a Nuestro Equipo
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Estamos siempre en busca de talentos apasionados que compartan
                  nuestra visión y valores. Si estás interesado en formar parte
                  de nuestro equipo, revisa nuestras vacantes actuales o
                  envíanos tu currículum.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  ¿Por qué trabajar con nosotros?
                </h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• Ambiente de trabajo colaborativo y dinámico</li>
                  <li>• Oportunidades de crecimiento profesional</li>
                  <li>• Proyectos desafiantes e innovadores</li>
                  <li>• Equilibrio entre vida laboral y personal</li>
                  <li>• Paquete de beneficios competitivo</li>
                </ul>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Ver vacantes actuales
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Únete a Nuestro Equipo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
