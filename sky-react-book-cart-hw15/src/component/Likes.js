import { connect } from 'react-redux'
import { incrementLikes, decrementLikes } from '../redux/actions'

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrement}> ❤ {props.likes} </button>
      <button onClick={props.onDecrement}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  const { likesReducer } = state
  return {
    likes: likesReducer.likes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      return dispatch(incrementLikes())
    },
    onDecrement: () => {
      return dispatch(decrementLikes())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
