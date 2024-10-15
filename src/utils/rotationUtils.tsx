/**
 * Gets the rotation angle based on the direction.
 * @param direction - The direction to rotate (NORTH, EAST, SOUTH, WEST).
 * @returns The rotation angle in degrees.
 */
export const getRotation = (direction: string): string => {
  switch (direction) {
    case 'NORTH':
      return '0deg';
    case 'EAST':
      return '90deg';
    case 'SOUTH':
      return '180deg';
    case 'WEST':
      return '270deg';
    default:
      return '0deg';
  }
};
