const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/hello@spicecraft.com'

interface WaitlistData {
  email: string
  source: string
}

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitWaitlist(data: WaitlistData): Promise<boolean> {
  try {
    const response = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        _subject: `New Waitlist Signup — ${data.source}`,
        _template: 'table',
      }),
    })
    const result = await response.json()
    return result.success === 'true' || result.success === true
  } catch {
    return false
  }
}

export async function submitContact(data: ContactData): Promise<boolean> {
  try {
    const response = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        _subject: `Contact Form: ${data.subject}`,
        _template: 'table',
      }),
    })
    const result = await response.json()
    return result.success === 'true' || result.success === true
  } catch {
    return false
  }
}
