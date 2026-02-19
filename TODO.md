# TODO: Implement Subcategories Feature

## Plan

1. [x] Add new route in Main.jsx for `/menu/:category/:subcategory`
2. [x] Update MenuCategory.jsx to check for subcategories and display them
3. [x] Update MenuCard.jsx to handle subcategory navigation
4. [x] Update ItemScreen.jsx to search products in subcategories

## Implementation Complete

All changes have been implemented:

- Main.jsx: Added routes for `/menu/:category/:subcategory` and `/menu/:category/:subcategory/:product`
- MenuCategory.jsx: Now displays subcategories if present, generates 4-part URLs for products in subcategories
- MenuCard.jsx: Added `isSubcategory` prop support
- ItemScreen.jsx: Now handles both 3-param routes (category products) and 4-param routes (subcategory products)

**URL Structure:**

- `/menu/cookies` → Category page (shows subcategories or products)
- `/menu/cookies/chocolate` → Subcategory page (shows products)
- `/menu/cookies/chocolate/chocolate-chip-cookie` → Product page (4-part URL for subcategory products)
- `/menu/cookies/smore-cookie` → Product page (3-part URL for direct category products)
