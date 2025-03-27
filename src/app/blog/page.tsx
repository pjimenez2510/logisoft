import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Blog | Logisoft",
  description: "Blog de Logisoft",
};

export default function ProyectosPage() {
  const posts = [
    {
      id: 1,
      title: "ClickUp",
      excerpt:
        "ClickUp es una herramienta de gestión de proyectos que nos permite organizar y priorizar nuestras tareas, mejorar la colaboración y aumentar la eficiencia en nuestro trabajo.",
      date: "Marzo, 2025",
      categoria: "Gestión de Proyectos",
      image: "/img/blog/clickup.webp",
      slug: "clickup",
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
                Nuestro <span className="text-blue-400">Blog</span>
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
              <p className="max-w-[900px] text-gray-100 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed mt-6">
                Aquí encontrarás artículos, guías y consejos útiles para mejorar
                tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group flex flex-col h-full overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={proyecto.image || "/api/placeholder/800/450"}
                    alt={proyecto.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    width={800}
                    height={450}
                    priority
                  />
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
                    <Link href={`/blog/${proyecto.slug}`}>
                      <Button>
                        Leer más
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
