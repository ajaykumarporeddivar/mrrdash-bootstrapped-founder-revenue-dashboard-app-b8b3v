'use client'
import { NAV_ITEMS } from '@/lib/data'
import { cn } from '@/lib/utils'
import { LayoutDashboard, Calculator, Target, Trophy, Settings, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard: LayoutDashboard,
  Calculator: Calculator,
  Target: Target,
  Trophy: Trophy,
  Settings: Settings,
  // Add other icons as needed if NAV_ITEMS expands
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <div className="flex min-h-screen bg-zinc-50">
          <nav className="flex flex-col w-64 bg-zinc-900 text-zinc-100 p-4">
            <h1 className="text-xl font-bold tracking-tight text-white mb-6">Nexus MRR</h1>
            <ul>
              {NAV_ITEMS.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li key={item.href} className="mb-2">
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 py-2 px-4 rounded-lg transition-colors',
                        {
                          'bg-zinc-700 text-white': pathname === item.href || (item.href === '/dashboard' && pathname === '/'), // Highlight dashboard for root too
                          'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100': pathname !== item.href && !(item.href === '/dashboard' && pathname === '/'),
                        }
                      )}
                    >
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <main className="flex-1 flex flex-col overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}