import React, { useRef, useEffect } from "react";

export default function InputWithLabel({ id, value, onChange, children }) {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
         <label htmlFor={id}>{children}</label>
            <input
                ref={inputRef}
                type="text"
                id={id}
                name="title"
                value={value}
                onChange={onChange}
            />
        
        </>
    )
}