import { useState } from "react";

export default function GasScreen({ navigate, language }) {
  const [action, setAction] = useState(null);

  const bill = {
    consumerName: "Consumer",
    consumerId: "GAS987654321",
    cylinders: 2,
    amount: 1740,
    dueDate: "20 March 2026",
    status: "Unpaid",
  };

  if (action === "bill") {
    return <GasBillView bill={bill} navigate={navigate} setAction={setAction} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate("dashboard")}>
          ← Back
        </button>
        <h1 style={styles.title}>🔥 Gas Services</h1>
        <p style={styles.subtitle}>Select an action below</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card} onClick={() => setAction("bill")}>
          <span style={styles.icon}>📄</span>
          <h2 style={styles.cardTitle}>View & Pay Bill</h2>
          <p style={styles.cardDesc}>Check outstanding bill and make payment</p>
        </div>

        <div style={styles.card} onClick={() => navigate("complaint")}>
          <span style={styles.icon}>📋</span>
          <h2 style={styles.cardTitle}>Register Complaint</h2>
          <p style={styles.cardDesc}>Report gas leak, meter issue, supply problem</p>
        </div>

        <div style={styles.card} onClick={() => navigate("success")}>
          <span style={styles.icon}>🔗</span>
          <h2 style={styles.cardTitle}>New Connection</h2>
          <p style={styles.cardDesc}>Apply for a new gas connection</p>
        </div>

        <div style={styles.card} onClick={() => navigate("success")}>
          <span style={styles.icon}>🔄</span>
          <h2 style={styles.cardTitle}>Meter Replacement</h2>
          <p style={styles.cardDesc}>Request meter change or replacement</p>
        </div>
      </div>
    </div>
  );
}

function GasBillView({ bill, navigate, setAction }) {
  const [method, setMethod] = useState(null);

  const handlePay = (m) => {
    setMethod(m);
    setTimeout(() => {
      navigate("success");
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => setAction(null)}>
          ← Back
        </button>
        <h1 style={styles.title}>📄 Your Gas Bill</h1>
      </div>

      <div style={styles.billCard}>
        <div style={styles.billRow}>
          <span style={styles.billLabel}>Consumer Name</span>
          <span style={styles.billValue}>{bill.consumerName}</span>
        </div>
        <div style={styles.billRow}>
          <span style={styles.billLabel}>Consumer ID</span>
          <span style={styles.billValue}>{bill.consumerId}</span>
        </div>
        <div style={styles.billRow}>
          <span style={styles.billLabel}>Cylinders Used</span>
          <span style={styles.billValue}>{bill.cylinders}</span>
        </div>
        <div style={styles.billRow}>
          <span style={styles.billLabel}>Due Date</span>
          <span style={styles.billValue}>{bill.dueDate}</span>
        </div>
        <div style={{ ...styles.billRow, background: "#fff3e0" }}>
          <span style={styles.billLabel}>Amount Due</span>
          <span style={{ ...styles.billValue, color: "#e53935", fontWeight: "bold", fontSize: "24px" }}>
            ₹{bill.amount}
          </span>
        </div>
      </div>

      <p style={styles.payLabel}>Choose Payment Method:</p>
      <div style={styles.payGrid}>
        {["UPI", "Card", "Net Banking", "Wallet"].map((m) => (
          <button
            key={m}
            style={{
              ...styles.payBtn,
              background: method === m ? "#e53935" : "white",
              color: method === m ? "white" : "#e53935",
              borderColor: "#e53935",
            }}
            onClick={() => handlePay(m)}
          >
            {m === "UPI" && "📱 "}
            {m === "Card" && "💳 "}
            {m === "Net Banking" && "🏦 "}
            {m === "Wallet" && "👛 "}
            {m}
          </button>
        ))}
      </div>

      {method && (
        <p style={styles.processing}>⏳ Processing {method} payment...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f0f4ff",
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
    width: "100%",
    maxWidth: "700px",
  },
  backBtn: {
    background: "none",
    border: "2px solid #e53935",
    color: "#e53935",
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "36px",
    color: "#e53935",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "32px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    cursor: "pointer",
    borderTop: "5px solid #e53935",
  },
  icon: {
    fontSize: "48px",
  },
  cardTitle: {
    fontSize: "18px",
    color: "#e53935",
    margin: "12px 0 8px 0",
  },
  cardDesc: {
    fontSize: "13px",
    color: "#666",
  },
  billCard: {
    background: "white",
    borderRadius: "16px",
    padding: "32px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    marginBottom: "32px",
  },
  billRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid #eee",
    borderRadius: "8px",
    marginBottom: "4px",
  },
  billLabel: {
    fontSize: "16px",
    color: "#666",
  },
  billValue: {
    fontSize: "16px",
    color: "#333",
    fontWeight: "600",
  },
  payLabel: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "16px",
  },
  payGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    maxWidth: "600px",
  },
  payBtn: {
    padding: "16px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "2px solid",
    cursor: "pointer",
    fontWeight: "bold",
    minWidth: "130px",
  },
  processing: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#e53935",
    fontWeight: "bold",
  },
};
