import { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@gabrielcaiana-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabrielcaiana.png',
    alt: 'Gabriel Caiana',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
