import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@gabrielcaiana-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <div>
        <span>Conteúdo do box</span>
      </div>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
