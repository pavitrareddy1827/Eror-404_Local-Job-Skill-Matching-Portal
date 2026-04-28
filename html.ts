<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SkillConnect - Local Job & Skill Matching Portal</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, sans-serif;
}

body{
background:#f4f7fb;
color:#222;
}

/* Navbar */
nav{
background:#2563eb;
color:white;
padding:15px 40px;
display:flex;
justify-content:space-between;
align-items:center;
}

nav h1{
font-size:28px;
}

nav ul{
list-style:none;
display:flex;
gap:25px;
}

nav ul li{
cursor:pointer;
font-weight:bold;
}

/* Hero */
.hero{
padding:60px 40px;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
}

.hero-left{
max-width:550px;
}

.hero-left h2{
font-size:42px;
margin-bottom:20px;
color:#111827;
}

.hero-left p{
font-size:18px;
line-height:1.6;
margin-bottom:25px;
color:#555;
}

.hero-left button{
padding:14px 28px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
font-size:16px;
cursor:pointer;
}

.hero-right{
width:420px;
height:280px;
background:white;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
padding:30px;
}

.hero-right h3{
margin-bottom:20px;
color:#2563eb;
}

.hero-right input,
.hero-right select{
width:100%;
padding:12px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:8px;
}

/* Features */
.section{
padding:60px 40px;
}

.section h2{
text-align:center;
font-size:34px;
margin-bottom:40px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:white;
padding:25px;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,0.06);
}

.card h3{
color:#2563eb;
margin-bottom:10px;
}

/* Jobs */
.job-box{
background:white;
padding:20px;
border-radius:15px;
box-shadow:0 8px 18px rgba(0,0,0,0.06);
margin-bottom:20px;
}

.job-box h3{
color:#111827;
margin-bottom:10px;
}

.job-box button{
margin-top:10px;
padding:10px 20px;
border:none;
background:#16a34a;
color:white;
border-radius:8px;
cursor:pointer;
}

/* Footer */
footer{
background:#111827;
color:white;
text-align:center;
padding:25px;
margin-top:50px;
}
</style>
</head>

<body>

<!-- Navbar -->
<nav>
<h1>SkillConnect</h1>
<ul>
<li>Home</li>
<li>Jobs</li>
<li>Skills</li>
<li>Employers</li>
<li>Contact</li>
</ul>
</nav>

<!-- Hero -->
<section class="hero">

<div class="hero-left">
<h2>Find Local Jobs Based on Your Skills</h2>
<p>
SkillConnect helps local youth, workers, and job seekers discover nearby jobs
matched to their skills, education, and interests.
</p>

<button>Get Started</button>
</div>

<div class="hero-right">
<h3>Quick Match Search</h3>

<input type="text" placeholder="Enter Your Name">

<select>
<option>Select Skill</option>
<option>Web Development</option>
<option>Electrician</option>
<option>Plumbing</option>
<option>Tailoring</option>
<option>Data Entry</option>
</select>

<select>
<option>Select Location</option>
<option>Bangalore</option>
<option>Mysore</option>
<option>Hubli</option>
<option>Belagavi</option>
</select>

<input type="text" placeholder="Expected Salary">

<button style="width:100%;padding:12px;background:#2563eb;color:white;border:none;border-radius:8px;">
Find Jobs
</button>

</div>
</section>

<!-- Features -->
<section class="section">
<h2>Why Choose SkillConnect?</h2>

<div class="cards">

<div class="card">
<h3>AI Job Matching</h3>
<p>Matches users with jobs based on skills and experience.</p>
</div>

<div class="card">
<h3>Nearby Opportunities</h3>
<p>Discover jobs available in your local area instantly.</p>
</div>

<div class="card">
<h3>Skill Development</h3>
<p>Suggests courses to improve employability.</p>
</div>

<div class="card">
<h3>Employer Dashboard</h3>
<p>Companies can post jobs and hire faster.</p>
</div>

</div>
</section>

<!-- Latest Jobs -->
<section class="section">
<h2>Latest Local Jobs</h2>

<div class="job-box">
<h3>Frontend Developer</h3>
<p>Location: Bangalore | Salary: ₹25,000</p>
<button>Apply Now</button>
</div>

<div class="job-box">
<h3>Electrician</h3>
<p>Location: Mysore | Salary: ₹18,000</p>
<button>Apply Now</button>
</div>

<div class="job-box">
<h3>Data Entry Operator</h3>
<p>Location: Hubli | Salary: ₹15,000</p>
<button>Apply Now</button>
</div>

</section>

<!-- Footer -->
<footer>
©️ 2026 SkillConnect - Local Job & Skill Matching Portal
</footer>

</body>
</html>
