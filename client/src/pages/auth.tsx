import LoginForm from '@/components/login-form';
import RegisterForm from '@/components/register-form';
import { buttonVariants } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useMediaQuery from '@/hooks/use-media-query';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    Icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    Icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    Icon: <Facebook className="w-5 h-5" />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/',
    Icon: <Twitter className="w-5 h-5" />,
  },
] as const;

const AuthPage = () => {
  const isSmPlus = useMediaQuery('(min-width: 640px)');

  return (
    <main className="container gap-3 pt-4 pb-10 mx-auto max-w-sm sm:pb-12 sm:pt-6 sm:max-w-4xl sm:grid sm:grid-cols-2">
      {isSmPlus && (
        <section className="relative px-6 py-24 bg-top bg-cover rounded-xl border shadow bg-primary text-background">
          <div className="relative space-y-1">
            <p className="text-4xl font-bold tracking-tight">
              Empowering Futures, Elevating Skills, Welcome to Well-Up.
            </p>
            <p className="pt-7 font-medium">Follow us on our social medias</p>
            <div className="flex gap-x-1 items-center pt-1">
              {socialMediaLinks.map(({ Icon, link }) => (
                <Link
                  href={link}
                  key={link}
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                    className: 'rounded-[100%]',
                  })}>
                  {Icon}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Tabs
        defaultValue="login"
        className="p-3 rounded-xl border shadow dark:bg-black/90 bg-background sm:p-5">
        <TabsList className="w-full h-12 rounded-xl border">
          <TabsTrigger value="login" className="w-full h-full rounded-xl">
            Register
          </TabsTrigger>
          <TabsTrigger value="register" className="w-full h-full rounded-xl">
            Login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="focus-visible:ring-0">
          <RegisterForm />
        </TabsContent>
        <TabsContent value="register" className="focus-visible:ring-0">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AuthPage;
