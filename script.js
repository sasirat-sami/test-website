* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Kanit", sans-serif;
    background: #fbfcff;
    color: #34415a;
    line-height: 1.7;
}


/* ================= NAVBAR ================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8%;

    background: rgba(255,255,255,.94);

    backdrop-filter: blur(12px);

    border-bottom: 1px solid #edf0f6;

    z-index: 999;
}

.logo {
    font-family: Poppins;
    font-size: 27px;
    font-weight: 600;

    color: #6479df;

    text-decoration: none;
}

.logo span {
    color: #d58db4;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    color: #657086;

    text-decoration: none;

    font-size: 14px;

    transition: .3s;
}

nav a:hover {
    color: #6479df;
}


/* ================= HERO ================= */

.hero {
    min-height: 100vh;

    padding: 120px 10% 70px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 50px;

    align-items: center;

    background:
        radial-gradient(
            circle at 10% 20%,
            #e5f4ff,
            transparent 30%
        ),
        radial-gradient(
            circle at 90% 80%,
            #f4e9ff,
            transparent 30%
        ),
        #fbfcff;
}

.hello {
    display: inline-block;

    padding: 6px 17px;

    background: #fff;

    color: #6c7fe2;

    border-radius: 30px;

    font-size: 13px;

    box-shadow: 0 7px 20px rgba(70,90,130,.08);
}

.hero h1 {
    margin-top: 18px;

    font-size: clamp(43px, 5vw, 65px);

    line-height: 1.18;

    color: #2f3c55;
}

.hero h1 span {
    color: #6579e2;
}

.hero-description {
    max-width: 520px;

    margin-top: 20px;

    color: #707b90;

    font-size: 17px;
}

.buttons {
    display: flex;

    gap: 12px;

    margin-top: 28px;
}

.btn,
.btn-light {
    padding: 11px 24px;

    border-radius: 30px;

    text-decoration: none;

    transition: .3s;
}

.btn {
    background: #687ce3;

    color: white;

    box-shadow: 0 10px 25px rgba(104,124,227,.25);
}

.btn:hover {
    transform: translateY(-3px);
}

.btn-light {
    background: white;

    color: #657086;

    border: 1px solid #e6eaf2;
}

.btn-light:hover {
    color: #687ce3;

    border-color: #9aa8ed;
}


/* ================= PROFILE ================= */

.hero-photo {
    position: relative;

    display: flex;

    justify-content: center;

    align-items: center;
}

.photo-frame {
    width: 270px;
    height: 330px;

    padding: 8px;

    background: white;

    border-radius: 32px;

    box-shadow:
        0 20px 45px rgba(70,90,130,.15);

    transform: rotate(2deg);

    position: relative;
}

.photo-frame::before {
    content: "";

    position: absolute;

    inset: -8px;

    border: 2px dashed #a8b4ed;

    border-radius: 38px;

    z-index: -1;
}

.photo-frame img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 25px;
}

.photo-label {
    position: absolute;

    bottom: 12px;
    left: 50%;

    transform: translateX(-50%);

    background: white;

    padding: 8px 18px;

    border-radius: 25px;

    white-space: nowrap;

    font-size: 12px;

    color: #58657c;

    box-shadow: 0 8px 20px rgba(60,80,120,.12);
}

.photo-decoration {
    position: absolute;

    z-index: 3;

    display: flex;

    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    background: white;

    border-radius: 50%;

    box-shadow: 0 8px 20px rgba(60,80,120,.12);

    font-size: 23px;
}

.photo-decoration.one {
    top: 30px;
    right: 17%;
    color: #f0a8c9;
}

.photo-decoration.two {
    bottom: 40px;
    left: 17%;
    color: #8c9ce8;
}


/* ================= SECTION ================= */

.section {
    padding: 95px 10%;
}

.soft-bg {
    background: #f3f7fc;
}

.heading {
    margin-bottom: 45px;
}

.heading span {
    font-family: Poppins;

    color: #7183df;

    font-size: 11px;

    letter-spacing: 2px;

    font-weight: 600;
}

.heading h2 {
    font-size: 36px;

    color: #33415a;

    margin-top: 3px;
}

.heading.center {
    text-align: center;
}

.heading.center p {
    color: #7b8698;

    margin-top: 5px;
}


/* ================= ABOUT ================= */

.about-layout {
    display: grid;

    grid-template-columns: .85fr 1.15fr;

    gap: 55px;

    align-items: center;
}

.about-picture {
    position: relative;
}

.about-picture img {
    width: 100%;
    height: 360px;

    object-fit: cover;

    border-radius: 28px;

    box-shadow: 0 18px 40px rgba(70,90,130,.12);
}

.picture-note {
    position: absolute;

    bottom: 15px;
    left: 15px;

    background: white;

    padding: 7px 15px;

    border-radius: 20px;

    font-size: 12px;

    color: #59667d;

    box-shadow: 0 7px 18px rgba(50,70,110,.1);
}

.about-content h3 {
    font-size: 26px;

    color: #35415a;

    margin-bottom: 10px;
}

.about-content > p {
    color: #707c91;

    margin-bottom: 10px;
}

.information {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;

    margin-top: 22px;
}

.info-box {
    padding: 14px 16px;

    border-radius: 17px;
}

.info-box span {
    display: block;

    font-size: 21px;
}

.info-box small {
    display: block;

    color: #727e91;

    font-size: 11px;
}

.info-box strong {
    display: block;

    font-size: 13px;

    color: #3e4b63;
}

.blue {
    background: #e8f5ff;
}

.purple {
    background: #f0ebff;
}

.pink {
    background: #fff0f5;
}

.green {
    background: #e9f9f2;
}


/* ================= EDUCATION ================= */

.education-layout {
    display: grid;

    grid-template-columns: 1.3fr .7fr;

    gap: 25px;
}

.education-card {
    background: white;

    padding: 28px;

    border-radius: 25px;

    display: flex;

    gap: 20px;

    align-items: center;

    box-shadow: 0 10px 30px rgba(70,90,130,.07);
}

.edu-icon {
    min-width: 65px;
    height: 65px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #e9e6ff;

    border-radius: 18px;

    font-size: 30px;
}

.current {
    color: #7183df;

    font-size: 12px;
}

.education-card h3 {
    font-size: 20px;

    color: #35415a;
}

.education-card p {
    color: #737f92;

    font-size: 13px;
}

.education-card strong {
    color: #6b7dde;

    font-size: 13px;
}

.education-message {
    padding: 28px;

    background: #fff0f6;

    border-radius: 25px;
}

.education-message div {
    font-size: 30px;
}

.education-message h3 {
    margin-top: 5px;

    color: #4b5870;
}

.education-message p {
    color: #7c8494;

    font-size: 13px;
}


/* ================= HOBBY ================= */

.hobby-layout {
    display: grid;

    grid-template-columns: .7fr 1.3fr;

    gap: 40px;

    align-items: center;
}

.hobby-text h3 {
    font-size: 24px;

    color: #37445d;
}

.hobby-text p {
    color: #778296;

    margin-top: 8px;
}

.hobby-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 14px;
}

.hobby-card {
    padding: 22px;

    background: white;

    border-radius: 20px;

    border: 1px solid #edf0f5;

    transition: .3s;
}

.hobby-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 12px 25px rgba(70,90,130,.08);
}

.hobby-card div {
    font-size: 32px;
}

.hobby-card h3 {
    font-size: 16px;

    margin-top: 3px;

    color: #46536a;
}

.hobby-card p {
    color: #7c8698;

    font-size: 12px;
}


/* ================= WORKS ================= */

.works-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 22px;
}

.work-card {
    background: white;

    border-radius: 23px;

    overflow: hidden;

    border: 1px solid #e9edf4;

    box-shadow: 0 10px 30px rgba(70,90,130,.06);

    transition: .3s;
}

.work-card:hover {
    transform: translateY(-7px);

    box-shadow: 0 18px 35px rgba(70,90,130,.11);
}

.work-photo {
    height: 190px;

    position: relative;
}

.work-photo img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.work-photo span {
    position: absolute;

    top: 12px;
    right: 12px;

    width: 34px;
    height: 34px;

    background: white;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #687ce3;

    font-family: Poppins;

    font-size: 10px;
}

.work-content {
    padding: 20px;
}

.work-content small {
    color: #7183df;

    font-family: Poppins;

    font-size: 9px;

    letter-spacing: 1.5px;
}

.work-content h3 {
    margin: 5px 0;

    font-size: 18px;

    color: #3c4961;
}

.work-content p {
    color: #778296;

    font-size: 13px;
}


/* ================= SKILLS ================= */

.skills-layout {
    display: grid;

    grid-template-columns: .8fr 1.2fr;

    gap: 70px;

    align-items: center;
}

.skills-intro h3 {
    font-size: 26px;

    color: #35415a;
}

.skills-intro p {
    color: #778296;

    margin-top: 8px;
}

.skill {
    margin-bottom: 18px;
}

.skill > div:first-child {
    display: flex;

    justify-content: space-between;

    color: #4b5870;

    font-size: 14px;

    margin-bottom: 6px;
}

.skill b {
    color: #7284df;
}

.bar {
    height: 8px;

    background: #e6eaf1;

    border-radius: 20px;

    overflow: hidden;
}

.bar i {
    display: block;

    height: 100%;

    border-radius: 20px;

    background: linear-gradient(
        90deg,
        #6980e6,
        #a28ce6
    );
}

.html {
    width: 90%;
}

.css {
    width: 85%;
}

.js {
    width: 70%;
}

.design {
    width: 85%;
}


/* ================= CONTACT ================= */

.contact {
    padding: 90px 10%;

    background:
        linear-gradient(
            135deg,
            #e6f4ff,
            #f2eaff
        );
}

.contact-content {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 50px;

    align-items: center;