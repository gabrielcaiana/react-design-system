import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@gabrielcaiana-ui/react'

const meta: Meta<typeof Text> = {
  title: 'typography/Text',
  component: Text,
  args: {
    children: 'Text example',
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
