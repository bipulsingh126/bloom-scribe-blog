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
  Checkbox,
  Link as NextUILink,
} from "@nextui-org/react";
import { Lock, Mail, User } from 'lucide-react';

const SignupForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      setError('You must accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      await signup(email, password, name);
      onClose();
    } catch (err) {
      setError('Signup failed. Please try again.');
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
        Sign Up
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
            <ModalHeader className="flex flex-col gap-1 text-xl font-bold text-gradient">Create Your Account</ModalHeader>
            <ModalBody className="py-6">
              {error && <p className="text-danger text-sm bg-danger/10 p-3 rounded-lg mb-3">{error}</p>}
              
              <Input
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                variant="bordered"
                startContent={<User size={16} className="text-foreground/50" />}
                className="mb-2"
              />
              
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
                className="mb-4"
              />
              
              <Checkbox
                isSelected={acceptTerms}
                onValueChange={setAcceptTerms}
                size="sm"
                className="text-foreground/70"
              >
                I agree to the <NextUILink href="#" className="text-primary text-sm">Terms of Service</NextUILink> and <NextUILink href="#" className="text-primary text-sm">Privacy Policy</NextUILink>
              </Checkbox>
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
                isDisabled={!acceptTerms}
              >
                Create Account
              </Button>
              <p className="text-center text-foreground/60 text-sm mt-4">
                Already have an account? <NextUILink href="#" className="text-primary">Login</NextUILink>
              </p>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignupForm; 