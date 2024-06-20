export const timeFromNow = (date: Date): string => {
  const now = new Date()
  const differenceInTime = date.getTime() - now.getTime()
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))

  if (differenceInDays > 0) {
    return `in ${differenceInDays} days`
  } else if (differenceInDays < 0) {
    return `${Math.abs(differenceInDays)} days ago`
  } else {
    return 'Today'
  }
}

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

export const formatTimeRange = (startTime: Date, endTime: Date | null): string => {
  const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true }

  const start = startTime.toLocaleTimeString('en-US', options)
  if (endTime) {
    const end = endTime.toLocaleTimeString('en-US', options)

    return `${start} - ${end}`
  } else {
    return start
  }
}
