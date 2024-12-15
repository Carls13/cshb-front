import styled from 'styled-components';

export const FAQItemWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    cursor: pointer;
    color: #ab071e;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;