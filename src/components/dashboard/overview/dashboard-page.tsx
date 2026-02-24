import { useState } from 'react'
import { DashboardHeader } from './dashboard-header'
// import { DashboardStats } from "./dashboard-stats"
import { InvestigationsList } from '../investigation/investigations-list'
// import { RecentActivity } from "./recent-activity"
import { Investigation } from '@/types'

// Mock data for demo mode
const mockInvestigations: Investigation[] = [
  {
    id: '1',
    name: 'Domain Investigation',
    description: 'Investigating suspicious domain activity',
    status: 'active',
    created_at: new Date().toISOString(),
    last_updated_at: new Date().toISOString(),
    sketches: [],
    analyses: [],
    owner: { id: 'demo', first_name: 'Demo', last_name: 'User' },
    owner_id: 'demo',
  },
  {
    id: '2',
    name: 'Network Recon',
    description: 'Network reconnaissance and mapping',
    status: 'active',
    created_at: new Date().toISOString(),
    last_updated_at: new Date().toISOString(),
    sketches: [],
    analyses: [],
    owner: { id: 'demo', first_name: 'Demo', last_name: 'User' },
    owner_id: 'demo',
  },
]

export function DashboardPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [filter, setFilter] = useState<'all' | 'active' | 'closed'>('all')
  const [search, setSearch] = useState<string>('')

  // Use mock data for demo mode (no backend)
  const investigations = mockInvestigations

  const casesCount = investigations.length ?? (0 as number)
  const activeCasesCount =
    investigations.filter((i: Investigation) => i.status === 'active').length ?? (0 as number)

  return (
    <main className="flex-1 h-full overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <DashboardHeader search={search} setSearch={setSearch} view={view} setView={setView} />
        {/* <DashboardStats casesCount={casesCount} activeCasesCount={activeCasesCount} /> */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <InvestigationsList
              search={search}
              casesCount={casesCount}
              activeCasesCount={activeCasesCount}
              investigations={investigations}
              view={view}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          {/* <div>
            <RecentActivity />
          </div> */}
        </div>
      </div>
    </main>
  )
}
