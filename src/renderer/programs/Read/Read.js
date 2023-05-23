import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdArrowBack } from "react-icons/md";
import slugify from "react-slugify";

function Read() {
  const [data, setData] = useState();
  const [file, setFile] = useState();
  const [timer, setTimer] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

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
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/v1/timers",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        timer: timer,
        userId: user.id,
        application: "Okuma"
      }
    };
    axios.request(config).then((response) => {
      console.log(response.data);
    });
    setTimer(0);
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
    axios
      .get("http://localhost:3000/v1/datas")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (user.role == "student" && (read == 1 || read == 3)) {
    setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  }
  console.log(timer);
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
        <>
          {user.role == "admin" || user.role == "teacher" ? (
            <div>
              <input type="file" onChange={handleFileUpload} />
              {/* <div>
                <Formik
                  initialValues={{ file: "" }}
                  onSubmit={(values, actions) => {
                    // setTimeout(() => {
                    //   alert(JSON.stringify(values, null, 2));
                    //   actions.setSubmitting(false);
                    //   console.log(values);
                    // }, 1000);
                    console.log(values.file);
                    let formData = new FormData();
                    formData.append("pdf", values.file);
                    console.log(formData);
                    axios
                      .post("http://localhost:3000/v1/datas", formData, {
                        headers: {
                          "Content-Type": "multipart/form-data"
                        }
                      })
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <input
                        type="file"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.file}
                        name="file"
                      />
                      {props.errors.name && (
                        <div id="feedback">{props.errors.name}</div>
                      )}
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </Formik>
              </div> */}
            </div>
          ) : file ? (
            <div
              className={theme == 0 ? "read-container" : "read-container-dark"}
            >
              <button
                className="read-backbutton"
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
                      className="pdfname-container"
                    >
                      <h1>{item.name.split(".")[0]}</h1>
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
