import React from 'react';

interface Props {
  heading?: string;
  content?: string;
}

const Subscribe: React.FC<Props> = () => {
  // const [email, setEmail] = React.useState('');

  // return (
  //   <div>
  //     <div>
  //       <header>
  //         <h3>{heading || `Like what you've read?`}</h3>
  //       </header>

  //       <div>
  //         {content ||
  //           'If so, consider joining literally tens of other developers who receive regular tips and tutorials right in their inbox. No spam. Ever.'}
  //         <div id="mc_embed_signup">
  //           <form
  //             action="//jonbellah.us4.list-manage.com/subscribe/post?u=cd903cc3fde462d23ad126e77&amp;id=7e4d3d0c6a"
  //             method="post"
  //             id="mc-embedded-subscribe-form"
  //             name="mc-embedded-subscribe-form"
  //             target="_blank"
  //             noValidate
  //           >
  //             <div
  //             >
  //               <div>
  //                 <label htmlFor="mcemail">
  //                   <span className="screen-reader-text">
  //                     Email Address <span className="asterisk">*</span>
  //                   </span>
  //                   <input
  //                     autoComplete="off"
  //                     name="mcemail"
  //                     onChange={(e) => setEmail(e.currentTarget.value)}
  //                     placeholder="Email Address"
  //                     type="email"
  //                     value={email}
  //                   />
  //                 </label>
  //               </div>
  //               <div id="mce-responses" className="clear">
  //                 <div
  //                   className="response"
  //                   id="mce-error-response"
  //                   style={{ display: 'none' }}
  //                 />
  //                 <div
  //                   id="mce-success-response"
  //                   style={{ display: 'none' }}
  //                 />
  //               </div>
  //               <div
  //                 style={{ position: 'absolute', left: '-5000px' }}
  //                 aria-hidden="true"
  //               >
  //                 <input
  //                   type="text"
  //                   name="b_cd903cc3fde462d23ad126e77_7e4d3d0c6a"
  //                   tabIndex={-1}
  //                   value=""
  //                 />
  //               </div>
  //               <div className="mc-field-group subscribe__button">
  //                 <input
  //                   type="submit"
  //                   value="Subscribe"
  //                   name="subscribe"
  //                 />
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10"
            id="newsletter-headline"
          >
            Like what you&apos;ve read?
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-6 text-gray-300">
            If so, consider joining literally tens of other developers who
            receive regular tips and tutorials right in their inbox. No spam.
            Ever.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex" aria-labelledby="newsletter-headline">
            <input
              aria-label="Email address"
              type="email"
              required
              className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm leading-5 text-gray-300">
            We care about the protection of your data. Read our
            <a href="#" className="text-white font-medium underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
