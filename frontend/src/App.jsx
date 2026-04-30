import AppShell from './components/layout/AppShell'
import { useShopData } from './hooks/useShopData'

function App() {
  const { shopData, apiStatus } = useShopData()

  console.log('App: shopData keys:', Object.keys(shopData))
  console.log('App: apiStatus:', apiStatus)
  console.log('App: shopData.stats:', shopData?.stats)
  console.log('App: shopData.navLinks:', shopData?.navLinks)

  return <AppShell shopData={shopData} apiStatus={apiStatus} />
}

export default App