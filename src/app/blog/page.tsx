import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Blog | Empresa Innovadora",
  description:
    "Artículos, noticias y recursos sobre innovación, tecnología y estrategias de negocio.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Estrategias para Impulsar la Innovación en tu Empresa",
      excerpt:
        "Descubre cómo fomentar una cultura de innovación que impulse el crecimiento y la competitividad de tu negocio.",
      date: "15 de marzo, 2023",
      author: "María González",
      category: "Innovación",
      image: "/placeholder.svg?height=300&width=500",
      slug: "estrategias-innovacion-empresa",
    },
    {
      id: 2,
      title: "La Importancia de la Transformación Digital en 2023",
      excerpt:
        "Análisis de las tendencias actuales en transformación digital y cómo pueden beneficiar a tu empresa.",
      date: "28 de febrero, 2023",
      author: "Carlos Rodríguez",
      category: "Tecnología",
      image: "/placeholder.svg?height=300&width=500",
      slug: "importancia-transformacion-digital",
    },
    {
      id: 3,
      title: "Cómo Mejorar la Experiencia del Cliente con Tecnología",
      excerpt:
        "Estrategias efectivas para utilizar la tecnología en la mejora de la experiencia del cliente y aumentar la fidelización.",
      date: "10 de febrero, 2023",
      author: "Ana Martínez",
      category: "Experiencia del Cliente",
      image: "/placeholder.svg?height=300&width=500",
      slug: "mejorar-experiencia-cliente-tecnologia",
    },
    {
      id: 4,
      title: "Tendencias en Marketing Digital para 2023",
      excerpt:
        "Las últimas tendencias en marketing digital que debes conocer para mantener tu estrategia actualizada y efectiva.",
      date: "5 de enero, 2023",
      author: "Pedro Sánchez",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=500",
      slug: "tendencias-marketing-digital",
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
                Nuestro Blog
              </h1>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Artículos, noticias y recursos sobre innovación, tecnología y
                estrategias de negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="absolute inset-0 z-10"
                />
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Por {post.author}
                    </span>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      Leer más
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Cargar más artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Suscríbete a nuestro Newsletter
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Recibe nuestros últimos artículos, noticias y recursos
                directamente en tu bandeja de entrada.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tu correo electrónico"
                  type="email"
                  required
                />
                <Button type="submit" className="h-10 px-4 py-2">
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Respetamos tu privacidad. Puedes darte de baja en cualquier
                momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
