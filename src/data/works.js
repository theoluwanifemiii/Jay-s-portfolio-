export const works = [
  {
    slug: 'planpadi',
    bg: '#1A4D3A',
    mockKey: 'list',
    eyebrow: 'Planpadi · Events & Wallet',
    title: 'Lifting event activation by 60%.',
    desc: 'Redesigned the event creation flow, homepage and ticketing to remove friction at every step of organizer onboarding.',
    role: 'Product Manager',
    period: '2025 – Present',
    intro: 'As Product Manager for Planpadi’s event and digital wallet platform, I own the roadmap end to end — from the friction organizers hit on day one, to the metrics that prove it’s gone.',
    blocks: [
      {
        label: 'Event Creation & Management',
        mockKey: 'list',
        text: 'Defined acceptance criteria for clickable Media, Description, Ticket and Location sections, and replaced placeholders with actionable prompts like “Upload an Image.”',
      },
      {
        label: 'Wallet & User Access Expansion',
        mockKey: 'window',
        text: 'Designed a secure flow letting non-vendors withdraw funds, with KYC and balance validation plus full transaction history for transparency.',
      },
    ],
    features: [
      {
        title: 'Event Creation & Management Enhancements',
        goal: 'Simplify how users create and manage events on the platform.',
        contributions: [
          'Defined detailed acceptance criteria for clickable Media, Description, Ticket and Location sections.',
          'Replaced placeholders with clear, actionable prompts like “Upload an Image” and “Tell us about your event.”',
          'Improved event creation flow and reduced errors through better contextual guidance.',
          'Increased short description limit from 60 to 160 characters for SEO and clarity.',
        ],
        impact: [
          'Reduced user confusion during event setup.',
          'Enhanced usability and discoverability of event details.',
          'Increased event creation completion rate (based on team feedback).',
        ],
      },
      {
        title: 'Wallet & User Access Expansion',
        goal: 'Extend wallet withdrawal capability to all users, not just vendors.',
        contributions: [
          'Designed a flow allowing non-vendors to withdraw funds securely.',
          'Defined system validation for sufficient balance and KYC checks.',
          'Ensured transaction history visibility for transparency.',
        ],
        impact: [
          'Improved financial flexibility for regular users.',
          'Increased trust and inclusivity on the platform.',
        ],
      },
      {
        title: 'Event Discovery & Ticket Engagement',
        goal: 'Increase event visibility and ticket purchase conversion.',
        contributions: [
          'Fixed “Buy Ticket” button positioning for mobile usability.',
          'Introduced a “Download QR Code” feature for easy event promotion.',
          'Implemented custom thumbnail selection for event listings.',
          'Optimized description length and visibility for better SEO.',
        ],
        impact: [
          'Improved ticket purchase flow.',
          'Enabled event organizers to promote more effectively.',
          'Enhanced mobile experience.',
        ],
      },
      {
        title: 'Platform Infrastructure & Support Setup',
        goal: 'Strengthen system performance, access control, and support.',
        contributions: [
          'Enforced privacy by restricting access to unpublished events (404 fallback).',
          'Configured support@planpadi.com for customer service routing.',
          'Created blog.planpadi for announcements and content marketing.',
          'Recommended a JSON-based data structure for scalable content management.',
        ],
        impact: [
          'Improved reliability and communication channels.',
          'Future-proofed the system for growth and SEO expansion.',
        ],
      },
    ],
    outcomeLabel: 'The Outcome',
    outcomeText: 'A 60% lift in event activation, 56% growth in mobile engagement, and a 70% cut in failed wallet withdrawals — measured against real usage data, not assumptions.',
  },
  {
    slug: 'msc-hpms',
    bg: '#3A3836',
    mockKey: 'blob',
    eyebrow: 'MSC · Hierarchical Promotion Management',
    title: 'Managing a scope pivot mid-sprint.',
    desc: 'Owning discovery and delivery for HPMS — a promoter/referral system for MSC’s B2B pharmacy procurement platform — through a major scope pivot.',
    role: 'Product Owner',
    period: '2026 – Present',
    status: {
      label: 'Pre-launch · MVP at risk',
      note: 'No outcome metrics yet — this is a story about ownership through a scope pivot, not results.',
    },
    intro: 'HPMS (Hierarchical Promotion Management System) lets pharmacies refer other pharmacies into MSC’s ecosystem, track invitees, earn commission on referred orders, and withdraw earnings. As Product Owner, I translate the GM’s strategic direction into buildable requirements and manage delivery across five teams — backend, frontend, design, QA, and the Personal Centre platform team.',
    blocks: [
      {
        label: 'The Original Concept',
        mockKey: 'window',
        text: 'HPMS was first scoped as a standalone promoter app — its own shell, navigation and home screen for QR code, invitees, commission tracking and withdrawal.',
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
        body: 'On 26 May 2026, GM Mr. Bruce locked the roadmap and directed five changes that hit work already in progress — the central challenge I had to manage as PO.',
        list: [
          {
            title: 'Standalone app → Personal Centre section',
            text: 'The promoter app was scrapped as a separate product. Every flow — QR code, invitees, commission, withdrawal — was folded into Personal Centre as a dedicated section. Every screen had to be re-adapted to PC’s existing design system and navigation.',
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
            text: 'A new screen was added to scope inside Personal Centre. I authored a PRD Addendum v1.0 defining it in full — QR code, invitee list, commission by status, bank details for withdrawal — and shared it with the design team.',
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
    eyebrow: 'Tochi Health · Public Health',
    title: 'Dashboards for 500+ lives reached.',
    desc: 'Built performance dashboards and led remote teams across multi-regional genotype testing campaigns.',
    role: 'Project Manager',
    period: '2018 – 2020',
    intro: 'As Project Manager for the Tochi Health Access Initiative, I led multi-regional public health campaigns across Northern Nigeria, reaching communities with little prior access to genotype testing.',
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
