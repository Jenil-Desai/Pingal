# 🟢 Pingal - Decentralized Uptime Monitoring

**Pingal** is a decentralized uptime monitoring solution designed to provide resilient, real-time service monitoring through a distributed network of verification nodes. Whether you're running a personal blog, a SaaS application, or critical Web3 infrastructure, Pingal ensures your services remain transparent, trackable, and secure—without relying on a single point of failure.

> Built for reliability, backed by decentralization.

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Tech Stack](#-tech-stack)
3. [Packages & Libraries](#-packages--libraries)
4. [Getting Started](#-getting-started)
5. [Setup](#-setup)
6. [Features](#-features)
7. [Demo & Screenshots](#-demo--screenshots)
8. [Acknowledgments](#-acknowledgments)
9. [License](#-license)

---

## 🌟 Overview

Pingal aims to reimagine uptime monitoring through decentralization and blockchain integration. Instead of centralized pinging services, Pingal relies on a distributed model, ensuring enhanced trust, auditability, and uptime transparency.

Key benefits:
- Reduces reliance on a single infrastructure
- Empowers users with ownership and visibility
- Built with modern, scalable architecture and a Web3-friendly ethos

---

## 🧠 Tech Stack

| Layer        | Tech Stack                       |
|--------------|----------------------------------|
| Frontend     | Next.js, Typescript, Tailwind CSS |
| Backend      | Node.js (Bun runtime), Express    |
| Auth         | Clerk (Frontend & Backend)        |
| Database     | PostgreSQL with Prisma ORM        |
| Web3 / Crypto| Solana, TweetNaCl, Svix           |
| Monorepo     | Turborepo                         |

---

## 📦 Packages & Libraries

| Category | Package | Purpose |
|----------|---------|---------|
| **Backend** | `express` | Web application framework |
| | `cors` | Cross-Origin Resource Sharing middleware |
| | `dotenv` | Environment variable management |
| | `axios` | HTTP client for API requests |
| | `jsonwebtoken` | JWT authentication |
| | `@clerk/express` | Authentication middleware |
| | `svix` | Webhook verification |
| | `@solana/web3.js` | Solana blockchain interaction |
| | `tweetnacl` | Cryptographic operations |
| | `tweetnacl-util` | Utilities for TweetNaCl |
| **Frontend** | `@clerk/nextjs` | Authentication for Next.js |
| | `@clerk/themes` | UI theming for Clerk |
| | `@clerk/types` | TypeScript definitions |
| | `react-hook-form` | Form management |
| | `@hookform/resolvers` | Form validation integration |
| | `zod` | Schema validation |
| | `next-themes` | Theme management for Next.js |
| | `axios` | HTTP client for API requests |
| **Dev & ORM** | `@prisma/client` | Database client |
| | `prisma` | ORM for database operations |
| | `turborepo` | Monorepo management |
| | `bun` | JavaScript/TypeScript runtime |

---

## 🚀 Getting Started

> Prerequisites:
- Bun
- Node.js (if not using Bun exclusively)
- PostgreSQL
- Git

---

## ⚙️ Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Jenil-Desai/Pingal.git
   ```

2. Navigate into the directory:

   ```bash
   cd pingal
   ```
3. Open in your preferred IDE (VS Code, WebStorm, or Zed)
4. Install dependencies:

   ```bash
   bun install   # Or pnpm/yarn/npm as applicable
   ```
5. Run the project:

   ```bash
   bun run dev
   ```

---

## 🎯 Features

* 🌍 **Decentralized Uptime Monitoring**
  Monitor websites via distributed nodes for resilient reliability

* 🔐 **User Authentication & Authorization**
  Secure login/register using Clerk with role-based access

* ➕ **Add Website Monitoring**
  Easily add websites to be pinged

* 📈 **Real-Time Status**
  Get instant availability feedback from multiple nodes

* 📜 **Monitoring History**
  View past uptime/downtime

* 🖥️ **Modern UI/UX Dashboard**
  Built with Shadcn UI and Tailwind for responsive, clean experience

---

## 📸 Demo & Screenshots

*To be added.*

---

## 🙏 Acknowledgments

1. [Harkirat Singh – Web3 SaaS YouTube Project](https://www.youtube.com/@harkiratsingh)
2. [Shadcn UI Documentation](https://ui.shadcn.dev/)
3. [Bun WebSocket Docs](https://bun.sh/docs/api/websocket)

---

## 📜 License

This project is licensed under the **MIT License**.

---

> Pingal – Decentralize uptime. Maximize reliability.
