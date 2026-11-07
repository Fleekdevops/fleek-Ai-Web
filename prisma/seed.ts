import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  await prisma.teamMember.deleteMany()
  await prisma.testimonial.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.siteSettings.deleteMany()

  const teamMembers = [
    {
      name: 'Nelson Maina',
      role: 'Chief Executive Officer',
      bio: 'Leads Fleektech with a focus on affordable, reliable technology solutions and strong client relationships.',
      imageUrl: 'https://i.ibb.co/XkkjwmSP/Nelson.jpg',
      email: 'fleektechinc@gmail.com',
      phone: '+254 758 175 057',
      linkedin: '#',
      order: 1,
    },
    {
      name: 'Carlos Koilai',
      role: 'CTO & Lead Software Engineer',
      bio: 'Architects and delivers websites, apps, custom software, and portals with an emphasis on quality and time efficiency.',
      imageUrl: 'https://i.ibb.co/nq7jr7hn/gody.jpg',
      email: 'FleekTechInc@proton.me',
      phone: '+254 758 175 057',
      linkedin: '#',
      order: 2,
    },
    {
      name: 'James Odhiambo',
      role: 'Managing Director',
      bio: 'Oversees operations, delivery, and IT support & maintenance to keep client systems running smoothly.',
      imageUrl: 'https://i.ibb.co/209cDJrq/Mutua.jpg',
      email: 'Fleektechinc@outlook.com',
      phone: '+254 758 175 057',
      linkedin: '#',
      order: 3,
    },
  ]

  for (const member of teamMembers) {
    await prisma.teamMember.create({ data: member })
  }

  const testimonials = [
    {
      name: 'Nelly Cheboi',
      role: 'CEO',
      company: 'TechLit Africa Kenya',
      content: 'Fleektech delivered a reliable platform and support that helped our team serve learners better. Clear communication and on-time delivery.',
      imageUrl: 'https://i.ibb.co/fz2Msp9M/IMG-7563.jpg',
      rating: 5,
      order: 1,
    },
    {
      name: 'Tonny Reilley',
      role: 'Founder',
      company: 'HealthPlus',
      content: 'The custom system Fleektech built improved how we track operations. The team was skilled, responsive, and delivered great value.',
      imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      order: 2,
    },
    {
      name: 'Sarah Kimani',
      role: 'Operations Lead',
      company: 'FinServe Kenya',
      content: 'We needed a practical, affordable solution. Fleektech listened, customized the build, and provided dependable maintenance after launch.',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      order: 3,
    },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial })
  }

  const blogPosts = [
    {
      title: 'Choosing the Right Website or Portal for Your Business',
      slug: 'choosing-right-website-or-portal',
      content: 'A business website or portal should match your goals, budget, and workflow. Start with the outcomes you need, then choose features that support growth, security, and easy maintenance.',
      excerpt: 'Practical guidance for selecting a website or portal that fits your business.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      category: 'Web Development',
      author: 'Fleektech Team',
      published: true,
    },
    {
      title: 'Why Ongoing IT Support and Maintenance Matter',
      slug: 'why-it-support-maintenance-matter',
      content: 'Launching a system is only the beginning. Regular updates, monitoring, backups, and support keep your website, app, or software secure and reliable over time.',
      excerpt: 'How maintenance protects your technology investment after launch.',
      imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
      category: 'IT Support',
      author: 'Fleektech Team',
      published: true,
    },
    {
      title: 'Custom Software on a Practical Budget',
      slug: 'custom-software-practical-budget',
      content: 'Custom software does not have to be out of reach. With clear requirements and phased delivery, businesses can get tailored solutions that fit their budget and timeline.',
      excerpt: 'How to plan affordable custom software without sacrificing quality.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      category: 'Custom Software',
      author: 'Fleektech Team',
      published: true,
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.create({ data: post })
  }

  await prisma.siteSettings.upsert({
    where: { key: 'site_title' },
    update: { value: 'Fleektech | Websites, Apps, Software & IT Support' },
    create: { key: 'site_title', value: 'Fleektech | Websites, Apps, Software & IT Support' },
  })

  await prisma.siteSettings.upsert({
    where: { key: 'contact_email' },
    update: { value: 'fleektechinc@gmail.com' },
    create: { key: 'contact_email', value: 'fleektechinc@gmail.com' },
  })

  await prisma.siteSettings.upsert({
    where: { key: 'contact_phone' },
    update: { value: '+254 758 175 057' },
    create: { key: 'contact_phone', value: '+254 758 175 057' },
  })

  await prisma.siteSettings.upsert({
    where: { key: 'contact_address' },
    update: { value: 'Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi, Kenya' },
    create: { key: 'contact_address', value: 'Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi, Kenya' },
  })

  console.log('Database seeded successfully!')
  console.log(`Created ${teamMembers.length} team members`)
  console.log(`Created ${testimonials.length} testimonials`)
  console.log(`Created ${blogPosts.length} blog posts`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
