import { ReactNode } from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes } from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    children: ReactNode;
}
export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputRoot( props: TextInputRootProps) {

    return(
        <div className={clsx('flex items-center gap-3 py-[13px] px-[34px] rounded-[7px] bg-gray-800 w-full transition-colors hover:ring-[3px] ring-cyan-500 focus-within:ring-[3px] ring-cyan-300',)}>
            {props.children}
        </div>
    )

}



function TextInputIcon( props : TextInputIconProps) {
    return (
        <Slot class="w-7 h-7 text-gray-300">
            {props.children}
        </Slot>
    )
}



function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 outline-none text-white text-md  placeholder:text-gray-300' {...props} />
    )
}
TextInputRoot.displayName = "TextInput.Root"
TextInputIcon.displayName = "TextInput.Icon"
TextInputInput.displayName = "TextInput.Input"

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}