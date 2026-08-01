/**
 * Spanish overlay for the project records in `data.ts`.
 *
 * Each entry is keyed by the project `slug` and mirrors the English record's
 * narrative structure: sections are keyed by their `id` and every `body` keeps
 * the same paragraph count, so the overlay can be merged field by field and a
 * missing key falls back to English instead of breaking the page.
 */

import type { ProjectTranslation } from "./types";

/** Keyed by project `slug`. */
export const PROJECT_TRANSLATIONS_ES: Record<string, ProjectTranslation> = {
  flowgentic: {
    tagline:
      "Ejecutar sistemas de agentes de LangGraph, CrewAI y AG2 sobre planificadores de HPC.",
    description:
      "Librería de Python en producción para desplegar agentes de IA (LangGraph, CrewAI, AG2) sobre planificadores de HPC con flujos de trabajo empresariales",
    impact:
      "En uso por investigadores del laboratorio RADICAL de Rutgers University para machine learning de proteínas a gran escala en el supercomputador NCSA Delta (proyecto IMPRESS)",
    role: "Desarrollador principal",
    narrative: {
      problem: {
        heading:
          "Los frameworks de agentes asumen un portátil. Un supercomputador no lo es.",
        body: [
          "LangGraph, CrewAI y AG2 dan por hecho que el proceso que define un flujo de trabajo es el mismo que lo ejecuta: lanzar una tarea, esperarla y recoger el resultado. En un sistema de HPC esa suposición se rompe de inmediato. El trabajo se envía a un planificador por lotes, permanece en cola durante un intervalo impredecible y se ejecuta en nodos a los que el proceso que lo envió no puede acceder directamente.",
          "FlowGentic es la capa de middleware que reconcilia ambos mundos. Los sistemas de agentes conservan su modelo de programación nativo; por debajo, la ejecución se traduce en envíos al planificador, grafos de dependencias y recogida asíncrona de resultados.",
        ],
      },
      architecture: {
        heading: "Arquitectura",
        body: [
          "La librería se sitúa entre los hooks de ejecución del framework de agentes y RADICAL AsyncFlow, mapeando las tareas de los agentes sobre recursos gestionados por el planificador sin romper la semántica asíncrona que quien la usa ya espera.",
        ],
      },
      adoption: {
        heading: "En producción en RADICAL",
        body: [
          "Investigadores del grupo RADICAL de Rutgers utilizan FlowGentic para machine learning de proteínas a gran escala en el supercomputador NCSA Delta, dentro del proyecto IMPRESS financiado por la NSF.",
          "El trabajo se presentó en PASC26, en Berna.",
        ],
      },
      status: {
        heading: "Hacia dónde va",
        body: [
          "El trabajo de tesis en curso extiende FlowGentic de middleware de ejecución a una capa de planificación que trata la selección de recursos como un problema de optimización de carteras sobre recursos de HPC heterogéneos.",
        ],
      },
    },
  },
  "efficient-classifier": {
    tagline:
      "Un framework de ML empresarial para clasificación tabular, publicado en PyPI.",
    description:
      "Framework de ML empresarial para clasificación tabular con ajuste automatizado de hiperparámetros, interpretabilidad mediante LIME y CI/CD",
    impact:
      "92% de F1-score (+2% sobre la línea base) en un conjunto de datos de ciberseguridad de más de 50K filas; publicado en PyPI; dirección del equipo",
    role: "Tech Lead e ingeniero de ML",
    narrative: {
      problem: {
        heading: "El mismo pipeline, reescrito una y otra vez",
        body: [
          "Los proyectos de clasificación tabular vuelven a implementar siempre la misma secuencia (partición, codificación, ajuste, interpretación e informe) con suficientes variaciones pequeñas como para que los resultados dejen de ser comparables entre ejecuciones.",
        ],
      },
      pipeline: {
        heading: "El pipeline",
        body: [
          "El ajuste automatizado de hiperparámetros y la interpretabilidad con LIME se integran en una única pasada, con CI/CD para que un cambio en el modelo produzca un artefacto reproducible y publicado.",
        ],
      },
      results: {
        heading: "Resultados",
        body: [
          "Sobre un conjunto de datos de ciberseguridad de más de 50,000 filas, el framework alcanzó un F1-score del 92%, dos puntos por encima de la línea base.",
        ],
      },
    },
  },
  "sola-scientia": {
    tagline:
      "Una investigación de datos sobre por qué Canarias pierde un estudiante cada cinco minutos.",
    description:
      "Investigación de big data sobre el abandono escolar en Canarias, realizada para el EduCaixa Big Data Challenge 2022: análisis de datos públicos publicado como una web interactiva con reportaje en profundidad y visualizaciones en Infogram",
    impact:
      "Finalistas entre equipos internacionales (menos del 0,02% de aceptación); presentamos el trabajo en Silicon Valley, con talleres impartidos por empleados de Google y Apple y visitas a Stanford y Berkeley",
    role: "Líder de equipo y analista de datos",
    narrative: {
      problem: {
        heading: "Las islas con el mejor clima y la peor retención escolar",
        body: [
          "Canarias es conocida fuera por sus playas y su clima, y la economía vive del turismo que eso atrae. Por debajo, el archipiélago carga con la tasa de ninis más alta de España, jóvenes que ni estudian ni trabajan, un 23%. Uno de cada cuatro compañeros de clase deja los estudios y tampoco llega a trabajar.",
          "El equipo, tres personas, eligió el Objetivo de Desarrollo Sostenible 4, educación de calidad, y se propuso enseñar la cara de las islas que las cifras del turismo tapan.",
        ],
      },
      data: {
        heading: "Lo que mostraban los datos abiertos",
        body: [
          "Recopilamos conjuntos de datos públicos sobre pobreza frente a educación, histórico de abandono escolar, alumnado bilingüe por isla, presupuesto autonómico de educación y motivos declarados para estudiar, y reconstruimos cada uno como un gráfico interactivo en Infogram acompañado de su explicación.",
          "Dos hallazgos ordenaron el argumento. La educación compensa en varios planos a la vez: la mitad de las respuestas apuntaban a la autorrealización, un 65% a mayores oportunidades sociales y un 23% a ingresos y estilo de vida. Y el avance es real pero desigual: alrededor de un tercio de los canarios habla ya un segundo idioma, muy concentrado en Gran Canaria y Tenerife.",
        ],
      },
      output: {
        heading: "Cómo lo publicamos",
        body: [
          "El resultado fue una web, no una presentación, estructurada por versiones: la pieza de contexto, un reportaje largo escrito con formato de periódico, un análisis de las cinco V del big data aplicado a nuestras propias fuentes y una bibliografía completa.",
          "El título en latín, algo así como \"solo el conocimiento nos liberará\", resumía la tesis: la salida del ciclo del abandono es precisamente la educación que las islas todavía no garantizan.",
        ],
      },
      outcome: {
        heading: "Resultado",
        body: [
          "El proyecto llegó a la final del EduCaixa Big Data Challenge, una competición internacional con menos del 0,02% de aceptación, y el equipo presentó las conclusiones en Silicon Valley, con talleres impartidos por empleados de Google y Apple y visitas a Stanford y Berkeley.",
        ],
      },
    },
  },
  "gpu-montecarlo-risk": {
    tagline:
      "Un motor CUDA que estima la probabilidad de caída en índices bursátiles europeos correlacionados.",
    description:
      "Motor Monte Carlo híbrido C++/CUDA para estimar la probabilidad de caída sistémica en índices bursátiles europeos correlacionados; descomposición de Cholesky paralela, generación de trayectorias con cuRAND y kernels de reducción optimizados",
    impact:
      "Aceleración de 192× frente a Python (9 min → 2.8 sec para 100M de simulaciones); rendimiento de 188k a 36M sims/sec en GPUs NVIDIA",
    role: "Desarrollador de HPC y cuantitativo",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "Implementaciones serie, OpenMP y CUDA del mismo motor Monte Carlo, comparadas entre sí con intervalos de confianza estadísticos para el análisis de riesgo de contagio.",
        ],
      },
      results: {
        heading: "Resultados",
        body: [
          "100 millones de simulaciones pasaron de nueve minutos a 2.8 segundos, una aceleración de 192×, elevando el rendimiento de 188,000 a 36 millones de simulaciones por segundo.",
        ],
      },
    },
  },
  "zeffo-ticket-platform": {
    tagline:
      "Automatización de soporte dirigida por eventos con más de 500 flujos de agentes concurrentes.",
    description:
      "Sistema de tickets de soporte dirigido por eventos que procesa 500+ flujos de trabajo de agentes concurrentes con latencia <200ms p95; backend en FastAPI, MySQL, caché con Redis y panel de observabilidad en React con métricas en vivo y seguimiento de experimentos A/B",
    impact:
      "Más de un 75% de cobertura de tests en el backend, con tests E2E sobre los flujos críticos; desplegado con Docker Compose, CI/CD automatizado e infraestructura como código en Azure y AWS",
    role: "Ingeniero full stack y de IA",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "Un sistema de tickets de soporte construido sobre un núcleo dirigido por eventos, que sostiene más de 500 flujos de trabajo de agentes concurrentes por debajo de 200ms de latencia p95.",
        ],
      },
      operations: {
        heading: "Ponerlo en marcha",
        body: [
          "Cobertura de tests del backend por encima del 75%, con tests de extremo a extremo sobre los flujos críticos, desplegado mediante Docker Compose con CI/CD automatizado e infraestructura como código en Azure y AWS.",
        ],
      },
    },
  },
  "portfolio-optimization": {
    tagline: "Frontera eficiente, CAPM y denoising de covarianzas por PCA, demostrados.",
    description:
      "Teoría Moderna de Carteras con frontera eficiente, CAPM, denoising de la matriz de covarianzas mediante PCA y optimización lagrangiana",
    impact:
      "Librería de más de 20 funciones; demostraciones formales para el GMVP, la cartera tangente y la optimización del ratio de Sharpe",
    role: "Investigador cuantitativo",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "Una librería de más de veinte funciones que implementa la Teoría Moderna de Carteras de principio a fin, con demostraciones formales para la cartera de mínima varianza global, la cartera tangente y la optimización del ratio de Sharpe.",
        ],
      },
    },
  },
  "url-shortener": {
    tagline:
      "Responsabilidad de extremo a extremo, del aprovisionamiento con Terraform a las trazas de OpenTelemetry.",
    description:
      "Acortador de URLs listo para producción con backend en FastAPI, frontend en React, despliegue automatizado en AWS mediante Terraform/Ansible y observabilidad completa",
    impact:
      "Aprovisionamiento con IaC, arquitectura asíncrona con caché en Redis, métricas y trazas con OpenTelemetry, alertas en Slack y cobertura de tests E2E",
    role: "Desarrollador full stack",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "Aquí lo interesante es la superficie operativa más que el producto: infraestructura aprovisionada como código, gestión asíncrona de peticiones con caché en Redis, y métricas y trazas conectadas a través de OpenTelemetry hasta Grafana, con alertas en Slack por encima.",
        ],
      },
    },
  },
  "ddos-defense": {
    tagline:
      "Un sniffer de paquetes con libpcap conectado a una respuesta automática del cortafuegos.",
    description:
      "Sniffer de paquetes en C (libpcap) con servidor de defensa en Flask, panel en Streamlit y automatización del cortafuegos con pfctl",
    impact:
      "Análisis de red a bajo nivel, panel de monitorización en vivo y detección automatizada de amenazas con bloqueo de IPs",
    role: "Ingeniero de sistemas y seguridad",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "La captura de paquetes en C mediante libpcap alimenta un servidor de defensa en Flask, que gobierna automáticamente las reglas del cortafuegos con pfctl mientras un panel en Streamlit muestra qué se está bloqueando y por qué.",
        ],
      },
    },
  },
  "booking-system": {
    tagline:
      "Una plataforma de reservas B2B gestionando reservas reales para clientes reales.",
    description:
      "Plataforma de reservas B2B en producción con backend en Django/MySQL, caché con Redis, autenticación con Firebase, pagos con Stripe y despliegue en AWS",
    impact:
      "Redujo la carga de planificación un 40%; procesa más de 1000 reservas mensuales para varios clientes",
    role: "Desarrollador full stack",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "Construida y operada para clientes de pago durante dos años, gestionando más de mil reservas al mes y reduciendo la carga de planificación en torno a un 40%.",
        ],
      },
    },
  },
  "casino-mines": {
    tagline: "Las demostraciones hipergeométricas detrás de un juego de EV constante.",
    description:
      "Sistema de juego cuantitativo con funciones de multiplicador probabilísticas, optimización del valor esperado y análisis de riesgo en tiempo real",
    impact:
      "Demostraciones formales para distribuciones hipergeométricas; valor esperado constante entre estrategias de riesgo; algoritmos O(n log n)",
    role: "Desarrollador cuantitativo",
    narrative: {
      overview: {
        heading: "Visión general",
        body: [
          "Funciones de multiplicador derivadas de la distribución hipergeométrica, con demostraciones de que el valor esperado se mantiene constante entre las distintas estrategias de riesgo.",
        ],
      },
    },
  },
};
