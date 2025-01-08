'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ContactForm = ({ isOpen, onClose }: { isOpen: any; onClose: any }) => {
  const [state, handleSubmit] = useForm('xlddoqgq');

  if (state.succeeded) {
    return (
      <div className="p-4">
        <p className="text-green-600">Thanks for joining!</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    );
  }

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Register </CardTitle>
        <CardDescription>
          Maximize your IPO investments. Subscribe to our 4 PM email alerts for highly subscribed IPOs and stay informed
          of the latest opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" name="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm" />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" type="tel" name="mobile" required />
          </div>

          <CardFooter>
            {/* <p className="text-sm text-gray-500">By submitting, you agree to... (Your privacy policy).</p> */}
            <Button type="submit" disabled={state.submitting}>
              {/* type="submit" */}
              {state.submitting ? 'Submitting...' : 'Submit'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};
