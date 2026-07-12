import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/lib/site';

import { getContactFormAction } from '../api/contact.api';

export function ContactForm() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Send a message</CardTitle>
        <CardDescription>
          Use the form below to start a conversation. Messages still route to the original FormSubmit endpoint.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={getContactFormAction(site.email)} method="POST" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Your email" required />
          </div>
          <Input name="subject" placeholder="Subject" required />
          <Textarea name="message" placeholder="Your message" required />
          <input type="hidden" name="_captcha" value="false" />
          <Button type="submit">
            Send message <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
