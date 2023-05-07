import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  dropdown: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "320px",
  },
  dropdown_container: { padding: 0, marginTop: "8px" },
  input: {
    fontFamily: "sans-serif",
    fontSize: "14px",
    padding: "10px 15px",
    color: "#7a7b7f",
    borderRadius: "10px",
    minWidth: "320px",
    textAlign: "left",
    justifyContent: "center",
    background: "#fff",
    border: "2px solid #8d9be8",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "3px solid rgb(208,219,254)",
    },
  },
  menu: {
    padding: "10px",
    border: "1px solid #efefef",
    minWidth: "320px",
    maxHeight: "320px",
    borderRadius: "15px",
    overflow: "auto",
    boxShadow: "0 0 4px rgba(0,0,0,0.08)",
    background: "#fff",
  },
  item: {
    padding: "10px 20px",
    cursor: "pointer",
    listStyle: "none",
    color: "#7a7b7f",
    "&:hover": {
      backgroundColor: "#f2f4ff",
      color: "#566fc3",
      borderRadius: "10px",
    },
  },
  selected: {
    backgroundColor: "#f2f4ff",
    color: "#566fc3",
    borderRadius: "10px",
  },
});
