import { AppLayout } from '@/components/layout';

export function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}