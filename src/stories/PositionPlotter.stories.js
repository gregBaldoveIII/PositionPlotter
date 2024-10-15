import React from 'react';
import PositionPlotter from '../components/PositionPlotter';

export default {
  title: 'PositionPlotter',
  component: PositionPlotter,
};

const Template = (args) => <PositionPlotter {...args} />;

export const Default = Template.bind({});
Default.args = {
  position: '2,3 NORTH'
};

export const AtEdge = Template.bind({});
AtEdge.args = {
  position: '4,4 WEST'
};

export const InvalidPosition = Template.bind({});
InvalidPosition.args = {
  position: '5,5 EAST', 
};
