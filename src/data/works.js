import mscVideo from '../assets/MSC/msc-video.mp4';
import mscCardImage from '../assets/MSC/msc-card.png';
import planpadiScreen1 from '../assets/Planpadi/planpadi-screen-1.png';
import planpadiScreen2 from '../assets/Planpadi/planpadi-screen-2.png';
import checkinDesk from '../assets/Planpadi/checkin-desk.jpg';
import qrTicketSignage from '../assets/Planpadi/qr-ticket-signage.jpg';
import attendeeCheckin from '../assets/Planpadi/attendee-checkin.jpg';
import accessTags from '../assets/Planpadi/access-tags.jpg';
import teamCloseup1 from '../assets/Planpadi/team-closeup-1.jpg';
import teamCloseup2 from '../assets/Planpadi/team-closeup-2.jpg';
import accessTagWristband from '../assets/Planpadi/access-tag-wristband.jpg';
import qrShirt from '../assets/Planpadi/qr-shirt.jpg';

export const works = [
  {
    slug: 'planpadi-access',
    client: 'Planpadi',
    shortLabel: 'Access & Control',
    tags: ['Event Tech', 'Consumer', 'Access Management'],
    bg: '#1A4D3A',
    mockKey: 'list',
    eyebrow: 'Planpadi · Private Events & Organisation Management',
    title: 'Giving organisers control over who gets in.',
    desc: 'Built invite-only events, access workflows, and org-level governance for organizers who needed more than a public link.',
    role: 'Product Manager',
    period: 'Jan 2025 – Mar 2026',
    liveUrl: 'https://planpadi.com/',
    cardImage: planpadiScreen1,
    introParagraphs: [
      'Every serious organizer eventually hits the same wall. They want to host an exclusive event: a product launch for invited guests, a corporate gathering with a controlled attendee list, a members-only community meetup. On Planpadi, they couldn\'t. Every event was public. Anyone with a link could show up. For organizers who needed access control, the platform simply didn\'t work.',
      'The problem ran deeper for organizations managing multiple events. Without governance, any team member could publish anything without oversight. There were no approval flows, no team management, no administrative controls. The platform was built for individual organizers, not for the teams and organizations that were starting to rely on it.',
    ],
    blocks: [
      {
        label: 'Invite-only Access',
        mockKey: 'list',
        image: planpadiScreen1,
        text: 'Invite-only events, link access, guest requests, and host approval workflows give organizers full control over who gets in.',
      },
      {
        label: 'Organisation Controls',
        mockKey: 'window',
        image: teamCloseup2,
        text: 'Publishing approval workflows, team management, and org-level configuration give operations teams the structure to scale without losing control.',
      },
    ],
    sections: [
      {
        heading: 'What we built',
        paragraphs: [
          'I led the Private Event Management build across three distinct access modes: invite-only events where hosts controlled every confirmation, link-gated events for semi-private access, and request-based events where attendees could apply and hosts approved. Invitation management sat across all three, keeping access auditable and host-controlled at every step.',
          'For organizations, I extended the work into a dedicated Organization Management Suite: publishing approval workflows, administrative settings, team management, and org-level configuration. A team running multiple events simultaneously could now operate with the governance structure they expected from enterprise tools, inside the same platform their individual organizers were already on.',
          'The work turned access from a gap into a feature. Organizers who had been building workarounds, or leaving for other tools, had a reason to stay. Organizations that needed multi-event governance had a platform that could actually support them.',
        ],
      },
    ],
    outcomeLabel: 'The Outcome',
    outcomeText: 'Organisation-level controls shipped. Private and invite-only events live for the first time. Organizers who needed access control had a reason to stay.',
  },
  {
    slug: 'planpadi-experience',
    client: 'Planpadi',
    shortLabel: 'Event Experience',
    tags: ['Event Tech', 'Consumer', 'On-site Ops'],
    bg: '#1A4D3A',
    mockKey: 'window',
    eyebrow: 'Planpadi · Premium Event Services',
    title: 'Making the event-day experience feel professional.',
    desc: 'Led QR check-in, broadcast invitations, custom branding, and managed services for high-value organizers leaving for other tools.',
    role: 'Product Manager',
    period: 'Jan 2025 – Mar 2026',
    liveUrl: 'https://planpadi.com/',
    cardImage: attendeeCheckin,
    introParagraphs: [
      'The gap was visible to anyone who attended a high-value event on Planpadi. Gate staff with printed lists. Queues while names were checked manually. No branding, no professional polish — just the same default screens every organizer used. The product could sell tickets. It couldn\'t run a serious event.',
      'High-value organizers had started supplementing Planpadi with outside check-in tools, which meant the platform was losing the upper end of the market it should have owned. Fixing the event-day experience wasn\'t just a UX problem — it was a retention problem.',
    ],
    blocks: [
      {
        label: 'QR Check-in',
        mockKey: 'window',
        image: checkinDesk,
        text: 'Attendees arrive with a scannable code. Staff verify in seconds. What had been a manual bottleneck becomes the smoothest part of the event.',
      },
      {
        label: 'On-the-ground Experience',
        mockKey: 'blob',
        image: attendeeCheckin,
        text: 'Broadcast invitations, custom event branding, and managed services give high-value organizers everything they need to run a professional event on one platform.',
      },
    ],
    sections: [
      {
        heading: 'What we built',
        paragraphs: [
          'QR code check-in was the first and most visible fix. Attendees arrived with a scannable code; staff verified it in seconds. What had been a manual bottleneck became one of the smoothest parts of the event. I led the build and made it core to the premium service offering, not a bolt-on.',
          'Alongside check-in, we launched broadcast invitations so organizers could reach their guest lists at scale, and custom event branding so premium organizers could present their events their way — their colours, their identity, not Planpadi\'s defaults. Managed event services extended the offering to complex productions where organizers needed more than software.',
          'The result was a product that could serve everything from casual meetups to professionally produced events on the same platform, without organizers needing to patch things together with outside tools. High-value organizers who had been leaving had fewer reasons to. And the features created a natural pull toward the premium tier.',
        ],
      },
    ],
    gallery: {
      caption: 'On the ground',
      images: [
        { src: checkinDesk, alt: 'Check-in desk' },
        { src: qrTicketSignage, alt: 'QR ticket signage' },
        { src: attendeeCheckin, alt: 'Attendee check-in' },
        { src: accessTags, alt: 'Access tags' },
        { src: teamCloseup1, alt: 'Team closeup' },
        { src: accessTagWristband, alt: 'Access tag wristband' },
        { src: qrShirt, alt: 'QR shirt' },
      ],
    },
    outcomeLabel: 'The Outcome',
    outcomeText: 'Event activation up 76%. QR check-in replaced manual lists. A product that sold tickets became a product that ran events.',
  },
  {
    slug: 'planpadi-revenue',
    client: 'Planpadi',
    shortLabel: 'Subscription',
    tags: ['Event Tech', 'SaaS', 'Monetization'],
    bg: '#1A4D3A',
    mockKey: 'window',
    eyebrow: 'Planpadi · Subscription Monetization',
    title: 'Building a revenue model that could scale.',
    desc: 'Designed and launched Planpadi Premium and Gold, establishing the first recurring revenue stream in the platform\'s history.',
    role: 'Product Manager',
    period: 'Jan 2025 – Mar 2026',
    liveUrl: 'https://planpadi.com/',
    cardImage: planpadiScreen2,
    introParagraphs: [
      'Planpadi had thousands of organizers. Many of them ran free events. When a free event happened, Planpadi earned nothing from the activity that was filling its platform. Growing the user base and growing the business had quietly become two different things.',
      'The entire revenue model was transactional: a percentage of each paid ticket. That meant income was entirely at the mercy of ticket volume. Organizers who were active and valuable to the platform but didn\'t charge for their events contributed nothing to the bottom line. The business needed a recurring income layer that didn\'t depend on how organizers chose to price their events.',
    ],
    blocks: [
      {
        label: 'Subscription Tiers',
        mockKey: 'window',
        image: planpadiScreen2,
        text: 'Planpadi Premium and Planpadi Gold introduced recurring revenue, backed by feature-based access controls and role-based permissions.',
      },
      {
        label: 'A Clear Upgrade Path',
        mockKey: 'list',
        image: qrTicketSignage,
        text: 'Free to Premium to Gold — a structured path that grows revenue from existing organizers, not just new acquisition.',
      },
    ],
    sections: [
      {
        heading: 'What we built',
        paragraphs: [
          'I led the design and launch of two subscription tiers. Planpadi Premium unlocked enhanced event features on a monthly plan. Planpadi Gold delivered the full feature set for professional organizers who needed maximum capability. Entitlement was managed through feature-based access controls and role-based permissions, keeping the tiers cleanly separated without exceptions in the product logic.',
          'The upgrade path from free to Premium to Gold gave the business a structure to grow revenue from its existing user base rather than relying only on new acquisition. Organizers grew into the product and the pricing followed naturally.',
          'The launch established Planpadi\'s first recurring revenue stream. Organizer retention improved because subscriptions created an ongoing relationship with the platform, not just transactional moments around ticket sales.',
        ],
      },
    ],
    outcomeLabel: 'The Outcome',
    outcomeText: 'Planpadi\'s first recurring revenue stream launched. Mobile engagement up 88%. Failed wallet withdrawals down 80%.',
  },
  {
    slug: 'msc-hpms',
    client: 'MSC',
    clientOngoing: true,
    shortLabel: 'MSC HPMS',
    tags: ['HealthTech', 'Pharma', 'Payments' , 'Referrals'],
    bg: '#3A3836',
    mockKey: 'blob',
    cardImage: mscCardImage,
    cardImageFit: 'cover',
    eyebrow: 'MSC · Hierarchical Promotional Management System (HPMS)',
    title: 'Building MSC\'s pharmacy onboarding platform.',
    desc: 'Owned HPMS from ambiguous brief to shipped MVP — the onboarding platform that brings pharmacies and field promoters into MSC\'s ecosystem, validated by 27+ pharmacy interviews, delivered in under three months.',
    role: 'Product Owner',
    period: 'Mar – Jun 2026 · Phase 1',
    introParagraphs: [
      'Some products begin with a clear roadmap. HPMS didn\'t.',
      'HPMS is the front door to MSC\'s ecosystem. It is the system through which pharmacies and field representatives enter the network: getting invited, completing onboarding, verifying their identity, and earning commissions on the business they generate. Referral is the growth engine inside it, but onboarding is what the product is built around.',
      'When I picked it up, there was no product definition, no validated demand, no delivery plan, and no shared understanding of scope. Engineering couldn\'t begin because there wasn\'t a product to build yet. There was only a business idea waiting to be translated into something concrete.',
      'My responsibility wasn\'t simply delivering software. The first challenge was defining what we were actually building.',
    ],
    blocks: [
      {
        label: 'Two-Tier Referral Architecture',
        mockKey: 'blob',
        video: mscVideo,
        text: 'A hierarchical inviter/invitee model designed to create network effects, with a commission lifecycle moving from pending to confirmed to withdrawable on a fixed monthly schedule.',
      },
      {
        label: '27+ Pharmacy Interviews',
        mockKey: 'window',
        text: 'A four-phase market research effort that validated the commission model and shaped the MVP feature set before a line of code was written.',
      },
    ],
    sections: [
      {
        heading: 'Understanding the problem before solving it',
        paragraphs: [
          'Before writing requirements or planning sprints, one question kept surfacing: would pharmacies actually want this? The entire business model depended on pharmacies participating in a digital referral programme and responding to commission incentives, yet that assumption had never been tested.',
          'Rather than treating research as an optional exercise, I made it the first milestone of the project. I designed and led a four phase discovery process that combined desktop research, field visits across Lagos, interviews with more than twenty seven pharmacies, and a quantitative survey. Instead of asking whether the concept sounded good, we explored how pharmacies currently discovered suppliers, what motivated referrals, where procurement processes created friction, and whether commissions would genuinely influence behaviour.',
          'Those conversations fundamentally changed how we approached the product. Several planned ideas became unnecessary, while others became far more important than originally expected. Instead of building around assumptions, we built around evidence.',
        ],
      },
      {
        heading: 'Turning an idea into a product',
        paragraphs: [
          'With the research complete, the next challenge was creating something engineering could actually build. Over four iterations of the Product Requirements Document, I translated the evolving business vision into clear product requirements, user flows, acceptance criteria, and implementation priorities.',
          'The final MVP centred around a two tier referral architecture where pharmacies and field representatives could invite new pharmacies into the network through unique invitation codes. Every successful referral moved through a clearly defined commission lifecycle, progressing from pending to confirmed before becoming available for withdrawal on a fixed monthly schedule.',
          'One of the most significant product decisions happened midway through planning. Originally, HPMS was intended to launch as its own standalone platform. As priorities shifted, we decided instead to integrate it directly into Personal Centre, MSC\'s existing internal platform. Although this required revisiting work already underway, it reduced duplicate functionality, shortened adoption time, and allowed users to access referrals from a product they were already familiar with.',
          'Sometimes the fastest path to shipping isn\'t creating another application. It\'s making the existing one more valuable.',
        ],
      },
      {
        heading: 'Building the delivery process',
        paragraphs: [
          'Defining the product solved only half the problem. The project also lacked a consistent delivery process: no structured sprint cadence, no backlog management, and no single source of truth that engineering, stakeholders, and leadership could rely on.',
          'To create alignment, I introduced sprint planning, backlog grooming, daily stand ups, weekly progress reporting, and Sprint PRDs that became the reference point for every development cycle.',
          'Halfway through delivery, the engineering team expanded from two developers to six. Team growth often slows momentum before it improves it, particularly when new engineers have little context around product decisions. To prevent that, I onboarded each engineer into the project\'s history, business rules, acceptance criteria, and technical decisions, allowing the larger team to continue delivering without losing velocity.',
        ],
      },
      {
        heading: 'Managing change without losing momentum',
        paragraphs: [
          'Like most early stage products, HPMS changed while it was being built. Leadership decided that HPMS would no longer exist as a standalone platform and instead become part of Personal Centre. At the same time, territory assignment functionality was removed from scope, affecting work that had already begun.',
          'Rather than protecting the original roadmap, I redefined priorities, updated the requirements, worked closely with engineering to minimise disruption, and kept business stakeholders aligned around the revised delivery plan.',
          'When the executive team reviewed the MVP, additional feedback arrived the very same day. The required revisions were prioritised, coordinated, and delivered within forty eight hours, keeping the project on schedule.',
        ],
      },
      {
        heading: 'The outcome',
        paragraphs: [
          'In less than three months, HPMS evolved from a loosely defined business concept into a production ready referral platform. The MVP shipped on schedule with its complete agreed feature set, zero critical bugs, and no uncontrolled scope expansion, despite multiple changes throughout development.',
          'More importantly, the project delivered far more than software. It gave MSC a validated product strategy grounded in user research, a repeatable product delivery process, an aligned engineering team, and a scalable foundation for future iterations. With the referral engine successfully established, the next phase focuses on increasing engagement through leaderboards, tier progression, and a dedicated field promoter dashboard.',
        ],
      },
      {
        heading: 'Looking back',
        paragraphs: [
          'The most valuable thing we built wasn\'t the referral platform itself. It was clarity.',
          'When the project began, HPMS existed only as an idea. By the time Phase 1 concluded, it had become a validated product with a clear roadmap, defined business rules, a scalable technical foundation, and a team aligned around a shared vision. For me, that was the real success of the project.',
        ],
      },
    ],
  },
  {
    slug: 'tochi-health',
    client: 'TOHAI',
    shortLabel: 'TOHAI',
    tags: ['HealthTech', 'Public Health', 'Social Impact'],
    bg: '#C4632A',
    mockKey: 'window',
    eyebrow: 'TOHAI Health Awareness Initiative · Public Health',
    title: 'Dashboards for 500+ lives reached.',
    desc: 'Built performance dashboards and led remote teams across multi-regional genotype testing campaigns.',
    role: 'Project Manager',
    period: '2018 – 2020',
    liveUrl: 'https://tohainigeria.org/?i=1',
    intro: 'As Project Manager for the TOHAI Health Awareness Initiative, I led multi-regional public health campaigns across Northern Nigeria, reaching communities with little prior access to genotype testing.',
    blocks: [
      {
        label: 'The Problem',
        mockKey: 'window',
        text: 'Genotype testing access was fragmented across Northern Nigeria, with no visibility into program performance on the ground.',
      },
      {
        label: 'The Approach',
        mockKey: 'blob',
        text: 'Built performance dashboards and managed a remote, cross-functional team running testing campaigns directly in communities.',
      },
    ],
    outcomeLabel: 'The Outcome',
    outcomeText: '500+ individuals reached across multi-regional campaigns, with dashboards giving real-time visibility into program performance.',
  },
];

export const getWork = (slug) => works.find(w => w.slug === slug);
