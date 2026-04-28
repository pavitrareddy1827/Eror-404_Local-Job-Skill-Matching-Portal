import React, { useState, useEffect } from 'react';

// Required for the Final Submission: Tech stack list [cite: 42]
const TECH_STACK = "React, CSS, Geolocation API";

function App() {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    // Social Impact Feature: Auto-detect location for low digital literacy users
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("Location found");
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // In a real scenario, you would fetch from your backend here
          // Example: fetchJobs(position.coords.latitude, position.coords.longitude);
        },
        () => setStatus("Unable to retrieve your location")
      );
    }
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Local Job & Skill Portal</h1>
        <p>Digital Transformation for Rural Employment</p>
        <span style={styles.statusBadge}>{status}</span>
      </header>

      <main style={styles.main}>
        <section style={styles.profileSection}>
          <h2>Your Profile</h2>
          <p>Skills: <strong>Technical, Agriculture, Construction</strong></p>
        </section>

        <section style={styles.jobSection}>
          <h2>Nearby Opportunities</h2>
          {/* Mock data for the 48-hour hackathon demo */}
          <div style={styles.card}>
            <h3>Local Solar Installer</h3>
            <p>Location: 2km away</p>
            <button style={styles.button}>Apply Directly</button>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' },
  header: { borderBottom: '2px solid #007bff', paddingBottom: '10px', marginBottom: '20px' },
  statusBadge: { fontSize: '12px', background: '#e0e0e0', padding: '4px 8px', borderRadius: '4px' },
  main: { display: 'grid', gap: '20px' },
  card: { border: '1px solid #ddd', padding: '15px', borderRadius: '8px', background: '#f9f9f9' },
  button: { background: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }
};

export default App;