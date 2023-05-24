import { useDispatch, useSelector } from "react-redux";
import "./Watch.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import YoutubeEmbed from "renderer/components/YoutubeEmbed/YoutubeEmbed";
import { differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import timerUtil from "renderer/utils/timer";
import { Formik } from "formik";
import MaterialReactTable from "material-react-table";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

function Watch() {
  const [firstDate, setFirstDate] = useState();
  const watch = useSelector((state) => state.watch);
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://16.16.166.122:3000/v1/link")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (user.role == "student" && (watch == 1 || watch == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [watch == 1 || watch == 3]);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Watch" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "İzleme");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Watch" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "İzleme");
  };
  const handleResize = () => {
    watch == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Watch" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Watch" });
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "link",
        header: "Link"
      }
    ],
    []
  );
  const deleteLink = (id) => {
    axios
      .delete(`http://16.16.166.122:3000/v1/link/${id}`)
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
        title="İzleme"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={watch}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="watch-container">
          <>
            {user.role == "admin" || user.role == "teacher" ? (
              <>
                <Formik
                  initialValues={{
                    link: ""
                  }}
                  onSubmit={(values) => {
                    let config = {
                      method: "post",
                      maxBodyLength: Infinity,
                      url: "http://16.16.166.122:3000/v1/link",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      data: values
                    };
                    axios
                      .request(config)
                      .then((response) => {
                        setData(response.data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div className={theme == 0 ? "watch-url-container" : "watch-url-container-dark" }>
                      <button className={theme == 0 ? "watch-button" : "watch-button-dark" } type="submit">Ekle</button>
                      <input
                        className={theme == 0 ? "watch-input" : "watch-input-dark" }
                        type="text"
                        name="link"
                        onChange={handleChange}
                        value={values.link}
                        placeholder="Youtube linki giriniz"
                      />
                      </div>
                    </form>
                  )}
                </Formik>
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
                        deleteLink(row.original.id);
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
              </>
            ) : (
              <>
                {data &&
                  data.map((item) => {
                    return (
                      <YoutubeEmbed
                        embedId={item.link.split("v=")[1].split("&")[0]}
                      />
                    );
                  })}
              </>
            )}
          </>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Watch;
