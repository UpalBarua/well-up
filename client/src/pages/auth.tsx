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
    <main className="max-w-4xl sm:grid sm:grid-cols-2 mx-auto gap-3 py-6 sm:py-8">
      <section className="space-y-3 sm:space-y-3.5">
        <div className="flex items-center gap-x-2.5">
          <Image
            src="/images/logo.png"
            alt="well-up logo"
            quality={90}
            height={32}
            width={32}
          />
          <span className="font-bold text-2xl tracking-tight">Well-Up</span>
        </div>
        <h2 className="text-lg max-w-[95%] pb-3 sm:max-w-[80%]">
          Welcome! Get started by creating an account or logging in.
        </h2>
        <Tabs
          defaultValue="sign-in"
          className="bg-white dark:bg-primary-950 p-3 sm:p-5 rounded-xl border border-neutral dark:border-primary-800 shadow">
          <TabsList className="w-full bg-accent-100 border border-primary-50/50 dark:border-primary-800">
            <TabsTrigger value="sign-in" className="w-full rounded-md">
              Register
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="w-full rounded-md">
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="focus-visible:ring-0">
            <RegisterForm />
          </TabsContent>
          <TabsContent value="sign-up" className="focus-visible:ring-0">
            <LoginForm />
          </TabsContent>
        </Tabs>
      </section>
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
