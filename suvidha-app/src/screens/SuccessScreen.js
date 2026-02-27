import { useState, useEffect } from "react";

export default function SuccessScreen({ navigate, language }) {
  const [countdown, setCountdown] = useState(10);

  // Auto logout after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate("language");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate random receipt number
  const receiptNo = "SUV" + Math.floor(Math.random() * 900000 + 100000);
  const timestamp = new Date().toLocaleString();

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Success Icon */}
        <div style={styles.successIcon}>✅</div>
        <h1 style={styles.title}>Transaction Successful!</h1>
        <p style={styles.subtitle}>Your request has been submitted successfully</p>

        {/* Receipt */}
        <div style={styles.receipt}>
          <p style={styles.receiptTitle}>🧾 Digital Receipt</p>
          <div style={styles.receiptRow}>
            <span style={styles.receiptLabel}>Receipt No.</span>
            <span style={styles.receiptValue}>{receiptNo}</span>
          </div>
          <div style={styles.receiptRow}>
            <span style={styles.receiptLabel}>Date & Time</span>
            <span style={styles.receiptValue}>{timestamp}</span>
          </div>
          <div style={styles.receiptRow}>
            <span style={styles.receiptLabel}>Status</span>
            <span style={{ ...styles.receiptValue, color: "#2e7d32", fontWeight: "bold" }}>
              ✅ Confirmed
            </span>
          </div>
          <div style={styles.receiptRow}>
            <span style={styles.receiptLabel}>SMS Sent To</span>
            <span style={styles.receiptValue}>+91 852xxx1126</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={styles.buttonGroup}>
          <button style={styles.printBtn}>
            🖨️ Print Receipt
          </button>
          <button style={styles.dashboardBtn} onClick={() => navigate("dashboard")}>
            🏠 Back to Dashboard
          </button>
        </div>

        {/* Auto logout countdown */}
        <div style={styles.countdown}>
          <p>🔒 Auto logout in <strong>{countdown}</strong> seconds</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${(countdown / 10) * 100}%`,
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a237e, #0d47a1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
  },
  card: {
    background: "white",
    borderRadius: "24px",
    padding: "48px",
    textAlign: "center",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  successIcon: {
    fontSize: "72px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "32px",
    color: "#2e7d32",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "32px",
  },
  receipt: {
    background: "#f9f9f9",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: "32px",
    textAlign: "left",
    border: "1px dashed #ccc",
  },
  receiptTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: "16px",
    textAlign: "center",
  },
  receiptRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  receiptLabel: {
    fontSize: "15px",
    color: "#888",
  },
  receiptValue: {
    fontSize: "15px",
    color: "#333",
    fontWeight: "600",
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "32px",
    flexWrap: "wrap",
  },
  printBtn: {
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    background: "white",
    color: "#1a237e",
    border: "2px solid #1a237e",
    cursor: "pointer",
    fontWeight: "bold",
  },
  dashboardBtn: {
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    background: "#1a237e",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  countdown: {
    background: "#fff3e0",
    borderRadius: "12px",
    padding: "16px",
  },
  progressBar: {
    background: "#eee",
    borderRadius: "999px",
    height: "8px",
    marginTop: "8px",
    overflow: "hidden",
  },
  progressFill: {
    background: "#f57f17",
    height: "100%",
    borderRadius: "999px",
    transition: "width 1s linear",
  },
};
