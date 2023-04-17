import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <h1>Miao's Shop</h1>
      <nav>
        <Link href='/cart'>Cart</Link>
        <Link href='/signin'>Sign In</Link>
      </nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 5vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: orange;
  padding: 0 0.5rem;
  h1 {
    color: white;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 0.7rem;
  cursor: pointer;
  font-size: 1.2rem;
`
