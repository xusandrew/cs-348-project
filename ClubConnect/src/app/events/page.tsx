import { Card } from '../../components/events/post-card'
import { fetchEvents } from '../../lib/data'

export default async function Component() {
  const posts = await fetchEvents()

  return (
    <div className=' min-h-screen'>
      <main className='p-8'>
        <section className='mb-8'>
          <p className='text-yellow-500'>7 events taking/took place!</p>
          <h2 className='text-4xl font-bold'>Week of Jun 2</h2>
        </section>
        <section className='space-y-8'>
          {posts.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </section>
      </main>
    </div>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  )
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='2' x2='5' y1='12' y2='12' />
      <line x1='19' x2='22' y1='12' y2='12' />
      <line x1='12' x2='12' y1='2' y2='5' />
      <line x1='12' x2='12' y1='19' y2='22' />
      <circle cx='12' cy='12' r='7' />
    </svg>
  )
}
