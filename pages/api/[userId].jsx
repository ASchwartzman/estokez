import { useRouter } from 'next/router'

function Dashboard() {
  const router = useRouter()
  return <div>{router.query.userId}</div>
}

export default Dashboard
