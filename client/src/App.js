import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PolicyPage from "./pages/Policy";
import PageNotFound from "./pages/Pagenotfound";
import RegisterPage from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import DashboardPage from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import Admin_dashboard from "./pages/Admin/AdminDashboard";
import Create_category from "./pages/Admin/CreateCategory";
import Create_product from "./pages/Admin/CreateProduct";
import UsersPage from "./pages/Admin/Users";
import OrdersPage from "./pages/user/Orders";
import ProfilePage from "./pages/user/Profile";
import ProductsPage from "./pages/Admin/Products";
import UpdateProductPage from "./pages/Admin/UpdateProduct";
import SearchPage from "./pages/Search";
import ProductDetailsPage from "./pages/ProductDetails";
import CategoriesPage from "./pages/Categories";
import CategoryProductPage from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrdersPage from "./pages/Admin/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<DashboardPage />} />
          <Route path="user/orders" element={<OrdersPage />} />
          <Route path="user/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Admin_dashboard />} />
          <Route path="admin/create-category" element={<Create_category />} />
          <Route path="admin/create-product" element={<Create_product />} />
          <Route path="admin/product/:slug" element={<UpdateProductPage />} />
          <Route path="admin/products" element={<ProductsPage />} />
          <Route path="admin/users" element={<UsersPage />} />
          <Route path="admin/orders" element={<AdminOrdersPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
