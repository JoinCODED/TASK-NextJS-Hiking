import TripDetail from '@/components/TripDetail'

function Trip({ params }) {
  return <TripDetail slug={params.slug} />
}

export default Trip