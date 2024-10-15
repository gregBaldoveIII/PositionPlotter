export enum Directions {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    EAST = 'EAST',
    WEST = 'WEST',
}

export type Direction = keyof typeof Directions;
