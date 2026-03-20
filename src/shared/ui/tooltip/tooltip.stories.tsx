import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '.';

const meta = {
  title: 'shared/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    sideOffset: 8
  },

  render: (args) => {
    return (
      <Tooltip {...args}>
        <Tooltip.Trigger>Trigger</Tooltip.Trigger>
        <Tooltip.Content>Content</Tooltip.Content>
      </Tooltip>
    );
  }
};
