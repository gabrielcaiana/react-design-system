import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@gabrielcaiana-ui/react'

const meta: Meta<typeof Heading> = {
  title: 'typography/Heading',
  component: Heading,
  args: {
    children: 'Heading example',
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será `h2`, mas é possível alterar isso com a propriedade `as`',
      },
    },
  },
}
