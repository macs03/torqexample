import { ScrollView, StyleSheet } from "react-native";

import { ProductCard } from "@/app/_components/ProductCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MOCK_PRODUCTS } from "@/types/product";

export default function ProductsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Our Bagels
          </ThemedText>
          <ThemedText type="default" style={styles.subtitle}>
            Freshly baked daily
          </ThemedText>
        </ThemedView>

        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
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
