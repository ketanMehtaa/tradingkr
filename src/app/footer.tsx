import Link from 'next/link';

const navigation = {
  services: [
    { name: 'IPO Readiness', href: '' },
    { name: 'Financial Advisory', href: '' },
    { name: 'Regulatory Compliance', href: '' },
    { name: 'Investor Relations', href: '' },
    { name: 'Post-IPO Support', href: '' },
  ],
  resources: [
    { name: 'IPO Guide', href: '' },
    { name: 'Market Insights', href: '' },
    { name: 'Webinars', href: '' },
    { name: 'Case Studies', href: '' },
    { name: 'FAQ', href: '' },
  ],
  company: [
    { name: 'About Us', href: '' },
    { name: 'Our Team', href: '' },
    { name: 'Careers', href: '' },
    { name: 'Contact', href: '' },
    { name: 'Partners', href: '' },
  ],
  legal: [
    { name: 'Terms of Service', href: '' },
    { name: 'Privacy Policy', href: '' },
    { name: 'Cookie Policy', href: '' },
    { name: 'Disclaimer', href: '' },
  ],
  social: [
    // {
    //   name: 'LinkedIn',
    //   href: '',
    //   target: '_blank',
    //   icon: (props: any) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: 'Twitter',
    //   href: '',
    //   target: '_blank',
    //   icon: (props: any) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: 'Facebook',
    //   href: '',
    //   target: '_blank',
    //   icon: (props: any) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: 'Telegram Group',
      href: 'https://t.me/tradingkrlo', // Replace with YOUR group's invite link
      target: '_blank',
      rel: 'noopener noreferrer', // Important for security
      // todokk telegram icon not working
      icon: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
          <path
            d="M23.8 3C23.8 3 21.2 4.7 18.5 7.4L9.1 12.3C8.8 12.5 8.8 12.8 9.1 13L15.1 19C15.3 19.2 15.6 19.1 15.9 18.9L20.5 16.4C21.5 16.1 22.5 16.5 23 17.5L27.8 25.7C28.1 26.2 28.4 26.2 28.8 25.9L33.9 20.3C34.4 19.9 34.4 19.3 33.9 18.9L18.5 8.7C18 8.3 17.3 8.4 17 8.9L9.9 12.7C9.6 13 9.4 13 9.2 12.7L4.5 9.5C4.1 9.2 4 8.7 4.3 8.3L5.6 3.2C5.8 2.8 6.3 2.8 6.7 3.1L23.8 3z"
            fill="#0088cc"
          />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* <img className="h-7" src="/logo.svg" alt="TradingKr" /> */}
            <p className="text-sm leading-6 text-gray-600">
              Guiding companies through successful Initial Public Offerings.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                  target={item.target}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterList title="Services" items={navigation.services} />
              </div>
              <div className="mt-10 md:mt-0">
                <FooterList title="Resources" items={navigation.resources} />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterList title="Company" items={navigation.company} />
              </div>
              <div className="mt-10 md:mt-0">
                <FooterList title="Legal" items={navigation.legal} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} TradingKr, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterList(props: { title: string; items: { name: string; href: string; target?: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">{props.title}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {props.items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900" target={item.target}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
