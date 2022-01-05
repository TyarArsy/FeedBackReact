
import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Feedbacklist from "./components/Feedbacklist"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

// import Card from "./components/shared/Card"

function App(){

    return(
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
            <Routes>                      
                <Route exact path='/' element={
                <React.Fragment>
                    <FeedbackForm/>
                    <FeedbackStats/>
                    <Feedbacklist/>    
                </React.Fragment>
            }>
                    </Route>
                    <Route path='/about' element={<About/>}></Route>
            </Routes>
            <AboutIconLink />
        </div>
            </Router>
            </FeedbackProvider>
    )
}
export default App;

// <Header bgColor='red' textColor="blue"/>


// function App() {
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         {id: 1, text: 'Comment one'},
//         {id: 2, text: 'Comment two'},
//         {id: 3, text: 'Comment three'}
//     ]

//     const loading = false
//     const showComments = true

//     if(loading) return <h1>Loading....</h1>

//     const commentBlock =  (<div className="comments">
//     <h3> Comments ({comments.length})</h3>  
//     <ul>
//         {comments.map((comment, index)=>(
//             <li key={index}>{comment.text}</li>
//         ))}
//     </ul>
// </div>) 

//     return  (
//        <div className="container">
//         <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>

//         {showComments && commentBlock }

      
//         </div>
//     )
// }
