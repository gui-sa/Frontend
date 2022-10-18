import {Meta, StoryObj} from "@storybook/react"
import {Text, TextProps} from "./Text"


export default {
    title: 'Components/text',
    component: Text,
    args: {
        children: 'Lorem Ipsum'
    },
} as Meta<TextProps>

export const Default:StoryObj<TextProps> = {}

export const Small:StoryObj<TextProps> = {
    args: {
        size : 'sm'
    }
}

export const Large:StoryObj<TextProps> = {
    args: {
        size : 'lg'
    }
}

export const Paragraph:StoryObj<TextProps> = {
    args: {
        asChild : true,
        children : (<p>Lorem Ipsum</p>)
    }
}