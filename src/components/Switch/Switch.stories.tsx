import Switch from './Switch.vue';

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
};

const Template = (args) => ({
  components: { Switch },
  setup() {
    return { args };
  },
  template: '<Switch v-bind="args" />',
});

const defaultSwitch = {
  size: 'small',
  color: 'primary',
  loading: false,
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
