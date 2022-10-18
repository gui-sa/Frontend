import  clsx  from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps{
    size ?: 'sm' | 'md' | 'lg';
    children : ReactNode;
    asChild ?: boolean;
}



export function Heading( {size = 'sm', children, asChild}:HeadingProps ) {

    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className= {clsx( 'text-gray-300 font-sans',{
            'text-xl' : size ==='sm',
        })}>{children}</Comp>
    )

}