import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '.';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    variant: 'circle'
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'Avatar',
    size: 38
  }
};
