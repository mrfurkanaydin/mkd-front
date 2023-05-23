import { useDispatch, useSelector } from "react-redux";
// import "./Manage.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";

function ListTeacher() {
  const listTeacher = useSelector((state) => state.listTeacher);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/v1/users?role=teacher",
      headers: {
        Authorization: `Bearer ${token.access.token}`
      }
    };
    if (user.role == "admin" || listTeacher == 3 || listTeacher == 1) {
      axios.request(config).then((res) => {
        console.log(res.data);
        setData(res.data.results);
      });
    }
  }, [listTeacher == 3 || listTeacher == 1 || user.role == "admin"]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "ListTeacher" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "ListTeacher" });
  };
  const handleResize = () => {
    listTeacher == 3
      ? dispatch({ type: "START_PROGRAM", payload: "ListTeacher" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "ListTeacher" });
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
        header: "Adı"
      },
      {
        accessorKey: "lastName",
        header: "Soyadı"
      },
      {
        accessorKey: "gender", //normal accessorKey
        header: "Cinsiyet"
      },
      {
        accessorKey: "birthDate",
        header: "Doğum Tarihi"
      },
      {
        accessorKey: "email",
        header: "Email"
      }
    ],
    []
  );
  return (
    <>
      <ProgramContainer
        title="Öğretmen Listele"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={listTeacher}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="listStudent-container">
          <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnActions={false}
            enableColumnFilters={false}
            enablePagination={false}
            enableSorting={false}
            enableBottomToolbar={false}
            enableTopToolbar={false}
            muiTableBodyRowProps={{ hover: false }}
          />
        </div>
      </ProgramContainer>
    </>
  );
}

export default ListTeacher;
