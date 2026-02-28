import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionButton } from '.';
import { Icons } from '../icons';

const meta = {
  title: 'shared/ActionButton',
  component: ActionButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    name: { control: 'select', options: Object.keys(Icons) }
  },
  args: {
    type: 'button',
    variant: 'filled',
    disabled: false
  }
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: 'User',
    variant: 'transparent',
    size: 32
  }
};
