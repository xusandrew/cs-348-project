import prisma from '../lib/prisma'

async function main() {
  // Create Categories
  await prisma.category.createMany({
    data: [{ type: 'Tech' }, { type: 'Art' }, { type: 'Sports' }, { type: 'Music' }],
  })

  // Create Clubs
  const club1 = await prisma.club.create({
    data: {
      email: 'club1@example.com',
      password: 'password1',
      name: 'Tech Club',
      description: 'A club for tech enthusiasts.',
      instagram: 'https://instagram.com/techclub',
      discord: 'https://discord.gg/techclub',
      category: {
        create: [{ category: { connect: { type: 'Tech' } } }],
      },
    },
  })

  const club2 = await prisma.club.create({
    data: {
      email: 'club2@example.com',
      password: 'password2',
      name: 'Art Club',
      description: 'A club for art lovers.',
      instagram: 'https://instagram.com/artclub',
      discord: 'https://discord.gg/artclub',
      category: {
        create: [{ category: { connect: { type: 'Art' } } }],
      },
    },
  })

  const club3 = await prisma.club.create({
    data: {
      email: 'club3@example.com',
      password: 'password3',
      name: 'Sports Club',
      description: 'A club for sports enthusiasts.',
      instagram: 'https://instagram.com/sportsclub',
      discord: 'https://discord.gg/sportsclub',
      category: {
        create: [{ category: { connect: { type: 'Sports' } } }],
      },
    },
  })

  const club4 = await prisma.club.create({
    data: {
      email: 'club4@example.com',
      password: 'password4',
      name: 'Music Club',
      description: 'A club for music lovers.',
      instagram: 'https://instagram.com/musicclub',
      discord: 'https://discord.gg/musicclub',
      category: {
        create: [{ category: { connect: { type: 'Music' } } }],
      },
    },
  })

  // Create Events
  await prisma.event.createMany({
    data: [
      {
        cid: club1.cid,
        title: 'Tech Talk',
        description: 'An event to discuss the latest in tech.',
        location: 'Room 101',
        start_time: new Date('2024-07-01T10:00:00Z'),
        end_time: new Date('2024-07-01T12:00:00Z'),
      },
      {
        cid: club2.cid,
        title: 'Art Exhibition',
        description: 'An exhibition of student artwork.',
        location: 'Art Gallery',
        start_time: new Date('2024-07-02T10:00:00Z'),
        end_time: new Date('2024-07-02T12:00:00Z'),
      },
      {
        cid: club3.cid,
        title: 'Football Match',
        description: 'A friendly football match.',
        location: 'Sports Field',
        start_time: new Date('2024-07-03T10:00:00Z'),
        end_time: new Date('2024-07-03T12:00:00Z'),
      },
      {
        cid: club4.cid,
        title: 'Music Concert',
        description: 'A concert featuring local bands.',
        location: 'Auditorium',
        start_time: new Date('2024-07-04T10:00:00Z'),
        end_time: new Date('2024-07-04T12:00:00Z'),
      },
    ],
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
