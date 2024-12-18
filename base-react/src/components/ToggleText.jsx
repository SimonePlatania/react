import { useState } from "react";

function ToggleText  () {

    const [isVisible, setIsVisible] = useState(true)

 const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !isVisible );
  };

    return (
      <div>
        <button onClick={toggleVisibility}>Toggle Text</button>
        {isVisible && <p>Questo testo può essere nascosto.</p>}
      </div>
    );
  }

export default ToggleText;
