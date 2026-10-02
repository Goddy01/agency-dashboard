import { Header } from '../components/Header'
import { LivePipeline } from '../components/LivePipeline'
import { PipelineMixCard } from '../components/PipelineMixCard'
import { PlacementSummary } from '../components/PlacementSummary'
import { RoleLookup } from '../components/RoleLookup'
import { StatCard } from '../components/StatCard'

export function Dashboard() {
  return (
    <>
      <Header />

      <div className="grid gap-4 sm:gap-5 xl:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 xl:flex xl:flex-col">
          <StatCard
            title="Placements"
            amount="28"
            change={12}
            comparedTo="25"
            lastWeekLabel="Open reqs"
            lastWeekAmount="73"
            delay={80}
          />
          <StatCard
            title="Avg time to hire"
            amount="132d"
            change={8}
            comparedTo="122d"
            lastWeekLabel="Retention"
            lastWeekAmount="100%"
            invertTone
            delay={140}
          />
          <div className="sm:col-span-2 xl:col-span-1">
            <PipelineMixCard />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <RoleLookup />
          <LivePipeline />
          <PlacementSummary />
        </section>
      </div>
    </>
  )
}
