import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProductCard } from "@/app/_components/ProductCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MOCK_PRODUCTS } from "@/types/product";

export default function ProductsScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ThemedView style={styles.container}>
        <FlatList
          data={MOCK_PRODUCTS}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <ThemedView style={styles.header}>
              <ThemedText type="title" style={styles.title}>
                Our Bagels
              </ThemedText>
              <ThemedText type="default" style={styles.subtitle}>
                Freshly baked daily
              </ThemedText>
            </ThemedView>
          }
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: "white"
  },
  container: {
    flex: 1
  },
  listContent: {
    padding: 16,
    gap: 16
  },
  header: {
    marginBottom: 8
  },
  title: {
    marginBottom: 4
  },
  subtitle: {
    opacity: 0.7
  }
});
