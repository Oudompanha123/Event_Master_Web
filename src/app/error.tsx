'use client'

export default function Error({ error, reset }) {
    return (
        <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
            <h1 className="text-3xl font-semibold lg:text-4xl">Something went wrong</h1>
            <p className="max-w-md text-sm font-light text-slate-500 lg:text-base">
                We couldn&apos;t load this page. This is usually a temporary problem
                reaching the server — please try again in a moment.
            </p>
            <button
                onClick={reset}
                className="rounded-full bg-purple-text px-8 py-3 text-sm font-semibold text-white"
            >
                Try again
            </button>
        </div>
    )
}
