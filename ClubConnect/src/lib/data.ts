import { PrismaClient } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache'

const prisma = new PrismaClient()

export async function fetchEvents() {
  noStore()

  try {
    const events = await prisma.event.findMany({
      include: {
        club: true,
      },
    })
    return events
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch post data.')
  }
}
