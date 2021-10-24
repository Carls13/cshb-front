import { Button, Paragraph } from '../../views/Contact/styles';
import { IconDiv, ModalContainer, ModalContent } from './styles';

export const InfoModal = ({ text, onClick, isError }) => (
    <ModalContainer isError={!!isError}>
        <ModalContent>
            <IconDiv isError={!!isError}>
                <i className={isError ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle'} />
            </IconDiv>
            <p>{text}</p>
            <Button onClick={onClick}>Aceptar</Button>
        </ModalContent>
    </ModalContainer>
);
