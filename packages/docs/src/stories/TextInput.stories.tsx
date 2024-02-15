import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@gabrielcaiana-ui/react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text>Email address</Text>
        <Story />
      </Box>
    ),
  ],
}

export default meta

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type something...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
