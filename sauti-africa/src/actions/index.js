// import axios from "axios"
// import { axiosWithAuth } from "../utils/axiosWithAuth"

// export const UPDATE_CARD = "UPDATE_CARD"
// export const UPDATE_CARD_SUCCESS = "UPDATE_CARD_SUCCESS"
// export const DELETE_CARD = "DELETE_CARD"
// export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS"



// export const editIdea = idea => dispatch => {
//   dispatch({ type: UPDATE_CARD })
//   axiosWithAuth()
//     .put(
//       `real-sauti-studio.herokuapp.com/api/inputs/${idea.id}`,
//       idea
//     )
//     .then(res => {
//       dispatch({ type: UPDATE_CARD_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     .finally(() => {
//       dispatch(getClasses())
//     })
// }
// export const deleteClass = idea => dispatch => {
//   dispatch({ type: DELETE_CLASSES_START })
//   axiosWithAuth()
//     .delete(
//       `https://anywhere-fitness-backend.herokuapp.com/api/classes/${idea}`
//     )
//     .then(res => {
//       dispatch({ type: DELETE_CLASSES_SUCCESS })
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     .finally(() => {
//       dispatch(getClasses())
//     })
// }