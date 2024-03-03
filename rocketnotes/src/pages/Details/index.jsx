import { Container, Links } from "./style"

import { Header } from "../../componentes/Header"
import { Button } from "../../componentes/button"
import { Section } from "../../componentes/section"
import { Tag } from "../../componentes/Tag"
import { ButtonText } from "../../componentes/ButtonText"

export const Details = () => {
  return (
    <Container>
      <Header/>
      <ButtonText title= "Excluir nota"/>
    <Section title='Links uteis'>
        <Links>
          <li><a href="https://www.linkedin.com/in/felipe-and7/">
           www.linkedin.com/in/felipe-and7/</a></li>

          <li><a href="https://felipe-and.vercel.app/">
           https://felipe-and.vercel.app/</a></li>
        </Links>

        <Section title="Marcadores">
          <Tag title= "Express"/>
          <Tag title="Nodejs"/>
        </Section>
   </Section>

      <Button title='voltar'/> 
    </Container>
  )
}

