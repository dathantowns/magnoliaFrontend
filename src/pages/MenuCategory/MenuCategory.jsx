import "./MenuCategory.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";
import BackBtn from "../../components/BackBtn/BackBtn";

function MenuCategory({ menu, selectedCategory }) {
  const { category: categoryParam, subcategory: subcategoryParam } =
    useParams();
  const navigate = useNavigate();

  if (!menu) {
    return <div>Loading...</div>;
  }

  // Get the selected category title from URL params
  if (!selectedCategory) {
    selectedCategory = categoryParam
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Get the category object from menu
  const category = menu.categories.find(
    (cat) => cat.title === selectedCategory,
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  // Determine what to display: subcategories, products, or subcategory products
  const hasSubcategories =
    category.subcategories && category.subcategories.length > 0;

  // Get products to display
  let products = [];
  let displayTitle = selectedCategory;
  let showBackButton = subcategoryParam !== undefined;

  if (subcategoryParam) {
    // Viewing a subcategory - get products from the subcategory
    const subcategoryTitle = subcategoryParam
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const subcategory = category.subcategories?.find(
      (sub) => sub.title === subcategoryTitle,
    );

    if (subcategory) {
      products = subcategory.products || [];
      displayTitle = subcategoryTitle;
      showBackButton = true;
    }
  } else if (hasSubcategories) {
    // Category has subcategories - display them instead of products
    products = [];
    showBackButton = true;
  } else {
    // No subcategories - display category products
    products = category.products || [];
    showBackButton = false;
  }

  return (
    <div className="menu-category">
      <h1 className="menu-category__title">{displayTitle}</h1>
      <BackBtn />
      <div className="menu-category__cards">
        {hasSubcategories && !subcategoryParam
          ? // Display subcategories
            category.subcategories.map((subcategory, index) => (
              <MenuCard
                key={index}
                title={subcategory.title}
                image={subcategory.image}
                url={`/menu/${selectedCategory.toLowerCase().replace(/ /g, "-")}/${subcategory.title.toLowerCase().replace(/ /g, "-")}`}
                isSubcategory={true}
              />
            ))
          : subcategoryParam
            ? // Display products in a subcategory - use 4-part URL
              products.map((product, index) => (
                <MenuCard
                  key={index}
                  title={product.title}
                  image={product.image}
                  url={`/menu/${selectedCategory.toLowerCase().replace(/ /g, "-")}/${subcategoryParam}/${product.title.toLowerCase().replace(/ /g, "-")}`}
                />
              ))
            : // Display products in category - use 3-part URL
              products.map((product, index) => (
                <MenuCard
                  key={index}
                  title={product.title}
                  image={product.image}
                  url={`/menu/${selectedCategory.toLowerCase().replace(/ /g, "-")}/${product.title.toLowerCase().replace(/ /g, "-")}`}
                />
              ))}
      </div>
    </div>
  );
}

export default MenuCategory;
