import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

interface StatusProps {
  status: string | null;
  message: string | Error | null;
}

const Status: React.FC<StatusProps> = ({ status, message }) => {
  switch (status) {
    case 'error':
      return (
        <span
          className="text-red-400 inline-block text-center"
          dangerouslySetInnerHTML={{
            __html: message?.toString() || '',
          }}
          style={{ minHeight: 40 }}
        />
      );
    case 'success':
      return (
        <span
          className="text-green-400 inline-block text-center"
          style={{ minHeight: 40 }}
        >
          You&apos;re on the list! Keep an eye on your inbox for updates.
        </span>
      );
    default:
      return (
        <span
          className="text-gray-800 inline-block text-center"
          style={{ minHeight: 40 }}
        >
          &nbsp;
        </span>
      );
  }
};

interface Props {
  heading?: string;
  content?: string;
}

const Subscribe: React.FC<Props> = () => {
  const [email, setEmail] = React.useState('');

  return (
    <MailchimpSubscribe
      url="https://jonbellah.us4.list-manage.com/subscribe/post?u=cd903cc3fde462d23ad126e77&amp;id=7e4d3d0c6a"
      render={({ subscribe, status, message }) => (
        <div className="bg-gray-800">
          <div className="max-w-3xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center">
            <div className="text-center pb-8">
              <h2
                className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10"
                id="newsletter-headline"
              >
                Like what you&apos;ve read?
              </h2>
              <p className="mt-3 max-w-xl text-lg leading-6 text-gray-300 mx-auto">
                If so, consider joining literally tens of other developers who
                receive regular tips and tutorials right in their inbox. No
                spam. Ever.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 w-full max-w-xl mx-auto flex items-center justify-center flex-col">
              <form
                className="sm:flex mx-auto w-3/4"
                aria-labelledby="newsletter-headline"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) {
                    subscribe({ EMAIL: email });
                  }
                }}
              >
                <input
                  aria-label="Email address"
                  type="email"
                  required
                  className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
                  placeholder="Email address..."
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                    Sign me up
                  </button>
                </div>
              </form>
              <p className="text-sm leading-5 text-gray-300 max-wl-xl w-3/4 mx-auto pt-4 inline-block min-h-">
                <Status status={status} message={message} />
              </p>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Subscribe;
