export const metadata = {
  title: "Resume - Ebenezer Fuachie",
  description: "Resume/CV of Ebenezer Fuachie.",
};

import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-4">
        <Link
          href="/"
          aria-label="Back to home"
          className="inline-flex items-center gap-0 sm:gap-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Resume & CV</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Access my CV and resume documents below.
      </p>

      {/* Documents */}
      <div className="mt-8 space-y-4">
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="text-lg font-semibold">CV</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Detailed curriculum vitae with comprehensive work history and achievements.
          </p>
          <a
            href="https://docs.google.com/document/d/13M83eTEOZ6IORnUW75Sh04quKnvITaBqfABB5OqALUk/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-[var(--accent-gold)] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Open CV in Google Docs
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Resume</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Concise professional resume highlighting key skills and experience.
          </p>
          <a
            href="https://docs.google.com/document/d/1s4uE9VQqJbHA7hMvooswSC1cWHGhuUVdU_byrV_Pgak/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center justify-center rounded-md border border-black px-4 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Open Resume in Google Docs
          </a>
        </div>
      </div>
    </main>
  );
}
