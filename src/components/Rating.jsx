import styled from 'styled-components'

const Rating = (props) => {
  const rate = props.rate
  return (
    <div>
      <div>
        <Icon className='fa fa-star'></Icon>
        <Icon className='fa fa-star'></Icon>
        <Icon className='fa fa-star'></Icon>
        <Icon className='fa fa-star'></Icon>
        <Icon className='fa fa-star'></Icon>
        &nbsp;
        {rate <= 1 ? `${rate} review` : `${rate} reviews`}
      </div>
    </div>
  )
}

export default Rating
const Icon = styled.i`
  color: orange;
  margin-left: 0.5rem;
`
