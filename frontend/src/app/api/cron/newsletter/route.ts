import { fetchEventsInWeek, fetchEventsTomorrow } from '@/lib/data'
import mailer from '@/lib/nodemailer'
import { newsletter, rsvpReminder } from '@/app/email/mailOptions'
import { startOfWeek } from 'date-fns'

export async function GET() {
  const startOfWeekDate = startOfWeek(new Date())
  const eventsNextDay = await fetchEventsInWeek(startOfWeekDate)

  const events = eventsNextDay.map((event) => {
    return {
      title: event.title,
      description: event.description,
      clubName: event.club.name,
      startTime: event.start_time,
      endTime: event.end_time,
    }
  })

  //TODO: make newsletter table

  //TODO: call a function that formats it into a newsletter
  const mailOptions = newsletter(rsvp.email)
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error)
    } else {
      console.log('Email sent: ', info.response)
    }
  })
}