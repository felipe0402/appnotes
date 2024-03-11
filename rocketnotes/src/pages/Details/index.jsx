import { Container, Links , Content } from "./style"

import { Header } from "../../componentes/Header"
import { Button } from "../../componentes/button"
import { Section } from "../../componentes/section"
import { Tag } from "../../componentes/Tag"
import { ButtonText } from "../../componentes/ButtonText"

export const Details = () => {
  return (
    <Container>
      <Header/>
      <main>
       <Content>   
              
      <ButtonText title= "Excluir nota"/>

      <>    
      <h1>Sobre mim</h1>
      <p>
      Sou Felipe, tenho 20 anos e estou focado em ingressar na
       área de desenvolvimento  Frontend. Estudo constantemente e já
       desenvolvi projetos utilizando tecnologias Frontend, incluindo bibliotecas como React.
       Estou ansioso para aplicar esse conhecimento em um ambiente profissional e contribuir de
        para trabalhar em equipe e utilizar minhas habilidades para o benefício da empresa 
      </p>
     </>

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
    </Content>
      </main>
    </Container>
  )
}

