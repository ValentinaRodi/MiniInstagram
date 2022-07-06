import { useState, useEffect } from 'react'
import { commentDelete } from '../redux/actions'
import { useDispatch  } from 'react-redux'

const SingleComment = ({ data, commentUpdate }) => {
  const [commentText, setCommentText] = useState('')
  const { text, id } = data

  const dispatch = useDispatch()

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }
  const deleteComment = (e) => {
    commentUpdate()
    dispatch(commentDelete(id))
  }

  return (
    <form onSubmit={null} className="comments-item ">
      <div onClick={deleteComment} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComment