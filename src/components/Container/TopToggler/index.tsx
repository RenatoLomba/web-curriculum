import React, { useContext } from 'react';
import Switch from 'react-switch';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { TopItem } from './styles';
import { Theme } from '../../../styles/Theme';

const TopToggler = () => {
  const { isPTBR, changeLanguage } = useContext(GlobalContext);
  return (
    <TopItem>
      <h2>
        {isPTBR ? 'Idioma (PT-BR)' : 'Language (ENG)'}
        {' '}
      </h2>
      <div>
        <Switch
          checked={isPTBR}
          onChange={changeLanguage}
          onColor={Theme.colors.secondary}
          onHandleColor={Theme.colors.dark}
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
      </div>
    </TopItem>
  );
};
export { TopToggler };
