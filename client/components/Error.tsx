import React from "react";

interface ErrorProps {
  error: string
}

const ShowError = ({error}: ErrorProps) => {
  return(
    <div className="error">
      {error}
    </div>
  )
}

export default ShowError;