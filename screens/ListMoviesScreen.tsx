import { 
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';

import { apiGet } from '../services/api';
import { useNavigation } from '@react-navigation/native';

type Movie = {
  id: number;
  title: string;
};

type ItemProps = {
  id: number;
  title: string;
  navigation: any;
};

const ItemMovie = ({id, title, navigation}: ItemProps) => (
  <View>
    <Button
      title={title}
      onPress={() =>
        navigation.navigate('MovieScreen', { movieId: id })
      }
    />
  </View>
);

export default function ListMoviesScreen(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    apiGet('4/list/1', {page: 1})
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => <ItemMovie id={item.id} title={item.title} navigation={navigation} />}
        />
      )}
    </SafeAreaView>
  );
}