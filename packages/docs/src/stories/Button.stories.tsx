import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@gabrielcaiana-ui/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<typeof Button> = {
  args: {
    children: 'Send',
  },
  component: Button,
  title: 'Form/Button',
}

export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      /* eslint-disable prettier/prettier */
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
