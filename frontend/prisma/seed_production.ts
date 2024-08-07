import { parse } from 'csv-parse/sync'
import { promises as fs } from 'fs'
import path from 'path'
import prisma from '@/lib/prisma'

const CATEGORIES = [
  { type: 'Academic' },
  { type: 'Business & Entrepreneurial' },
  { type: 'Charitable & Community Service' },
  { type: 'Creative Arts & Music' },
  { type: 'Cultural' },
  { type: 'Environmental and Sustainability' },
  { type: 'Games & Recreational' },
  { type: 'Athletic' },
  { type: 'Tech' },
  { type: 'Health' },
  { type: 'Media' },
  { type: 'Political & Social' },
]

const readCSV = async (filePath: string) => {
  const content = await fs.readFile(path.join(__dirname, filePath), 'utf8')

  const records = parse(content, { bom: true, columns: true })

  return records
}

const main = async () => {
  try {
    // Create Categories
    await prisma.category.createMany({
      data: CATEGORIES,
    })

    // Create Clubs
    const clubs = await readCSV('production/clubs.csv')
    for (const club of clubs) {
      club.category = { create: [{ category: { connect: { type: club.category } } }] }
      await prisma.club.create({ data: club })
    }

    const clubs_db = await prisma.club.findMany()

    // Create Events
    const events = await readCSV('production/events.csv')
    for (let index = 0; index < events.length; index++) {
      const event = events[index]
      const cid = clubs_db[index % clubs_db.length].cid

      event.club = { connect: { cid } }
      event.start_time = new Date(event.start_time)
      event.end_time = new Date(event.end_time)
      event.posted_time = new Date(event.posted_time)
      await prisma.event.create({ data: event })
    }

    const events_db = await prisma.event.findMany()

    // Create RSVPs
    const rsvps = await readCSV('production/rsvps.csv')
    for (let index = 0; index < rsvps.length; index++) {
      const rsvp = rsvps[index]
      const eid = events_db[index % events_db.length].eid
      await prisma.rSVP.create({ data: { ...rsvp, event: { connect: { eid } } } })
    }

    console.log('Data loaded successfully')
  } catch (error) {
    console.error('Error reading the CSV file:', error)
  }
}

main()
