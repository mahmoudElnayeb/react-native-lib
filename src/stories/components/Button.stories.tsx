/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { AppText } from '../../components/AppText';
import { ButtonComponent } from '../../components/button/Button.component';

const ButtonText = ({ children }: { children: string }) => (
  <AppText>{children}</AppText>
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

// =============================================================================
// PRIMARY TYPE - All Sizes
// =============================================================================

export const PrimarySmall: Story = {
  args: {
    size: 'small',
    type: 'primary',
    disabled: false,
    ContentComponent: <ButtonText>Save</ButtonText>,
  },
};

export const PrimaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'primary',
    disabled: false,
    ContentComponent: <ButtonText>Submit</ButtonText>,
  },
};

export const PrimaryLarge: Story = {
  args: {
    size: 'large',
    type: 'primary',
    disabled: false,
    ContentComponent: <ButtonText>Get Started Now</ButtonText>,
  },
};

export const PrimarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'primary',
    disabled: true,
    ContentComponent: <ButtonText>Save</ButtonText>,
  },
};

export const PrimaryMediumDisabled: Story = {
  args: {
    size: 'medium',
    type: 'primary',
    disabled: true,
    ContentComponent: <ButtonText>Submit</ButtonText>,
  },
};

export const PrimaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'primary',
    disabled: true,
    ContentComponent: <ButtonText>Get Started Now</ButtonText>,
  },
};

// =============================================================================
// SECONDARY TYPE - All Sizes
// =============================================================================

export const SecondarySmall: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    disabled: false,
    ContentComponent: <ButtonText>Edit</ButtonText>,
  },
};

export const SecondaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'secondary',
    disabled: false,
    ContentComponent: <ButtonText>Continue</ButtonText>,
  },
};

export const SecondaryLarge: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    disabled: false,
    ContentComponent: <ButtonText>Create New Account</ButtonText>,
  },
};

export const SecondarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    disabled: true,
    ContentComponent: <ButtonText>Edit</ButtonText>,
  },
};

export const SecondaryMediumDisabled: Story = {
  args: {
    size: 'medium',
    type: 'secondary',
    disabled: true,
    ContentComponent: <ButtonText>Continue</ButtonText>,
  },
};

export const SecondaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    disabled: true,
    ContentComponent: <ButtonText>Create New Account</ButtonText>,
  },
};

// =============================================================================
// TERTIARY TYPE - All Sizes
// =============================================================================

export const TertiarySmall: Story = {
  args: {
    size: 'small',
    type: 'tertiary',
    disabled: false,
    ContentComponent: <ButtonText>Skip</ButtonText>,
  },
};

export const TertiaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'tertiary',
    disabled: false,
    ContentComponent: <ButtonText>Learn More</ButtonText>,
  },
};

export const TertiaryLarge: Story = {
  args: {
    size: 'large',
    type: 'tertiary',
    disabled: false,
    ContentComponent: <ButtonText>View All Details</ButtonText>,
  },
};

export const TertiarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'tertiary',
    disabled: true,
    ContentComponent: <ButtonText>Skip</ButtonText>,
  },
};

export const TertiaryMediumDisabled: Story = {
  args: {
    size: 'medium',
    type: 'tertiary',
    disabled: true,
    ContentComponent: <ButtonText>Learn More</ButtonText>,
  },
};

export const TertiaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'tertiary',
    disabled: true,
    ContentComponent: <ButtonText>View All Details</ButtonText>,
  },
};

// =============================================================================
// OUTLINE PRIMARY TYPE - All Sizes
// =============================================================================

export const OutlinePrimarySmall: Story = {
  args: {
    size: 'small',
    type: 'outline-primary',
    disabled: false,
    ContentComponent: <ButtonText>Add</ButtonText>,
  },
};

export const OutlinePrimaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'outline-primary',
    disabled: false,
    ContentComponent: <ButtonText>Add Item</ButtonText>,
  },
};

export const OutlinePrimaryLarge: Story = {
  args: {
    size: 'large',
    type: 'outline-primary',
    disabled: false,
    ContentComponent: <ButtonText>Add to Cart</ButtonText>,
  },
};

export const OutlinePrimarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'outline-primary',
    disabled: true,
    ContentComponent: <ButtonText>Add</ButtonText>,
  },
};

export const OutlinePrimaryMediumDisabled: Story = {
  args: {
    size: 'medium',
    type: 'outline-primary',
    disabled: true,
    ContentComponent: <ButtonText>Add Item</ButtonText>,
  },
};

export const OutlinePrimaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'outline-primary',
    disabled: true,
    ContentComponent: <ButtonText>Add to Cart</ButtonText>,
  },
};

// =============================================================================
// OUTLINE SECONDARY TYPE - All Sizes
// =============================================================================

export const OutlineSecondarySmall: Story = {
  args: {
    size: 'small',
    type: 'outline-secondary',
    disabled: false,
    ContentComponent: <ButtonText>Info</ButtonText>,
  },
};

export const OutlineSecondaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'outline-secondary',
    disabled: false,
    ContentComponent: <ButtonText>View Info</ButtonText>,
  },
};

export const OutlineSecondaryLarge: Story = {
  args: {
    size: 'large',
    type: 'outline-secondary',
    disabled: false,
    ContentComponent: <ButtonText>View More Information</ButtonText>,
  },
};

export const OutlineSecondarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'outline-secondary',
    disabled: true,
    ContentComponent: <ButtonText>Info</ButtonText>,
  },
};

export const OutlineSecondaryMediumDisabled: Story = {
  args: {
    size: 'medium',
    type: 'outline-secondary',
    disabled: true,
    ContentComponent: <ButtonText>View Info</ButtonText>,
  },
};

export const OutlineSecondaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'outline-secondary',
    disabled: true,
    ContentComponent: <ButtonText>View More Information</ButtonText>,
  },
};

// =============================================================================
// OUTLINE TERTIARY TYPE - All Sizes
// =============================================================================

export const OutlineTertiarySmall: Story = {
  args: {
    size: 'small',
    type: 'outline-tertiary',
    disabled: false,
    ContentComponent: <ButtonText>Help</ButtonText>,
  },
};

export const OutlineTertiaryMedium: Story = {
  args: {
    size: 'medium',
    type: 'outline-tertiary',
    disabled: false,
    ContentComponent: <ButtonText>Get Help</ButtonText>,
  },
};

export const OutlineTertiaryLarge: Story = {
  args: {
    size: 'large',
    type: 'outline-tertiary',
    disabled: false,
    ContentComponent: <ButtonText>Contact Support Team</ButtonText>,
  },
};

export const OutlineTertiarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'outline-tertiary',
    disabled: true,
    ContentComponent: <ButtonText>Help</ButtonText>,
  },
};

export const OutlineTertiaryMediumDisabled: Story = {
  args: {
    size: 'medium',
    type: 'outline-tertiary',
    disabled: true,
    ContentComponent: <ButtonText>Get Help</ButtonText>,
  },
};

export const OutlineTertiaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'outline-tertiary',
    disabled: true,
    ContentComponent: <ButtonText>Contact Support Team</ButtonText>,
  },
};
