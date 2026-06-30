export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export type RevenueEventType = 'subscription' | 'one-time-purchase' | 'refund' | 'chargeback' | 'adjustment' | 'churn' | 'expansion' | 'contraction';
export type RevenueSource = 'Stripe' | 'Paddle' | 'Gumroad' | 'LemonSqueezy' | 'AppSumo' | 'PayPal';
export type PaymentStatus = 'paid' | 'pending' | 'failed' | 'refunded';

export interface RevenueEvent {
  id: string;
  createdAt: string;
  updatedAt: string;
  source: RevenueSource;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  timestamp: string; // ISO date string
  eventType: RevenueEventType;
  description: string;
  customerName?: string;
  customerEmail?: string;
  status: PaymentStatus;
  product?: string;
  plan?: string;
}

export interface MRRChange {
  id: string;
  date: string; // YYYY-MM-DD
  type: 'new' | 'expansion' | 'churn' | 'contraction';
  amount: number;
  customerName?: string;
  product?: string;
}

export interface ProductData {
  id: string;
  name: string;
  mrr: number;
  customers: number;
  churnRate: number;
}

export interface ChurnEvent {
  id: string;
  date: string; // ISO date string
  customerName: string;
  reason: string;
  mrrLost: number;
}

export interface AcquisitionChannel {
  id: string;
  name: string;
  cost: number;
  customers: number;
  cac: number;
}

export interface MetricCardData {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  description: string;
}

export interface MonthlySummary {
  month: string; // YYYY-MM
  mrr: number;
  netNewMrr: number;
  churnRate: number;
  ltv: number;
  arr: number;
  customers: number;
}

export interface TaxBracket {
  minIncome: number;
  maxIncome: number | null; // null for highest bracket
  rate: number; // percentage, e.g., 0.25 for 25%
}

export interface JurisdictionTaxInfo {
  name: string;
  currency: 'USD' | 'EUR' | 'GBP';
  taxYearStartMonth: number; // 1 for Jan, 4 for Apr, etc.
  brackets: TaxBracket[];
  quarterlyEstimatePercentage: number; // e.g. 0.25 for 25% of annual for each quarter
}

export interface MrrGoal {
  id: string;
  name: string;
  targetMrr: number;
  currentMrr: number;
  startDate: string; // ISO date
  endDate: string; // ISO date
  status: 'active' | 'completed' | 'failed';
}

export interface Milestone {
  id: string;
  name: string;
  mrrTarget: number;
  dateAchieved?: string; // ISO date
  shareableImage?: string; // URL to an image
  status: 'achieved' | 'pending';
}

export interface NavItem {
  icon: string; // Lucide icon name string
  label: string;
  href: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string; // ISO date string
  message: string;
  type: 'system' | 'user' | 'revenue';
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
  link?: string;
}