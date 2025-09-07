"use client";

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { verifyPassword } from '@/actions/sendMessage';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: {
    toDate: () => Date;
  };
};

export default function MessagesPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const checkPassword = async () => {
    setIsChecking(true);
    const result = await verifyPassword(password);
    setIsChecking(false);

    if (result.success) {
      setIsAuthenticated(true);
    } else {
      toast({
        title: 'Incorrect Password',
        description: 'Please try again.',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchMessages = async () => {
        setLoading(true);
        try {
          const messagesCollection = collection(db, 'messages');
          const q = query(messagesCollection, orderBy('timestamp', 'desc'));
          const messagesSnapshot = await getDocs(q);
          const messagesList = messagesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Message[];
          setMessages(messagesList);
        } catch (error) {
           toast({
            title: 'Error Fetching Messages',
            description: 'Could not retrieve messages from the database.',
            variant: 'destructive',
          });
        } finally {
          setLoading(false);
        }
      };
      fetchMessages();
    }
  }, [isAuthenticated, toast]);

  if (!isAuthenticated) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
            <div className="container mx-auto max-w-md px-4 py-16 flex flex-col items-center justify-center h-full">
                <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-center">Enter Password</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                    disabled={isChecking}
                    />
                    <Button onClick={checkPassword} disabled={isChecking}>
                        {isChecking ? 'Verifying...' : 'Access Messages'}
                    </Button>
                </CardContent>
                </Card>
            </div>
        </main>
        <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Contact Form Messages</h1>
          {loading ? (
            <p>Loading messages...</p>
          ) : messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <Card key={message.id}>
                  <CardHeader>
                    <CardTitle>{message.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{message.email} - {message.timestamp?.toDate().toLocaleString()}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{message.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
