// app/data/contactData.ts

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
}

export const contactHeader = {
  badge: {
    icon: 'sparkles',
    text: "Let's Connect",
  },
  title: 'Get In Touch',
  description: "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
}

export const formLabels = {
  name: 'Your Name',
  email: 'Email Address',
  subject: 'Subject',
  message: 'Message',
}

export const formPlaceholders = {
  name: 'Abdullah Yaseen',
  email: 'Abdullah@example.com',
  subject: 'Project Inquiry',
  message: 'Tell me about your project...',
}

export const formValidation = {
  errors: {
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    messageMinLength: 'Message must be at least 10 characters',
  },
  minMessageLength: 10,
}

export const successMessage = {
  text: "Message sent successfully! I'll get back to you soon.",
  duration: 5000, // milliseconds
}

export const whyWorkWithMe = {
  title: 'Why Work With Me?',
  benefits: [
    '2 years of web development experience',
    'Specialized in React, Next.js & TailwindCSS',
    'Clean, maintainable code practices',
    'Responsive and collaborative approach',
  ],
}

export const inspirationalQuote = {
  text: "Every great project starts with a conversation. Let's make something amazing together.",
}

export const contactInfoTitle = 'Contact Information'