import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedButton } from "@/components/themed-button";
import { ThemedCard } from "@/components/themed-card";
import { ThemedDivider } from "@/components/themed-divider";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCart } from "@/contexts/CartContext";
import { MOCK_PRODUCTS, Product } from "@/types/product";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <ThemedCard variant="elevated" style={styles.productCard}>
      <ThemedView style={styles.productHeader}>
        <ThemedView style={styles.productInfo}>
          <ThemedText type="subtitle" style={styles.productName}>
            {product.name}
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.productPrice}>
            {formatPrice(product.price)}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedDivider style={styles.divider} />

      <ThemedText style={styles.productDescription} numberOfLines={2}>
        {product.description}
      </ThemedText>

      <ThemedView style={styles.actionsContainer}>
        <ThemedButton
          title="Add to Cart"
          variant="primary"
          size="small"
          onPress={() => addToCart(product)}
          style={styles.addButton}
        />
        <Link href={`/modal?id=${product.id}`} asChild>
          <ThemedButton
            title="View Details"
            variant="outline"
            size="small"
            style={styles.detailsButton}
          />
        </Link>
      </ThemedView>
    </ThemedCard>
  );
}

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
  },
  productCard: {
    marginBottom: 8
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8
  },
  productInfo: {
    flex: 1
  },
  productName: {
    marginBottom: 4
  },
  productPrice: {
    fontSize: 20
  },
  productDescription: {
    marginTop: 8,
    marginBottom: 12,
    opacity: 0.8
  },
  divider: {
    marginVertical: 8
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8
  },
  addButton: {
    flex: 1
  },
  detailsButton: {
    flex: 1
  }
});
