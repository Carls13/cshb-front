import React from 'react';
import FAQItem from './FAQItem/FAQItem';
import { FAQSectionWrapper } from './styles';

const FAQData = [
    {
      question: '¿Para quién está dirigido este ebook?',
      answer:
        'Este ebook es ideal para principiantes y personas que buscan orientación para destacar en la tecnología, sin importar su nivel de experiencia.',
    },
    {
      question: '¿Qué aprenderé con este ebook?',
      answer:
        'Aprenderás desde conceptos básicos hasta estrategias prácticas para destacar profesionalmente en el mundo de la tecnología.',
    },
    {
      question: '¿Es necesario tener conocimientos previos de programación?',
      answer:
        'No, este ebook está diseñado para cualquier persona interesada en aprender, incluso si no tiene experiencia previa en tecnología.',
    },
    {
      question: '¿Incluye ejercicios prácticos?',
      answer:
        'Contiene teoría aplicada y consejos prácticos que puedes implementar desde el primer día, junto con recursos adicionales para practicar.',
    },
    {
      question: '¿Este ebook me asegura conseguir un empleo en tecnología?',
      answer:
        'Aunque no garantiza empleo, te brinda herramientas y conocimientos para destacarte en el sector tecnológico y aumentar tus oportunidades.',
    },
    {
      question: '¿En qué formato está disponible el ebook?',
      answer:
        'El ebook está disponible en formato PDF, compatible con cualquier dispositivo como laptops, tablets o smartphones.',
    },
    {
      question: '¿Qué diferencia tiene este ebook frente a otros recursos gratuitos en internet?',
      answer:
        'Este ebook es una guía estructurada basada en experiencia real, lo que te ahorra tiempo y te ofrece un camino claro hacia el éxito.',
    },
    {
      question: '¿Cuánto tiempo necesito para aprovechar al máximo este ebook?',
      answer:
        'Dependerá de tu ritmo de lectura y práctica, pero se recomienda dedicar tiempo para aplicar las recomendaciones y explorar los recursos mencionados.',
    },
    {
      question: '¿Incluye información sobre cómo trabajar como freelancer?',
      answer:
        'Sí, incluye consejos específicos sobre cómo encontrar clientes, plataformas útiles y cómo ofrecer tus servicios de manera efectiva.',
    },
    {
      question: '¿Puedo combinar lo que aprenda con mi carrera actual?',
      answer:
        'Absolutamente. Este ebook te enseña cómo integrar el aprendizaje en tecnología con tu carrera actual para maximizar tus resultados.',
    },
    {
      question: '¿Incluye actualizaciones futuras?',
      answer:
        'El contenido puede actualizarse para incluir nuevas tendencias tecnológicas. Si hay actualizaciones, te notificaremos para que accedas a ellas.',
    },
    {
      question: '¿Incluye recomendaciones de plataformas de aprendizaje?',
      answer:
        'Sí, encontrarás una selección de las mejores plataformas para aprender tecnología desde cero y desarrollar habilidades avanzadas.',
    },
    {
      question: '¿Cuáles son los beneficios adicionales de este ebook?',
      answer:
        'Además de aprender estrategias clave, obtendrás una perspectiva práctica basada en experiencia real, diseñada para ahorrar tiempo y evitar errores comunes.',
    },
    {
      question: '¿Este ebook me ayudará a trabajar remotamente?',
      answer:
        'Sí, incluye consejos para crear un perfil profesional atractivo y cómo encontrar oportunidades remotas en la industria tecnológica.',
    },
    {
      question: '¿Cómo puedo adquirir el ebook y cuál es su precio?',
      answer:
        'Puedes adquirir el ebook directamente en nuestra plataforma. Una vez completado el pago, recibirás un enlace de descarga. El precio actual es competitivo y ocasionalmente ofrecemos promociones especiales.',
    },
  ];
export default function FAQSection() {
  return (
    <FAQSectionWrapper>
      <h2>Preguntas Frecuentes</h2>
      {FAQData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </FAQSectionWrapper>
  );
}
