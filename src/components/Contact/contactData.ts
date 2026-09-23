// app/data/contactData.ts

// Keep this shape: other components (like the footer) may import contactConfig.
export const contactConfig = {
  email: 'abdullahyaseen1100@gmail.com',
  phone: {
    display: '+92 311 6652399',
    href: 'tel:+923116652399',
  },
  location: {
    city: 'Bahawalpur',
    state: 'Punjab',
    country: 'Pakistan',
    full: 'Bahawalpur, Punjab, Pakistan',
  },
  linkedin: 'https://www.linkedin.com/in/abdullah-shaffi/',
  github: 'https://github.com/abdullahyaseen0010',
}

export const contactCopy = {
  title: 'Contact',
  intro: 'Have a project, a job opening or a question? Send a message here or email me directly.',
}

export const formCopy = {
  name: 'Your name',
  email: 'Your email',
  message: 'Message',
  submit: 'Send by email',
  hint: 'This opens your email app with your message filled in.',
  errors: {
    name: 'Enter your name.',
    email: 'Enter a valid email address.',
    message: 'Write a message of at least 10 characters.',
  },
}
