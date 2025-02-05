import { ReactNode } from "react";

interface buttonProps{
    children:ReactNode,
    handleResult: Function,
}


export function Button({children, handleResult}:buttonProps){

    return (
        <button
            type='button'
            onClick={()=>{handleResult()}}
            >
            {children}
        </button>
    );
}