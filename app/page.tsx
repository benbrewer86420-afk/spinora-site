'use client';

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("");

  return (
    <main style={{
      background: "#f5f7fb",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <Header setPage={setPage} />

      {page === "home" && <HomePage setPage={setPage} setCategory={setCategory} />}
      {page === "category" && <CategoryPage category={category} />}
    </main>
  );
}

// HEADER
function Header({ setPage }: any) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
      <h2 style={{ color: "#1e3a8a" }}>Spinora</h2>
      <button onClick={() => setPage("home")}>Home</button>
    </div>
  );
}

// HOME PAGE
function HomePage({ setPage, setCategory }: any) {

  const categories = [
    "Casino Games",
    "Blackjack",
    "Roulette",
    "Baccarat",
    "Slots",
    "Live Casino",
    "Sports Betting",
    "Live Betting",
    "Football",
    "Horse Racing"
  ];

  return (
    <div>
      <h1 style={{ fontSize: "42px" }}>Explore Gaming & Betting</h1>

      <p style={{ color: "#555", maxWidth: "600px" }}>
        Browse categories and compare top platforms instantly.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "15px",
        marginTop: "30px"
      }}>
        {categories.map((c) => (
          <div
            key={c}
            onClick={() => {
              setCategory(c);
              setPage("category");
            }}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

// CATEGORY PAGE
function CategoryPage({ category }: any) {

  const casinos = [
    {
      name: "Betway",
      bonus: "100% bonus",
      rating: "4.9",
      link: "https://example.com",
      logo: "https://logo.clearbit.com/betway.com"
    },
    {
      name: "LeoVegas",
      bonus: "Welcome package",
      rating: "4.8",
      link: "https://example.com",
      logo: "https://logo.clearbit.com/leovegas.com"
    },
    {
      name: "888 Casino",
      bonus: "Free spins",
      rating: "4.7",
      link: "https://example.com",
      logo: "https://logo.clearbit.com/888casino.com"
    }
  ];

  return (
    <div>
      <h1>{category}</h1>

      <table style={{
        width: "100%",
        marginTop: "20px",
        background: "white",
        borderRadius: "10px"
      }}>
        <thead style={{ background: "#1e3a8a", color: "white" }}>
          <tr>
            <th style={th}>Casino</th>
            <th style={th}>Bonus</th>
            <th style={th}>Rating</th>
            <th style={th}></th>
          </tr>
        </thead>

        <tbody>
          {casinos.map((c) => (
            <tr key={c.name}>
              <td style={td}>
                <img src={c.logo} style={{ width: "80px" }} />
                <div>{c.name}</div>
              </td>
              <td style={td}>{c.bonus}</td>
              <td style={td}>⭐ {c.rating}</td>
              <td style={td}>
                <a href={c.link} target="_blank">
                  <button style={buttonStyle}>Visit Site</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// STYLES
const buttonStyle = {
  background: "#1e3a8a",
  color: "white",
  padding: "8px 14px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer"
};

const th = { padding: "10px" };
const td = { padding: "10px" };
