import { FlatList, Text, View } from 'react-native';
import { styles } from './HomeStyles';
import Scroll from '../../components/Scroll';
import useDataContext from '../../contexts/dataContext';
import CardLivro from './components/CardLivro';

interface HomeProps {
    
};

export default function Home({ }: HomeProps) {
    const { livros } = useDataContext();

    return (
        <View style={styles.container}>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo1}>Biblioteca</Text>
            </View>
            <FlatList
                data={livros}
                renderItem={({ item }) => <CardLivro livro={item} />}
                numColumns={2}
                contentContainerStyle={{
                    columnGap: 10
                }}
            />
        </View>
    );
};