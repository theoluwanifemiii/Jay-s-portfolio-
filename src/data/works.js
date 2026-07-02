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
    bg: '#1A4D3A',
    mockKey: 'list',
    eyebrow: 'Planpadi · Event Management & Vendor Outsourcing',
    title: 'Building a scalable event management platform.',
    desc: 'Drove product strategy across private events, organization tools, premium services and subscription monetization.',
    role: 'Product Manager',
    period: 'Jan 2025 – Mar 2026',
    liveUrl: 'https://planpadi.com/',
    cardImage: teamCloseup2,
    intro: 'Planpadi lets organizers create, manage, promote and monetize events while giving attendees a seamless ticketing experience. As Planpadi's customer base grew, organizers lacked control over private events, check-in was largely manual, and the platform had no monetization structure beyond ticket sales. As Product Manager, I drove product strategy, prioritization and cross-functional delivery to close those gaps.',
    blocks: [
      {
        label: 'Private Event Management',
        mockKey: 'list',
        text: 'Invite-only events, link access, guest requests and host approval workflows give organizers full control over who gets in.',
      },
      {
        label: 'Subscription Monetization',
        mockKey: 'window',
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
    outcomeText: 'Event activation up 60%. Mobile engagement up 56%. Failed wallet withdrawals down 70%. A subscription tier launched. Organisation-level controls shipped. Planpadi moved from a ticketing tool to a full event management platform.',
  },
  {
    slug: 'msc-hpms',
    bg: '#3A3836',
    mockKey: 'blob',
    eyebrow: 'MSC · Hierarchical Promotional Management System (HPMS)',
    title: 'Building a referral growth platform from zero to MVP.',
    desc: 'Owned HPMS from ambiguous brief to shipped MVP in under three months — validated by 27+ pharmacy interviews and delivered with zero critical bugs.',
    role: 'Product Owner',
    period: 'Mar – Jun 2026 · Phase 1',
    intro: 'MSC needed a structured way to grow its customer base through referrals: a system where pharmacies and field staff could invite others, earn commission on the business they brought in, and be tracked through a full commission lifecycle. When I picked it up, it was a concept with a raw specification and no product definition — no PRD, no validated demand, no delivery plan, and no shared understanding of scope across the team. I owned HPMS from that brief to a shipped, production-ready MVP in under three months, validated by 27+ pharmacy interviews and delivered with zero critical bugs.',
    blocks: [
      {
        label: 'Two-Tier Referral Architecture',
        mockKey: 'blob',
        text: 'A hierarchical inviter/invitee model designed to create network effects, with a commission lifecycle moving from pending to confirmed to withdrawable on a fixed monthly schedule.',
      },
      {
        label: '27+ Pharmacy Interviews',
        mockKey: 'window',
        text: 'A four-phase market research effort — desktop research, on-site interviews, and a quantitative survey — validated the commission model and shaped the MVP feature set before a line of code was written.',
      },
    ],
    sections: [
      {
        heading: 'The Problems',
        body: 'Three problems sat on top of each other from day one.',
        list: [
          {
            title: 'Ambiguous, untranslated brief',
            text: 'The initial system specification arrived in a form the engineering team couldn\'t build from directly. Before any product work could start, someone had to turn it into clear, buildable requirements that the whole team agreed on.',
          },
          {
            title: 'Unvalidated demand',
            text: 'The referral-and-commission model assumed pharmacies would adopt a digital platform and respond to commission incentives. Nobody had tested that assumption with actual pharmacies. Building the wrong thing fast is still building the wrong thing.',
          },
          {
            title: 'No delivery structure',
            text: 'The team had no sprint cadence, no single source of truth for scope, and a hard MVP timeline. Without structure, an aggressive deadline was going to slip.',
          },
        ],
      },
      {
        heading: 'What I Did',
        list: [
          {
            title: 'Turned the brief into a product definition',
            text: 'I translated the raw specification into clear product requirements across four PRD versions as business requirements shifted. The core system: a two-tier inviter/invitee model, a commission lifecycle with defined states, KYC with an exemption path for internal promoters, single-use invitation codes with auto-revoke, and delivery integrated into Personal Centre rather than a standalone app.',
          },
          {
            title: 'Validated demand before over-building',
            text: 'I designed and ran a four-phase market research effort: desktop research on the pharmacy distribution landscape, on-site interviews with 27+ pharmacies across multiple Lagos areas, and a quantitative survey on digital-platform adoption and commission model acceptance. The research surfaced real procurement pain points and directly shaped which features made the MVP cut.',
          },
          {
            title: 'Built the delivery machine',
            text: 'I established the operating rhythm the team didn\'t have: sprint planning, backlog grooming, daily standups, and weekly reporting, with a Sprint PRD as the single source of truth. Midway through, the team scaled from two engineers to six — I onboarded the new engineers with project history, specs, and acceptance criteria so the growth didn\'t cost velocity.',
          },
          {
            title: 'Managed scope and stakeholders under pressure',
            text: 'A mid-sprint decision merged HPMS into Personal Centre and removed territory-assignment functionality, hitting work already in progress. My role was to absorb the change without derailing the MVP: re-scoping cleanly, escalating blockers with proposed solutions, and keeping the GM and build teams aligned. When the MVP was demoed, executive feedback came back the same day — I coordinated the changes within 48 hours.',
          },
        ],
      },
      {
        heading: 'Key Decisions',
        list: [
          {
            title: 'Ship inside Personal Centre, not standalone',
            text: 'Merging HPMS into the existing platform mid-build was disruptive, but it cut scope, removed duplicate surface area, and got a usable product in front of users faster. I backed the change rather than defending the original plan.',
          },
          {
            title: 'Exempt internal promoters from pharmacy KYC',
            text: 'Forcing internal field staff through pharmacy verification would have blocked staff onboarding for no benefit. Separating the two paths kept both flows clean — a small requirements decision with real operational impact.',
          },
          {
            title: 'Research before building the incentive model',
            text: 'It would have been faster to build the commission system as specified. Talking to 27+ pharmacies first meant the incentive structure and positioning were grounded in what pharmacies actually said, not what we assumed.',
          },
        ],
      },
    ],
    outcomeLabel: 'The Outcome',
    outcomeText: 'HPMS Phase 1 MVP shipped on schedule with zero critical bugs and zero scope creep. Full feature set delivered: hierarchical referral system, internal promoter onboarding, commission tracking and lifecycle, KYC, invitation-code management, and a complete admin dashboard — demoed to executive leadership on delivery day. Phase 2 moves into gamification: leaderboards, tier progression, and a field-promoter dashboard built on the foundation Phase 1 put in place.',
  },
  {
    slug: 'tochi-health',
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
