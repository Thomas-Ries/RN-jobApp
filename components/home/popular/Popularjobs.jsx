import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

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
    style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : error ? (
        <Text> OOPS ! Quelque chose s'est mal passé 🧐 </Text>
      ): (
        <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
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