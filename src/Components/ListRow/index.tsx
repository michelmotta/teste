import React, { PropsWithoutRef } from "react";

export default function ListRow({
  id,
  date,
}: PropsWithoutRef<{
  id: number;
  date: string;
}>) {
  return (
    <div
      className="d-flex justify-content-between align-items-center border border-primary p-3 px-4 fs-4"
      style={{
        borderRadius: "0.75rem",
      }}
    >
      <div className="text-primary">{id}</div>

      <div>{date}</div>
    </div>
  );
}
