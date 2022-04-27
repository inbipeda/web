import React from "react";
import Collaborator from "./Collaborator";

const Collaborators = () => {
  const data = [
    {
      who: "Rosario Perazolo Masjoan",
      what: "Lisiada, cineasta y agitadora cultural",
      fullBio:
        "Rosario se identifica como lisiada y/o disca. Es parte de Torceduras y bifurcaciones un foro de corporalidades políticas.\nEs cineasta, co-directora y co-guionista de Metro Veinte, una serie sobre orgullo, sexualidad y discapacidad.\nEscribe artículos sobre la intimidad y los cuerpos discas, algunos de ellos publicados Página 12.\nActivista por los derechos de las personas con discapacidad, participó de congresos internacionales donde llegó a representar a Argentina en un cumbre de derechos humanos de la ONU.\nUsando el arte y la cultura como medio, invita a las personas con discapacidad a participar de éstos espacios, cuestionando el modelo social capacitista, y usando la experiencia corporal como potencia artística.",
      src: "https://elgranvidrio.com/trifurweb/avatar-rosario.jpg",
    },
    {
      who: "Karen Palacio",
      what: "live coder, programadora y artista digital",
      fullBio:
        "Karen Palacio es una live coder, programadora y artista digital de Córdoba Capital. Es diplomada en Ciencias de Datos del FaMAFyC, estudia la Lic en Ciencias de la Computación en el FaMAFyC y trabaja como A.I. Software Architect en una empresa de Software de Córdoba Capital. Como live coder de visuales ha hecho performances de improvisación de código en encuentros de noise, conferencias de tecnología, museos, y fiestas electrónicas -entre otros lugares- llegando a programar hasta 5 horas seguidas en vivo.\nSu trabajo está centrado en una visión feminista de la tecnología, pensando el lugar de las mujeres como pioneras en la experiencia encarnada de lo digital, lo algorítmico y lo computacional. En sus procesos artísticos se relaciona con y desarrolla Software Libre, y resemantiza tecnologías que conoce de su trayectoria laboral como programadora en la industria del Software.",
      src: "https://elgranvidrio.com/trifurweb/avatar-karen.jpg",
    },
    {
      who: "Sol Avila Vazquez",
      what: "productora audiovisual y artista visual",
      fullBio:
        "Productora audiovisual y artista visual, recibida de la Fac. de Artes de la UNC fue completando sus estudios por diversos cursos orientados a la experimentación visual y a la producción en ámbitos relacionados con lo audiovisual. Optando por producciones de pequeña-mediana escala, en donde las posibilidades y formas de trabajo permiten la creatividad, la experimentación libre y un trato humano, sin dejar de lado objetivos concretos de comunicación y/o integridad artística.",
      src: "https://elgranvidrio.com/trifurweb/avatar-sol.jpg",
    },
    {
      who: "Yamo",
      what: "diseñador gráfico, productor de contenido multimedia, muralista, gestor cultural, tallerista, vj y tatuador",
      fullBio:
        "diseñador gráfico, productor de contenido multimedia, muralista, gestor cultural, tallerista, vj y tatuador",
      src: "https://elgranvidrio.com/trifurweb/avatar-yamo.jpg",
    },
    {
      who: "Carolina Bottani aka Cherryla",
      what: "diseñadora gráfica publicitaria, música experimental electrónica en formato live performance",
      fullBio:
        'Carolina es diseñadora gráfica publicitaria, formada en la Universidad Siglo XXI de la ciudad de Córdoba.\nSu trayectoria en este ámbito, está enfocada en el desarrollo y el fortalecimiento de la identidad visual corporativa en organizaciones y empresas de servicios a través del trabajo conjunto con áreas de la comunicación social, los recursos humanos, las relaciones públicas, la arquitectura y la informática, reflejando en el lenguaje gráfico las estrategias de las mismas. Su colaboración se traduce en el diseño integral de marcas y subproductos, de eventos institucionales, de interfaces de aplicativos, de comunicados internos y branding en general. Su principal motivación es el trabajo en equipo.\nCherryla es su alter ego artístico, su proyecto solista de música experimental electrónica con formato live performance, es decir de mezcla en vivo, sólo con máquinas y sin computadoras, como única premisa. Se formó de manera autodidacta y también asistiendo a talleres relacionados a la síntesis sonora, la composición con instrumentos electrónicos, la experiencia y el acto de la escucha. Cherryla participó en festivales de arte y ruido sonoro de Córdoba y las propuestas del circuito alternativo de la ciudad. Aportó la dimensión sonora y la operación de sonido, a diversas acciones perfomáticas y literarias. Colaboró con la gestión y musicalización del Ciclo de Poesía y Performance "Cruces" (Repúblico Multiespacio). Formó parte del equipo "Al final de la escalera", un ciclo de lectura y difusión de cuentos de terror cordobés (Casa Taller) y actualmente es integrante de La Fantasio Sound Machine, ensamble electrónico dirigido por Santiago Guerrero.',
      src: "https://elgranvidrio.com/trifurweb/avatar-cherry.jpg",
    },
    {
      who: "Axel Schneeberger",
      what: " videógrafo, Fotógrafo y artista visual",
      fullBio:
        "Micro Bio: Axel es un fotografo y motion grapher free lance de Cordoba capital. Es egresado de la escuela de cine de la UNC, y trabaja como editor en diferentes proyectos audiovisuales.",
      src: "https://elgranvidrio.com/trifurweb/avatar-axel.jpg",
    },
    {
      who: "Hanni Halliday",
      what: "artista audiovisual, gestora y pastelera vegana de Córdoba Capital",
      fullBio:
        'Estudió de manera autodidacta fotografía, video y edición. Se recibió de Profesora de Artes Visuales en la UPC y actualmente estudia la Licenciatura en Arte y Gestión Cultural. Trabajó como productora del Ciclo de muestras efímeras "Habitar el Futuro" para artistas emergentes y del Festival Internacional de Cine Experimental "Eneagrama".\nComo artista audiovisual participó en una residencia artística en el Laboratorio de Cine Experimental FAC de Montevideo y en el registro audiovisual de varios proyectos autogestivos e independientes de Córdoba, haciendo visuales en fiestas como la Queen Cobra y Perreo y Sustancia.\nTrabajó también en el registro audiovisual del Encuentro Lationamericano de Gestoras en red en Montevideo. Y actualmente trabaja en proyectos personales de videoarte, videoclips para amigxs y proyectos de documental experimental y también como pastelera en Alma Casa Vegana, un restaurante vegano en Córdoba que funciona como cooperativa desde  el inicio de la pandemia.',
      src: "https://elgranvidrio.com/trifurweb/avatar-anni.jpg",
    },
    {
      who: "Santiago Hall",
      what: "diseñador Integral, Artista plástico/audiovisual autodidacta.",
      fullBio: "Diseñador Integral, Artista plástico/audiovisual autodidacta.",
      src: "https://elgranvidrio.com/trifurweb/avatar-santi.jpg",
    },
    {
      who: "Victoria Falco",
      what: "arquitecta y artista",
      fullBio: "Toia Falco es una arquitecta y diseñadora de la ciudad de Córdoba. Terminó sus estudios en la FAUDI- UNC: a través de su trayecto académico indagó en la cartografía social y sus posibilidades de intervención en el espacio público mediante procesos de diseño participativo.\n De formación autodidacta en el área de la ilustración y el diseño gráfico, su obra explora la técnica del fotomontaje digital y ha llegado a publicarse en diferentes soportes.\n Actualmente, desarrolla su trabajo profesional de manera independiente y colabora con diversos colectivos artísticos de la ciudad de Córdoba como diseñadora y montajista de dispositivos escénicos para intervenciones artísticas y obras de teatro.",
      src: "https://elgranvidrio.com/trifurweb/avatar-toia.jpg",
    },
    {
      who: "Sergio Scotta",
      what: "programador, diseñador, productor y artista tecnológico",
      fullBio: "Programador, diseñador, productor y artista tecnológico",
      src: "https://elgranvidrio.com/trifurweb/avatar-sergio.jpg",
    },
  ];

  return (
    <div className="collaborators sides bottom-l">
      <h2 className="bottom">Participantes</h2>
      {data.map((person) => (
        <Collaborator
          who={person.who}
          what={person.what}
          src={person.src}
          fullBio={person.fullBio}
        />
      ))}
    </div>
  );
};

export default Collaborators;
