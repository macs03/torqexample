import { ScrollView, StyleSheet } from "react-native";

import { CartItemCard } from "@/app/_components/CartItemCard";
import { ThemedButton } from "@/components/themed-button";
import { ThemedCard } from "@/components/themed-card";
import { ThemedDivider } from "@/components/themed-divider";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCart } from "@/contexts/CartContext";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function CartScreen() {
  const { items, getTotal, clearCart } = useCart();
  const total = getTotal();

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Shopping Cart
          </ThemedText>
        </ThemedView>

        {items.length === 0 ? (
          <ThemedView style={styles.emptyContainer}>
            <ThemedText type="default" style={styles.emptyText}>
              Your cart is empty
            </ThemedText>
            <ThemedText type="default" style={styles.emptySubtext}>
              Add some delicious bagels to get started!
            </ThemedText>
          </ThemedView>
        ) : (
          <>
            {items.map(item => (
              <CartItemCard key={item.product.id} item={item} />
            ))}

            <ThemedDivider style={styles.totalDivider} />

            <ThemedCard variant="elevated" style={styles.totalCard}>
              <ThemedView style={styles.totalRow}>
                <ThemedText type="title" style={styles.totalLabel}>
                  Total:
                </ThemedText>
                <ThemedText type="title" style={styles.totalAmount}>
                  {formatPrice(total)}
                </ThemedText>
              </ThemedView>
            </ThemedCard>

            <ThemedButton
              title="Clear Cart"
              variant="outline"
              onPress={clearCart}
              style={styles.clearButton}
            />
          </>
        )}
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
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 8,
    opacity: 0.7
  },
  emptySubtext: {
    fontSize: 14,
    opacity: 0.5,
    textAlign: "center"
  },
  totalDivider: {
    marginVertical: 8
  },
  totalCard: {
    marginTop: 8
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  totalLabel: {
    fontSize: 20
  },
  totalAmount: {
    fontSize: 24
  },
  clearButton: {
    marginTop: 8
  }
});
