import React from "react";

const Bars = ({ action }: { action: any }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none" onClick={action}>
      <path d="M0.25 13.5V11.3333H19.75V13.5H0.25ZM0.25 8.08333V5.91667H19.75V8.08333H0.25ZM0.25 2.66667V0.5H19.75V2.66667H0.25Z" fill="black" />
    </svg>
  );
};

export default Bars;
