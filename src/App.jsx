import React, { useState } from "react";
import RegistrationForm from "./react_task_components/RegistrationForm";

const App = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    hobbies: [""],
  });

  return (
    <>
      <RegistrationForm data={data} setData={setData} />
    </>
  );
};

export default App;