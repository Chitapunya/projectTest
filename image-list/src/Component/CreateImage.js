import React, { useState } from "react";

function CreateImage({ onSearch }) {
  const [nameNum, setNameNum] = useState({
    name: "",
    num: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNameNum((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (event) => {
    event.preventDefault();
    onSearch(nameNum);
    setNameNum({
      name: "",
      num: 1,
    });
  };

  return (
    <div className="book-create">
      <h3>Create Image</h3>
      <h3>กรอกข้อมูลเพื่อสร้างภาพ</h3>
      <form onSubmit={handleForm}>
        <input
          className="input"
          value={nameNum.name}
          name="name"
          placeholder="ชื่อภาพ"
          onChange={handleChange}
        />
        <input
          className="input"
          value={nameNum.num}
          name="num"
          type="number"
          placeholder="จำนวนภาพ"
          onChange={handleChange}
          max={10}
        />
        <button className="button">สร้างภาพ</button>
      </form>
    </div>
  );
}

export default CreateImage;
