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
    slug: 'planpadi',
    client: 'Planpadi',
    bg: '#1A4D3A',
    mockKey: 'list',
    eyebrow: 'Planpadi · Event Management & Vendor Outsourcing',
    title: 'Building a scalable event management platform.',
    desc: 'Drove product strategy across private events, organization tools, premium services and subscription monetization.',
    role: 'Product Manager',
    period: 'Jan 2025 – Mar 2026',
    liveUrl: 'https://planpadi.com/',
    cardImage: teamCloseup2,
    intro: 'Planpadi lets organizers create, manage, promote and monetize events while giving attendees a seamless ticketing experience. As Planpadi\'s customer base grew, organizers lacked control over private events, check-in was largely manual, and the platform had no monetization structure beyond ticket sales. As Product Manager, I drove product strategy, prioritization and cross-functional delivery to close those gaps.',
    blocks: [
      {
        label: 'Private Event Management',
        mockKey: 'list',
        image: planpadiScreen1,
        text: 'Invite-only events, link access, guest requests and host approval workflows give organizers full control over who gets in.',
      },
      {
        label: 'Subscription Monetization',
        mockKey: 'window',
        image: planpadiScreen2,
        text: 'Planpadi Premium and Planpadi Gold introduced recurring revenue, backed by feature-based and role-based access control.',
      },
    ],
    features: [
      {
        title: 'Private Event Management System',
        goal: 'Give organizers control over who can access exclusive, invite-only events.',
        contributions: [
          'Invite-only events',
          'Link access events',
          'Guest access requests',
          'Host approval workflows',
          'Invitation management',
        ],
        impact: [
          'Increased organizer confidence in hosting exclusive events.',
          'Reduced unauthorized access to private events.',
          'Improved attendee management experience.',
        ],
      },
      {
        title: 'Organization Management Suite',
        goal: 'Give organizations managing multiple events centralized controls and governance.',
        contributions: [
          'Publishing controls',
          'Approval workflows',
          'Administrative settings',
          'Team management capabilities',
          'Organization-level configuration',
        ],
        impact: [
          'Improved operational efficiency for organizations.',
          'Reduced administrative overhead.',
          'Enabled scalable event management across teams.',
        ],
      },
      {
        title: 'Premium Event Services',
        goal: 'Give high-value organizers tools to create professional event experiences.',
        contributions: [
          'QR code check-in',
          'Broadcast invitations',
          'Custom event branding',
          'Managed event services',
        ],
        impact: [
          'Faster attendee check-in experience.',
          'Improved event professionalism.',
          'Increased value proposition for premium organizers.',
        ],
      },
      {
        title: 'Subscription Monetization',
        goal: 'Build recurring revenue beyond per-ticket transaction volume.',
        contributions: [
          'Launched Planpadi Premium, a monthly subscription tier with enhanced event features',
          'Launched Planpadi Gold, an advanced feature package with premium organizer capabilities',
          'Feature-based access controls',
          'Role-based access control (RBAC)',
        ],
        impact: [
          'Established recurring revenue streams.',
          'Improved customer retention.',
          'Created clear upgrade paths for organizers.',
        ],
      },
    ],
    outcomeLabel: 'The Outcome',
    outcomeText: 'Event activation up 76%. Mobile engagement up 88%. Failed wallet withdrawals down 80%. A subscription tier launched. Organisation-level controls shipped. Planpadi moved from a ticketing tool to a full event management platform.',
  },
  {
    slug: 'msc-hpms',
    client: 'MSC',
    clientOngoing: true,
    bg: '#3A3836',
    mockKey: 'blob',
    cardImage: mscCardImage,
    cardImageFit: 'cover',
    eyebrow: 'MSC · Hierarchical Promotional Management System (HPMS)',
    title: 'Building a referral growth platform from zero to MVP.',
    desc: 'Owned HPMS from ambiguous brief to shipped MVP in under three months, validated by 27+ pharmacy interviews and delivered with zero critical bugs.',
    role: 'Product Owner',
    period: 'Mar – Jun 2026 · Phase 1',
    introParagraphs: [
      'Some products begin with a clear roadmap. HPMS didn\'t.',
      'The project started as a rough business concept. Medicare Supply Chain wanted a referral platform that would help grow its pharmacy network by allowing pharmacies and field representatives to invite new pharmacies, earn commissions when those businesses transacted, and eventually withdraw those earnings. On paper, the idea was simple. In reality, almost everything needed to build it was missing.',
      'There was no product definition, no validated demand, no delivery plan, and no shared understanding of what the MVP should actually contain. Engineering couldn\'t begin because there wasn\'t a product to build yet. There was only a business idea waiting to be translated into something concrete.',
      'My responsibility wasn\'t simply delivering software. The first challenge was defining the product itself.',
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
