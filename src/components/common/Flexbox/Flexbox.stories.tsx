import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { vars } from '@styles/theme.css';

import { Flexbox, type FlexboxProps } from './Flexbox';

const meta: Meta<FlexboxProps> = {
    title: 'Common/Flexbox',
    component: Flexbox,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false
        },
        flexDirection: {
            control: 'select',
            options: ['row', 'column', 'row-reverse', 'column-reverse']
        },
        justifyContent: {
            control: 'select',
            options: ['normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
        },
        alignItems: {
            control: 'select',
            options: ['normal', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline']
        },
        flexWrap: {
            control: 'select',
            options: ['nowrap', 'wrap', 'wrap-reverse']
        },
        gap: {
            control: 'select',
            options: Object.keys(vars.gap || {})
        }
    },
    args: {
        gap: 'g12',
        children: React.createElement(React.Fragment, null,
            ...Array(3).fill(0).map((_, index) => React.createElement('div', {
                key: index,
                style: {
                    backgroundColor: index % 2 === 0 ? vars.color.grey200 : vars.color.blackOpacity200,
                    padding: vars.padding.p8
                }
            }, `Item ${index + 1}`))
        )
    }
} satisfies Meta<typeof Flexbox>;

export default meta;
type Story = StoryObj<typeof Flexbox>;

export const RowFlex: Story = {
    args: {
        flexDirection: 'row'
    }
};

export const ColumnFlex: Story = {
    args: {
        flexDirection: 'column'
    }
};

export const FlexStart: Story = {
    args: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
};

export const Center: Story = {
    args: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export const FlexEnd: Story = {
    args: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};

export const SpaceBetween: Story = {
    args: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};
