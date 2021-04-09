import React, { useContext, useEffect } from 'react';
import { Content } from '../components/Content';
import { DivGrouping, Row } from '../components/Content/styles';
import { GlobalContext } from '../contexts/GlobalContext';
import info from '../data/info.json';

export default function Formation() {
  const { changeActivePage, isPTBR } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Formation'));

  return (
    <Content>
      <title>{isPTBR ? 'Formação' : 'Academic'}</title>
      <h1>{isPTBR ? 'Formação' : 'University Degree'}</h1>
      <h2>{isPTBR ? info.degree.name.pt : info.degree.name.eng}</h2>
      <DivGrouping>
        <Row>
          <h3>{isPTBR ? 'Faculdade: ' : 'University: '}</h3>
          {isPTBR ? info.degree.university.pt : info.degree.university.eng}
        </Row>
        <Row>
          <h3>{isPTBR ? 'Período: ' : 'Time Period: '}</h3>
          {isPTBR ? info.degree.period.pt : info.degree.period.eng}
        </Row>
      </DivGrouping>
      <h1>{isPTBR ? 'Cursos Extracurriculares' : 'Complementary courses'}</h1>
      {info.complementary.map((course) => (
        <Row key={`course__${course.id}`}>
          <h3>{isPTBR ? course.name.pt : course.name.eng}</h3>
          {course.school}
        </Row>
      ))}
    </Content>
  );
}
