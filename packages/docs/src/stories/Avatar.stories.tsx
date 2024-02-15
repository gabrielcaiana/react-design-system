import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@gabrielcaiana-ui/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabrielcaiana.png',
    alt: 'Gabriel Caiana',
  },
}

export default meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
