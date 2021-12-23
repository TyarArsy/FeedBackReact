import { v4 as uuidv4 } from 'uuid'
import { createContext } from "react";
import { useState } from "react/cjs/react.development";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        
        {
            id:1,
            text: 'Jancok sistem e badjingan',
            rating:4
        },
        {
            id:2,
            text: 'Mantap Souls ajig',
            rating:9
        },
        {
            id:3,
            text: 'Nyaman dipakai dan user-friendly',
            rating:8
        },
        {
            id:4,
            text: 'No comment Boss',
            rating:6
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    //Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete ? ')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
       
    }

    //Update Feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? 
        {...item, ...updItem} : item
        ))
    }
    //Set item to be update
    const editFeedback = (item)=> {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit, //state
    deleteFeedback,
    addFeedback,
    editFeedback, //function
    updateFeedback
}}>
    {children}
</FeedbackContext.Provider>
}

export default FeedbackContext