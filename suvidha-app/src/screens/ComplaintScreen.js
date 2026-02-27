import { useState } from "react";

export default function ComplaintScreen({ navigate, language }) {
  const [department, setDepartment] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const departments = [
    { id: "electricity", icon: "⚡", title: "Electricity", color: "#f57f17" },
    { id: "gas", icon: "🔥", title: "Gas", color: "#e53935" },
    { id: "municipal", icon: "🏙️", title: "Municipal", color: "#2e7d32" },
  ];

  const categories = {
    electricity: ["Power Outage", "Billing Issue", "Meter Fault", "Voltage Problem"],
    gas: ["Gas Leak", "Billing Issue", "Meter Problem", "Supply Disruption"],
    municipal: ["Road Damage", "Street Light", "Water Supply", "Drainage Issue"],
  };

  const handleSubmit = () => {
    if (!department) {
      setError("Please select a department");
      return;
    }
    if (!category) {
      setError("Please select a complaint category");
      return;
    }
    if (description.length < 10) {
      setError("Please describe your complaint (min 10 characters)");
      return;
    }
    setError("");
    navigate("success");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate("dashboard")}>
          ← Back
        </button>
        <h1 style={styles.title}>📋 Register Complaint</h1>
        <p style={styles.subtitle}>Fill in the details below</p>
      </div>

      {/* Step 1 - Select Department */}
      <div style={styles.section}>
        <p style={styles.stepLabel}>Step 1 — Select Department</p>
        <div style={styles.deptGrid}>
          {departments.map((dept) => (
            <div
              key={dept.id}
              style={{
                ...styles.deptCard,
                borderColor: department === dept.id ? dept.color : "#ddd",
                background: department === dept.id ? dept.color + "15" : "white",
              }}
              onClick={() => {
                setDepartment(dept.id);
                setCategory("");
              }}
            >
              <span style={styles.deptIcon}>{dept.icon}</span>
              <p style={styles.deptTitle}>{dept.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2 - Select Category */}
      {department && (
        <div style={styles.section}>
          <p style={styles.stepLabel}>Step 2 — Select Complaint Type</p>
          <div style={styles.categoryGrid}>
            {categories[department].map((cat) => (
              <button
                key={cat}
                style={{
                  ...styles.categoryBtn,
                  background: category === cat ? "#1a237e" : "white",
                  color: category === cat ? "white" : "#1a237e",
                }}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 - Description */}
      {category && (
        <div style={styles.section}>
          <p style={styles.stepLabel}>Step 3 — Describe Your Complaint</p>
          <textarea
            style={styles.textarea}
            placeholder="Please describe your issue in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
          <p style={styles.charCount}>{description.length} characters</p>
        </div>
      )}

      {error && <p style={styles.error}>{error}</p>}

      <button style={styles.submitBtn} onClick={handleSubmit}>
        Submit Complaint →
      </button>
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
    border: "2px solid #1a237e",
    color: "#1a237e",
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "36px",
    color: "#1a237e",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
  },
  section: {
    width: "100%",
    maxWidth: "700px",
    background: "white",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  stepLabel: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: "16px",
  },
  deptGrid: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },
  deptCard: {
    border: "2px solid #ddd",
    borderRadius: "12px",
    padding: "20px 32px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  deptIcon: {
    fontSize: "36px",
  },
  deptTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    margin: "8px 0 0 0",
  },
  categoryGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  categoryBtn: {
    padding: "12px 20px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "2px solid #1a237e",
    cursor: "pointer",
    fontWeight: "600",
  },
  textarea: {
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    resize: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  charCount: {
    fontSize: "13px",
    color: "#aaa",
    textAlign: "right",
    margin: "4px 0 0 0",
  },
  error: {
    color: "red",
    fontSize: "15px",
    marginBottom: "12px",
  },
  submitBtn: {
    padding: "18px 60px",
    fontSize: "20px",
    borderRadius: "12px",
    background: "#1a237e",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "8px",
  },
};
