import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { IconButton, makeStyles } from "@material-ui/core";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  flex: 5;
`;

const sUser = {
  display: "flex",
  alignItems: "center",
};

const sImg = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "10px",
};

const sLink = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#555",
};

const sPos = {
  "&:hover": {
    backgroundColor: "#e5faf2",
    color: "#3bb077",
  },
};

const sNeg = {
  backgroundColor: "#fff0f1",
  color: "#d95087",
  "&:hover": {
    backgroundColor: "#000000",
  },
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-cell, .MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within, *:focus":
    {
      outline: 0,
    },
}));

const useStyles = makeStyles((theme) => ({
  sPos: {
    "&:hover": {
      backgroundColor: "#e5faf2",
      color: "#3bb077",
      transition: "all 0.3s ease",
      transform: "scale(1.1)"
    },
  },
  sNeg: {
    "&:hover": {
      backgroundColor: "#fff0f1",
      color: "#d95087",
      transition: "all 0.3s ease",
      transform: "scale(1.1)"
    },
  },
}));

const UserList = () => {
  const classes = useStyles();

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <div style={sUser}>
            <img style={sImg} src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <IconButton className={classes.sPos}>
              <Link to={"/user/" + params.row.id} style={sLink}>
                <EditOutlined />
              </Link>
            </IconButton>
            <IconButton className={classes.sNeg}>
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <StyledDataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};

export default UserList;
