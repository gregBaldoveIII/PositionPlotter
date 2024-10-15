import React from 'react';
import { Table, TableBody, TableCell, TableRow, Snackbar, Alert, Box } from '@mui/material';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { makeStyles } from '@mui/styles';
import { parseInput } from '../utils/inputParser';
import { getRotation } from '../utils/rotationUtils';

const useStyles = makeStyles({
    tableCell: {
        border: '1px solid black',
        width: 50,
        height: 50,
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    snackbar: {
        top: 16,
        justifyContent: 'center',
    },
});

interface PositionPlotterProps {
    position: string;
    gridSize?: number; 
}

const PositionPlotter: React.FC<PositionPlotterProps> = ({ position, gridSize = 5 }) => {
    const classes = useStyles();
    const { x, y, direction, error } = parseInput(position, gridSize);

    const isIconCell = (rowIndex: number, colIndex: number) => (
        rowIndex === gridSize - 1 - (y ?? 0) && colIndex === (x ?? -1) && !error
    );

    return (
        <div>
            <Table>
                <TableBody>
                    {Array.from({ length: gridSize }).map((_, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Array.from({ length: gridSize }).map((_, colIndex) => (
                                <TableCell key={colIndex} className={classes.tableCell}>
                                    {isIconCell(rowIndex, colIndex) && (
                                        <Box className={classes.iconContainer}>
                                            <ArrowCircleUpOutlinedIcon
                                                style={{
                                                    transform: `rotate(${direction ? getRotation(direction) : '0deg'})`,
                                                    fontSize: '3em'
                                                }}
                                            />
                                        </Box>
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                classes={{ root: classes.snackbar }}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default PositionPlotter;
