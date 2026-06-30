export const NAV_ITEMS = [
  { icon: 'LayoutDashboard', label: 'Dashboard', href: '/dashboard' },
  { icon: 'Calculator', label: 'Tax Estimate', href: '/dashboard/tax-estimate' },
  { icon: 'Target', label: 'MRR Goal Tracking', href: '/dashboard/mrr-goal-tracking' },
  { icon: 'Trophy', label: 'Milestone Celebrations', href: '/dashboard/milestone-celebrations' },
  { icon: 'Settings', label: 'Settings', href: '/dashboard/settings' },
];

export const FEATURES = [
  { id: 'FC-1', name: 'Tax Estimate', urlSlug: 'tax-estimate' },
  { id: 'FC-2', name: 'MRR Goal Tracking', urlSlug: 'mrr-goal-tracking' },
  { id: 'FC-3', name: 'Milestone Celebrations', urlSlug: 'milestone-celebrations' },
];

export const INTEGRATIONS = [
  { name: 'Stripe', icon: 'Stripe' },
  { name: 'Paddle', icon: 'Paddle' },
  { name: 'Gumroad', icon: 'Gumroad' },
  { name: 'LemonSqueezy', icon: 'LemonSqueezy' },
  { name: 'AppSumo', icon: 'AppSumo' },
  { name: 'PayPal', icon: 'PayPal' },
];

export const JURISDICTIONS = [
  { name: 'US Federal' },
  { name: 'Canada' },
  { name: 'EU' },
];

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
