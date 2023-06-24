import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1
  });

  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popularjobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

    <View
    style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : error ? (
        <Text> OOPS ! Quelque chose s'est mal passé 🧐 </Text>
      ) : (
        <FlatList
        data={data}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PopularJobCard
          item={item} />
        )}>
        </FlatList>
      )}
    </View>

    </View>
  )
}

export default Popularjobs