import React, { FC } from 'react';
import * as svgs from "../svg/*.svg"
import Car from './svg/car.svg'

const icons = {
    Car
} as any

type Props = {
    name: string,
    style?: any,
    color?: string,
    stroke?: any,
    width?: number,
    height?: number
}

export const Icon: FC<Props> = ({ name, style, color = "#000", stroke, width = 16, height = 16 }) =>
    React.createElement(icons[name], {
        style, height, width, fill: color, stroke
    })
