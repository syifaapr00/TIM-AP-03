import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.stamp}>
        <h1 style={styles.text}>NAGARA DANA RAKCA</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e6d5b8", // latar belakang krem tua seperti kertas
    fontFamily: "Arial, sans-serif",
  },
  stamp: {
    border: "12px solid #8b5a2b", // border coklat tebal seperti stempel
    padding: "30px 60px",
    backgroundColor: "#f4e4c1", // warna dalam stempel lebih terang
    boxShadow: "inset 0 0 0 2px #d4a76a, 10px 10px 20px rgba(0,0,0,0.3)", // efek dalam dan bayangan
    transform: "rotate(-2deg)", // sedikit miring seperti stempel asli
    borderRadius: "20px 20px 20px 20px", // sudut sedikit melengkung
  },
  text: {
    fontSize: "4.5rem",
    fontWeight: "bold",
    color: "#6b4226", // warna coklat tua seperti tinta stempel
    margin: 0,
    letterSpacing: "8px", // jarak antar huruf renggang
    textTransform: "uppercase",
    textShadow: "3px 3px 0px #d9b382", // efek shadow seperti tinta sedikit luntur
    fontFamily: "'Times New Roman', serif",
    lineHeight: 1.2,
  },
};

export default App;
