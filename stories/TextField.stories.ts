import { fn } from '@storybook/test';
import TextField from '../components/TextField';

export default {
  title: 'Example/TextField',
  tags: ['autodocs'],
  render: (args) => new TextField(args),
  argTypes: {
		type: {
			control: 'select',
			options: ['filled', 'outlined'],
			type: 'filled | outlined'
		}
	},
  args: {
    onClick: fn(),
 },
};

export const Default = {
  args: {
    label: 'Componente',
    name: 'Nome',
    type: "outlined",
  },
};