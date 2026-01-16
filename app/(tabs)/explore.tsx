import * as Haptics from "expo-haptics";
import { Pressable, ScrollView, StyleSheet } from "react-native";

import { ThemedButton } from "@/components/themed-button";
import { ThemedCard } from "@/components/themed-card";
import { ThemedDivider } from "@/components/themed-divider";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useCart } from "@/contexts/CartContext";
import { useThemeColor } from "@/hooks/use-theme-color";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function CartItemCard({
  item
}: {
  item: {
    product: { id: string; name: string; price: number };
    quantity: number;
  };
}) {
  const { updateQuantity, removeFromCart } = useCart();
  const iconColor = useThemeColor({}, "icon");

  const subtotal = item.product.price * item.quantity;

  return (
    <ThemedCard variant="elevated" style={styles.cartItemCard}>
      <ThemedView style={styles.cartItemHeader}>
        <ThemedView style={styles.cartItemInfo}>
          <ThemedText type="subtitle" style={styles.cartItemName}>
            {item.product.name}
          </ThemedText>
          <ThemedText type="default" style={styles.cartItemPrice}>
            {formatPrice(item.product.price)} each
          </ThemedText>
        </ThemedView>
        <Pressable
          onPress={() => {
            if (process.env.EXPO_OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
            removeFromCart(item.product.id);
          }}
          style={({ pressed }) => [
            styles.removeButton,
            { opacity: pressed ? 0.6 : 1 }
          ]}
        >
          <IconSymbol name="trash.fill" size={20} color={iconColor} />
        </Pressable>
      </ThemedView>

      <ThemedDivider style={styles.divider} />

      <ThemedView style={styles.quantityContainer}>
        <ThemedView style={styles.quantityControls}>
          <ThemedButton
            title="-"
            variant="outline"
            size="small"
            onPress={() => updateQuantity(item.product.id, item.quantity - 1)}
            style={styles.quantityButton}
          />
          <ThemedText type="defaultSemiBold" style={styles.quantityText}>
            {item.quantity}
          </ThemedText>
          <ThemedButton
            title="+"
            variant="outline"
            size="small"
            onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
            style={styles.quantityButton}
          />
        </ThemedView>
        <ThemedText type="defaultSemiBold" style={styles.subtotalText}>
          Subtotal: {formatPrice(subtotal)}
        </ThemedText>
      </ThemedView>
    </ThemedCard>
  );
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
  cartItemCard: {
    marginBottom: 8
  },
  cartItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8
  },
  cartItemInfo: {
    flex: 1
  },
  cartItemName: {
    marginBottom: 4
  },
  cartItemPrice: {
    opacity: 0.7
  },
  removeButton: {
    padding: 8,
    minWidth: 40,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    marginVertical: 8
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  quantityButton: {
    minWidth: 40
  },
  quantityText: {
    fontSize: 18,
    minWidth: 30,
    textAlign: "center"
  },
  subtotalText: {
    fontSize: 16
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
