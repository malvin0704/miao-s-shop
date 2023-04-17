import data from '../data'
import styled from 'styled-components'
import Rating from './Rating'
const Products = () => {
  console.log(data)
  return (
    <Container>
      {data.products.map((item) => {
        return (
          <ProductWrapper key={item._id}>
            <Image src={item.image} alt={item.name} />
            <Link href={`/product/${item._id}`}>{item.name}</Link>
            <Rating numOfReviews={item.numReviews} rating={item.rating} />
            <Tag>${item.price}</Tag>
          </ProductWrapper>
        )
      })}
    </Container>
  )
}

export default Products

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
  padding: 1.5rem;
`
const ProductWrapper = styled.div`
  width: 24%;
  height: 40vh;
  border: 0.5px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0.5rem 0;
  border-radius: 5px;
  background-color: lightyellow;
`
const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: coral;
`
const Image = styled.img`
  height: 80%;
  width: 100%;
`
const Tag = styled.p`
  margin-left: 0.5rem;
`
