import styled from "styled-components";

export const Hero = styled.header`
  text-align: center;
  background: #ab071e;
  color: white;
  padding: 50px 20px;
`;

export const CTAButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  background: white;
  color: #ab071e;
  padding: 15px 30px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  border: 2px solid white;

  &:hover {
    background: #ab071e44;
    color: white;
    border: 2px solid white;
  }
`;

export const Section = styled.section`
  padding: 20px;
  max-width: 800px;
  margin: auto;

  p {
    color: white
  }
  h2 {
    font-size: 2rem;
    color: #ab071e;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
    color: white;
    li {
      margin-bottom: 15px;
      padding-left: 20px;
      position: relative;
      &:before {
        content: "✔";
        position: absolute;
        left: 0;
        color: #ab071e;
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      text-align: center;  
    }
  }
`;

export const CTA = styled.section`
  text-align: center;
  background: #ab071e;
  color: white;
  padding: 50px 20px;
`;

export const TimelineSection = styled.section`
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
  position: relative;

  h2 {
    color: white;
    margin-bottom: 15px;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
  padding-left: 30px;
  color: white;

  &:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 20px;
    width: 15px;
    height: 15px;
    background: #ab071e;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.5rem;
    color: #ab071e;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    color: white;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 27px;
  top: 120px;
  height: 590px;
  width: 2px;
  background: #ab071e;

  @media (max-width: 600px) {
    top: 150px;
    height: 1100px;
  }
`;