import React, { useState, useEffect } from 'react';
import { Bell, Plus, Trash2, User, Calendar } from 'lucide-react';

const Notice = () => {
  // Admin token & login modal control
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || '');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ id: '', password: '' });
  
  // Notices state & form
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState({ title: '', message: '', postedBy: 'Admin' });
  
  // This stores the action user was attempting: "post" or id for delete
  const [pendingAction, setPendingAction] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

 const fetchNotices = async () => {
  try {
    const res = await fetch('https://notice-jd1f.onrender.com/api/notices');
    const data = await res.json();
    console.log("Fetched notices:", data);

    if (Array.isArray(data)) {
      setNotices(data);
    } else {
      console.error("Expected array but got:", data);
      setNotices([]);
    }
  } catch (err) {
    console.error('Error fetching notices:', err);
    setNotices([]); // fallback in case of error
  }
};


  // Login modal input change
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // Admin login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://notice-jd1f.onrender.com/api/notices/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      if (!res.ok) throw new Error('Login failed');
      const data = await res.json();
      localStorage.setItem('adminToken', data.token);
      setAdminToken(data.token);
      setLoginForm({ id: '', password: '' });
      setShowLoginModal(false);
      alert('Login successful');

      // After login, perform the pending action (post or delete)
      if (pendingAction === 'post') {
        handleSubmitActual();
      } else if (pendingAction && pendingAction.startsWith('delete:')) {
        const id = pendingAction.split(':')[1];
        handleDeleteActual(id);
      }
      setPendingAction(null);
    } catch (err) {
      alert('Login failed: Invalid credentials');
    }
  };

  // Notice form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On Post button click - check login, else show modal
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!adminToken) {
      setPendingAction('post');
      setShowLoginModal(true);
      return;
    }
    handleSubmitActual();
  };

  // Actual post request after login check
  const handleSubmitActual = async () => {
    try {
      const res = await fetch('https://notice-jd1f.onrender.com/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to post notice');
      const newNotice = await res.json();
      setNotices([newNotice, ...notices]);
      setForm({ title: '', message: '', postedBy: 'Admin' });
      alert('Notice created successfully');
    } catch (err) {
      alert('Error posting notice');
    }
  };

  // On Delete button click - check login, else show modal
  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this notice?')) return;
    if (!adminToken) {
      setPendingAction(`delete:${id}`);
      setShowLoginModal(true);
      return;
    }
    handleDeleteActual(id);
  };

  // Actual delete request after login check
  const handleDeleteActual = async (id) => {
    try {
      const res = await fetch(`https://notice-jd1f.onrender.com/api/notices/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      if (!res.ok) throw new Error('Failed to delete notice');
      setNotices(notices.filter((n) => n._id !== id));
      alert('Notice deleted successfully');
    } catch (err) {
      alert('Error deleting notice');
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Header + Logout if logged in */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-yellow-400 p-3 rounded-full shadow-lg mr-4">
              <Bell className="w-8 h-8 text-yellow-900" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Notice Board</h1>
          </div>
          {adminToken && (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 py-3 rounded-lg hover:from-yellow-500 hover:to-amber-500  px-4  hover:bg-red-500 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Create Notice Form */}
        <div className="bg-white rounded-xl shadow-lg border border-yellow-200 mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 p-4">
            <div className="flex items-center">
              <Plus className="w-6 h-6 text-yellow-900 mr-2" />
              <h2 className="text-xl font-semibold text-yellow-900">Create New Notice</h2>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notice Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter notice title..."
                value={form.title}
                onChange={handleChange}
                
                className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all duration-200 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message..."
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all duration-200 outline-none resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Posted By
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="postedBy"
                  placeholder="Your name..."
                  value={form.postedBy}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all duration-200 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-yellow-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 inline mr-2" />
              Post Notice
            </button>
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-yellow-400 p-2 rounded-lg mr-3">
              <Bell className="w-5 h-5 text-yellow-900" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">All Notices</h2>
            <span className="ml-3 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              {notices.length}
            </span>
          </div>

          {notices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg border border-yellow-200">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No notices yet</p>
              <p className="text-gray-400">Create your first notice above</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {notices.map((notice) => (
                <div
                  key={notice._id}
                  className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 flex-1 mr-4">{notice.title}</h3>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className="bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 py-3 rounded hover:from-yellow-500 hover:to-amber-500  hover:bg-red-50 p-2  transition-all duration-200"
                        title="Delete notice"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{notice.message}</p>

                    <div className="flex items-center text-sm text-gray-500 bg-yellow-50 p-3 rounded-lg">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">Posted by {notice.postedBy}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(notice.date).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-yellow-300 to-amber-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleLoginSubmit}
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
          >
            <button
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              title="Close"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-yellow-900">Admin Login</h2>
            <input
              type="text"
              name="id"
              placeholder="Admin ID"
              value={loginForm.id}
              onChange={handleLoginChange}
              className="w-full mb-4 p-3 border border-yellow-300 rounded"
              required
              autoFocus
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className="w-full mb-6 p-3 border border-yellow-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 py-3 rounded hover:from-yellow-500 hover:to-amber-500 transition"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Notice;
