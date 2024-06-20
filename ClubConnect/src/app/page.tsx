import Link from 'next/link'

export default function Component() {
  return (
    <div className='flex flex-col h-full'>
      <main className='flex-1 flex flex-col items-center justify-center px-4 md:px-6'>
        <div className='max-w-2xl text-center space-y-4'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
            ClubsConnect
          </h1>
          <p className='text-muted-foreground md:text-xl'>Explore a centralized hub for clubs</p>
          <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
            <Link
              href='/events'
              className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              prefetch={false}
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
