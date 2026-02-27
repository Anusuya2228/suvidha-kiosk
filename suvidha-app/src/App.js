import { useState } from "react";
import LanguageScreen from "./screens/LanguageScreen";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/Dashboard";
import ElectricityScreen from "./screens/ElectricityScreen";
import GasScreen from "./screens/GasScreen";
import MunicipalScreen from "./screens/MunicipalScreen";
import ComplaintScreen from "./screens/ComplaintScreen";
import SuccessScreen from "./screens/SuccessScreen";

export default function App() {
  const [screen, setScreen] = useState("language");
  const [language, setLanguage] = useState("English");

  const navigate = (screenName) => setScreen(screenName);

  const screens = {
    language: <LanguageScreen navigate={navigate} setLanguage={setLanguage} />,
    login: <LoginScreen navigate={navigate} language={language} />,
    dashboard: <Dashboard navigate={navigate} language={language} />,
    electricity: <ElectricityScreen navigate={navigate} language={language} />,
    gas: <GasScreen navigate={navigate} language={language} />,
    municipal: <MunicipalScreen navigate={navigate} language={language} />,
    complaint: <ComplaintScreen navigate={navigate} language={language} />,
    success: <SuccessScreen navigate={navigate} language={language} />,
  };

  return <div>{screens[screen]}</div>;
}
