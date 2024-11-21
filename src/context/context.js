'use client'

import React, { createContext, useState } from 'react'

export const ContextErrMsg = createContext()


function Context({ children }) {
    const [message, setMessage] = useState("");
    const [error, setErrors] = useState("");
    return (
        <ContextErrMsg.Provider value={{ message, setMessage, error, setErrors }}>  {children} </ContextErrMsg.Provider>

    )
}

export default Context