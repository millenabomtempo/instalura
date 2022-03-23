import Logo from '../../theme/Logo';
import { MenuWrapper } from './styles';

export default function Menu() {
  const links = [
    { url: '/', name: 'Home' },
    { url: '/faq', name: 'Perguntas Frequentes' },
    { url: '/about', name: 'Sobre' },
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button type="button">
          Entrar
        </button>
        <button type="button">
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}