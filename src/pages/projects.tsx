import React, { useContext, useEffect } from 'react';
import { Content } from '../components/Content';
import { Column, DivGrouping, Row } from '../components/Content/styles';
import { GlobalContext } from '../contexts/GlobalContext';
import info from '../data/info.json';

export default function Projects() {
  const { changeActivePage, isPTBR } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Projects'));

  return (
    <Content>
      <h1>{isPTBR ? 'Projetos Principais' : 'Main Projects'}</h1>
      {info.projects.map((project) => (
        <DivGrouping key={`project__${project.id}`}>
          <Column>
            <h2>{isPTBR ? project.name.pt : project.name.eng}</h2>
            <Row>
              <h3>{isPTBR ? 'Linguagens/Ferramentas:' : 'Languages/Frameworks:'}</h3>
              {project.languages.join(', ')}
            </Row>
            <Row>
              <h3>{isPTBR ? 'Progresso:' : 'Status:'}</h3>
              {isPTBR ? project.status.pt : project.status.eng}
            </Row>
          </Column>
        </DivGrouping>
      ))}
    </Content>
  );
}
