import React from "react";
import { makeStyles } from "@material-ui/styles";
import moreicon from "../assets/more.png";
const useStyles = makeStyles({
  report: {
    padding: "20px 10px 0px",
    position: "relative",
    "& .todos": {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      "&  .todoCard": {
        borderRadius: "6px",
        border: "1px solid #e0d6d6",
        background: "#f8f8f8",
        width: "75%",
        position: "relative",
        padding: "12px",
        "& .remove": {
          position: "absolute",
          top: "10px",
          right: "15px",
          fontSize: "10px",
          cursor: "pointer"
        },
        "& h2": {
          margin: "0px",
          fontSize: "16px",
          color: "#191919",
          marginBottom: "5px",
          fontWeight: "500"
        },
        "& span": {
          fontSize: "14px",
          color: "#9a9898"
        }
      },
      "& .todoDate": {
        width: "20%",
        "& > div:first-child": {
          fontWeight: "bold",
          fontSize: "28px"
        },
        "& > div": {
          color: "#000",
          textAlign: "center"
        }
      }
    },
    "& .active .todoDate": {
      "& > div": {
        color: "#382f9c !important"
      }
    },
    "& .todos.active .todoCard": {
      background: "#fff"
    }
  },
  AddTodos: {
    position: "absolute",
    right: "0",
    top: "-17px",
    fontSize: "11px",
    background: "#e9e8f4",
    padding: "2px",
    borderRadius: "4px",
    color: "#3e359f",
    cursor: "pointer"
  }
});
export default function Todo(props) {
  console.log(props.todos);
  const { todos, addtodo, removetodo } = props;
  const classes = useStyles();
  return (
    <div className={classes.report}>
      <div className={classes.AddTodos} onClick={addtodo}>
        + AddTodo
      </div>
      {(todos.length &&
        todos.map((todo, index) => {
          return (
            <div className={index === 0 ? "todos active" : "todos"}>
              <div className="todoDate">
                <div>{todo.date}</div>
                <div>{todo.month}</div>
              </div>
              <div className="todoCard">
                <h2>{todo.title}</h2>
                <span>Today</span>
                <div
                  className="remove"
                  onClick={e => {
                    removetodo(index);
                  }}
                >
                  X
                </div>
              </div>
            </div>
          );
        })) || <h4 style={{ textAlign: "center" }}>No Todos</h4>}
    </div>
  );
}
