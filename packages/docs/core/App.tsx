import { AnchorGroup } from '@zonda/react'
import { useState } from 'react'

import Button from '../pages/Button.mdx'
import { config } from './config'

function App() {
  const [currKey, setCurrKey] = useState('assadfas')
  const onChange = (key: string) => {
    setCurrKey(key)
  }
  return (
    <div>
      <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
        <div className="max-w-8xl mx-auto">
          <div className="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
            <div className="relative flex items-center">
              <a className="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto" href="/">
                <span className="sr-only">Tailwind CSS home page</span>
              </a>

              <div className="relative ml-auto hidden items-center lg:flex">
                <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/docs/installation"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="https://tailwindui.com/?ref=top"
                      >
                        Components
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-sky-500 dark:hover:text-sky-400" href="/blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-sky-500 dark:hover:text-sky-400" href="/showcase">
                        Showcase
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <button
                className="-my-1 ml-auto flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
                type="button"
              >
                <span className="sr-only">Search</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  width="24"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
              <div className="-my-1 ml-2 lg:hidden">
                <button
                  className="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  type="button"
                >
                  <span className="sr-only">Navigation</span>
                  <svg aria-hidden="true" fill="none" height="24" width="24">
                    <path
                      d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
            <button
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              type="button"
            >
              <span className="sr-only">Navigation</span>
              <svg height="24" width="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto flex px-4 sm:px-6 md:px-8">
        <div className="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block ">
          <AnchorGroup items={config.sidebar} onChange={onChange} selectedKey={currKey} />
        </div>
        <div className="lg:pl-[19.5rem] ">
          <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
            <div className="prose prose-sm flex-1">
              <Button />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
          <div className="px-8">
            <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
              On this page
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App