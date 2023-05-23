import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { MdArrowBack } from "react-icons/md";
import slugify from "react-slugify";
import { differenceInMinutes } from "date-fns";
import timerUtil from "renderer/utils/timer";
import MaterialReactTable from "material-react-table";
import { RiDeleteBin6Line } from "react-icons/ri";

function Read() {
  const [data, setData] = useState();
  const [teacherData, setTeacherData] = useState();
  const [file, setFile] = useState();
  const [firstDate, setFirstDate] = useState();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const read = useSelector((state) => state.read);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Read" });
    setFile();
    setPageNumber(1);
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Okuma");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Read" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Okuma");
  };
  const handleResize = () => {
    read == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Read" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Read" });
  };
  useEffect(() => {
    setTeacherData([
      {
        files: "http://localhost:3000/hirmancici-pdf.pdf",
        name: "hirmancici-pdf.pdf",
        id: "646c874be982f47d248da360"
      }
    ]);
    axios
      .get("http://localhost:3000/v1/datas")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (user.role == "student" && (read == 1 || read == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [read == 3 || read == 1]);

  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    const formData = new FormData();
    const fileName = slugify(file.name);
    formData.append("pdf", file, fileName + ".pdf");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/v1/datas",
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8"
      },
      data: formData
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Pdf Adı"
      }
    ],
    []
  );
  const deleteFile = (id) => {
    axios
      .delete("http://localhost:3000/v1/datas/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ProgramContainer
        title="Okuma"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={read}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <>
          {user.role == "admin" || user.role == "teacher" ? (
            <div>
              <div
                className={theme == 0 ? "input-button" : "input-button-dark"}
              >
                <input
                  style={{ fontSize: 20, marginLeft: 5 }}
                  type="file"
                  onChange={handleFileUpload}
                />
              </div>
              <div>
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
                      header: "Detay" //change header text
                    }
                  }}
                  renderRowActions={({ row }) => (
                    <button
                      onClick={() => {
                        deleteFile(row.original.id);
                      }}
                      style={{
                        backgroundColor: "transparent",
                        border: "none"
                      }}
                    >
                      <RiDeleteBin6Line size={30} />
                    </button>
                  )}
                />
              </div>
            </div>
          ) : file ? (
            <div
              className={theme == 0 ? "read-container" : "read-container-dark"}
            >
              <button
                className={
                  theme == 0 ? "read-backbutton" : "read-backbutton-dark"
                }
                onClick={() => {
                  setFile();
                  setPageNumber(1);
                }}
              >
                <MdArrowBack size={30} />
              </button>
              <Document
                file={{
                  url: file
                }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {read == 3 ? (
                  <Page
                    pageNumber={pageNumber}
                    scale="0.9"
                    // className="read-document"
                  />
                ) : (
                  <Page
                    pageNumber={pageNumber}
                    scale="1.1"
                    // className="read-document"
                  />
                )}
              </Document>

              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
                className={theme == 0 ? "prev-button" : "prev-button-dark"}
              >
                {"<"}
              </button>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
                className={theme == 0 ? "next-button" : "next-button-dark"}
              >
                {">"}
              </button>
            </div>
          ) : (
            <>
              {data && (
                <div>
                  {data.map((item) => (
                    <button
                      onClick={() => {
                        setFile(item.files);
                      }}
                      className={
                        theme == 0
                          ? "pdfname-container"
                          : "pdfname-container-dark"
                      }
                    >
                      <h1>{item.name.split("-pdf")[0].replaceAll("-", " ")}</h1>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      </ProgramContainer>
    </>
  );
}

export default Read;
