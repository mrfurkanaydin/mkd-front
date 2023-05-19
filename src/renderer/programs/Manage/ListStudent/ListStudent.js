import { useDispatch, useSelector } from "react-redux";
import "./ListStudent.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import React, { useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import MaterialReactTable from "material-react-table";
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: (
      <button
        style={{ border: 0, backgroundColor: "transparent" }}
        onClick={() => {
          console.log("oziiğ");
        }}
      >
        <BsSearch size={20} />
      </button>
    )
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joe",
    lastName: "Doe",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: <BsSearch size={20} />
  }
];
function ListStudent() {
  const listStudent = useSelector((state) => state.listStudent);
  const dispatch = useDispatch();
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
        accessorKey: "firstName", //access nested data with dot notation
        header: "Adı"
      },
      {
        accessorKey: "lastName",
        header: "Soyadı"
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Cinsiyet"
      },
      {
        accessorKey: "city",
        header: "Doğum Tarihi"
      },
      {
        accessorKey: "state",
        header: "Detaylar"
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
          />
        </div>
      </ProgramContainer>
    </>
  );
}

export default ListStudent;
