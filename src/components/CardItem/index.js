import './index.css'

const CardListItem = props => {
  const {cardList} = props
  const {className, title, description, imgUrl} = cardList
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardListItem
