import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

// Static credentials
const VALID_CREDENTIALS = {
  email: "user@example.com",
  password: "password123"
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({ email, isLoggedIn: true }));
      navigate('/');
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md space-y-8">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </motion.div>

        <motion.form 
          onSubmit={handleLogin} 
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Sign in
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Login; 