import Logo from '../../theme/Logo';
import { Button } from '../Button';
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
        <Button 
          type="button"
          ghost
          variant="secondary.main"
        >
          Entrar
        </Button>
        <Button 
          type="button"
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}