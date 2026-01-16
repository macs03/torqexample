import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedButton } from "@/components/themed-button";
import { ThemedCard } from "@/components/themed-card";
import { ThemedDivider } from "@/components/themed-divider";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/contexts/ToastContext";
import { Product } from "@/types/product";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

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
          onPress={() => {
            addToCart(product);
            showToast(`${product.name} added to cart!`);
          }}
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

const styles = StyleSheet.create({
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
