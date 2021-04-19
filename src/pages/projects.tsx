import React, { useContext, useEffect } from 'react';
import { Content } from '../components/Content';
import { Column, DivGrouping, Row } from '../components/Content/styles';
import Modal from '../components/Modal';
import { ModalButtonImage } from '../components/Modal/styles';
import { GlobalContext } from '../contexts/GlobalContext';
import info from '../data/info.json';

export default function Projects() {
  const { changeActivePage, isPTBR, innerWidth } = useContext(GlobalContext);

  useEffect(() => changeActivePage('Projects'));

  return (
    <Content>
      <title>{isPTBR ? 'Projetos' : 'Projects'}</title>
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

            {project.thumbnails.length > 0 && <h3>Screenshots:</h3>}
            <Row justify="center" wrap="wrap">
              {project.thumbnails.length > 0 && project.thumbnails.map((image, index) => {
                const key = `image__${index}`;
                return (
                  <DivGrouping>
                    <Modal
                      modalTitle={isPTBR ? image.name.pt : image.name.eng}
                      insideButtonElement={(
                        <ModalButtonImage
                          innerWidth={innerWidth}
                          url={image.url}
                        >
                          <div />
                        </ModalButtonImage>
                      )}
                      key={key}
                    >
                      <img src={image.url} />
                    </Modal>
                  </DivGrouping>
                );
              })}
            </Row>
          </Column>
        </DivGrouping>
      ))}
    </Content>
  );
}
