import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Input, Checkbox, Card, CardBody, Divider } from '@nextui-org/react';
import { useAuth } from '../contexts/AuthContext';
import { Lock, Mail, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const { login, googleLogin, facebookLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Get the redirect path from location state or default to homepage
  const from = location.state?.from?.pathname || '/';

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await login(email, password);
      // Navigate will happen automatically due to the useEffect above
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      await googleLogin();
      // Redirect happens via useEffect
    } catch (err) {
      setError('Google login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      await facebookLogin();
      // Redirect happens via useEffect
    } catch (err) {
      setError('Facebook login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* 3D Background elements */}
      <motion.div 
        className="absolute w-64 h-64 bg-primary/10 rounded-full -z-10"
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-secondary/10 rounded-full -z-10"
        initial={{ x: 100, y: 100 }}
        animate={{ 
          x: [100, -100, 100],
          y: [100, -100, 100],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-48 h-48 bg-success/10 rounded-full -z-10"
        initial={{ x: 0, y: 0 }}
        animate={{ 
          x: [0, 150, 0, -150, 0],
          y: [0, 150, 0, -150, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="w-full max-w-md relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Welcome Back</h1>
          <p className="text-foreground/70">Sign in to access your account</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="glass-morphism border-glow p-2" 
            style={{ 
              perspective: '1000px',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.2)'
            }}
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CardBody className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-danger/10 text-danger p-4 rounded-lg text-sm flex items-center gap-2"
                    >
                      <AlertTriangle size={18} />
                      <span>{error}</span>
                    </motion.div>
                  )}
                  
                  <Input
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="bordered"
                    placeholder="your.email@example.com"
                    startContent={<Mail size={16} className="text-foreground/50" />}
                    className="enhanced-input"
                    autoComplete="username"
                  />
                  
                  <Input
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    variant="bordered"
                    placeholder="Enter your password"
                    startContent={<Lock size={16} className="text-foreground/50" />}
                    className="enhanced-input"
                    autoComplete="current-password"
                  />
                  
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      isSelected={rememberMe}
                      onValueChange={setRememberMe}
                      size="sm"
                      className="text-foreground/70"
                    >
                      Remember me
                    </Checkbox>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      color="primary"
                      className="w-full font-medium shadow-lg"
                      style={{
                        transform: 'translateZ(20px)',
                        boxShadow: '0 10px 25px -5px rgba(var(--color-primary-500), 0.3), 0 8px 10px -6px rgba(var(--color-primary-500), 0.2)'
                      }}
                      size="lg"
                      isLoading={isLoading}
                      disableAnimation={isLoading}
                      disabled={isLoading}
                    >
                      Sign In
                    </Button>
                  </motion.div>
                  
                  <div className="relative my-6">
                    <Divider className="my-4 opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-background dark:bg-card px-2 text-foreground/60 text-xs">OR</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        color="default"
                        variant="bordered"
                        className="w-full"
                        style={{
                          transform: 'translateZ(15px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        }}
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Continue with Google
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        color="default"
                        variant="bordered"
                        className="w-full"
                        style={{
                          transform: 'translateZ(15px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        }}
                        onClick={handleFacebookLogin}
                        disabled={isLoading}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="#1877f2">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        </svg>
                        Continue with Facebook
                      </Button>
                    </motion.div>
                  </div>
                </form>
                
                <div className="text-center mt-8">
                  <p className="text-foreground/60 text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary hover:underline font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </CardBody>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login; 