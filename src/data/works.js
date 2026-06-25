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
    intro: 'Planpadi lets organizers create, manage, promote and monetize events while giving attendees a seamless ticketing experience. As Planpadi’s customer base grew, organizers lacked control over private events, check-in was largely manual, and the platform had no monetization structure beyond ticket sales. As Product Manager, I drove product strategy, prioritization and cross-functional delivery to close those gaps.',
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
    gallery: {
      caption: 'Live at Ekaabo 2025',
      images: [
        { src: checkinDesk, alt: 'The Planpadi team running check-in at Ekaabo 2025' },
        { src: teamCloseup1, alt: 'The Planpadi team at the check-in desk' },
        { src: teamCloseup2, alt: 'The Planpadi team at the check-in desk' },
        { src: qrTicketSignage, alt: 'QR ticket signage for contactless event entry' },
        { src: attendeeCheckin, alt: 'An attendee checking in via QR scan' },
        { src: accessTagWristband, alt: 'A Planpadi access tag wristband' },
        { src: accessTags, alt: 'Planpadi access tags for tiered, controlled entry' },
        { src: qrShirt, alt: 'A Planpadi QR code printed on an event staff shirt' },
      ],
    },
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
    outcomeText: 'A 60% lift in event activation, 56% growth in mobile engagement, and a 70% cut in failed wallet withdrawals, alongside a newly launched subscription business and organization-level management tools that turned Planpadi into a more complete event management ecosystem.',
  },
  {
    slug: 'msc-hpms',
    bg: '#3A3836',
    mockKey: 'blob',
    eyebrow: 'MSC · Hierarchical Promotional Management System (HPMS)',
    title: 'Managing a scope pivot mid-sprint.',
    desc: 'Owning discovery and delivery for HPMS, a promoter/referral system for MSC’s B2B pharmacy procurement platform, through a major scope pivot.',
    role: 'Product Owner',
    period: '2026 – Present',
    status: {
      label: 'Pre-launch · MVP at risk',
      note: 'No outcome metrics yet. This is a story about ownership through a scope pivot, not results.',
    },
    intro: 'HPMS (Hierarchical Promotional Management System) lets pharmacies refer other pharmacies into MSC’s ecosystem, track invitees, earn commission on referred orders, and withdraw earnings. As Product Owner, I translate the GM’s strategic direction into buildable requirements and manage delivery across five teams: backend, frontend, design, QA, and the Personal Centre platform team.',
    blocks: [
      {
        label: 'The Original Concept',
        mockKey: 'window',
        text: 'HPMS was first scoped as a standalone promoter app, with its own shell, navigation and home screen for QR code, invitees, commission tracking and withdrawal.',
      },
      {
        label: 'The Pivot',
        mockKey: 'list',
        text: 'Before frontend integration was complete, the GM redirected the entire product: every promoter flow folded into Personal Centre, MSC’s existing platform, as a dedicated section.',
      },
    ],
    sections: [
      {
        heading: 'Scope Changes, Mid-Sprint',
        body: 'On 26 May 2026, GM Mr. Bruce locked the roadmap and directed five changes that hit work already in progress. This was the central challenge I had to manage as PO.',
        list: [
          {
            title: 'Standalone app → Personal Centre section',
            text: 'The promoter app was scrapped as a separate product. Every flow (QR code, invitees, commission, withdrawal) was folded into Personal Centre as a dedicated section. Every screen had to be re-adapted to PC’s existing design system and navigation.',
          },
          {
            title: 'Territory assignment removed',
            text: 'Regional and territory assignment screens were cut from scope entirely, affecting work already in progress.',
          },
          {
            title: 'Commission status wording updated',
            text: '“Pending” became “Pending Confirmation.” “Withdrawable” copy was rewritten to clarify it’s only granted on the 1st of the following calendar month.',
          },
          {
            title: 'Commission trigger wording updated',
            text: 'The earning trigger changed from “order settled” to “order delivery confirmed” across tooltips, descriptions and empty states.',
          },
          {
            title: 'New Pharmacy Promoter Page added',
            text: 'A new screen was added to scope inside Personal Centre. I authored a PRD Addendum v1.0 defining it in full (QR code, invitee list, commission by status, bank details for withdrawal) and shared it with the design team.',
          },
        ],
      },
      {
        heading: 'What I Own as PO',
        list: [
          {
            title: 'Discovery & scoping',
            text: 'Translating the GM’s strategic direction into buildable requirements and a coherent PRD, including the Addendum for the Pharmacy Promoter Page.',
          },
          {
            title: 'Roadmap management',
            text: 'Maintaining the delivery sequence across five teams against the GM’s locked priorities, adjusting for scope changes without losing the critical path.',
          },
          {
            title: 'Stakeholder translation',
            text: 'Running the communication layer between the GM and the build teams, converting executive decisions into concrete spec changes design, frontend, backend and QA can act on.',
          },
          {
            title: 'Scope negotiation',
            text: 'Defining what was in and out of the frontend integration deadline, and flagging the Field Lead workstream as a separate track to protect the team from scope creep.',
          },
          {
            title: 'Risk documentation',
            text: 'Producing a formal workload assessment to give the GM an honest picture of timeline risk before the MVP date slipped.',
          },
        ],
      },
    ],
    outcomeLabel: 'Where Things Stand',
    outcomeText: 'Mobile H5 for Promoter Center is complete. Personal Centre web and admin-side updates are in progress, with the Field Lead integration tracked as a separate workstream. Once live, the metrics that matter are promoter adoption, referral conversion, commission withdrawal volume, and failed KYC/withdrawal attempts.',
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
