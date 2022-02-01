import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import PropTypes from 'prop-types';

const useStyles = makeStyles({
        table: {
            minWidth: 250,
        },
    });

 const HighscoreTable = (props) => {

    const classes = useStyles();
    const rows = props.userScoresMap.sort((userScoreA, userScoreB) => userScoreB.score - userScoreA.score);
    console.log(props);
    return (
        <TableContainer style={{maxHeight: 1030}} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">
                            Score
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.index}>
                            <TableCell component="th" scope="row">
                                {++index}
                            </TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">
                                {row.score}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
 }

 export default HighscoreTable;
