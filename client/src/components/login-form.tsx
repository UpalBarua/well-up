import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { auth } from '@/firebase/firebase.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Loader2, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type TLoginForm = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const [loginError, setLoginError] = useState('');

  const form = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async ({ email, password }: TLoginForm) => {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);

        console.log(user);

        toast.success('Successfully logged in to your account');
      } catch (error) {
        if (error instanceof Error) {
          return setLoginError(error.message);
        }

        toast.error('Something went wrong');
      }
    },
  });

  return (
    <Form {...form}>
      {loginError ? (
        <p className="p-4 mt-4 text-sm font-medium rounded-xl bg-destructive text-destructive-foreground">
          {loginError}
        </p>
      ) : null}
      <form
        className="pt-4 space-y-5"
        onSubmit={form.handleSubmit((data) => loginUser(data))}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Your password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-3">
          <Button type="submit" disabled={isPending} size="lg">
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <LogIn className="w-5 h-5" />
            )}
            <span>Login</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
