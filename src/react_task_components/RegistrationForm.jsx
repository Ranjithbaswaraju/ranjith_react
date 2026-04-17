const RegistrationForm = ({ data, setData }) => {
  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <>
    
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        value={data.age}
          name="age"
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <input
        type="email"
        value={data.email}
          name="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      {data.hobbies.map((hobby, index) => (
        <input
          key={index}
          value={hobby}
          onChange={(e) => {
            let arr = [...data.hobbies];
            arr[index] = e.target.value;
            setData({ ...data, hobbies: arr });
          }}
        />
      ))}
      <button
        onClick={() => setData({ ...data, hobbies: [...data.hobbies, ""] })}
      >
        +
      </button>

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default RegistrationForm;
