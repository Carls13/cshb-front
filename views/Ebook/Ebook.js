import FAQSection from './FAQSection/FAQSection';
import { Hero, Section, CTA, CTAButton, TimelineSection, TimelineLine, TimelineItem  } from './styles';

export const EbookView = () => {
  return (
    <>
      <Hero>
        <h1>Transforma tu futuro con la tecnología</h1>
        <p>Descubre cómo desarrollar habilidades clave para abrirte camino en la industria tech</p>
        <CTAButton href="#https://7988392975733.gumroad.com/l/hpuhp">¡Quiero mejorar mi vida!</CTAButton>
      </Hero>

      <Section>
        <h2>Imagina el futuro que mereces</h2>
        <p>¿Te gustaría tener un trabajo que te apasione, con libertad para crecer y alcanzar tus metas? Este ebook es tu guía práctica para comenzar a construir una carrera exitosa en tecnología, aprovechando tus fortalezas y desarrollando nuevas habilidades.</p>
      </Section>

      <Section>
        <h2>¿Qué lograrás con este ebook?</h2>
        <ul>
          <li>Adquirirás conocimientos esenciales para iniciar tu carrera en tecnología.</li>
          <li>Aprenderás a destacar en el mercado laboral, incluso sin experiencia previa.</li>
          <li>Descubrirás cómo convertir tus habilidades en oportunidades reales.</li>
          <li>Recibirás consejos prácticos para combinar aprendizaje y desarrollo personal.</li>
        </ul>
      </Section>

      <Section>
        <h2>Una guía basada en experiencia real</h2>
        <p>Este ebook no es teoría: está basado en el camino que me permitió pasar de estudiante a profesional independiente. A través de pasos claros y estrategias probadas, te mostraré cómo puedes alcanzar resultados concretos en el mundo de la tecnología.</p>
      </Section>


      <TimelineSection>
        <h2>Mi evolución a través de los años</h2>
        <TimelineLine />
        <TimelineItem>
          <h3>2017: Mi primer contacto con la programación</h3>
          <p>Aprendí mis primeras líneas de código en Programación I usando Visual Basic. Me apasioné tanto que practicaba constantemente y usaba ejemplos relacionados con mis amigos para aprender más rápido.</p>
        </TimelineItem>

        <TimelineItem>
          <h3>2018: Mi primer trabajo como programador</h3>
          <p>Comencé a trabajar como programador en una oficina local. Fue allí donde decidí que el desarrollo web sería mi enfoque principal y construí las bases de mi carrera.</p>
        </TimelineItem>

        <TimelineItem>
          <h3>2019: Mi primer gran paso como freelancer</h3>
          <p>Conseguí mi primera laptop de calidad trabajando para clientes internacionales. Creé mi perfil digital en LinkedIn y GitHub, lo que me permitió ganar visibilidad y captar clientes.</p>
        </TimelineItem>

        <TimelineItem>
          <h3>2021: Estabilidad económica y nuevos retos</h3>
          <p>Después de años de trabajo y aprendizaje, logré estabilizarme económicamente. Esto me permitió tomar proyectos más ambiciosos y perfeccionar mis habilidades como programador.</p>
        </TimelineItem> 

        <TimelineItem>
          <h3>2022: Mi primer carro</h3>
          <p>En 2022, logré cumplir uno de mis grandes sueños: comprar mi primer carro. Este logro marcó un hito importante en mi vida y fue un recordatorio de lo que se puede alcanzar con disciplina y esfuerzo.</p>
        </TimelineItem>

        <TimelineItem>
          <h3>2024: Independencia y mi primer apartamento</h3>
          <p>Tras años de esfuerzo, logré independizarme y adquirir mi propio apartamento. Hoy, comparto mi experiencia para ayudar a otros a seguir este camino de crecimiento y éxito en el mundo tecnológico.</p>
        </TimelineItem>
      </TimelineSection>

      <Section>
        <h2>Tu historia de éxito comienza aquí</h2>
        <p>No importa de dónde comiences, lo importante es dar el primer paso. Con este ebook, tendrás una hoja de ruta para superar obstáculos, construir confianza y alcanzar el futuro que siempre has querido.</p>
      </Section>
      <FAQSection />
      <CTA id="cta">
        <h2>Empieza hoy a construir tu mejor versión</h2>
        <CTAButton href="https://7988392975733.gumroad.com/l/hpuhp">¡Quiero el ebook ahora!</CTAButton>
      </CTA>
    </>
  );
}

