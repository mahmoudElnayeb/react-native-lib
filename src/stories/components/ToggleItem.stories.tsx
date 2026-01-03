/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import ToggleItemComponent from '../../components/ToggleItem.component';

const meta: Meta<typeof ToggleItemComponent> = {
  title: 'Components/ToggleItem',
  component: ToggleItemComponent,
  argTypes: {
    text: {
      control: 'text',
      description: 'Label text displayed next to the toggle',
    },
    item: {
      control: 'object',
      description: 'Toggle configuration object',
    },
  },
  args: {
    text: 'Enable feature',
    item: {
      size: 'medium',
      isOn: false,
      disabled: false,
      onToggle: (value: boolean) => console.log('Toggle:', value),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleItemComponent>;

export const Default: Story = {
  args: {
    text: 'Enable notifications',
    item: {
      size: 'medium',
      isOn: false,
      disabled: false,
      onToggle: (value: boolean) => console.log('Toggle:', value),
    },
  },
};

export const WithSmallToggle: Story = {
  args: {
    text: 'Dark mode',
    item: {
      size: 'small',
      isOn: false,
      disabled: false,
      onToggle: (value: boolean) => console.log('Toggle:', value),
    },
  },
};

export const WithLargeToggle: Story = {
  args: {
    text: 'Accept terms',
    item: {
      size: 'large',
      isOn: false,
      disabled: false,
      onToggle: (value: boolean) => console.log('Toggle:', value),
    },
  },
};

export const ToggledOn: Story = {
  args: {
    text: 'Feature enabled',
    item: {
      size: 'medium',
      isOn: true,
      disabled: false,
      onToggle: (value: boolean) => console.log('Toggle:', value),
    },
  },
};

export const Disabled: Story = {
  args: {
    text: 'Cannot change',
    item: {
      size: 'medium',
      isOn: false,
      disabled: true,
      onToggle: (value: boolean) => console.log('Toggle:', value),
    },
  },
};
