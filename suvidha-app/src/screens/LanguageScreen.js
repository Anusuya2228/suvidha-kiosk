export default function LanguageScreen({ navigate, setLanguage }) {
  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "हिंदी", flag: "🇮🇳" },
    { name: "தமிழ்", flag: "🏴" },
  ];

  const handleLanguage = (lang) => {
    setLanguage(lang);
    navigate("login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏛️ SUVIDHA</h1>
        <p style={styles.subtitle}>Smart Urban Civic Services Kiosk</p>
        <p style={styles.instruction}>Select Your Language / भाषा चुनें / மொழி தேர்வு</p>

        <div style={styles.buttonGroup}>
          {languages.map((lang) => (
            <button
              key={lang.name}
              style={styles.langButton}
              onClick={() => handleLanguage(lang.name)}
            >
              <span style={styles.flag}>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        <p style={styles.footer}>Government of India | Smart Cities Mission</p>
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
  },
  card: {
    background: "white",
    borderRadius: "24px",
    padding: "60px 80px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    maxWidth: "600px",
    width: "90%",
  },
  title: {
    fontSize: "48px",
    color: "#1a237e",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "32px",
  },
  instruction: {
    fontSize: "16px",
    color: "#888",
    marginBottom: "32px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "40px",
  },
  langButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    padding: "20px",
    fontSize: "22px",
    borderRadius: "12px",
    border: "2px solid #1a237e",
    background: "white",
    color: "#1a237e",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  flag: {
    fontSize: "28px",
  },
  footer: {
    fontSize: "13px",
    color: "#aaa",
  },
};
