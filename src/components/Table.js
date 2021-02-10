import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles({
  table: {
    marginTop: "40px",
    "& th,td": {
      padding: "10px",
      fontSize: "0.70rem",
      borderRight: "1px solid rgba(224, 224, 224, 1)",
      borderBottom: "none"
    },
    "& td:last-child, th:last-child": {
      borderRight: "none"
    },
    "& thead tr th": {
      fontWeight: "bold"
    },
    "& tr:nth-of-type(odd)": {
      backgroundColor: "#f9f9f9"
    },
    "& thead tr": {
      backgroundColor: "#fff !important"
    }
  }
});
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(
    "Landing page design",
    "May, 21 2019",
    "1:10 pm",
    "9:20 pm",
    "8:10:27"
  ),
  createData("Mobile app", "May, 22 2019", "1:10 pm", "9:20 pm", "8:10:27"),
  createData("UI/UX", "May, 23 2019", "1:10 pm", "9:20 pm", "8:10:27"),
  createData("Websites/apps", "May, 24 2019", "1:10 pm", "9:20 pm", "8:10:27"),
  createData("Branding", "May, 25 2019", "1:10 pm", "9:20 pm", "8:10:27")
];

export default function Tabletimesheet() {
  const classes = useStyles();
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Project</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Start time</TableCell>
          <TableCell>Stop time</TableCell>
          <TableCell>Duration</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.calories}</TableCell>
            <TableCell>{row.fat}</TableCell>
            <TableCell>{row.carbs}</TableCell>
            <TableCell>{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
