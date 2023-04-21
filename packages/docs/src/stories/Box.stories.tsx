import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@gabrielcaiana-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <div>
        <Text>Conteúdo do box</Text>
      </div>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
