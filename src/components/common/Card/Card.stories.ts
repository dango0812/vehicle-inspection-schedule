import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Common/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: '안녕하세요. Card 입니다.',
        variant: 'solid',
        color: 'grey',
        size: 'md',
        shadow: 'md'
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['outlined', 'solid', 'soft']
        },
        color: {
            control: 'select',
            options: ['grey', 'blue', 'orange', 'red', 'green']
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        shadow: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        color: 'grey',
        children: 'Outlined Card 예요.'
    }
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        color: 'grey',
        children: 'Soft Card 예요.'
    }
};
