import * as Haptics from "expo-haptics";
import { Pressable, StyleSheet } from "react-native";

import { ThemedButton } from "@/components/themed-button";
import { ThemedCard } from "@/components/themed-card";
import { ThemedDivider } from "@/components/themed-divider";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useCart } from "@/contexts/CartContext";
import { useThemeColor } from "@/hooks/use-theme-color";
import { CartItem } from "@/types/product";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function CartItemCard({ item }: { item: CartItem }) {
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

const styles = StyleSheet.create({
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
  }
});
