import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Button, { type ButtonProps } from '@components/common/Button';

const meta: Meta<ButtonProps> = {
    title: 'Common/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['soft', 'solid']
        },
        color: {
            control: 'select',
            options: ['black', 'grey', 'blue', 'orange', 'red', 'green']
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        fullWidth: { control: 'boolean' },
        loading: { control: 'boolean' },
        onClick: { action: 'clicked' }
    },
    args: {
        children: 'Button',
        variant: 'soft',
        color: 'grey',
        size: 'md',
        fullWidth: false,
        loading: false,
        onClick: fn()
    }
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    argTypes: {
        variant: { control: 'select', options: ['soft', 'solid'] },
        color: { control: 'select', options: ['black', 'grey', 'blue', 'orange', 'red', 'green'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        fullWidth: { control: 'boolean' },
        loading: { control: 'boolean' },
        onClick: { action: 'clicked' }
    },
    args: {
        children: 'Button',
        variant: 'soft',
        color: 'grey',
        size: 'md',
        fullWidth: false,
        loading: false,
        onClick: fn()
    }
};

export const Loading: Story = {
    args: {
        children: 'Button',
        variant: 'soft',
        color: 'grey',
        size: 'md',
        fullWidth: false,
        loading: true,
        onClick: fn()
    }
};

export const FullWidth: Story = {
    args: {
        children: 'Button',
        variant: 'soft',
        color: 'grey',
        size: 'md',
        fullWidth: true,
        loading: false,
        onClick: fn()
    }
};
