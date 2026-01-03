/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleComponent } from '../../components/toggle/Toggle.component';

const meta: Meta<typeof ToggleComponent> = {
  title: 'Components/Toggle',
  component: ToggleComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle',
    },
    isOn: {
      control: 'boolean',
      description: 'Initial toggle state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback when toggle state changes',
    },
  },
  args: {
    size: 'medium',
    isOn: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof ToggleComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    isOn: false,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    isOn: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    isOn: false,
  },
};

export const On: Story = {
  args: {
    size: 'medium',
    isOn: true,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    isOn: false,
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    size: 'medium',
    isOn: true,
    disabled: true,
  },
};
