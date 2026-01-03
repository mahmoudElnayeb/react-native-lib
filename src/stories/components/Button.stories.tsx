/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { AppText } from '../../components/AppText';
import { ButtonComponent } from '../../components/button/Button.component';

const ButtonText = ({ children }: { children: string }) => (
  <AppText>{children} </AppText>
);

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    Story => (
      <View style={{ padding: 16, margin: 8 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    type: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'outline-primary',
        'outline-secondary',
        'outline-tertiary',
        'outline-no-border',
      ],
      description: 'Button style type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
  args: {
    size: 'medium',
    type: 'primary',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: {
    size: 'medium',
    type: 'primary',
    disabled: false,
    ContentComponent: <ButtonText>Primary Button</ButtonText>,
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    type: 'secondary',
    disabled: false,
    ContentComponent: <ButtonText>Secondary Button</ButtonText>,
  },
};

export const Tertiary: Story = {
  args: {
    size: 'medium',
    type: 'tertiary',
    disabled: false,
    ContentComponent: <ButtonText>Tertiary Button</ButtonText>,
  },
};

export const OutlinePrimary: Story = {
  args: {
    size: 'large',
    type: 'outline-primary',
    disabled: false,
    ContentComponent: <ButtonText>Outline Primary</ButtonText>,
  },
};

export const OutlineSecondary: Story = {
  args: {
    size: 'large',
    type: 'outline-secondary',
    disabled: false,
    ContentComponent: <ButtonText>Outline Secondary</ButtonText>,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    type: 'primary',
    disabled: false,
    ContentComponent: <ButtonText>Small</ButtonText>,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    type: 'primary',
    disabled: false,
    ContentComponent: <ButtonText>Large Button</ButtonText>,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    type: 'primary',
    disabled: true,
    ContentComponent: <ButtonText>Disabled primary</ButtonText>,
  },
};
