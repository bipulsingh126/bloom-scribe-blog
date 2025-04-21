import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Checkbox, Card, CardBody, Divider, Progress } from '@nextui-org/react';
import { useAuth } from '../contexts/AuthContext';
import { Lock, Mail, User, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Signup = () => {
  const { signup, googleLogin, facebookLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Calculate password strength
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 25;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 25;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 25;
    
    // Contains number or special char
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;
    
    setPasswordStrength(strength);
  }, [password]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return "danger";
    if (passwordStrength < 50) return "warning";
    if (passwordStrength < 75) return "warning";
    return "success";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return "Weak";
    if (passwordStrength < 50) return "Fair";
    if (passwordStrength < 100) return "Good";
    return "Strong";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (passwordStrength < 50) {
      setError('Please use a stronger password');
      return;
    }
    
    if (!acceptTerms) {
      setError('You must accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await signup(email, password, name);
      navigate('/');
    } catch (err) {
      setError('Signup failed. Please try again.');
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Create Account</h1>
          <p className="text-foreground/70">Join our community to explore amazing content</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card 
            className="glass-morphism border-glow p-2" 
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
                    type="text"
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    variant="bordered"
                    placeholder="Enter your name"
                    startContent={<User size={16} className="text-foreground/50" />}
                    className="enhanced-input"
                    autoComplete="name"
                  />
                  
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
                    autoComplete="email"
                  />
                  
                  <div className="space-y-2">
                    <Input
                      type="password"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      variant="bordered"
                      placeholder="Create a password"
                      startContent={<Lock size={16} className="text-foreground/50" />}
                      className="enhanced-input"
                      autoComplete="new-password"
                    />
                    
                    {password && (
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <Progress 
                          value={passwordStrength} 
                          color={getPasswordStrengthColor()} 
                          size="sm"
                          aria-label="Password strength"
                        />
                        <div className="flex justify-between text-xs">
                          <span className="text-foreground/70">Password strength: {getPasswordStrengthText()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="flex items-center gap-1 text-xs">
                            {/[a-z]/.test(password) ? 
                              <CheckCircle2 size={12} className="text-success" /> : 
                              <XCircle size={12} className="text-danger" />}
                            <span className="text-foreground/70">Lowercase</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            {/[A-Z]/.test(password) ? 
                              <CheckCircle2 size={12} className="text-success" /> : 
                              <XCircle size={12} className="text-danger" />}
                            <span className="text-foreground/70">Uppercase</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            {/[0-9]/.test(password) ? 
                              <CheckCircle2 size={12} className="text-success" /> : 
                              <XCircle size={12} className="text-danger" />}
                            <span className="text-foreground/70">Number</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            {password.length >= 8 ? 
                              <CheckCircle2 size={12} className="text-success" /> : 
                              <XCircle size={12} className="text-danger" />}
                            <span className="text-foreground/70">8+ Characters</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <Input
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    variant="bordered"
                    placeholder="Confirm your password"
                    startContent={<Lock size={16} className="text-foreground/50" />}
                    className="enhanced-input"
                    autoComplete="new-password"
                    color={confirmPassword && password !== confirmPassword ? "danger" : "default"}
                    errorMessage={confirmPassword && password !== confirmPassword ? "Passwords don't match" : ""}
                  />
                  
                  <Checkbox 
                    isSelected={acceptTerms}
                    onValueChange={setAcceptTerms}
                    size="sm"
                    className="text-foreground/70"
                  >
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Checkbox>
                  
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
                      isDisabled={!acceptTerms || password !== confirmPassword || passwordStrength < 50}
                      disableAnimation={isLoading}
                    >
                      Create Account
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
                        className="btn-3d w-full bg-white text-black border shadow-lg hover:shadow-xl"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        }
                        onPress={handleGoogleLogin}
                      >
                        Sign Up with Google
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="btn-3d w-full bg-[#1877F2] text-white shadow-lg hover:shadow-xl"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                          </svg>  
                        }
                        onPress={handleFacebookLogin}
                      >
                        Sign Up with Facebook
                      </Button>
                    </motion.div>
                  </div>
                </form>
                
                <div className="text-center mt-8">
                  <p className="text-foreground/60 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline font-medium">
                      Sign in
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

export default Signup; 