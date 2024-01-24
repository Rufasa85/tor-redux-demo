import React, { useContext } from "react";
import "./style.css";
import Fifth from "../Fifth";
import { CountContext } from "../../utils/countContext";

export default function Fourth() {
  const [{count}] = useContext(CountContext)
  return (
    <div className="Fourth">
      <h4>Fourth count:{count}</h4>
      <Fifth/>
    </div>
  );
}
