import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Link as NextUILink,
} from "@nextui-org/react";
import { Lock, Mail } from 'lucide-react';

const LoginForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await login(email, password);
      onClose();
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        onClick={onOpen}
        className="text-sm font-medium hover:scale-105 transition-transform"
      >
        Login
      </Button>
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        scrollBehavior="outside"
        classNames={{
          base: "glass-morphism",
          header: "border-b border-border/40 pb-2",
          footer: "border-t border-border/40 pt-2",
        }}
      >
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1 text-xl font-bold text-gradient">Login to Your Account</ModalHeader>
            <ModalBody className="py-6">
              {error && <p className="text-danger text-sm bg-danger/10 p-3 rounded-lg mb-3">{error}</p>}
              
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="bordered"
                startContent={<Mail size={16} className="text-foreground/50" />}
                className="mb-2"
              />
              
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="bordered"
                startContent={<Lock size={16} className="text-foreground/50" />}
              />
              
              <NextUILink href="#" className="text-sm text-primary self-end">
                Forgot password?
              </NextUILink>
            </ModalBody>
            <ModalFooter className="flex flex-col w-full gap-2">
              <Button 
                color="danger" 
                variant="light" 
                onPress={onClose}
                className="font-medium w-full"
              >
                Cancel
              </Button>
              <Button 
                color="primary" 
                type="submit"
                className="font-medium w-full hover:scale-105 transition-transform"
                isLoading={isLoading}
              >
                Login
              </Button>
              <p className="text-center text-foreground/60 text-sm mt-4">
                Don't have an account? <NextUILink href="#" className="text-primary">Sign up</NextUILink>
              </p>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginForm; 