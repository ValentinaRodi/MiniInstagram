import { INCREMENT } from './types'
import { DECREMENT } from './types'
import { INPUT_TEXT } from './types'
import { COMMENT_CREATE } from './types'
import { COMMENT_LOAD } from './types'
import { COMMENT_DELETE } from './types'
import { COMMENT_UPDATE } from './types'
import axios from 'axios'

export function incrementLikes() {
  return {
    type: INCREMENT,
  }
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  }
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  }
}

export function commentsLoadbk() {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=5'
    )
    const jsonData = await response.json()
    dispatch({
      type: COMMENT_LOAD,
      data: jsonData,
    })
  }
}

export const commentsLoadb2 = ({ text, id }) => {
  return (dispatch) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/comments?_limit=5`, {
        text,
        id,
        completed: false,
      })
      .then((res) => {
        dispatch(commentCreate())
        console.log('good')
      })
      .catch((err) => {
        console.log('bad')
      })
  }
}

// export function commentsLoad() {
//   return function (dispatch) {
//     const response = axios.get(
//       'https://jsonplaceholder.typicode.com/comments?_limit=5'
//     )

//     dispatch(commentCreate())
//   }
// }

export function commentsLoad() {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then((response) => {
        dispatch({
          type: COMMENT_LOAD,
          data: response.data,
        })
      })
      .catch((response) => {
        return Promise.reject(response)
      })
  }
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id: id,
  }
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  }
}