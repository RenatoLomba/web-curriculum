import React, { useContext, useEffect } from 'react';
import { Content } from '../components/Content';
import { DivGrouping, Row } from '../components/Content/styles';
import { GlobalContext } from '../contexts/GlobalContext';
import info from '../data/info.json';

export default function Contact() {
  const { changeActivePage, isPTBR } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Contact'));

  return (
    <Content>
      <title>{isPTBR ? 'Contato' : 'Contact Me'}</title>
      <h1>{isPTBR ? 'Contato' : 'Contact Me'}</h1>
      <DivGrouping>
        <Row>
          <h3>{isPTBR ? 'Telefone/Whatsapp:' : 'Phone/Whatsapp:'}</h3>
          {info.contact.phone}
        </Row>
        <Row>
          <h3>Email:</h3>
          {info.contact.email}
        </Row>
        <Row>
          <h3>Linkedin:</h3>
          {info.contact.linkedin}
        </Row>
        <Row>
          <h3>GitHub:</h3>
          {info.contact.github}
        </Row>
      </DivGrouping>
    </Content>
  );
}
