import React, { useContext } from 'react';
import { Aside } from './styles';
import info from '../../../data/info.json';
import { GlobalContext } from '../../../contexts/GlobalContext';

const SideBar = () => {
  const { isPTBR } = useContext(GlobalContext);
  return (
    <Aside>
      <div>
        <img src="images/perfil.jpg" alt="Perfil" />
        <h1>{info.name}</h1>
        <nav>
          <ul>
            <li>
              <h2>
                {isPTBR ? 'Data de Nascimento' : 'Birthday'}
              </h2>
              <span>{isPTBR ? info.birthday.pt : info.birthday.eng}</span>
            </li>
            <li>
              <h2>CPF</h2>
              <span>{info.cpf}</span>
            </li>
            <li>
              <h2>{isPTBR ? 'Endereço' : 'Address'}</h2>
              <span>
                {isPTBR ? 'Rua:' : 'Street:'}
                {' '}
                {info.address.street}
              </span>
              <span>
                {isPTBR ? 'Cidade:' : 'City:'}
                {' '}
                {info.address.city}
              </span>
              <span>
                {isPTBR ? 'Estado:' : 'State:'}
                {' '}
                {info.address.state}
              </span>
              <span>
                {isPTBR ? 'CEP:' : 'Zipcode:'}
                {' '}
                {info.address.zipcode}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </Aside>
  );
};
export { SideBar };
