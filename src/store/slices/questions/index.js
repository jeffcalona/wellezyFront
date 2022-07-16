import { createSlice } from "@reduxjs/toolkit";
import newQuestion from '../../../Api/newQuestions'

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questionsList: {},
    },
    reducers: {
        setQuestionsList: (state, action) => {
            state.questionsList = action.payload
        },
    }
})

export const { setQuestionsList, setActiveQuestion } = questionsSlice.actions

export default questionsSlice.reducer

export const initCuestions = (e) => {
    const categorySelected = e.target.attributes.category.value
    return (dispatch) => {
        dispatch(setQuestionsList(newQuestion[categorySelected - 1]))
        //dispatch(setQuestionsList(newQuestion[categorySelected - 1].questions))
    }
}