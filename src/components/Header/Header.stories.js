import Header from './Header.vue';

export default {
  title: 'Smart-UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
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
  user: null,
};
