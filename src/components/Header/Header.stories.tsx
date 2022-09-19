import { Meta, Story } from '@storybook/vue3'
import Header, { IHeaderProps } from './Header.vue';

export default {
  title: 'Smart-UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template:Story<IHeaderProps> = (args) => ({
  components: { Header },
  setup() {
    return { ...args };
  },
  template: '<Header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: undefined,
};
