import { Meta,StoryObj }  from '@storybook/react'
import { Children } from 'react';
import { Text,TextProps } from "./Text";


export  default {
    title:'components/TEXT',
    component: Text,
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
} as Meta<TextProps>

export const Default : StoryObj<TextProps> = {

}

export const Small : StoryObj<TextProps> = {
    args:{
        size:'sm'
    }
}

export const Large : StoryObj<TextProps> = {
    args:{
        size:'lg'
    }
}


export const CustonComponent : StoryObj<TextProps> = {
    args:{
        asChild : true,
        children: (<p>Testing</p>)
    },
    argTypes:{
        children:{
            table:{
                disable:true
            }
        },
        asChild:{
            table:{
                disable:true
            }
        }
    }
}