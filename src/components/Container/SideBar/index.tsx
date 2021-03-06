import React, { useContext, useState, useEffect } from 'react';
import { Aside } from './styles';
import info from '../../../data/info.json';
import { GlobalContext } from '../../../contexts/GlobalContext';

const SideBar = () => {
  const { isPTBR } = useContext(GlobalContext);
  const [avatar, setAvatar] = useState('images/perfil.jpg');

  async function fetchMyAvatar() {
    const res = await fetch('https://api.github.com/users/RenatoLomba');
    const json = await res.json();
    if (json.id) setAvatar(json.avatar_url);
  }

  useEffect(() => {
    fetchMyAvatar();
  }, []);

  return (
    <Aside>
      <div>
        <img src={avatar} alt="Perfil" />
        <h1>{info.name}</h1>
        <nav>
          <ul>
            <li>
              <h2>
                {isPTBR ? 'Data de Nascimento' : 'Birthday'}
              </h2>
              <span>{isPTBR ? info.birthday.pt : info.birthday.eng}</span>
            </li>
            {/* <h2>{isPTBR ? 'Contato' : 'Contact Me'}</h2> */}
            <li>
              <h2>{isPTBR ? 'Telefone/Whatsapp:' : 'Phone/Whatsapp:'}</h2>
              <span>{info.contact.phone}</span>
            </li>
            <li>
              <h2>Email:</h2>
              <span>{info.contact.email1}</span>
              <span>{info.contact.email2}</span>
            </li>
            <li>
              <h2>Linkedin:</h2>
              <span>{info.contact.linkedin}</span>
            </li>
            <li>
              <h2>GitHub:</h2>
              <span>{info.contact.github}</span>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </nav>
      </div>
    </Aside>
  );
};
export { SideBar };
