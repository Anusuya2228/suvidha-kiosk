import { useState } from "react";

export default function LoginScreen({ navigate, language }) {
  const [consumerId, setConsumerId] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("id");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = () => {
    if (consumerId.length < 6) {
      setError("Please enter a valid Consumer ID (min 6 digits)");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      setError("OTP must be 4 digits");
      return;
    }
    if (otp !== "1234") {
      setError("Invalid OTP. Use 1234 for demo");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("dashboard");
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Header */}
        <div style={styles.logoArea}>
          <h1 style={styles.logo}>🏛️ SUVIDHA</h1>
          <p style={styles.logoSub}>Smart Urban Civic Services Kiosk</p>
        </div>

        {/* Progress Steps */}
        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={{
              ...styles.stepCircle,
              background: "#1a237e",
              color: "white"
            }}>1</div>
            <p style={styles.stepText}>Enter ID</p>
          </div>
          <div style={{
            ...styles.stepLine,
            background: step === "otp" ? "#1a237e" : "#ddd"
          }} />
          <div style={styles.step}>
            <div style={{
              ...styles.stepCircle,
              background: step === "otp" ? "#1a237e" : "#ddd",
              color: step === "otp" ? "white" : "#999"
            }}>2</div>
            <p style={styles.stepText}>Verify OTP</p>
          </div>
          <div style={{ ...styles.stepLine, background: "#ddd" }} />
          <div style={styles.step}>
            <div style={{
              ...styles.stepCircle,
              background: "#ddd",
              color: "#999"
            }}>3</div>
            <p style={styles.stepText}>Access Services</p>
          </div>
        </div>

        {/* Step 1 - Consumer ID */}
        {step === "id" && (
          <div style={styles.formArea}>
            <p style={styles.formTitle}>Enter Your Consumer ID</p>
            <p style={styles.formHint}>
              Your Consumer ID is printed on your utility bill
            </p>
            <input
              style={styles.input}
              type="text"
              placeholder="e.g. 123456789"
              value={consumerId}
              onChange={(e) => setConsumerId(e.target.value)}
              maxLength={12}
            />

            <p style={styles.orText}>— OR login with —</p>

            <div style={styles.altLogin}>
              <button
                style={styles.altBtn}
                onClick={() => setConsumerId("DEMO123456")}
              >
                📱 Mobile Number
              </button>
              <button
                style={styles.altBtn}
                onClick={() => setConsumerId("DEMO123456")}
              >
                🪪 Aadhaar
              </button>
            </div>

            {error && <p style={styles.error}>⚠️ {error}</p>}

            <button
              style={{
                ...styles.mainBtn,
                opacity: loading ? 0.7 : 1
              }}
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? "⏳ Sending OTP..." : "Send OTP →"}
            </button>
          </div>
        )}

        {/* Step 2 - OTP */}
        {step === "otp" && (
          <div style={styles.formArea}>
            <p style={styles.formTitle}>Enter OTP</p>
            <p style={styles.formHint}>
              OTP sent to mobile linked with Consumer ID
            </p>
            <div style={styles.demoBox}>
              💡 Demo OTP: <strong>1234</strong>
            </div>

            {/* OTP Boxes */}
            <div style={styles.otpRow}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    ...styles.otpBox,
                    borderColor: otp[i] ? "#1a237e" : "#ddd",
                    background: otp[i] ? "#e8eaf6" : "white",
                  }}
                >
                  {otp[i] || ""}
                </div>
              ))}
            </div>

            {/* Hidden input to capture typing */}
            <input
              style={styles.hiddenInput}
              type="number"
              maxLength={4}
              value={otp}
              onChange={(e) => {
                if (e.target.value.length <= 4) setOtp(e.target.value);
              }}
              autoFocus
            />

            {error && <p style={styles.error}>⚠️ {error}</p>}

            <button
              style={{
                ...styles.mainBtn,
                opacity: loading ? 0.7 : 1
              }}
              onClick={handleVerifyOtp}
              disabled={loading}
            >
              {loading ? "⏳ Verifying..." : "Verify & Login →"}
            </button>

            <button
              style={styles.backBtn}
              onClick={() => {
                setStep("id");
                setOtp("");
                setError("");
              }}
            >
              ← Change Consumer ID
            </button>

            <p style={styles.resend}>
              Didn't receive OTP?{" "}
              <span
                style={styles.resendLink}
                onClick={() => alert("OTP resent! Use 1234")}
              >
                Resend OTP
              </span>
            </p>
          </div>
        )}

        <p style={styles.footer}>
          🔒 Secured by Government of India | Smart Cities Mission
        </p>
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
    width: "100%",
    maxWidth: "560px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  logoArea: {
    textAlign: "center",
    marginBottom: "32px",
  },
  logo: {
    fontSize: "40px",
    color: "#1a237e",
    margin: "0 0 4px 0",
  },
  logoSub: {
    fontSize: "14px",
    color: "#888",
  },
  steps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "36px",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
  },
  stepCircle: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },
  stepText: {
    fontSize: "12px",
    color: "#888",
    margin: 0,
  },
  stepLine: {
    height: "2px",
    width: "60px",
    margin: "0 8px",
    marginBottom: "20px",
  },
  formArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: "8px",
  },
  formHint: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "16px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    marginBottom: "16px",
    textAlign: "center",
    boxSizing: "border-box",
    letterSpacing: "2px",
  },
  orText: {
    fontSize: "13px",
    color: "#aaa",
    margin: "4px 0 12px 0",
  },
  altLogin: {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
  },
  altBtn: {
    padding: "12px 20px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "2px solid #ddd",
    background: "white",
    color: "#555",
    cursor: "pointer",
  },
  demoBox: {
    background: "#fff8e1",
    border: "1px solid #ffe082",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "15px",
    color: "#f57f17",
    marginBottom: "20px",
  },
  otpRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "8px",
  },
  otpBox: {
    width: "60px",
    height: "70px",
    border: "2px solid #ddd",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1a237e",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: "1px",
    height: "1px",
  },
  error: {
    color: "#e53935",
    fontSize: "14px",
    marginBottom: "12px",
  },
  mainBtn: {
    width: "100%",
    padding: "18px",
    fontSize: "20px",
    borderRadius: "12px",
    background: "#1a237e",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "12px",
  },
  backBtn: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "12px",
    background: "white",
    color: "#1a237e",
    border: "2px solid #1a237e",
    cursor: "pointer",
    marginBottom: "12px",
  },
  resend: {
    fontSize: "14px",
    color: "#888",
    marginTop: "8px",
  },
  resendLink: {
    color: "#1a237e",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
  footer: {
    textAlign: "center",
    fontSize: "12px",
    color: "#aaa",
    marginTop: "24px",
  },
};
