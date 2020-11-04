import React from 'react'

const Questioncontext = React.createContext()

export const QuestionProvider = Questioncontext.Provider
export const QuestionConsumer = Questioncontext.Consumer

export default Questioncontext