import Button from './Button.vue';

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
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

const defaultButton = {
  size: 'small',
  color: 'primary',
  loading: false,
};

export const Solid = Template.bind({});
Solid.args = {
  ...defaultButton,
  label: 'Button Solid',
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  ...defaultButton,
  label: 'Button Outline',
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultButton,
  label: 'Button Ghost',
  variant: 'ghost',
};

export const Link = Template.bind({});
Link.args = {
  ...defaultButton,
  label: 'Button Link',
  variant: 'link',
};
