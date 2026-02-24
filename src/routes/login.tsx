import { Navigate, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: () => <Navigate to="/dashboard" />
})
