export type Candidate = {
  id: string
  name: string
  role: string
  client: string
  stage: string
  source: string
  score: number
  updated: string
}

export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Priya Nair',
    role: 'Brand Designer',
    client: 'Bloom & Bond',
    stage: 'Final interview',
    source: 'LinkedIn',
    score: 92,
    updated: '2h ago',
  },
  {
    id: '2',
    name: 'Tom Ellis',
    role: 'Senior AE',
    client: 'Clyro',
    stage: 'Client interview',
    source: 'Referral',
    score: 88,
    updated: '4h ago',
  },
  {
    id: '3',
    name: 'Maya Okonkwo',
    role: 'Product Manager',
    client: 'Forge Analytics',
    stage: 'Screening',
    source: 'Indeed',
    score: 81,
    updated: 'Yesterday',
  },
  {
    id: '4',
    name: 'Chris Vogel',
    role: 'Full-stack Eng',
    client: 'Northline Group',
    stage: 'First interview',
    source: 'LinkedIn',
    score: 85,
    updated: 'Yesterday',
  },
  {
    id: '5',
    name: 'Elena Rossi',
    role: 'Growth Lead',
    client: 'Kinetic Studio',
    stage: 'Sourced',
    source: 'Outbound',
    score: 74,
    updated: '2d ago',
  },
  {
    id: '6',
    name: 'James Whitford',
    role: 'Head of Ops',
    client: 'Drift Commerce',
    stage: 'Sourced',
    source: 'LinkedIn',
    score: 79,
    updated: '3d ago',
  },
]

export const pipelineColumns = [
  {
    id: 'sourced',
    title: 'Sourced',
    items: [
      { name: 'Elena Rossi', role: 'Growth Lead', client: 'Kinetic' },
      { name: 'James Whitford', role: 'Head of Ops', client: 'Drift' },
      { name: 'Nina Park', role: 'Perf. Marketer', client: 'Aether' },
    ],
  },
  {
    id: 'screen',
    title: 'Screening',
    items: [
      { name: 'Maya Okonkwo', role: 'Product Manager', client: 'Forge' },
      { name: 'Omar Haddad', role: 'Full-stack Eng', client: 'Northline' },
    ],
  },
  {
    id: 'interview',
    title: 'Interview',
    items: [
      { name: 'Chris Vogel', role: 'Full-stack Eng', client: 'Northline' },
      { name: 'Sofia Mendes', role: 'Brand Designer', client: 'Bloom' },
    ],
  },
  {
    id: 'offer',
    title: 'Offer',
    items: [
      { name: 'Priya Nair', role: 'Brand Designer', client: 'Bloom' },
      { name: 'Tom Ellis', role: 'Senior AE', client: 'Clyro' },
    ],
  },
]

export type Automation = {
  id: string
  name: string
  trigger: string
  status: 'Active' | 'Paused' | 'Draft'
  runs: number
  lastRun: string
}

export const automations: Automation[] = [
  {
    id: '1',
    name: 'New LinkedIn applicant → Slack',
    trigger: 'Application received',
    status: 'Active',
    runs: 428,
    lastRun: '12 min ago',
  },
  {
    id: '2',
    name: 'Interview reminder · 24h',
    trigger: 'Interview scheduled',
    status: 'Active',
    runs: 196,
    lastRun: '1h ago',
  },
  {
    id: '3',
    name: 'Stale role nudge (14+ days)',
    trigger: 'Daily schedule',
    status: 'Active',
    runs: 64,
    lastRun: 'Today 08:00',
  },
  {
    id: '4',
    name: 'Offer accepted → Finance invoice',
    trigger: 'Stage = Placed',
    status: 'Paused',
    runs: 28,
    lastRun: '5d ago',
  },
  {
    id: '5',
    name: 'Rejection email · polite template',
    trigger: 'Stage = Rejected',
    status: 'Draft',
    runs: 0,
    lastRun: 'Never',
  },
]

export const automationRuns = [
  {
    id: '1',
    flow: 'New LinkedIn applicant → Slack',
    result: 'Success',
    detail: 'Posted #recruiting-alerts',
    at: '11:42',
  },
  {
    id: '2',
    flow: 'Interview reminder · 24h',
    result: 'Success',
    detail: 'Emailed Priya Nair + Sam Ortiz',
    at: '10:15',
  },
  {
    id: '3',
    flow: 'Stale role nudge (14+ days)',
    result: 'Success',
    detail: '3 roles flagged to owners',
    at: '08:00',
  },
  {
    id: '4',
    flow: 'New LinkedIn applicant → Slack',
    result: 'Failed',
    detail: 'Slack rate limit',
    at: 'Yesterday',
  },
]

export type OnboardingProgram = {
  id: string
  hire: string
  role: string
  client: string
  start: string
  progress: number
  mentor: string
  status: 'On track' | 'At risk' | 'Complete'
}

export const onboardingPrograms: OnboardingProgram[] = [
  {
    id: '1',
    hire: 'Amelia Croft',
    role: 'Senior AE',
    client: 'Clyro',
    start: '15 Sep',
    progress: 72,
    mentor: 'Alex Chen',
    status: 'On track',
  },
  {
    id: '2',
    hire: 'Ben Torres',
    role: 'Brand Designer',
    client: 'Bloom & Bond',
    start: '1 Oct',
    progress: 35,
    mentor: 'Sam Ortiz',
    status: 'On track',
  },
  {
    id: '3',
    hire: 'Hannah Cho',
    role: 'Product Manager',
    client: 'Forge Analytics',
    start: '22 Aug',
    progress: 100,
    mentor: 'Riley Park',
    status: 'Complete',
  },
  {
    id: '4',
    hire: 'Luke Brennan',
    role: 'Growth Lead',
    client: 'Kinetic Studio',
    start: '8 Sep',
    progress: 48,
    mentor: 'Jordan Lee',
    status: 'At risk',
  },
]

export const trainingModules = [
  { id: '1', name: 'Company & culture intro', duration: '45m', done: 18 },
  { id: '2', name: 'Tools & access setup', duration: '30m', done: 16 },
  { id: '3', name: 'Role-specific shadowing', duration: '2d', done: 12 },
  { id: '4', name: '30-day check-in', duration: '1h', done: 9 },
]

export type Employee = {
  id: string
  name: string
  role: string
  client: string
  start: string
  status: 'Active' | 'Probation' | 'Notice'
  location: string
}

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Amelia Croft',
    role: 'Senior AE',
    client: 'Clyro',
    start: '15 Sep 2025',
    status: 'Probation',
    location: 'London',
  },
  {
    id: '2',
    name: 'Hannah Cho',
    role: 'Product Manager',
    client: 'Forge Analytics',
    start: '22 Aug 2025',
    status: 'Active',
    location: 'Remote · UK',
  },
  {
    id: '3',
    name: 'Daniel Okeke',
    role: 'Full-stack Eng',
    client: 'Northline Group',
    start: '3 Mar 2025',
    status: 'Active',
    location: 'Manchester',
  },
  {
    id: '4',
    name: 'Sophie Lang',
    role: 'Content Strategist',
    client: 'Halcyon Media',
    start: '12 Jan 2025',
    status: 'Active',
    location: 'London',
  },
  {
    id: '5',
    name: 'Marcus Hale',
    role: 'Perf. Marketer',
    client: 'Aether Ads',
    start: '19 Nov 2024',
    status: 'Notice',
    location: 'Bristol',
  },
  {
    id: '6',
    name: 'Ivy Chen',
    role: 'Ops Lead',
    client: 'Drift Commerce',
    start: '2 Jun 2024',
    status: 'Active',
    location: 'Remote · EU',
  },
]

export type Invoice = {
  id: string
  client: string
  role: string
  amount: string
  status: 'Paid' | 'Due' | 'Overdue' | 'Draft'
  due: string
}

export const invoices: Invoice[] = [
  {
    id: 'INV-1042',
    client: 'Clyro',
    role: 'Senior AE placement',
    amount: '£18,000',
    status: 'Due',
    due: '12 Oct',
  },
  {
    id: 'INV-1041',
    client: 'Forge Analytics',
    role: 'PM placement',
    amount: '£20,000',
    status: 'Paid',
    due: '28 Sep',
  },
  {
    id: 'INV-1040',
    client: 'Kinetic Studio',
    role: 'Retainer · Oct',
    amount: '£6,500',
    status: 'Paid',
    due: '1 Oct',
  },
  {
    id: 'INV-1039',
    client: 'Northline Group',
    role: 'Eng placement',
    amount: '£25,000',
    status: 'Overdue',
    due: '20 Sep',
  },
  {
    id: 'INV-1038',
    client: 'Bloom & Bond',
    role: 'Designer placement',
    amount: '£12,000',
    status: 'Draft',
    due: '—',
  },
]

export const retainers = [
  { client: 'Kinetic Studio', monthly: '£6,500', seats: 3, renews: '1 Nov' },
  { client: 'Forge Analytics', monthly: '£4,200', seats: 2, renews: '15 Nov' },
  { client: 'Clyro', monthly: '£8,000', seats: 4, renews: '1 Dec' },
]

export type DataSource = {
  id: string
  name: string
  type: string
  records: string
  freshness: string
  status: 'Healthy' | 'Lagging' | 'Error'
}

export const dataSources: DataSource[] = [
  {
    id: '1',
    name: 'Greenhouse ATS',
    type: 'Pipeline sync',
    records: '12.4k',
    freshness: '4 min ago',
    status: 'Healthy',
  },
  {
    id: '2',
    name: 'LinkedIn Recruiter',
    type: 'Outbound + InMail',
    records: '8.1k',
    freshness: '22 min ago',
    status: 'Healthy',
  },
  {
    id: '3',
    name: 'Indeed Apply',
    type: 'Applications',
    records: '3.6k',
    freshness: '1h ago',
    status: 'Lagging',
  },
  {
    id: '4',
    name: 'HubSpot CRM',
    type: 'Clients & retainers',
    records: '412',
    freshness: '12 min ago',
    status: 'Healthy',
  },
  {
    id: '5',
    name: 'Xero',
    type: 'Invoices',
    records: '890',
    freshness: 'Failed',
    status: 'Error',
  },
]

export const miningInsights = [
  {
    title: 'Creative desk conversion',
    detail: 'Interview → offer up 14% when sourced via referral first.',
  },
  {
    title: 'Time-to-hire outlier',
    detail: 'Northline eng roles sit 35d above portfolio average.',
  },
  {
    title: 'Channel ROI',
    detail: 'LinkedIn drives 64% of placed hires; Indeed 21%; referrals 15%.',
  },
]

export const settingsMembers = [
  { name: 'Alex Chen', role: 'Admin · Growth desk', email: 'alex@jacks.internal' },
  { name: 'Sam Ortiz', role: 'Recruiter · Creative', email: 'sam@jacks.internal' },
  { name: 'Jordan Lee', role: 'Recruiter · Growth', email: 'jordan@jacks.internal' },
  { name: 'Riley Park', role: 'Recruiter · Product', email: 'riley@jacks.internal' },
  { name: 'Morgan Blake', role: 'Ops · Finance', email: 'morgan@jacks.internal' },
]

export const settingsIntegrations = [
  { name: 'Greenhouse', status: 'Connected' },
  { name: 'Slack', status: 'Connected' },
  { name: 'Calendly', status: 'Connected' },
  { name: 'HubSpot', status: 'Connected' },
  { name: 'Xero', status: 'Needs auth' },
  { name: 'LinkedIn Recruiter', status: 'Connected' },
]

export const sectionNav: Record<
  string,
  { id: string; label: string }[]
> = {
  '/': [
    { id: 'overview', label: 'Overview' },
    { id: 'open-roles', label: 'Open roles' },
    { id: 'candidates', label: 'Candidates' },
  ],
  '/recruitment': [
    { id: 'pipeline', label: 'Pipeline board' },
    { id: 'candidates', label: 'All candidates' },
    { id: 'roles', label: 'Open roles' },
  ],
  '/automations': [
    { id: 'flows', label: 'Flows' },
    { id: 'runs', label: 'Run log' },
    { id: 'templates', label: 'Templates' },
  ],
  '/onboarding': [
    { id: 'active', label: 'Active programs' },
    { id: 'modules', label: 'Training modules' },
    { id: 'templates', label: 'Templates' },
  ],
  '/employees': [
    { id: 'directory', label: 'Directory' },
    { id: 'docs', label: 'Documents' },
    { id: 'time-off', label: 'Time off' },
  ],
  '/finance': [
    { id: 'invoices', label: 'Invoices' },
    { id: 'retainers', label: 'Retainers' },
    { id: 'reports', label: 'P&L snapshot' },
  ],
  '/data-mining': [
    { id: 'sources', label: 'Sources' },
    { id: 'insights', label: 'Insights' },
    { id: 'exports', label: 'Exports' },
  ],
  '/settings': [
    { id: 'workspace', label: 'Workspace' },
    { id: 'members', label: 'Members' },
    { id: 'integrations', label: 'Integrations' },
  ],
}
