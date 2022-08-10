import React, { PropsWithChildren } from "react";
import "./index.scss";

export default function Card(
  props: PropsWithChildren<{
    done?: boolean;
  }>
) {
  return (
    <div
      className="card shadow p-3"
      style={props.done ? { backgroundColor: "#2EE668" } : {}}
    >
      <div className="card-body">{props.children}</div>
    </div>
  );
}
