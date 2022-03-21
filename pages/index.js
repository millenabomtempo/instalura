import styled from 'styled-components'

function Title({children} = props) {
  return <h1>{children}</h1>
}


export default function Home() {
  return <Title>Olá bootcamp 🔥</Title>
}
