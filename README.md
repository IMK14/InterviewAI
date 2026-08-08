# InterviewAI

InterviewAI is a web-based interview preparation platform designed to help students and job seekers practice technical interviews, analyze their resumes, and track their interview performance.

The platform provides role-based interview practice, voice-based answering, interview timing, performance results, interview history, and resume analysis.

## Live Application

Deployed using Vercel.

Add your final Vercel URL here:

YOUR_VERCEL_URL

## Features

### Interview Practice

- Role-based interview preparation
- Multiple technical roles
- Difficulty selection
- Interview duration selection
- Text-based answering
- Voice-based answering
- Speech-to-text support
- Interview timer
- Interview results

### Resume Lab

- PDF resume upload
- Resume text extraction
- ATS-style score
- Skills found
- Missing skills
- Resume improvement suggestions
- Analyze another resume

### Dashboard

- Interview statistics
- Performance information
- Recent interview activity
- Achievement information
- Quick access to major features

### Interview History

- Stores completed interviews
- Displays interview role
- Difficulty
- Interview mode
- Date
- Score
- Performance history

### Profile

- User profile information
- Interview statistics
- Performance overview
- Quick navigation to important sections

### Settings

- Default interview difficulty
- Default interview mode
- Default interview duration
- Sound preference
- Local settings storage

### Responsive Design

InterviewAI is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile browsers

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- JSX
- Tailwind CSS
- React Router

### Browser APIs

- Web Speech API
- Local Storage API
- File API

### Resume Processing

- PDF resume text extraction
- Client-side resume analysis

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

### Deployment

- Vercel

## Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── dashboard/
│   │   ├── interview/
│   │   ├── layout/
│   │   ├── profile/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── dbmsQuestions.js
│   │   ├── javaQuestions.js
│   │   ├── mlQuestions.js
│   │   ├── pythonQuestions.js
│   │   └── webQuestion.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── InterviewStudio.jsx
│   │   ├── InterviewSession.jsx
│   │   ├── InterviewHistory.jsx
│   │   ├── ResumeAnalyzer.jsx
│   │   ├── Results.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   │
│   ├── services/
│   │
│   ├── utils/
│   │   ├── evaluateAnswer.js
│   │   ├── pdfReport.js
│   │   ├── resumeAnalyzer.js
│   │   ├── resumeParser.js
│   │   └── speechRecognition.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md