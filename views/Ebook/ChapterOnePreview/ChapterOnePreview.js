import { CTAButton } from "../styles";
import { ChapterSection, PreviewContainer, PreviewText, Subtitle, Title } from "./styles";

export default function ChapterOnePreview() {
    return (
      <ChapterSection>
        <Title>Explora la Introducción del Ebook</Title>
        <Subtitle>Un adelanto de "Transforma tu vida aprendiendo a programar"</Subtitle>
        <PreviewContainer>
          <PreviewText>
            La programación no solo es una habilidad técnica, es una herramienta transformadora que
            puede cambiar tu vida de manera significativa. En este ebook, descubrirás cómo dar tus
            primeros pasos en el mundo de la tecnología, entendiendo su importancia en el panorama
            actual y cómo puede abrirte puertas hacia nuevas oportunidades. Este es solo el comienzo
            de un viaje que te permitirá desbloquear todo tu potencial.
          </PreviewText>
        </PreviewContainer>
        <CTAButton target="_blank" href="https://drive.google.com/drive/folders/1f1nahhEY9cZH9Lw68ROkkmnefk28lzeG?usp=sharing">Accede al Capítulo 1</CTAButton>
      </ChapterSection>
    );
  }