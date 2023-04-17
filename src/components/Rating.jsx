import styled from 'styled-components'

const Rating = (props) => {
  const { rating, numOfReviews } = props
  return (
    <div>
      <div>
        <Icon
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star'
          }
        ></Icon>
        <Icon
          className={
            rating >= 2
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></Icon>
        <Icon
          className={
            rating >= 3
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></Icon>
        <Icon
          className={
            rating >= 4
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></Icon>
        <Icon
          className={
            rating >= 5
              ? 'fa fa-star'
              : rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></Icon>
        &nbsp;
        {numOfReviews <= 1
          ? `${numOfReviews} review`
          : `${numOfReviews} reviews`}
      </div>
    </div>
  )
}

export default Rating
const Icon = styled.i`
  color: orange;
  margin-left: 0.5rem;
`
