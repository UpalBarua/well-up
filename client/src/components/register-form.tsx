import axios from '@/api/axios';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Loader2, LogIn } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useState } from 'react';

const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .max(30, { message: 'Name cannot exceed 30 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type TRegisterForm = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState('');

  const form = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate: createNewUser, isPending } = useMutation({
    mutationFn: async ({ name, email, password }: TRegisterForm) => {
      try {
        const createdUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log(createdUser);

        // await axios.post('/users', {
        //   name,
        //   email,
        //   imgUrl: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${name}`,
        // });

        toast.success('Successfully created new account');
      } catch (error) {
        if (error instanceof Error) {
          return setRegisterError(error.message);
        }

        toast.error('Something went wrong');
      }
    },
  });

  return (
    <Form {...form}>
      {registerError ? (
        <p className="p-4 mt-4 text-sm font-medium rounded-xl bg-destructive text-destructive-foreground">
          {registerError}
        </p>
      ) : null}
      <form
        className="pt-4 space-y-5"
        onSubmit={form.handleSubmit((data) => createNewUser(data))}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input
                  placeholder="Strong password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Repeat your password"
                  {...field}
                  type="password"
                />
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
            <span>Register</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
