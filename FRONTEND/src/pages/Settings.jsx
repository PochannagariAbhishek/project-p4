import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState("public");

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      {/* Profile Section */}
      <div className="settings-section">
        <h2>Profile</h2>
        <p>User information and account details.</p>
      </div>

      {/* Theme Selection */}
      <div className="settings-section">
        <h2>App Theme</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Language Selection */}
      <div className="settings-section">
        <h2>Language</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="gr">German</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h2>Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      {/* Privacy Settings */}
      <div className="settings-section">
        <h2>Privacy</h2>
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      {/* Support Section */}
      <div className="settings-section">
        <h2>Support</h2>
        <button>Report a Problem</button>
        <button>Help</button>
      </div>
    </div>
  );
};

export default Settings;
