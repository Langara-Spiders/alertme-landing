import { FormattedMessage, useIntl } from "react-intl";

import FormInput from "../components/FormInput";
import FormSubmitBtn from "../components/FormSubmitBtn";
import FormTextArea from "../components/FormTextArea";
import React from "react";
import palette from "../theme";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${palette.sectionBg};
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 16px;
`;

const SubHeading = styled.h2`
  color: ${palette.contactTxt};
  text-align: center;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

const Form = styled.form`
  padding: 0;
  margin: 0;
`;

const ContactSection = () => {
  const intl = useIntl();

  return (
    <Section id="contact">
      <SubHeading>Wanna Talk?</SubHeading>
      <Form>
        <FormInput
          label={<FormattedMessage id="form.name" defaultMessage="Name" />}
          placeholder={
            intl.formatMessage({
              id:"form.name.placeholder",
              defaultMessage:"Enter your name"
            })
          } />
        <FormInput
          label={<FormattedMessage id="form.email" defaultMessage="Email" />}
          placeholder={
            intl.formatMessage({
              id:"form.email.placeholder",
              defaultMessage:"Enter your Email"
            })
          } />
        <FormTextArea
          label={<FormattedMessage id="form.message" defaultMessage="Message" />}
          placeholder={
            intl.formatMessage({
              id:"form.message.placeholder",
              defaultMessage:"Type here..."
            })
          } />
        <FormSubmitBtn>Send</FormSubmitBtn>
      </Form>
    </Section>
  );
};

export default ContactSection;
