// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';

// const initialValue = {
//   id: Date.now(),
//   description: '',
//   location: '',
//   idea: '',
  
// };


// const Update = props => {
//   const [idea, setIdea] = useState(initialValue);
//   const { id } = useParams();
//   const history = useHistory(); 
//   useEffect(() => {
//     if (id) {
//     axios
//     .get(`real-sauti-studio.herokuapp.com/api/inputs/:${id}`)
//     .then(res => {
//         setIdea(res.data)
//     })
//     .catch(err => 
//         console.log( "error", err.res)
//     )}

//   }, [ id]);

//   const changeHandler = e => {
//         setIdea({
//             ...idea,
//             [e.target.name]: e.target.value,
//             }) 
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     axios
//       .put(`real-sauti-studio.herokuapp.com/api/inputs/:${idea.id}`, idea)
//       .then(res =>  console.log(res)
//         // props.history.push(`/ideas/${id}`);
//       )
//       .catch(err => console.log(err.res));
//       history.push('/dashboard')
//   };

//   return (
//     <div>
//       <h2>Update idea</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="description"
//           onChange={changeHandler}
//           placeholder="description"
//           value={movie.title}
//         />
//         <div className="baseline" />

//         <input
//           type="text"
//           name="location"
//           onChange={changeHandler}
//           placeholder="location"
//           value={movie.location}
//         />
//         <div className="baseline" />

//         <input
//           type="text"
//           name="idea"
//           onChange={changeHandler}
//           placeholder="idea"
//           value={movie.idea}
//         />

//         <button onclick={handleSubmit}>Update</button>
//       </form>
//     </div>
//   );
// };

// export default Update;