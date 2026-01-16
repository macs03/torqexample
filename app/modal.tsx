import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedButton } from "@/components/themed-button";
import { ThemedCard } from "@/components/themed-card";
import { ThemedDivider } from "@/components/themed-divider";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/contexts/ToastContext";
import { MOCK_PRODUCTS } from "@/types/product";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function ProductDetailsModal() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title">Product not found</ThemedText>
        <ThemedButton
          title="Go back"
          variant="primary"
          onPress={() => router.back()}
          style={styles.link}
        />
      </ThemedView>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.container}>
        <ThemedCard variant="elevated" style={styles.productCard}>
          <ThemedView style={styles.header}>
            <ThemedText type="title" style={styles.productName}>
              {product.name}
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.productPrice}>
              {formatPrice(product.price)}
            </ThemedText>
          </ThemedView>

          <ThemedDivider style={styles.divider} />

          <ThemedView style={styles.descriptionContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Description
            </ThemedText>
            <ThemedText style={styles.description}>
              {product.description}
            </ThemedText>
          </ThemedView>

          <ThemedDivider style={styles.divider} />

          <ThemedView style={styles.actionsContainer}>
            <ThemedButton
              title="Add to Cart"
              variant="primary"
              size="large"
              onPress={() => {
                addToCart(product);
                showToast(`${product.name} added to cart!`);
                router.back();
              }}
              style={styles.addButton}
            />
          </ThemedView>
        </ThemedCard>

        <ThemedButton
          title="Close"
          variant="outline"
          onPress={() => router.back()}
          style={styles.link}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 16
  },
  productCard: {
    marginBottom: 8
  },
  header: {
    marginBottom: 8
  },
  productName: {
    marginBottom: 16
  },
  productPrice: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    marginTop: 8
  },
  divider: {
    marginVertical: 16
  },
  descriptionContainer: {
    marginBottom: 8
  },
  sectionTitle: {
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9
  },
  actionsContainer: {
    marginTop: 8
  },
  addButton: {
    width: "100%"
  },
  link: {
    marginTop: 8
  }
});
