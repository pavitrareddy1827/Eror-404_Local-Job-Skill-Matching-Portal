Team name Eror 404

Problem Statement : Many skilled individuals in small towns and rural areas struggle to find suitable jobs due to:
Lack of awareness about local opportunities
No centralized platform for nearby jobs
Poor digital visibility of their skills
Employers finding it hard to reach local talent
As a result, unemployment and underemployment increase despite available skills.

Our Solution :A localized web and mobile application that acts as a bridge between local job seekers and small-scale employers. The platform utilizes geo-fencing to prioritize nearby opportunities and provides a simplified interface for non-technical users to showcase their skills and connect with employers directly.
Features.
Geo-location based job discovery
Skill-based profile creation
Direct messaging/calling feature between employer and candidate
Verified employer/job listings
Multi-language support for rural accessibility
Real-time notification system for new job postings
Components Used (Tech Stack)

Frontend: HTML,CSS,Java srpt
Backend: Node.js / MongoDB

Team Members
Pavitra 1
Girija 2
Gagana 3
Aishwarya 4

Status : Project Under Development


//  fornt end code

import React, { useState, useEffect } from 'react';
// Mandatory for final submission: Tech stack declaration [cite: 42]
const TECH_STACK = "React, CSS, Geolocation API";

function App() {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    // Social Impact: Helps rural users find nearby jobs automatically
    if (!navigator.geolocation) {
      setStatus("Geolocation not supported by browser");
    } else {
      setStatus("Detecting your location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("Location detected");
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // Logic: Filter jobs based on detected location
        },
        () => setStatus("Location access denied")
      );
    }
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>📍 Local Job & Skill Portal</h1>
        <p>Connecting small-town talent to nearby opportunities.</p>
        <div style={styles.badge}>{status}</div>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>Your Skill Profile</h2>
          <p>Targeting: <strong>Digital Literacy & Social Impact</strong></p>
        </section>
        <section>
          <h2>Nearby Opportunities</h2>
          {/* Mock data for demonstration */}
          <div style={styles.jobCard}>
            <h3>Local Service Provider</h3>
            <p>Distance: 1.5 km away</p>
            <p>Required Skills:Basic Digital Tools</p>
            <button style={styles.button}>Apply Now</button>
          </div>
        </section>
      </main>
    </div>
  );
}
const styles = {
  container: { fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto' },
  header: { borderBottom: '3px solid #4CAF50', marginBottom: '20px', paddingBottom: '10px' },
  badge: { fontSize: '14px', background: '#e8f5e9', color: '#2e7d32', padding: '5px 10px', borderRadius: '5px', display: 'inline-block' },
  main: { display: 'flex', flexDirection: 'column', gap: '20px' },
  card: { padding: '15px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f5f5f5' },
  jobCard: { padding: '20px', border: '1px solid #4CAF50', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  button: { backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }
};
export default App;
