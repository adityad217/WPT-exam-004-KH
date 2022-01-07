import { useState } from "react";

export default function App() {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <MyComponent />
      </div>
    </div>
  );
}

function Header() {
  const [student_name, setname] = useState("Aditya Deshpande");
  const [student_ID, setId] = useState("004_KH");
  return (
    <div className="row bg-secondary p-3">
      <div
        className="col-md-2 fs-1 w-0 text-light"
        style={{ fontWeight: "bold" }}
      >
        MyChatApp
      </div>
      <div className="col d-flex flex-column justify-content-center ms-4 mt-4 text-light fs-6">
        by {student_name}/{student_ID}
      </div>
    </div>
  );
}

function MyComponent() {
  const [messege, setmessege] = useState("");
  const [list, setlist] = useState([]);
  const [validationpointer, setpointer] = useState(false);
  const chatformat1 = "alert alert-primary text-start text-dark ";
  const chatformat2 = "alert alert-primary text-end text-dark";

  const handlemessege = (e) => {
    setmessege(e.target.value);
  };

  const addMessege = () => {
    if (messege == "") {
      setpointer(true);
      return;
    }
    const newlist = [...list, messege];
    setlist(newlist);
    setmessege("");
    setpointer(false);
  };

  return (
    <div className="row mt-3">
      <div className="col-10">
        <input
          type="text"
          placeholder="Lets chat Here"
          className={
            messege == "" && validationpointer ? "border border-danger" : ""
          }
          value={messege}
          onChange={handlemessege}
          style={{ width: "100%", padding: "25px", borderRadius: "10px" }}
        />
      </div>
      <div className="col">
        <input
          type="button"
          value="SEND"
          onClick={addMessege}
          className="btn btn-secondary p-4 w-100"
        />
      </div>
      <div className="mt-3">
        {list.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className={chatformat1}>
                {item}
              </div>
            );
          } else {
            return (
              <div key={index} className={chatformat2}>
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

/* <div className="mt-3">
        {list.map((item) => (
          <div className={chatformat1}>{item}</div>
        ))}
      </div>*/
