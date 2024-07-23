import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ContactSection = styled.section`
  background: #fcefe3;
  padding: 50px;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  color: #2B1200;
  text-align: center;
  font-family: "Arial";
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #2B1200;
  font-family: "Arial";
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #461D00;
  background: #fcefe3;
  border-radius: 10px;
  font-size: 1em;
  font-family: "Arial";
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  font-family: "Arial";
  margin-bottom: 20px;
  border: 2px solid #461D00;
  background: #fcefe3;
  border-radius: 10px;
  font-size: 1em;
  height: 100px;
`;

const PositionedStaticImage = styled.div`
  position: absolute;
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
`;

const Button = styled.button`
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  width: 225px;
  height: 40px;
  cursor: pointer;
  border-radius: var(--radius-100, 100px);
  background: var(--Color-Primary-primart-850, #2B1200);

  &:hover {
    background: #555;
  }
`;

const ContactUs = () => {
  return (
    <ContactSection>
      <PositionedStaticImage style={{ top: '10%', left: '10%' }}>
        <StaticImage
          src="../images/Avatar1.png"
          alt="Avatar 1"
          layout="fixed"
          width={45}
          height={45}
        />
      </PositionedStaticImage>
      <PositionedStaticImage style={{ top: '20%', left: '80%' }}>
        <StaticImage
          src="../images/Avatar2.png"
          alt="Avatar 2"
          layout="fixed"
          width={45}
          height={45}
        />
      </PositionedStaticImage>
      <PositionedStaticImage style={{ top: '80%', left: '10%' }}>
        <StaticImage
          src="../images/Avatar3.png"
          alt="Avatar 3"
          layout="fixed"
          width={45}
          height={45}
        />
      </PositionedStaticImage>

      <Title>Wanna Talk?</Title>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Enter your name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Enter your email" required />

        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" placeholder="Type here...." required></TextArea>

        <Button type="submit">Send</Button>
      </Form>
    </ContactSection>
  );
};

export default ContactUs;


