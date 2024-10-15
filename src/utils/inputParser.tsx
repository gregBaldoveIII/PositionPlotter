import { Directions, Direction } from '../constants/directions'; // Importing the Directions enum

interface ParseResult {
  x: number | null;         // X coordinate
  y: number | null;         // Y coordinate
  direction: Direction | null; // Direction as a Direction type
  error: string | null;     // Error message, if any
}

export const parseInput = (input: string, gridSize: number = 5): ParseResult => {
  // Trim the input to avoid leading/trailing whitespace
  const trimmedInput = input.trim();

  // Updated regex to match any string after "x,y"
  const regex = /^(\d+),(\d+)\s*(.+)$/i;

  const match = trimmedInput.match(regex);

  // Check for valid format
  if (!match) {
    return {
      x: null,
      y: null,
      direction: null,
      error: 'Invalid input format. Expected format: "X,Y DIRECTION" (e.g., "1,1 SOUTH").',
    };
  }

  const x = parseInt(match[1], 10);
  const y = parseInt(match[2], 10);
  const direction = match[3].trim().toUpperCase() as Directions; // Normalize to enum type

  // Validate coordinates
  if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
    return {
      x: null,
      y: null,
      direction: null,
      error: `Coordinates out of bounds. Must be integers between 0 and ${gridSize - 1}.`,
    };
  }

  // Validate the direction against valid options
  if (!Object.values(Directions).includes(direction as Directions)) {
    return {
      x,
      y,
      direction: null,
      error: 'Invalid direction. Allowed directions: NORTH, SOUTH, EAST, WEST.',
    };
  }

  return { x, y, direction, error: null }; 
};
