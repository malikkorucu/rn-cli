import React, { FC } from 'react';
import * as svgs from "../svg/*.svg"
import Car from './svg/car.svg'
import Help from './svg/help.svg'
import Search from './svg/search.svg'
import Ticket from './svg/ticket.svg'
import User from './svg/user.svg'

const icons = {
    Car,
    Help,
    Search,
    Ticket,
    User
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
