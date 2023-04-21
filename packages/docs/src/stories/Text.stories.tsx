import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@gabrielcaiana-ui/react'

export default {
  title: 'typography/Text',
  component: Text,
  args: {
    children: 'Text example',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
