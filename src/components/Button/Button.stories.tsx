import { Meta, Story } from '@storybook/vue3'
import { TColor } from '@tokens/color';
import { TSize } from '@tokens/size';
import { TVariant } from '@tokens/variant';
import Button, { IButtonProps } from './Button.vue';

export default {
  title: 'Smart-UI/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    onClick: {},
  },
} as Meta;

const Template:Story<IButtonProps> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

const defaultButton = {
  size: 'small' as TSize,
  color: 'primary' as TColor,
  loading: false,
  disabled: false,
};

export const Solid = Template.bind({});
Solid.args = {
  ...defaultButton,
  label: 'Button Solid',
  variant: 'solid' as TVariant,
};

export const Outline = Template.bind({});
Outline.args = {
  ...defaultButton,
  label: 'Button Outline',
  variant: 'outline' as TVariant,
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultButton,
  label: 'Button Ghost',
  variant: 'ghost' as TVariant,
};

export const Link = Template.bind({});
Link.args = {
  ...defaultButton,
  label: 'Button Link',
  variant: 'link' as TVariant,
};
