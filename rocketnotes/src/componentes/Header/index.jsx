import {Ri24HoursLine, RiShutDownLine} from 'react-icons/ri' 

import { Container, Profile, Logout } from "./style";

export const Header = () => {
  return (
    <Container>
      <Profile>
        <img 
        src="https://github.com/felipe0402.png"
        alt="Foto do usuario" />

        <div>
          <span>Bem-vindo</span>
          <strong>Felipe Andrade</strong>
        </div>
      </Profile>
    
      <Logout>
        <RiShutDownLine/>
      </Logout>


    </Container>
  )
}
