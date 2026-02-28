import type { Meta as MetaType, StoryObj } from '@storybook/react';
import React from 'react';
import * as Icons from './ui';

type IconComp = React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string }>;

const meta: MetaType = {
  title: 'shared/Icons',
  parameters: { controls: { expanded: true } },
  argTypes: {
    size: { control: { type: 'number', min: 8, max: 256, step: 1 } },
    color: { control: 'color' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = (args: { size: number; color: string }) => {
  const entries = Object.entries(Icons).filter(([, Comp]) => typeof Comp === 'function') as [
    string,
    IconComp
  ][];

  return (
    <div>
      <div
        style={{
          fontSize: 12,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: 16
        }}
      >
        {entries.map(([name, Icon]) => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={name}>
            <div style={{ border: '1px solid #000', fontSize: 0 }}>
              <Icon size={args.size} />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Gallery.args = {
  size: 32,
  color: '#111111'
};

Gallery.argTypes = {
  size: { control: { type: 'number', min: 8, max: 256, step: 1 } },
  color: { control: 'color' }
};
