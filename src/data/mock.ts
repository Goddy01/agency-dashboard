export type DateRange = '30d' | '90d' | '180d' | '365d'

export const dateRangeLabels: Record<DateRange, string> = {
  '30d': 'Last 30 days',
  '90d': 'Last 90 days',
  '180d': 'Last 6 months',
  '365d': 'Last 12 months',
}

export type ChartPoint = {
  label: string
  value: number
  display?: string
}

export const rolesFilledSeries: ChartPoint[] = [
  { label: 'May', value: 8, display: '8' },
  { label: 'Jun', value: 12, display: '12' },
  { label: 'Jul', value: 10, display: '10' },
  { label: 'Aug', value: 4, display: '4' },
  { label: 'Sep', value: 26, display: '26' },
  { label: 'Oct', value: 6, display: '6' },
]

export const timeToHireSeries: ChartPoint[] = [
  { label: 'May', value: 98, display: '98d' },
  { label: 'Jun', value: 110, display: '110d' },
  { label: 'Jul', value: 86, display: '86d' },
  { label: 'Aug', value: 75, display: '75d' },
  { label: 'Sep', value: 139, display: '139d' },
  { label: 'Oct', value: 10, display: '10d' },
]

export type ChannelStat = {
  id: string
  label: string
  value: string
  hint: string
  tone: 'ok' | 'warn' | 'bad'
}

export const channelStats: ChannelStat[] = [
  {
    id: 'li',
    label: 'LinkedIn',
    value: '18 hires',
    hint: '42 live posts',
    tone: 'ok',
  },
  {
    id: 'indeed',
    label: 'Indeed',
    value: '9 hires',
    hint: '27 live posts',
    tone: 'ok',
  },
  {
    id: 'ref',
    label: 'Referrals',
    value: '3 hires',
    hint: '8 in process',
    tone: 'warn',
  },
]

export type OpenRole = {
  id: string
  title: string
  client: string
  stage: 'Sourcing' | 'Screening' | 'Interview' | 'Offer' | 'On hold'
  recruiter: string
  initials: string
  candidates: number
  daysOpen: number
  fee: string
  urgency: 'Critical' | 'This month' | 'Flexible'
}

export const openRoles: OpenRole[] = [
  {
    id: '1',
    title: 'Senior Account Executive',
    client: 'Clyro',
    stage: 'Offer',
    recruiter: 'Alex Chen',
    initials: 'AC',
    candidates: 3,
    daysOpen: 64,
    fee: '£18k',
    urgency: 'Critical',
  },
  {
    id: '2',
    title: 'Brand Designer',
    client: 'Bloom & Bond',
    stage: 'Interview',
    recruiter: 'Sam Ortiz',
    initials: 'SO',
    candidates: 5,
    daysOpen: 34,
    fee: '£12k',
    urgency: 'This month',
  },
  {
    id: '3',
    title: 'Growth Lead',
    client: 'Kinetic Studio',
    stage: 'Sourcing',
    recruiter: 'Jordan Lee',
    initials: 'JL',
    candidates: 2,
    daysOpen: 18,
    fee: '£22k',
    urgency: 'This month',
  },
  {
    id: '4',
    title: 'Product Manager',
    client: 'Forge Analytics',
    stage: 'Screening',
    recruiter: 'Riley Park',
    initials: 'RP',
    candidates: 7,
    daysOpen: 52,
    fee: '£20k',
    urgency: 'Critical',
  },
  {
    id: '5',
    title: 'Full-stack Engineer',
    client: 'Northline Group',
    stage: 'Interview',
    recruiter: 'Morgan Blake',
    initials: 'MB',
    candidates: 4,
    daysOpen: 27,
    fee: '£25k',
    urgency: 'Flexible',
  },
  {
    id: '6',
    title: 'Head of Ops',
    client: 'Drift Commerce',
    stage: 'Sourcing',
    recruiter: 'Alex Chen',
    initials: 'AC',
    candidates: 1,
    daysOpen: 11,
    fee: '£28k',
    urgency: 'Flexible',
  },
  {
    id: '7',
    title: 'Content Strategist',
    client: 'Halcyon Media',
    stage: 'On hold',
    recruiter: 'Sam Ortiz',
    initials: 'SO',
    candidates: 0,
    daysOpen: 89,
    fee: '£10k',
    urgency: 'Flexible',
  },
  {
    id: '8',
    title: 'Performance Marketer',
    client: 'Aether Ads',
    stage: 'Screening',
    recruiter: 'Jordan Lee',
    initials: 'JL',
    candidates: 6,
    daysOpen: 21,
    fee: '£14k',
    urgency: 'This month',
  },
]

export type PipelineStage = {
  id: string
  label: string
  count: number
  color: string
}

export const pipelineStages: PipelineStage[] = [
  { id: 'sourced', label: 'Sourced', count: 142, color: '#8b919c' },
  { id: 'screen', label: 'Screening', count: 48, color: '#2563eb' },
  { id: 'interview', label: 'Interview', count: 31, color: '#7c3aed' },
  { id: 'offer', label: 'Offer out', count: 9, color: '#e85d2a' },
  { id: 'placed', label: 'Placed', count: 28, color: '#16a34a' },
]

export type InterviewItem = {
  id: string
  time: string
  candidate: string
  role: string
  client: string
  type: 'First' | 'Final' | 'Client'
}

export const todaysInterviews: InterviewItem[] = [
  {
    id: '1',
    time: '09:30',
    candidate: 'Priya Nair',
    role: 'Brand Designer',
    client: 'Bloom & Bond',
    type: 'Final',
  },
  {
    id: '2',
    time: '11:00',
    candidate: 'Tom Ellis',
    role: 'Senior AE',
    client: 'Clyro',
    type: 'Client',
  },
  {
    id: '3',
    time: '14:15',
    candidate: 'Maya Okonkwo',
    role: 'Product Manager',
    client: 'Forge Analytics',
    type: 'First',
  },
  {
    id: '4',
    time: '16:00',
    candidate: 'Chris Vogel',
    role: 'Full-stack Eng',
    client: 'Northline',
    type: 'First',
  },
]

export type ClientRow = {
  id: string
  name: string
  openRoles: number
  filled: number
  avgTth: number | null
  retention: string
  nextInterview: string | null
}

export const clientsByFill: ClientRow[] = [
  {
    id: '1',
    name: 'Kinetic Studio',
    openRoles: 11,
    filled: 6,
    avgTth: 121,
    retention: '100%',
    nextInterview: 'Tomorrow',
  },
  {
    id: '2',
    name: 'Forge Analytics',
    openRoles: 7,
    filled: 5,
    avgTth: 88,
    retention: '100%',
    nextInterview: 'Today 14:15',
  },
  {
    id: '3',
    name: 'Clyro',
    openRoles: 8,
    filled: 4,
    avgTth: 112,
    retention: '100%',
    nextInterview: 'Today 11:00',
  },
  {
    id: '4',
    name: 'Northline Group',
    openRoles: 10,
    filled: 3,
    avgTth: 167,
    retention: '100%',
    nextInterview: 'Today 16:00',
  },
  {
    id: '5',
    name: 'Bloom & Bond',
    openRoles: 4,
    filled: 2,
    avgTth: 98,
    retention: '100%',
    nextInterview: 'Today 09:30',
  },
  {
    id: '6',
    name: 'Drift Commerce',
    openRoles: 6,
    filled: 3,
    avgTth: 156,
    retention: '100%',
    nextInterview: null,
  },
]

export type WorkspaceMeta = {
  name: string
  badge: string
  tagline: string
  age: string
  desks: string[]
  stats: { label: string; value: string }[]
}

export const workspace: WorkspaceMeta = {
  name: 'Jacks Recruitment',
  badge: 'Agency',
  tagline: 'Client placements · contingency & retained',
  age: 'Operating 2 yr 4 mo',
  desks: ['Growth', 'Creative', 'Product', 'Ops'],
  stats: [
    { label: 'Active clients', value: '10' },
    { label: 'Open reqs', value: '73' },
    { label: 'Placements YTD', value: '28' },
    { label: 'Avg time to hire', value: '132d' },
  ],
}

export type NavIcon =
  | 'home'
  | 'recruit'
  | 'auto'
  | 'train'
  | 'hub'
  | 'finance'
  | 'data'

export const iconNav: {
  to: string
  label: string
  icon: NavIcon
  soon?: boolean
}[] = [
  { to: '/', label: 'Dashboard', icon: 'home' },
  { to: '/recruitment', label: 'Recruitment', icon: 'recruit' },
  { to: '/automations', label: 'Automations', icon: 'auto' },
  { to: '/onboarding', label: 'Onboarding', icon: 'train', soon: true },
  { to: '/employees', label: 'Employee Hub', icon: 'hub' },
  { to: '/finance', label: 'Finance', icon: 'finance' },
  { to: '/data-mining', label: 'Data Mining', icon: 'data' },
]

export const secondaryLinks = [
  { id: 'overview', label: 'Overview' },
  { id: 'open-roles', label: 'Open roles' },
  { id: 'candidates', label: 'Candidates' },
]

export const secondaryBoards = [
  { id: 'retained', label: 'Retained searches' },
  { id: 'contingency', label: 'Contingency' },
]

export type RegionBar = { label: string; pct: number; color: string }

export const filledBySegment: RegionBar[] = [
  { label: 'Creative', pct: 34, color: '#e85d2a' },
  { label: 'Product', pct: 28, color: '#7c3aed' },
  { label: 'Growth', pct: 22, color: '#16a34a' },
  { label: 'Ops', pct: 16, color: '#2563eb' },
]

export const openByUrgency: RegionBar[] = [
  { label: 'Critical', pct: 18, color: '#dc2626' },
  { label: 'Due this month', pct: 41, color: '#f59e0b' },
  { label: 'Flexible', pct: 41, color: '#16a34a' },
]
