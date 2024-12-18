import { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Scrivi qualcosa"
      ></input>
      <br></br>

      <h1>{text}</h1>
    </div>
  );
}

export default InputField
