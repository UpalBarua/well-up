import LoginForm from '@/components/login-form';
import RegisterForm from '@/components/register-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useMediaQuery from '@/hooks/use-media-query';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    Icon: <Linkedin />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    Icon: <Instagram />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    Icon: <Facebook />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/',
    Icon: <Twitter />,
  },
] as const;

const AuthPage = () => {
  const isSmPlus = useMediaQuery('(min-width: 640px)');

  return (
    <main className="max-w-4xl sm:grid sm:grid-cols-2 mx-auto gap-3 py-6 sm:py-8 container">
      <Tabs
        defaultValue="login"
        className="bg-white dark:bg-neutral-950 p-3.5 sm:p-5 rounded-xl border border-neutral-50/50 dark:border-neutral-800 shadow">
        <TabsList className="w-full bg-neutral-50/20 h-12 border border-neutral-50/50 dark:border-neutral-800 rounded-xl">
          <TabsTrigger value="login" className="w-full rounded-xl h-full">
            Register
          </TabsTrigger>
          <TabsTrigger value="register" className="w-full rounded-xl h-full">
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
      {isSmPlus && (
        <section className="bg-cover bg-top rounded-xl border dark:border-primary-800 border-primary-200/50 shadow bg-secondary-500 px-5 py-24 before:absolute before:bg-accent-800/70 before:h-full before:w-full relative before:inset-0 before:rounded-md">
          <div className="relative z-10 space-y-2">
            <p className="font-bold tracking-tight text-4xl text-white">
              Explore, Rent, Thrive: Your Seamless Journey to Ideal Spaces
              Begins Here!
            </p>
            <p className="text-lg">Follow us on our social medias</p>
            <div className="flex items-center gap-x-4 pt-2">
              {socialMediaLinks.map(({ Icon, link, name }) => (
                <Link href={link} key={link}>
                  <span className="text-3xl hover:text-white transition-colors">
                    {Icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default AuthPage;
