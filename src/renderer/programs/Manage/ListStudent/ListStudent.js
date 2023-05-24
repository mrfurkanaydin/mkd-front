import { useDispatch, useSelector } from "react-redux";
import "./ListStudent.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import React, { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import MaterialReactTable from "material-react-table";
import DetailStudent from "../DetailStudent/DetailStudent";
import axios from "axios";
function ListStudent() {
  const listStudent = useSelector((state) => state.listStudent);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://16.16.166.122:3000/v1/users?role=student",
      headers: {
        Authorization: `Bearer ${token.access.token}`
      }
    };
    if (user.role == "teacher" || user.role == "admin") {
      axios.request(config).then((res) => {
        setData(res.data.results);
      });
    }
  }, [listStudent == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "ListStudent" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "ListStudent" });
  };
  const handleResize = () => {
    listStudent == 3
      ? dispatch({ type: "START_PROGRAM", payload: "ListStudent" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "ListStudent" });
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "Adı"
      },
      {
        accessorKey: "lastName",
        header: "Soyadı"
      },
      {
        accessorKey: "gender",
        header: "Cinsiyet"
      },
      {
        accessorKey: "birthDate",
        header: "Doğum Tarihi"
      },
      {
        accessorKey: "tcNo",
        header: "TC Kimlik No"
      }
    ],
    []
  );

  return (
    <>
      <ProgramContainer
        title="Öğrenci Listele"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={listStudent}
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
            enableRowActions
            positionActionsColumn="last"
            displayColumnDefOptions={{
              "mrt-row-actions": {
                header: "Detay"
              }
            }}
            renderRowActions={({ row }) => (
              <button
                onClick={() => {
                  dispatch({
                    type: "SET_STUDENT_DATA",
                    payload: row.original.id
                  });
                  dispatch({
                    type: "RESIZE_PROGRAM",
                    payload: "DetailStudent"
                  });
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                <BsSearch />
              </button>
            )}
          />
        </div>
      </ProgramContainer>
    </>
  );
}

export default ListStudent;
