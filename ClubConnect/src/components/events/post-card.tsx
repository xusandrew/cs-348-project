import { Event } from '@/types/Event'
import { formatDate, formatTimeRange, timeFromNow } from '@/lib/utils'

export function Card({ event }: { event: Event }) {
  return (
    <div className='p-4 border border-gray-700 rounded-lg'>
      <h3 className='text-2xl font-bold'>{event.title}</h3>
      <p className='text-yellow-500'>@{event.club.name}</p>
      <p className='mt-2'>{event.description}</p>
      <div className='flex items-center mt-4 space-x-4'>
        <div className='flex items-center space-x-2'>
          <CalendarIcon className='h-5 w-5' />
          {event.start_time !== null && (
            <span>
              {formatDate(event.start_time)} | {formatTimeRange(event.start_time, event.end_time)}
            </span>
          )}
        </div>
        <div className='flex items-center space-x-2'>
          <LocateIcon className='h-5 w-5' />
          <span>{event.location}</span>
        </div>
        <span className='ml-auto text-gray-500'>
          {event.start_time ? timeFromNow(event.start_time) : ''}
        </span>
      </div>
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
