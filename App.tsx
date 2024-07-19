import { DataProvider } from './src/contexts/dataContext.tsx'
import Base from './src/pages/Base.tsx'

export default function App() {
	return (
		<DataProvider>
			<Base />
		</DataProvider>
	)
}
