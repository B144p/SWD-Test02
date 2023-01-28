import { UserOutlined, StepBackwardOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";

function TestGrid() {
  const [username, setUsername] = useState("");

  function handleSubmit() {
    // Store the value in local storage
    localStorage.setItem("username", username);
    console.log("Username stored in local storage: ",username);
  }

  return (
    <>
      {/* <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
      <Input size="middle" style={{'width':'200px'}} placeholder="large size" prefix={<UserOutlined />} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <Input onSubmit={()=> console.log('Username')} />
    </>
  );
}

export default TestGrid;