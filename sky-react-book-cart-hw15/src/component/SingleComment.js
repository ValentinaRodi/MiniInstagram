import { useState, useEffect } from 'react'
import { commentDelete } from '../redux/actions'
import { commentUpdate } from '../redux/actions'
import { useDispatch  } from 'react-redux'

const SingleComment = ({ data, commentDel, name }) => {
  const [commentText, setCommentText] = useState('')
  const { text, id } = data

  const dispatch = useDispatch()

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    commentDel()
    setCommentText(e.target.value)
    dispatch(commentUpdate(commentText, id))
  }

  const deleteComment = (e) => {
    commentDel()
    dispatch(commentDelete(id))
  }

  return (
    <form onSubmit={null} name={name} className="comments-item ">
      <div onClick={deleteComment} className="comments-item-delete" >
        &times;
      </div>
      <input type="text" value={commentText} id={name} onChange={handleInput}  />
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComment