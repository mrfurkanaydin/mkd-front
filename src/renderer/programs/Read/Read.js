import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";

function Read() {
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

  return (
    <>
      <ProgramContainer
        title="Okuma"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={read}
        bgColor="#fff"
      >
        <>
          <Document
            file={{
              url: "https://www.btk.gov.tr/uploads/pages/slug/bulut-bilisim.pdf"
            }}
            onLoadSuccess={onDocumentLoadSuccess}
            >
            
            <Page pageNumber={pageNumber} scale="1.1" className="read-document"/>
          </Document>
          <div>
            <p>
              {/* Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"} */}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="prev-button"
            >
              {"<"}
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="next-button"

            >
              {">"}
            </button>
          </div>
        </>
      </ProgramContainer>
    </>
  );
}

export default Read;
