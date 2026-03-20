import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/internal/preview-api';
import { InputText } from '.';

const meta = {
  title: 'shared/InputText',
  component: InputText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
    defaultValue: { control: false }
  }
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    value: '',
    readOnly: false,
    disabled: false,
    hasClear: false,
    placeholder: 'Введите текст',
    label: 'Название input :)'
  },

  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ value }, updateArgs] = useArgs();

    return (
      <div style={{ width: '300px' }}>
        <InputText
          {...args}
          onChange={(e) => updateArgs({ value: e.target.value })}
          value={value}
        />
      </div>
    );
  }
};
