import {
    Container,
    Title,
    Row,
    Column,
    ColumnTitle,
    Image,
    Paragraph,
    Form,
    InputContainer,
    Label,
    Input,
    TextArea,
    ErrorSpan,
    Button
} from "./styles";

import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import { InfoModal } from "../../components/InfoModal/InfoModal";
import { Spinner } from "../../components/Spinner/Spinner";

export const ContactView = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter();

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showValidationErrors, setShowValidationErrors] = useState(false);

    useEffect(() => {
        const { asunto, mensaje } = router.query;
        if (asunto) setData({
            ...data,
            subject: asunto
        });

        if (asunto && mensaje) setData({
            ...data,
            subject: asunto,
            message: mensaje
        });
    }, []);

    const { name, email, subject, message } = data;

    const handleChange = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setShowValidationErrors(false);

        if (!name || !email || !subject || !message) {
            setShowValidationErrors(true);
            return;
        };

        e.preventDefault();
        setLoading(true);

        axios.post("https://api.carlosshb.com/contact", data)
            .then((response) => {
                setSuccess(true);
            })
            .catch((e) => {
                console.error(e);
                setError(true);
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            {
                success && <InfoModal
                    text="Tu correo se ha enviado exitosamente. Pronto me pondré en contacto contigo😁"
                    isError={false}
                    onClick={() => setSuccess(false)}
                />
            }
            {
                error && <InfoModal
                    text="Hubo un error al enviar tu correo😥. Por favor, intenta de nuevo"
                    isError={true}
                    onClick={() => setError(false)}
                />
            }
            <Container>
                <Title>Contáctame</Title>
                <Row>
                    <Column>
                        <ColumnTitle>Con mucho gusto te atenderé</ColumnTitle>
                        <Image src="/envelope.svg" alt="Contacto" />
                        <Paragraph>
                            Estoy disponible para cualquier trabajo, colaboración
                            o proyecto que desees realizar.
                        </Paragraph>
                        <Paragraph>
                            Simplemente déjame tu nombre, correo, asunto y mensaje en
                            el siguiente formulario y enseguida podré ponerme en
                            contacto contigo y conversar😁
                        </Paragraph>
                    </Column>
                    <Column>
                        <Form onSubmit={handleSubmit}>
                            <InputContainer>
                                <Label htmlFor="name">Nombre</Label>
                                <Input type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    error={(name === "") && showValidationErrors} />
                                {(!name && showValidationErrors) && <ErrorSpan>Por favor, ingresa tu nombre</ErrorSpan>}
                            </InputContainer>
                            <InputContainer>
                                <Label htmlFor="email">Correo</Label>
                                <Input type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Correo"
                                    error={(email === "") && showValidationErrors} />
                                {(!email && showValidationErrors) && <ErrorSpan>Por favor, ingresa tu correo</ErrorSpan>}
                            </InputContainer>
                            <InputContainer>
                                <Label htmlFor="subject">Asunto</Label>
                                <Input type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={handleChange}
                                    placeholder="Asunto"
                                    error={(subject === "") && showValidationErrors} />
                                {(!subject && showValidationErrors) && <ErrorSpan>Por favor, ingresa el asunto</ErrorSpan>}
                            </InputContainer>
                            <InputContainer>
                                <Label htmlFor="message">Mensaje</Label>
                                <TextArea
                                    name="message"
                                    value={message}
                                    onChange={handleChange}
                                    placeholder="Mensaje"
                                    error={(message === "") && showValidationErrors} />
                                {(!message && showValidationErrors) && <ErrorSpan>Por favor, ingresa el mensaje</ErrorSpan>}
                            </InputContainer>
                            {
                                loading ? <Spinner /> : <Button type="submit">Enviar</Button>
                            }
                        </Form>
                    </Column>
                </Row>
            </Container>
        </>
    );
};