import { Meta,StoryObj }  from '@storybook/react'
import { Children } from 'react';
import { Heading, HeadingProps } from "./Heading";


export  default {
    title:'components/Heading',
    component: Heading,
    args: {
        children:'loren ipsun',
        size:'md'
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type:'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default : StoryObj<HeadingProps> = {

}

export const Small : StoryObj<HeadingProps> = {
    args:{
        size:'sm'
    }
}

export const Large : StoryObj<HeadingProps> = {
    args:{
        size:'lg'
    }
}


export const CustonComponent : StoryObj<HeadingProps> = {
    args:{
        asChild : true,
        children: (<h1>Testing</h1>)
    }
}