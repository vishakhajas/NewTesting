import React from "react";

const MyComponent = () => {
  const styles = {
    container: {
      backgroundColor: "lightblue",
      padding: "20px",
      textAlign: "center",
    },
    text: {
      color: "darkblue",
      fontSize: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>This is an inline-styled React component.</p>
    </div>
  );
};

export default MyComponent;
