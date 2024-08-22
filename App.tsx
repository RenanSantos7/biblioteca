import { PaperProvider } from 'react-native-paper'
import { DataProvider } from './src/contexts/dataContext.tsx'
import Base from './src/pages/Base.tsx'

export default function App() {
	return (
		<DataProvider>
			<PaperProvider>
				<Base />
			</PaperProvider>
		</DataProvider>
	)
}
