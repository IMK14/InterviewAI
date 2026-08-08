import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import InterviewStudio from "./pages/InterviewStudio";
import InterviewSession from "./pages/interviewSession";
import InterviewHistory from "./pages/InterviewHistory";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Results from "./pages/Results";
import GeminiTest from "./pages/GeminiTest";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <InterviewStudio />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interview-session"
        element={
          <ProtectedRoute>
            <InterviewSession />
          </ProtectedRoute>
        }
      />

      <Route
        path="/results"
        element={
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        }
      />
        <Route
         path="/history"
         element={
         <ProtectedRoute>
         <InterviewHistory />
          </ProtectedRoute>
        }
      />
         <Route
         path="/resume-analyzer"
         element={
         <ProtectedRoute>
         <ResumeAnalyzer />
         </ProtectedRoute>
         }
/> 
         <Route
         path="/gemini-test"
         element={
         <ProtectedRoute>
         <GeminiTest />
         </ProtectedRoute>
         }
/>
    </Routes>
  );
}

export default App;