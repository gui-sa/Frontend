import  clsx  from 'clsx';

export interface ButtonProps{
    children : string;
}



export function Button( { children }:ButtonProps ) {

    return (
        <button className= {clsx( 'py-[13px] px-[34px] text-black font-bold text-md rounded-[7px] bg-cyan-500 w-full transition-colors hover:bg-cyan-200 focus:ring-2 ring-white',)}>{children}</button>
    )

}