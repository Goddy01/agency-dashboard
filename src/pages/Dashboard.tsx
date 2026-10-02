import {
  filledBySegment,
  openByUrgency,
  rolesFilledSeries,
  timeToHireSeries,
} from '../data/mock'
import { PortfolioHeader } from '../components/dashboard/PortfolioHeader'
import { MetricChartCard } from '../components/dashboard/MetricChartCard'
import { OpenRolesTable } from '../components/dashboard/OpenRolesTable'
import { PipelinePanel } from '../components/dashboard/PipelinePanel'
import { ClientsTable } from '../components/dashboard/ClientsTable'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <PortfolioHeader />

      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
        <MetricChartCard
          title="Placements"
          tone="green"
          metrics={[
            {
              label: 'Roles filled',
              value: '28',
              delta: '+12% vs prior',
              deltaTone: 'positive',
            },
            {
              label: 'Open reqs',
              value: '73',
              hint: '12 candidates in late stage',
            },
          ]}
          data={rolesFilledSeries}
          footer={filledBySegment}
          footerLabel="Placements by desk"
        />
        <MetricChartCard
          title="Hiring velocity"
          tone="purple"
          metrics={[
            {
              label: 'Avg time to hire',
              value: '132d',
              delta: '+8% slower',
              deltaTone: 'negative',
            },
            {
              label: 'Placement retention',
              value: '100%',
              hint: '20 of 20 still in seat',
            },
          ]}
          data={timeToHireSeries}
          valueFormatter={(v) => `${v}d`}
          footer={openByUrgency}
          footerLabel="Open reqs by urgency"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">
        <OpenRolesTable />
        <PipelinePanel />
      </div>

      <ClientsTable />
    </div>
  )
}
