import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '.';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] }
  },
  args: {
    type: 'button',
    variant: 'filled-white-md',
    disabled: false,
    loading: false,
    as: 'button'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Кнопка'
  }
};
