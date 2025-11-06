import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Users, Coffee, FileText, MessageSquare, Image, Send, Download, CheckCircle, Clock, UserCheck, AlertTriangle, Megaphone, Eye, LogOut, Calendar, TrendingUp } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue, push, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const WeAnswerDispatch = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState('login');
  const [users, setUsers] = useState({});
  const [attendance, setAttendance] = useState({});
  const [breaks, setBreaks] = useState({});
  const [coachingLogs, setCoachingLogs] = useState([]);
  const [infractions, setInfractions] = useState([]);
  const [memos, setMemos] = useState([]);
  const [feed, setFeed] = useState([]);
  const [media, setMedia] = useState([]);
  const [snitchMessages, setSnitchMessages] = useState([]);
  
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', password: '', employeeId: '', name: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeBreak, setActiveBreak] = useState(null);
  const [loading, setLoading] = useState(true);

  const signatureRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const initAdmin = async () => {
      try {
        const usersRef = ref(database, 'users');
        const snapshot = await get(usersRef);
        
        if (!snapshot.exists()) {
          const adminUser = {
            Username: {
              password: 'Password12#',
              role: 'admin',
              employeeId: 'ADMIN001',
              name: 'Administrator',
              loginHistory: []
            }
          };
          await set(usersRef, adminUser);
        }
      } catch (error) {
        console.error('Init admin error:', error);
      }
    };

    initAdmin();
    setupRealtimeListeners();
  }, []);

  const setupRealtimeListeners = () => {
    onValue(ref(database, 'users'), (snapshot) => {
      setUsers(snapshot.val() || {});
    });

    onValue(ref(database, 'attendance'), (snapshot) => {
      setAttendance(snapshot.val() || {});
    });

    onValue(ref(database, 'breaks'), (snapshot) => {
      setBreaks(snapshot.val() || {});
    });

    onValue(ref(database, 'coaching-logs'), (snapshot) => {
      const data = snapshot.val();
      setCoachingLogs(data ? Object.values(data) : []);
    });

    onValue(ref(database, 'infractions'), (snapshot) => {
      const data = snapshot.val();
      setInfractions(data ? Object.values(data) : []);
    });

    onValue(ref(database, 'memos'), (snapshot) => {
      const data = snapshot.val();
      setMemos(data ? Object.values(data) : []);
    });

    onValue(ref(database, 'feed'), (snapshot) => {
      const data = snapshot.val();
      setFeed(data ? Object.values(data).sort((a, b) => b.id - a.id) : []);
    });

    onValue(ref(database, 'media'), (snapshot) => {
      const data = snapshot.val();
      setMedia(data ? Object.values(data).sort((a, b) => b.id - a.id) : []);
    });

    onValue(ref(database, 'snitch'), (snapshot) => {
      const data = snapshot.val();
      setSnitchMessages(data ? Object.values(data).sort((a, b) => b.id - a.id) : []);
    });

    setLoading(false);
  };

  const handleLogin = async () => {
    try {
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);
      const userData = snapshot.val();

      if (!userData || !userData[loginForm.username]) {
        setError('Invalid username or password! 🚫');
        return;
      }

      const user = userData[loginForm.username];
      if (user.password !== loginForm.password) {
        setError('Wrong password, try again! 🔐');
        return;
      }

      const today = new Date().toDateString();
      const userIP = 'DESKTOP-' + Math.random().toString(36).substr(2, 9);
      
      if (user.role !== 'admin') {
        const lastLogin = user.loginHistory?.[user.loginHistory.length - 1];
        if (lastLogin && lastLogin.date === today && lastLogin.ip !== userIP) {
          setError('Already logged in from another device today! 🖥️');
          return;
        }
      }

      user.loginHistory = user.loginHistory || [];
      user.loginHistory.push({ date: today, ip: userIP, time: new Date().toLocaleTimeString() });
      
      await update(ref(database, `users/${loginForm.username}`), user);

      setCurrentUser({ username: loginForm.username, ...user });
      setView('home');
      setError('');
      setSuccess('Welcome back! 🎉');
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  const handleRegister = async () => {
    if (!registerForm.username || !registerForm.password || !registerForm.employeeId || !registerForm.name) {
      setError('Fill all fields! 📝');
      return;
    }

    try {
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);
      const userData = snapshot.val() || {};

      if (userData[registerForm.username]) {
        setError('Username already exists! 👥');
        return;
      }

      await update(ref(database, `users/${registerForm.username}`), {
        password: registerForm.password,
        role: 'employee',
        employeeId: registerForm.employeeId,
        name: registerForm.name,
        loginHistory: []
      });

      setSuccess('Account created! Login now! 🎊');
      setError('');
      setRegisterForm({ username: '', password: '', employeeId: '', name: '' });
    } catch (error) {
      setError('Registration failed: ' + error.message);
    }
  };

  const markPresent = async () => {
    const today = new Date().toDateString();
    
    try {
      await update(ref(database, `attendance/${today}/${currentUser.employeeId}`), {
        status: 'present',
        time: new Date().toLocaleTimeString(),
        approved: false,
        username: currentUser.username,
        name: currentUser.name
      });

      addToFeed(`${currentUser.name} has arrived! 🎯`, 'attendance');
      setSuccess('Marked present! Waiting for admin approval... ⏳');
    } catch (error) {
      setError('Failed to mark attendance: ' + error.message);
    }
  };

  const startBreak = async (type) => {
    const now = new Date();
    const today = now.toDateString();
    
    try {
      const breaksRef = ref(database, `breaks/${today}/${currentUser.employeeId}`);
      const snapshot = await get(breaksRef);
      const existingBreaks = snapshot.val() || [];

      const newBreak = {
        type,
        start: now.toISOString(),
        end: null,
        approved: false,
        username: currentUser.username,
        name: currentUser.name
      };

      existingBreaks.push(newBreak);
      await set(breaksRef, existingBreaks);
      
      setActiveBreak({ type, start: now, index: existingBreaks.length - 1 });
      
      const emoji = type === 'lunch' ? '🍕' : type === 'rr' ? '🚽' : '☕';
      addToFeed(`${currentUser.name} is on ${type}! ${emoji}`, 'break');
    } catch (error) {
      setError('Failed to start break: ' + error.message);
    }
  };

  const endBreak = async () => {
    if (!activeBreak) return;
    
    const now = new Date();
    const today = now.toDateString();
    
    try {
      const breaksRef = ref(database, `breaks/${today}/${currentUser.employeeId}`);
      const snapshot = await get(breaksRef);
      const userBreaks = snapshot.val() || [];
      
      userBreaks[activeBreak.index].end = now.toISOString();
      await set(breaksRef, userBreaks);
      
      const duration = (now - new Date(activeBreak.start)) / 60000;
      const limits = { 'break1': 15, 'break2': 15, 'lunch': 60 };
      
      if (limits[activeBreak.type] && duration > limits[activeBreak.type]) {
        addToFeed(`⚠️ ${currentUser.name} exceeded ${activeBreak.type} by ${Math.round(duration - limits[activeBreak.type])} mins!`, 'alert');
      }

      setActiveBreak(null);
      addToFeed(`${currentUser.name} is back from ${activeBreak.type}! 🔙`, 'break');
    } catch (error) {
      setError('Failed to end break: ' + error.message);
    }
  };

  const addToFeed = async (message, type) => {
    try {
      const feedRef = ref(database, 'feed');
      const newFeedRef = push(feedRef);
      
      await set(newFeedRef, {
        id: Date.now(),
        message,
        type,
        timestamp: new Date().toISOString(),
        author: currentUser?.name || 'System'
      });
    } catch (error) {
      console.error('Failed to add to feed:', error);
    }
  };

  const postCoachingLog = async (employeeId, content) => {
    try {
      const logsRef = ref(database, 'coaching-logs');
      const newLogRef = push(logsRef);
      
      await set(newLogRef, {
        id: Date.now(),
        employeeId,
        content,
        date: new Date().toISOString(),
        acknowledged: false,
        signature: null,
        comment: ''
      });

      addToFeed(`📋 New coaching log posted for ${employeeId}`, 'coaching');
      setSuccess('Coaching log posted! ✅');
    } catch (error) {
      setError('Failed to post coaching log: ' + error.message);
    }
  };

  const postInfraction = async (employeeId, content, severity) => {
    try {
      const irsRef = ref(database, 'infractions');
      const newIrRef = push(irsRef);
      
      await set(newIrRef, {
        id: Date.now(),
        employeeId,
        content,
        severity,
        date: new Date().toISOString(),
        acknowledged: false,
        signature: null,
        comment: ''
      });

      addToFeed(`⚠️ Infraction report issued to ${employeeId}`, 'infraction');
      setSuccess('Infraction posted! ✅');
    } catch (error) {
      setError('Failed to post infraction: ' + error.message);
    }
  };

  const postMemo = async (title, content) => {
    try {
      const memosRef = ref(database, 'memos');
      const newMemoRef = push(memosRef);
      
      await set(newMemoRef, {
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString(),
        acknowledgedBy: {}
      });

      addToFeed(`📢 New memo: ${title}`, 'memo');
      setSuccess('Memo posted! ✅');
    } catch (error) {
      setError('Failed to post memo: ' + error.message);
    }
  };

  const acknowledgeWithSignature = async (type, id, comment, signature) => {
    try {
      if (type === 'coaching') {
        const logsRef = ref(database, 'coaching-logs');
        const snapshot = await get(logsRef);
        const data = snapshot.val();
        
        for (let key in data) {
          if (data[key].id === id) {
            await update(ref(database, `coaching-logs/${key}`), {
              acknowledged: true,
              signature,
              comment
            });
            break;
          }
        }
      } else if (type === 'infraction') {
        const irsRef = ref(database, 'infractions');
        const snapshot = await get(irsRef);
        const data = snapshot.val();
        
        for (let key in data) {
          if (data[key].id === id) {
            await update(ref(database, `infractions/${key}`), {
              acknowledged: true,
              signature,
              comment
            });
            break;
          }
        }
      } else if (type === 'memo') {
        const memosRef = ref(database, 'memos');
        const snapshot = await get(memosRef);
        const data = snapshot.val();
        
        for (let key in data) {
          if (data[key].id === id) {
            await update(ref(database, `memos/${key}/acknowledgedBy/${currentUser.employeeId}`), {
              signature,
              date: new Date().toISOString(),
              name: currentUser.name
            });
            break;
          }
        }
      }
      setSuccess('Acknowledged! ✅');
    } catch (error) {
      setError('Failed to acknowledge: ' + error.message);
    }
  };

  const sendSnitchMessage = async (message) => {
    try {
      const snitchRef = ref(database, 'snitch');
      const newSnitchRef = push(snitchRef);
      
      await set(newSnitchRef, {
        id: Date.now(),
        employeeId: currentUser.employeeId,
        message,
        date: new Date().toISOString(),
        read: false
      });

      setSuccess('Message sent confidentially! 🤫');
    } catch (error) {
      setError('Failed to send message: ' + error.message);
    }
  };

  const approveAttendance = async (date, employeeId) => {
    try {
      await update(ref(database, `attendance/${date}/${employeeId}`), {
        approved: true
      });
      setSuccess('Attendance approved! ✅');
    } catch (error) {
      setError('Failed to approve: ' + error.message);
    }
  };

  const approveBreak = async (date, employeeId, breakIndex) => {
    try {
      await update(ref(database, `breaks/${date}/${employeeId}/${breakIndex}`), {
        approved: true
      });
      setSuccess('Break approved! ✅');
    } catch (error) {
      setError('Failed to approve break: ' + error.message);
    }
  };

  const startDrawing = (e) => {
    if (!signatureRef.current) return;
    setIsDrawing(true);
    const rect = signatureRef.current.getBoundingClientRect();
    const ctx = signatureRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing || !signatureRef.current) return;
    const rect = signatureRef.current.getBoundingClientRect();
    const ctx = signatureRef.current.getContext('2d');
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    if (!signatureRef.current) return;
    const ctx = signatureRef.current.getContext('2d');
    ctx.clearRect(0, 0, signatureRef.current.width, signatureRef.current.height);
  };

  const getSignature = () => {
    return signatureRef.current ? signatureRef.current.toDataURL() : null;
  };

  const exportAttendanceCSV = () => {
    let csv = 'Date,Employee ID,Name,Status,Time,Approved\n';
    Object.entries(attendance).forEach(([date, records]) => {
      Object.entries(records).forEach(([empId, record]) => {
        csv += `${date},${empId},${record.name},${record.status},${record.time},${record.approved}\n`;
      });
    });
    downloadFile(csv, 'attendance.csv', 'text/csv');
  };

  const exportBreaksCSV = () => {
    let csv = 'Date,Employee ID,Name,Break Type,Start,End,Duration (min),Approved\n';
    Object.entries(breaks).forEach(([date, records]) => {
      Object.entries(records).forEach(([empId, breakList]) => {
        breakList.forEach(b => {
          const duration = b.end ? ((new Date(b.end) - new Date(b.start)) / 60000).toFixed(2) : 'Ongoing';
          csv += `${date},${empId},${b.name},${b.type},${new Date(b.start).toLocaleTimeString()},${b.end ? new Date(b.end).toLocaleTimeString() : 'N/A'},${duration},${b.approved}\n`;
        });
      });
    });
    downloadFile(csv, 'breaks.csv', 'text/csv');
  };

  const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center">Loading... 🚀</h2>
        </div>
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              WeAnswer Dispatch 🚀
            </h1>
            <p className="text-gray-600">Maximum Chaos, Maximum Productivity</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {success}
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded mb-3"
              value={loginForm.username}
              onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-3"
              value={loginForm.password}
              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded font-bold hover:shadow-lg transition"
            >
              Let's Go! 🎯
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded mb-3"
              value={registerForm.username}
              onChange={(e) => setRegisterForm({...registerForm, username: e.target.value})}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-3"
              value={registerForm.password}
              onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
            />
            <input
              type="text"
              placeholder="Employee ID"
              className="w-full p-3 border rounded mb-3"
              value={registerForm.employeeId}
              onChange={(e) => setRegisterForm({...registerForm, employeeId: e.target.value})}
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded mb-3"
              value={registerForm.name}
              onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
            />
            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 rounded font-bold hover:shadow-lg transition"
            >
              Join the Team! 🎊
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">WeAnswer Dispatch 🚀</h1>
          <div className="flex items-center gap-4">
            <span className="font-semibold">{currentUser.name} ({currentUser.role})</span>
            <button
              onClick={() => {
                setCurrentUser(null);
                setView('login');
              }}
              className="bg-white text-purple-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="flex gap-4 mb-6 flex-wrap">
          <button onClick={() => setView('home')} className="bg-purple-500 text-white px-4 py-2 rounded font-bold hover:bg-purple-600 transition">
            🏠 Home Feed
          </button>
          <button onClick={() => setView('attendance')} className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-600 transition">
            📅 Attendance
          </button>
          <button onClick={() => setView('breaks')} className="bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-600 transition">
            ☕ Breaks
          </button>
          {currentUser.role === 'admin' && (
            <>
              <button onClick={() => setView('coaching')} className="bg-yellow-500 text-white px-4 py-2 rounded font-bold hover:bg-yellow-600 transition">
                📋 Coaching
              </button>
              <button onClick={() => setView('infractions')} className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition">
                ⚠️ Infractions
              </button>
              <button onClick={() => setView('memos')} className="bg-indigo-500 text-white px-4 py-2 rounded font-bold hover:bg-indigo-600 transition">
                📢 Memos
              </button>
              <button onClick={() => setView('snitch')} className="bg-gray-700 text-white px-4 py-2 rounded font-bold hover:bg-gray-800 transition">
                🤫 Snitch Line
              </button>
            </>
          )}
          {currentUser.role !== 'admin' && (
            <>
              <button onClick={() => setView('my-docs')} className="bg-orange-500 text-white px-4 py-2 rounded font-bold hover:bg-orange-600 transition">
                📄 My Documents
              </button>
              <button onClick={() => setView('snitch')} className="bg-gray-700 text-white px-4 py-2 rounded font-bold hover:bg-gray-800 transition">
                🤫 Report Issue
              </button>
            </>
          )}
          <button onClick={() => setView('media')} className="bg-pink-500 text-white px-4 py-2 rounded font-bold hover:bg-pink-600 transition">
            📸 Team Gallery
          </button>
        </div>

        {view === 'home' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-2">🎉 MAXIMUM CHAOS MODE ACTIVATED 🎉</h2>
                <p className="text-lg">Where productivity meets memes. Let's get this bread! 🍞</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Quick Actions ⚡</h3>
                <div className="grid grid-cols-2 gap-4">
