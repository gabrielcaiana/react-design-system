import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@gabrielcaiana-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Label',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
