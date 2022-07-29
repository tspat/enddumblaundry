import React from 'react';
import Link from 'next/link';
import { analytics } from './Base';

export default function Washgallery() {
  return (
            <div className="py-6 md:py-16 bg-gray-50 overflow-hidden lg:py-12">
              <div className="relative mb-20 mx-10 ">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tumble Smart Laundry
                </h2>
              </div>
              <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                      width={784}
                      height={404}
                      fill="none"
                      viewBox="0 0 784 404"
                    >
                      <defs>
                        <pattern
                          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          {/* <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" /> */}
                        </pattern>
                      </defs>
                      {/* <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" /> */}
                    </svg>
                    <img
                      className="relative mx-auto"
                      width={608}
                      src="/assets/images/ValueProp1.png"
                      alt="Passively Earn"
                    />
                  </div>
                  <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                      width={784}
                      height={404}
                      fill="none"
                      viewBox="0 0 784 404"
                    >
                      <defs>
                        <pattern
                          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          {/* <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" /> */}
                        </pattern>
                      </defs>
                      {/* <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" /> */}
                    </svg>
                    <img
                      className="relative mx-auto"
                      width={608}
                      src="/assets/images/ValueProp2.png"
                      alt="Passively Earn"
                    />
                  </div>
                </div>
              <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                <svg
                  className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  {/* <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" /> */}
                </svg>

                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="relative">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    The Tumble app
                    </h3>
                    <p className="mt-3 text-lg text-tmbl-drk">
                    The only #SmartLaundry app for shared laundry rooms.
                    </p>
                    </div>

                  <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                      width={784}
                      height={404}
                      fill="none"
                      viewBox="0 0 784 404"
                    >
                      <defs>
                        <pattern
                          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          {/* <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" /> */}
                        </pattern>
                      </defs>
                      <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                    </svg>
                    <img
                      className="relative px-2 mx-auto"
                      width={490}
                      src="/assets/images/app.png"
                      alt="Tumble Mobile Application"
                    />
                  </div>
                </div>

                <svg
                  className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  {/* <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" /> */}
                </svg>

                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                  <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Convenience Residents Deserve</h3>
                      <p className="mt-3 text-lg text-tmbl-drk">
                        Designed with the resident first, bring efficiency to your most used shared space.
                      </p>
                    </div>

                    <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                      <svg
                        className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                        width={784}
                        height={404}
                        fill="none"
                        viewBox="0 0 784 404"
                        aria-hidden="true"
                      >
                        <defs>
                          <pattern
                            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                          >
                            {/* <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" /> */}
                          </pattern>
                        </defs>
                        <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                      </svg>
                      <img
                        className="relative mx-auto"
                        width="auto"
                        src="/assets/images/brands.png"
                        alt="Brands you Love"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="relative">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                      WE handle everything
                    </h3>
                    <p className="mt-3 text-lg text-tmbl-drk">
                    Using predictive maintenance and IoT technology we keep the machines up and running with the lowest downtime in the business.
                    </p>
                    </div>

                  <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                      width={784}
                      height={404}
                      fill="none"
                      viewBox="0 0 784 404"
                    >
                      <defs>
                        <pattern
                          id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          {/* <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" /> */}
                        </pattern>
                      </defs>
                      <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                    </svg>
                    <img
                      className="relative mx-auto"
                      width={624}
                      src="/assets/images/passiveearn.png"
                      alt="Passively Earn"
                    />
                  </div>
                </div>

                <svg
                  className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                  width={404}
                  height={784}
                  fill="none"
                  viewBox="0 0 404 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  {/* <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" /> */}
                </svg>

                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                  <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2">
                    <div className="hidden lg:block lg:col-span-full lg:pl-20 lg:justify-self-right">
                      <Link href="https://meetings.hubspot.com/dean-wollner">
                        <button id="button" onClick={() => analytics.trackLink(document.getElementById('button'), 'Sales')} className="rounded-full font-sans font-medium text-white text-xs sm:text-s md:text-base bg-tmbl-drk px-4 py-1 lg:p-3 lg:px-48 lg:mt-4 mt-6" >Meet with us!</button>
                       </Link>
                     </div>
                    </div>

                    <div className="z-10 mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                      <svg
                        className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 hidden lg:hidden"
                        width={784}
                        height={404}
                        fill="none"
                        viewBox="0 0 784 404"
                        aria-hidden="true"
                      >
                        <defs>
                          <pattern
                            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                          >
                            {/* <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" /> */}
                          </pattern>
                        </defs>
                        {/* <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" /> */}
                      </svg>
                      <Link href="https://meetings.hubspot.com/dean-wollner">
                      <img
                        className="relative mx-auto"
                        width="auto"
                        src="/assets/images/SMD.png"
                        alt="Brands you Love"
                      />
                      </Link>
                      <div className="lg:hidden lg:col-span-full lg:pl-20 lg:justify-self-right">
                      <Link href="https://meetings.hubspot.com/dean-wollner">
                        <button id="button" onClick={() => analytics.trackLink(document.getElementById('button'), 'Sales')} className="z-40 rounded-full font-sans font-medium text-white text-s sm:text-m md:text-base bg-tmbl-drk justify-self-center px-10 mx-16 py-1 lg:p-3 lg:mt-4 mt-6" >Meet with us!</button>
                       </Link>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }