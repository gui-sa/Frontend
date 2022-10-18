import {Meta, StoryObj} from "@storybook/react"
import {Heading, HeadingProps} from "./Heading"


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem Ipsum'
    },
} as Meta<HeadingProps>

export const Default:StoryObj<HeadingProps> = {}


export const Paragraph:StoryObj<HeadingProps> = {
    args: {
        asChild : true,
        children : (<p>Lorem Ipsum</p>)
    }
}