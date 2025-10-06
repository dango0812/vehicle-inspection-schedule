import type { Meta, StoryObj } from '@storybook/react-vite';
import { SvgIcon, type IconProps } from './SvgIcon';

const meta: Meta<IconProps> = {
    title: 'Common/SvgIcon',
    component: SvgIcon,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: {
                disable: true
            }
        },
        name: {
            control: 'select',
            options: ['wiper', 'engineOil']
        },
        size: {
            control: 'number',
            min: 12,
            max: 64,
            step: 4
        },
        color: {
            control: 'select',
            options: ['white', 'black', 'red', 'grey', 'blue', 'orange', 'green', 'teal', 'purple', 'warning']
        }
    },
    args: {
        name: 'wiper',
        size: 24,
        color: 'black'
    }
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof SvgIcon>;

export const Default: Story = {};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SvgIcon {...args} size={16} />
            <SvgIcon {...args} size={24} />
            <SvgIcon {...args} size={32} />
            <SvgIcon {...args} size={48} />
            <SvgIcon {...args} size={64} />
        </div>
    )
};

export const Colors: Story = {
    render: (args) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SvgIcon {...args} color="black" />
            <SvgIcon {...args} color="red" />
            <SvgIcon {...args} color="grey" />
            <SvgIcon {...args} color="blue" />
            <SvgIcon {...args} color="orange" />
            <SvgIcon {...args} color="green" />
            <SvgIcon {...args} color="teal" />
            <SvgIcon {...args} color="purple" />
            <SvgIcon {...args} color="warning" />
        </div>
    )
};
