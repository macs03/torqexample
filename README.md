# 🥯 Bagel Store E-commerce

A simple mobile e-commerce application built with React Native and Expo, designed for a bagel store. The app implements a complete shopping cart flow with an optimized user experience.

## 📱 Features

### Main Functionality
- **Product Catalog**: List of available bagels with detailed information
- **Shopping Cart**: Complete item management with quantity controls
- **Product Details**: Modal view with complete information and quantity selector
- **Visual Feedback**: Toast notification system to confirm user actions
- **Adaptive Design**: Support for light and dark mode
- **Intuitive Navigation**: Tabs for products and shopping cart

### Technical Features
- ✅ File-based routing with Expo Router
- ✅ Global state management with React Context API
- ✅ Reusable and themed components
- ✅ Performance optimization with FlatList
- ✅ TypeScript for type safety
- ✅ Unit tests configured

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) ~54.0.31
- **React Native**: 0.81.5
- **Navigation**: Expo Router ~6.0.21
- **Language**: TypeScript ~5.9.2
- **Animations**: React Native Reanimated ~4.1.1
- **Testing**: Jest + React Native Testing Library

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed automatically with npm)

### Installation Steps

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd interviewExercise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the project**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on specific platform**
   ```bash
   # iOS
   npm run ios
   # or press 'i' in the terminal
   
   # Android
   npm run android
   # or press 'a' in the terminal
   
   # Web
   npm run web
   # or press 'w' in the terminal
   ```

## 🚀 Usage

### User Flow

1. **View Products**: In the "Products" tab, browse through the list of available bagels
2. **Add to Cart**:
   - **From the list**: Press "Add to Cart" directly
   - **From details**: Press "View Details", adjust the quantity, and press "Add to Cart"
3. **Manage Cart**: In the "Cart" tab, you can:
   - View all added items
   - Adjust quantities with +/- buttons
   - Remove individual items
   - View calculated total
   - Clear the entire cart

### Interactions
- When adding products, you'll see a confirmation toast
- The modal closes automatically after adding a product
- Quantities update in real-time
- Total is calculated automatically

## 📁 Project Structure

```
interviewExercise/
├── app/                          # Application routes (Expo Router)
│   ├── _components/             # App-specific components
│   │   ├── ProductCard.tsx      # Product card for the list
│   │   └── CartItemCard.tsx     # Cart item card
│   ├── (tabs)/                  # Tab navigation
│   │   ├── index.tsx            # Products screen
│   │   └── explore.tsx          # Cart screen
│   ├── modal.tsx                # Product details modal
│   └── _layout.tsx              # Main layout with providers
├── components/                   # Reusable components
│   ├── themed-*.tsx            # Theme-aware components
│   └── ui/                     # Base UI components
├── contexts/                     # Context API for global state
│   ├── CartContext.tsx          # Shopping cart state management
│   └── ToastContext.tsx         # Toast notification system
├── types/                        # TypeScript definitions
│   └── product.ts               # Product and CartItem types
├── hooks/                        # Custom hooks
│   ├── use-color-scheme.ts      # Theme detection hook
│   └── use-theme-color.ts       # Thematic color hook
└── constants/
    └── theme.ts                 # Theme and color configuration
```

## 🧩 Main Components

### ProductCard
Component that displays a product in the list with:
- Name and price
- Description (truncated)
- Buttons to add to cart and view details

### CartItemCard
Component that displays a cart item with:
- Product information
- Quantity controls (+/-)
- Remove button
- Subtotal calculation

### Product Modal
Detailed product view with:
- Complete information
- Quantity selector
- Real-time subtotal calculation
- Add to cart button

## 🔄 State Management

### CartContext
Provides global state for the shopping cart:

```typescript
{
  items: CartItem[]           // Items in cart
  addToCart(product, qty)     // Add product
  removeFromCart(productId)   // Remove product
  updateQuantity(id, qty)     // Update quantity
  clearCart()                 // Clear cart
  getTotal()                  // Calculate total
  getItemCount()              // Count total items
}
```

### ToastContext
Notification system for visual feedback:

```typescript
{
  showToast(message, type)    // Show toast
}
```

## 🎨 Themes and Styles

The application supports light and dark mode through:
- `useColorScheme()` hook to detect system preferences
- `Themed*` components that adapt automatically
- Colors defined in `constants/theme.ts`

## 🧪 Testing

The project includes configuration for unit tests:

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

Available tests:
- UI Components (ThemedText)
- E-commerce components (ProductCard, CartItemCard)
- Contexts (CartContext, ToastContext)

## 📝 Available Scripts

```bash
npm start          # Start development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web browser
npm run lint       # Run linter
npm test           # Run tests
npm run reset-project  # Reset project to initial state
```

## 🔧 Configuration

### TypeScript
The project uses TypeScript with strict configuration. Paths are configured with the `@/` alias for absolute imports.

### ESLint
Configured with `eslint-config-expo` to follow React Native and Expo best practices.

### Jest
Configured with `jest-expo` and `@testing-library/react-native` for React Native component testing.

## 🎯 Future Improvements

Some potential improvements to expand functionality:

- [ ] Cart persistence with AsyncStorage
- [ ] Backend integration for real products
- [ ] Authentication system
- [ ] Checkout process
- [ ] Purchase history
- [ ] Product search and filters
- [ ] Real product images
- [ ] Favorites system

## 📄 License

This project is private and was developed as an interview exercise.

## 👨‍💻 Development

Developed with:
- React Native
- Expo
- TypeScript
- Expo Router

---

**Note**: This project was designed to demonstrate a simple and complete e-commerce flow following React Native and Expo best practices.
