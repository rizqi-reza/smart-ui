import { Meta, Story } from '@storybook/vue3'
import { TColor } from '@tokens/color';
import { TSize } from '@tokens/size';
import Switch, { ISwitchProps } from './Switch.vue';

export default {
  title: 'Smart-UI/Switch',
  component: Switch,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  },
} as Meta;

const Template:Story<ISwitchProps> = (args) => ({
  components: { Switch },
  setup() {
    return { args };
  },
  template: '<Switch v-bind="args" />',
});

const defaultSwitch = {
  size: 'small' as TSize,
  color: 'primary' as TColor,
  loading: false,
  disabled: false,
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultSwitch,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultSwitch,
  label: 'With Label',
};
