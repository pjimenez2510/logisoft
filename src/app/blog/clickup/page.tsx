import {
  BarChart,
  CheckCircle,
  ChevronRight,
  Clock,
  Gauge,
  MessageCircle,
  Settings,
  Target,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#10085a] via-[#000030] to-[#1F1F1F] dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                ClickUp <span className="text-blue-400">Blog</span>
              </h1>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
              <p className="max-w-[900px] text-gray-100 text-lg md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed mt-6">
                ClickUp es una plataforma de gestión de proyectos y
                productividad que permite planificar, organizar y colaborar en
                tareas dentro de equipos de trabajo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    ¿Qué es ClickUp?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    ClickUp es una plataforma integral de gestión de proyectos y
                    productividad que permite planificar, organizar y colaborar
                    en tareas dentro de equipos de trabajo. Su diseño flexible
                    permite adaptarse a diferentes metodologías como Scrum,
                    Kanban, XP o listas tradicionales.
                  </p>

                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/JmcVjP8m02k"
                      title="Tutorial de ClickUp"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Características principales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Gestión de tareas y subtareas
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          ClickUp permite a los usuarios desglosar proyectos
                          complejos en tareas y subtareas manejables,
                          facilitando una estructura jerárquica que mejora la
                          claridad y el seguimiento del progreso. Cada tarea
                          puede contener subtareas anidadas, lo que permite una
                          organización detallada y personalizada según las
                          necesidades del proyecto.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Tableros Kanban, diagramas de Gantt y vistas
                          personalizadas
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          La plataforma ofrece múltiples vistas para adaptarse a
                          diversas metodologías de trabajo. Los tableros Kanban
                          facilitan la gestión visual del flujo de trabajo,
                          mientras que los diagramas de Gantt proporcionan una
                          perspectiva temporal de las tareas y sus dependencias.
                          Además, ClickUp permite personalizar vistas, como
                          listas tradicionales, calendarios y mapas mentales,
                          para que cada equipo pueda trabajar de la manera que
                          mejor se adapte a sus procesos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Documentos colaborativos y wikis integrados
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          ClickUp incorpora herramientas para la creación y
                          edición de documentos colaborativos, permitiendo a los
                          equipos trabajar conjuntamente en tiempo real. Además,
                          es posible establecer wikis internos, centralizando
                          información relevante y asegurando que todos los
                          miembros tengan acceso a la documentación actualizada
                          y necesaria para el desarrollo de sus tareas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Automatizaciones y plantillas personalizadas
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          La plataforma ofrece la posibilidad de crear
                          automatizaciones que simplifican tareas repetitivas,
                          mejorando la eficiencia operativa. Asimismo, permite
                          diseñar plantillas personalizadas para distintos tipos
                          de proyectos o tareas, asegurando la consistencia y
                          facilitando la replicación de procesos exitosos en
                          futuros proyectos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Integración con más de 100 aplicaciones
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          ClickUp se integra de manera fluida con una amplia
                          variedad de aplicaciones populares, como Google Drive,
                          Slack y GitHub, entre otras. Estas integraciones
                          permiten una sincronización eficiente de datos y una
                          colaboración más efectiva, al centralizar la
                          información y reducir la necesidad de alternar entre
                          múltiples herramientas.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
                        title: "Interfaz intuitiva y personalizable",
                        description:
                          "Diseño enfocado en la experiencia de usuario que facilita la adaptación y uso.",
                      },
                      {
                        title: "Todo en una sola plataforma",
                        description:
                          "Integración de documentos, tareas, objetivos y seguimiento de tiempo en un único lugar.",
                      },
                      {
                        title: "Automatizaciones sin programación",
                        description:
                          "Creación de flujos de trabajo automáticos sin necesidad de conocimientos técnicos.",
                      },
                      {
                        title: "Variedad de vistas",
                        description:
                          "Múltiples formas de visualizar y organizar el trabajo según las necesidades del equipo.",
                      },
                      {
                        title: "Alta escalabilidad",
                        description:
                          "Adaptable tanto para equipos pequeños como para grandes organizaciones con necesidades complejas.",
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
                        title: "Time Tracking",
                        description:
                          "Seguimiento preciso del tiempo dedicado a cada tarea",
                        icon: <Clock />,
                      },
                      {
                        title: "Objetivos y metas",
                        description:
                          "Definición y seguimiento de objetivos por equipo",
                        icon: <Target />,
                      },
                      {
                        title: "Paneles personalizables",
                        description:
                          "Visualización de datos para análisis del rendimiento",
                        icon: <BarChart />,
                      },
                      {
                        title: "Gestión de carga de trabajo",
                        description:
                          "Control de la capacidad y distribución de tareas",
                        icon: <Gauge />,
                      },
                      {
                        title: "Chats y comentarios",
                        description:
                          "Comunicación directa dentro de las tareas",
                        icon: <MessageCircle />,
                      },
                      {
                        title: "Automatizaciones",
                        description:
                          "Creación de reglas para optimizar procesos",
                        icon: <Settings />,
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

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Casos de uso reales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 bg-slate-50 dark:bg-slate-900">
                      <h3 className="font-semibold text-lg">
                        Agencias de marketing
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Organización de campañas, tareas creativas y entregables
                        con fechas límite. Permite asignar recursos y hacer
                        seguimiento visual del progreso de las campañas.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 bg-slate-50 dark:bg-slate-900">
                      <h3 className="font-semibold text-lg">
                        Equipos de desarrollo de software
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Gestión de sprints, seguimiento de bugs y tareas
                        técnicas. Integración con herramientas de desarrollo
                        como GitHub para mantener todo centralizado.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 bg-slate-50 dark:bg-slate-900">
                      <h3 className="font-semibold text-lg">Freelancers</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Control de clientes, proyectos y tareas personales.
                        Seguimiento de tiempo para facturación y gestión de
                        múltiples proyectos simultáneos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Planes y licencias
                  </CardTitle>
                  <CardDescription>
                    Opciones flexibles para cada necesidad
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Gratis Para Siempre",
                      price: "$0",
                      description: "Ideal para uso personal",
                      features: [
                        "Tareas ilimitadas",
                        "Miembros ilimitados",
                        "100 MB de almacenamiento",
                        "Tableros Kanban",
                        "Vista de calendario",
                      ],
                    },
                    {
                      name: "Unlimited",
                      price: "$7",
                      description: "Por usuario al mes",
                      features: [
                        "Almacenamiento ilimitado",
                        "Integraciones ilimitadas",
                        "Diagramas de Gantt",
                        "Campos personalizados",
                        "Control de tiempo nativo",
                      ],
                    },
                    {
                      name: "Business",
                      price: "$12",
                      description: "Por usuario al mes",
                      features: [
                        "Todo de Unlimited",
                        "Equipos ilimitados",
                        "Automatizaciones avanzadas",
                        "Gestión de cargas de trabajo",
                        "Hojas de horas",
                      ],
                    },
                  ].map((plan, index) => (
                    <div
                      key={index}
                      className="rounded-lg border p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{plan.name}</h3>
                        <div className="text-lg font-bold text-primary">
                          {plan.price}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        {plan.description}
                      </p>
                      <ul className="space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm flex items-center gap-2"
                          >
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Integraciones populares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      {
                        name: "Google Calendar",
                        description: "Sincronización de eventos y tareas",
                      },
                      {
                        name: "Slack",
                        description: "Notificaciones y creación de tareas",
                      },
                      {
                        name: "Zoom",
                        description: "Programación de reuniones desde tareas",
                      },
                      {
                        name: "Google Drive",
                        description: "Adjuntar archivos a tareas",
                      },
                      {
                        name: "GitHub",
                        description: "Seguimiento del desarrollo de código",
                      },
                    ].map((integration, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <ChevronRight className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <span className="font-medium">
                            {integration.name}
                          </span>
                          <p className="text-xs text-gray-500">
                            {integration.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-500">
                      Conecta con más de 100 aplicaciones a través de Zapier y
                      Make para crear flujos de trabajo automatizados
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Apps Card */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Aplicaciones disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Web", icon: "🌐" },
                      { name: "iOS", icon: "📱" },
                      { name: "Android", icon: "📱" },
                      { name: "Windows", icon: "💻" },
                      { name: "macOS", icon: "💻" },
                    ].map((app, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg border text-center"
                      >
                        <span className="text-lg">{app.icon}</span>
                        <span className="text-sm">{app.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Soporte y comunidad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    ClickUp ofrece múltiples recursos para aprender a usar la
                    plataforma y resolver dudas:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Centro de ayuda con artículos y guías",
                      "Cursos gratuitos en ClickUp University",
                      "Soporte técnico por chat o correo",
                      "Comunidad activa en foros y Discord",
                      "Blog y canal de YouTube con tutoriales",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="text-sm flex items-center gap-2"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {item}
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
