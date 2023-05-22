import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useEffect, useState } from "react";
import axios from "axios";
function Read() {
  const [data, setData] = useState();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // setPageNumber(1);
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
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Read" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Read" });
  };
  const handleResize = () => {
    read == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Read" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Read" });
  };
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Rapor%20Final.pdf",
      header: {
        "Content-Type": "application/pdf",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <ProgramContainer
        title="Okuma"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={read}
        bgColor="#fff"
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className={theme == 0 ? "read-container" : "read-container-dark"}>
          <Document
            // file={{
            //   url: "http://localhost:3000/Rapor%20Final.pdf"
            // }}
            // file={require("../Read/2023.pdf")}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {read == 3 ? (
              <Page
                pageNumber={pageNumber}
                scale="1.0"
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
      </ProgramContainer>
    </>
  );
}

export default Read;
