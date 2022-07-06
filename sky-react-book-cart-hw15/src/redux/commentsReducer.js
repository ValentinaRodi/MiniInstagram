import { COMMENT_CREATE, COMMENT_LOAD, COMMENT_DELETE, COMMENT_UPDATE } from './types'

const initialState = {
  comments: [],
}

export const commentsReducer = (state = initialState, action) => {

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      }

    case COMMENT_LOAD:
      const commentNew = action.data.map((comm) => {
        return {
          text: comm.name,
          id: comm.id,
        }
      })
      return {
        ...state,
        comments: commentNew,
      }

    case COMMENT_DELETE:
      const commentDelete = state.comments
      const removeIndex = commentDelete.map((item) => item.id).indexOf(action.id)
      commentDelete.splice(removeIndex, 1)
      return {
        ...state,
        comments: commentDelete
      }

    case COMMENT_UPDATE:
      
      const updateCom = state.comments.map((item) => {
        if(item.id === action.data.id) {
          item.text = action.data.text
          return {
            text: item.text,
            id: item.id,
          }
        } return {
          text: item.text,
          id: item.id,
        }
      })
      return {
        ...state,
        comments: updateCom 
      }

    default:
      return state
  }
}