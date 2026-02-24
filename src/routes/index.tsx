import { Navigate, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Navigate to={'/dashboard/investigations/1/graph/sketch-1'} />
})
