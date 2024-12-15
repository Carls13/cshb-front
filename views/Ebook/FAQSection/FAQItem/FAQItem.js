import React, { useState } from 'react';
import { FAQItemWrapper } from './styles';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FAQItemWrapper open={isOpen}>
      <h3 onClick={() => setIsOpen(!isOpen)}>{question}</h3>
      <p>{answer}</p>
    </FAQItemWrapper>
  );
}
