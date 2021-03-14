import React from "react";

const Loading = () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingTop: "0.5rem"
    }}
    >
      <div className="lds-ring" style={{ margin: "auto" }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading;