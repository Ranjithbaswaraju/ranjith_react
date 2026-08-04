import React, { useState } from "react";

const FlowPipe = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handler = (e) => {
    e.preventDefault();

    const obj = {
      username:username.toLowerCase(),
      email,
      password,
      address,
    };

    if (editIndex == null) {
      setData([...data, obj]);
    } else {
      const newData = [...data];
      newData[editIndex] = obj;
      setData(newData);
      setEditIndex(null);
    }
    setUsername("");
    setEmail("");
    setAddress("");
    setPassword("");
  };

  const updateHandler = (index) => {
    (setUsername(data[index].username), setEmail(data[index].email));
    setPassword(data[index].password);
    setAddress(data[index].address);

    setEditIndex(index);
  };

  const deleteHandler = (ind) => {
    const deleteData = data.filter((_, index) => ind != index);
    setData(deleteData);
  };

  const updatedData = data.filter((item) => {
    return (
      item.username.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.password.toLowerCase().includes(search.toLowerCase()) ||
      item.address.toLowerCase().includes(search.toLowerCase())
    );
  });

  const ascending = () => {
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      for (let j = i + 1; j < newData.length; j++) {
        if (
          newData[i].username.toLowerCase() > newData[j].username.toLowerCase()
        ) {
          let temp = newData[i];
          newData[i] = newData[j];
          newData[j] = temp;
        }
      }
    }
    setData(newData);
  };
  const descedning = () => {
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      for (let j = i + 1; j < newData.length; j++) {
        console.log(newData[i].username, newData[j].username.toLowerCase());

        console.log(newData[i].username, newData[j].username.toLowerCase());
        if (
          newData[i].username.toLowerCase() < newData[j].username.toLowerCase()
        ) {
          let temp = newData[i];
          newData[i] = newData[j];
          newData[j] = temp;
        }
      }
    }
    console.log(newData);
    setData(newData);
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <div className="mb-6">
  <label className="font-semibold mr-2">Search With Any Key :</label>
  <input
    type="text"
    value={search}
    id="key"
    onChange={(e) => setSearch(e.target.value)}
    className="border border-gray-400 rounded px-3 py-2 w-80"
  />
</div>
      <form onSubmit={handler} className="bg-white shadow-lg rounded-lg p-6 w-96 flex flex-col gap-4 mb-8">
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit"  className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          {editIndex === null ? "Submit" : "Update"}

        </button>
      </form>

      <table border={1} style={{ borderCollapse: "collapse" }} className="w-full max-w-6xl border border-gray-400 bg-white shadow-lg text-center">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border px-4 py-2">
              S.NO <button onClick={ascending}>↓</button>
              <button onClick={descedning}>↑</button>
            </th>
            <th className="border px-4 py-2">UserName</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Password</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {search !== "" && updatedData.length === 0 ? (
            <tr>
              <td colSpan="6" className="border px-4 py-2">No Data Found</td>
            </tr>
          ) : (
            updatedData.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.password}</td>
                <td className="border px-4 py-2">{item.address}</td>
                <td className="border px-4 py-2">
                  <button type="button" onClick={() => updateHandler(index)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteHandler(index)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default FlowPipe;
