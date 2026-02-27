import { useState } from "react";

export default function Dashboard({ navigate, language }) {
  const services = [
    {
      id: "electricity",
      icon: "⚡",
      title: "Electricity",
      desc: "Pay bills, complaints, new connection",
      color: "#f57f17",
    },
    {
      id: "gas",
      icon: "🔥",
      title: "Gas",
      desc: "Pay bills, complaints, meter change",
      color: "#e53935",
    },
    {
      id: "municipal",
      icon: "🏙️",
      title: "Municipal",
      desc: "Water bills, civic complaints",
      color: "#2e7d32",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🏛️ SUVIDHA</h1>
        <p style={styles.welcome}>Welcome! Select a Service</p>
        <p style={styles.lang}>🌐 {language}</p>
      </div>

      <div style={styles.grid}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{ ...styles.card, borderTop: `6px solid ${service.color}` }}
            onClick={() => navigate(service.id)}
          >
            <span style={styles.icon}>{service.icon}</span>
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardDesc}>{service.desc}</p>
            <button
              style={{ ...styles.button, background: service.color }}
            >
              Select →
            </button>
          </div>
        ))}
      </div>

      <div style={styles.bottomBar}>
        <button style={styles.complaintBtn} onClick={() => navigate("complaint")}>
          📋 Register Complaint
        </button>
        <button style={styles.logoutBtn} onClick={() => navigate("language")}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f0f4ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 16px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "40px",
    color: "#1a237e",
    margin: "0 0 8px 0",
  },
  welcome: {
    fontSize: "22px",
    color: "#333",
    margin: "0 0 4px 0",
  },
  lang: {
    fontSize: "14px",
    color: "#888",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "center",
    marginBottom: "40px",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "40px 32px",
    textAlign: "center",
    width: "260px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  icon: {
    fontSize: "56px",
  },
  cardTitle: {
    fontSize: "24px",
    color: "#1a237e",
    margin: "12px 0 8px 0",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "24px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  bottomBar: {
    display: "flex",
    gap: "16px",
  },
  complaintBtn: {
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    background: "#1a237e",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  logoutBtn: {
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    background: "white",
    color: "#e53935",
    border: "2px solid #e53935",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
