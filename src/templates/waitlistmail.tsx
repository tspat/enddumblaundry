import React from 'react';
import { analytics } from './Base';


export default function Waitlistmail() {
  const [state3, setState3] = React.useState('');
    
  
  const waitsubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    analytics.track('Learn More', {Email: state3});
    analytics.identify({Email: state3});
    try {
      const res = await fetch('/api/waitlist', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          address: state3
        })
      })
      
      if (res.status === 200) {
        alert(`We will be in touch!`)
      } else {
        alert('Something went wrong, please try again')
      }
    } catch(err) {
      alert(err)
    }
  }

  return (
    <div className="bg-white pt-24 lg:py-16 sm:py-24">
              {/* <div className="relative mb-20 mx-10 ">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Have a drink with us in San Diego!
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                  This is an invite only event for NAA Attendees on Friday June 24th! Join us for happy hour between 4 PM and 6:30 PM near the convention center. Come air your dumb laundry!
                </p>
              </div> */}
      
      <div className=" md:block relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          {/* <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" /> */}
          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-tmbl-lght overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-tmbl-from text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-tmbl-third text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Increase your NOI with Tumble Smart Laundry
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-white">
                  Get more info here!
                </p>
              </div>
              <form onSubmit={(e) => {e.preventDefault()}} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex md:grid">
                <div className="min-w-0 flex-1 my-2">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    onChange={e => setState3(e.target.value)}
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3 md:mx-20">
                  <button
                    type="submit"
                    onClick={waitsubmit}
                    data-input="#id-input" 
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-tmbl-drk text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  >
                    Learn more!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Waitlistmail };
