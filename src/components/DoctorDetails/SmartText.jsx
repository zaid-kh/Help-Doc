import { useState } from "react";
export default function SmartText ({ text, length = 250 }) {
    const [showLess, setShowLess] = useState(true);
  
    if (text.length < length) {
      return <p>{text}</p>;
    }
  
    return (
      <div>
        <p>{ showLess ? `${text.slice(0, length)}...` : text }
        <a
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setShowLess(!showLess)}
        >
          &nbsp;Read {showLess ? "More" : "Less"}
        </a>
        </p>
        
      </div>
    );
  };
  