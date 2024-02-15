import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@gabrielcaiana-ui/react'

const meta: Meta<typeof Box> = {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <div>
        <Text>Conteúdo do box</Text>
      </div>
    ),
  },
}

export default meta

export const Primary: StoryObj<BoxProps> = {}
