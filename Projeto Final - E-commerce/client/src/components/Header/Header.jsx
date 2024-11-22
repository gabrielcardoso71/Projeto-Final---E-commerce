import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Sniker Shoes</h1>

      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastrar</Link>
      </nav>
    </header>
  );
}

export default Header;
