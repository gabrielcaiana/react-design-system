import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@gabrielcaiana-ui/react'

const meta: Meta<typeof Text> = {
  title: 'typography/Text',
  component: Text,
  args: {
    children: 'Text example',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
