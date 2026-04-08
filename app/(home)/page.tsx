import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">Contentora Documentation</h1>
      <p className="mb-8 max-w-lg text-fd-muted-foreground">
        Everything you need to set up, configure, and deploy the Contentora AI content generation platform.
      </p>
      <Link
        href="/docs"
        className="rounded-xl bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
      >
        Get Started
      </Link>
    </main>
  );
}
