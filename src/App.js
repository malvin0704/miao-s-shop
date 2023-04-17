import styled from 'styled-components'
import Header from './components/Header'
import Products from './components/Products'
function App() {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 1rem;
`
