export const metadata = {
  title: "Resume - Ebenezer Fuachie",
  description: "Resume/CV of Ebenezer Fuachie.",
};

import Link from "next/link";

export default function ResumePage() {
  const resumeExternal = process.env.NEXT_PUBLIC_RESUME_URL || "";
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
      <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Below is an embedded PDF view. You can also download or open it in a new tab.
      </p>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/Ebenezer_Fuachie_Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center rounded-md bg-[var(--accent-gold)] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
        >
          Open PDF in new tab
        </a>
        {resumeExternal ? (
          <a
            href={resumeExternal}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-md border border-black px-4 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Open external resume link
          </a>
        ) : null}
      </div>

      {/* Embedded viewer */}
      <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <object
          data="/Ebenezer_Fuachie_Resume.pdf#toolbar=0"
          type="application/pdf"
          className="h-[80vh] w-full"
        >
          <iframe src="/Ebenezer_Fuachie_Resume.pdf" className="h-[80vh] w-full" title="Resume PDF" />
        </object>
      </div>

      {process.env.NODE_ENV === "development" && (
        <p className="mt-4 text-sm text-gray-500">
          Don’t see the PDF? Ensure a file named <code>Ebenezer_Fuachie_Resume.pdf</code> exists in your <code>public/</code> folder
          or set <code>NEXT_PUBLIC_RESUME_URL</code> to an external document (e.g., Google Drive) and redeploy.
        </p>
      )}
    </main>
  );
}
