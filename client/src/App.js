import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [url, setUrl] = useState();

  const submit = (event) => {
    event.preventDefault();
    const payload = {
      title,
      author,
      price,
      url
    };
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

 
  return (
    <div className="App">
      <form>
        <input placeholder="title" value={title} onChange={e=>setTitle(e.target.value)}></input>
        <input placeholder="author" value={author} onChange={e=>setAuthor(e.target.value)}></input>
        <input placeholder="price" value={price} onChange={e=>setPrice(e.target.value)}></input>
        <input placeholder="url" value={url} onChange={e=>setUrl(e.target.value)}></input>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
export default App;


 // const handleClick=(e)=>{
  //   e.preventDefault();
  //   console.log(title, author, price, url);
    
  //   fetch('/save',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': "application/json"
  //     },
  //     body: {
  //       title,
  //       author,
  //       price,
  //       url
  //     }
  //   }).then(res=>res.json())
  //   .then(res => {
  //     console.log(res);
  //   })
  // }

// class App extends React.Component {

//   state = {
//     title: '',
//     body: '',
//     posts: []
//   };

//   componentDidMount = () => {
//     this.getBlogPost();
//   };


//   getBlogPost = () => {
//     axios.get('/api')
//       .then((response) => {
//         const data = response.data;
//         this.setState({ posts: data });
//         console.log('Data has been received!!');
//       })
//       .catch(() => {
//         alert('Error retrieving data!!!');
//       });
//   }

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };


  // submit = (event) => {
  //   event.preventDefault();

  //   const payload = {
  //     title: this.state.title,
  //     body: this.state.body
  //   };


  //   axios({
  //     url: '/api/save',
  //     method: 'POST',
  //     data: payload
  //   })
  //     .then(() => {
  //       console.log('Data has been sent to the server');
  //       this.resetUserInputs();
  //       this.getBlogPost();
  //     })
  //     .catch(() => {
  //       console.log('Internal server error');
  //     });;
  // };

//   resetUserInputs = () => {
//     this.setState({
//       title: '',
//       body: ''
//     });
//   };

//   displayBlogPost = (posts) => {

//     if (!posts.length) return null;


//     return posts.map((post, index) => (
//       <div key={index} className="blog-post__display">
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));
//   };

//   render() {

//     console.log('State: ', this.state);

//     //JSX
//     return(
//       <div className="app">
//         <h2>Welcome to the best app ever</h2>
//         <form onSubmit={this.submit}>
//           <div className="form-input">
//             <input 
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={this.state.title}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="form-input">
//             <textarea
//               placeholder="body"
//               name="body"
//               cols="30"
//               rows="10"
//               value={this.state.body}
//               onChange={this.handleChange}
//             >
              
//             </textarea>
//           </div>

//           <button>Submit</button>
//         </form>

//         <div className="blog-">
//           {this.displayBlogPost(this.state.posts)}
//         </div>
//       </div>
//     );
//   }
// }


// export default App;