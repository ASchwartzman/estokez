import { DashboardEstoques } from '../../src/components/Dashboard/DashboardEstoques'
import DashboardLayout from '../../src/components/Layouts/DashboardLayout'
import { withProtected } from '../../src/firebase/routesWrappers'

function Estoques() {
  return (
    <DashboardLayout>
      <DashboardEstoques />
    </DashboardLayout>
  )
}

export default withProtected(Estoques)
