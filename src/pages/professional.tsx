import React, { useContext, useEffect } from 'react';
import { Content } from '../components/Content';
import { Column, DivGrouping, Row } from '../components/Content/styles';
import { GlobalContext } from '../contexts/GlobalContext';
import info from '../data/info.json';

export default function Professional() {
  const { changeActivePage, isPTBR } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Professional'));

  return (
    <Content>
      <title>{isPTBR ? 'Profissional' : 'Professional'}</title>
      <h1>{isPTBR ? 'Experiências Profissionais' : 'Professional Experiences'}</h1>
      {info.experiences.map((experience) => (
        <DivGrouping key={`experience__${experience.id}`}>
          <h2>{isPTBR ? experience.title.pt : experience.title.eng}</h2>
          <Row>
            <h3>{isPTBR ? 'Empresa:' : 'Company:'}</h3>
            {' '}
            {isPTBR ? experience.company.pt : experience.company.eng}
          </Row>
          <Row>
            <h3>{isPTBR ? 'Período:' : 'Time Period:'}</h3>
            {' '}
            {isPTBR ? experience.time.pt : experience.time.eng}
          </Row>
          <Column>
            <h3>{isPTBR ? 'Atividades:' : 'Activities:'}</h3>
            {' '}
            <p>{isPTBR ? experience.activities.pt : experience.activities.eng}</p>
          </Column>
        </DivGrouping>
      ))}
    </Content>
  );
}
