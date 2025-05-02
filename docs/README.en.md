# 🧰 MyDailyToolkit

## What is it?

**MyDailyToolkit** is a personal toolkit designed to facilitate daily organization. From managing your recipes and planning your meals to sharing shopping lists with your roommates, all in a single, simple, functional, and constantly evolving web application.

The goal is to centralize everyday tasks that are often scattered across notes, messaging apps, or disorganized lists.

---

## How to install it?

### 📦 Requirements

This frontend depends on a complementary backend called [`MyDailyToolkitBackEnd`](https://github.com/DanielSanchezBetancor/MyDailyToolkitBackEnd). Make sure to have it running before starting the frontend.

### 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/DanielSanchezBetancor/my-daily-toolkit.git
cd my-daily-toolkit
```

2. Install the dependencies:

```bash
npm install
```

3. Configure the `.env` file at the root of the project to connect with the backend. A basic example would be:

```bash
NEXT_PUBLIC_PORT=8000.uks1.devtunnels.ms
NEXT_PUBLIC_DOMAIN=https://z0z1d67d
NEXT_PUBLIC_DOMAIN_SEPARATOR=-
NEXT_PUBLIC_SUBDOMAIN=
```

4. Start the development environment:

```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser to see the application running.

---

### How to use it?

Once the application is up and running:

- Access the main panel where you will find the different available tools.
- Enter the Kitchen section to manage:
  - Your personal recipe book
  - The weekly meal calendar
  - The shopping list shared with roommates
- Each user can add products with their quantity and store link, and mark if they need to be purchased.
- The "Add to cart" button allows you to group all the necessary products to facilitate the purchase.

---

### What does this set of tools offer?

#### 🍽 Kitchen

- Editable and organizable recipe book
- Weekly meal calendar generator
- Collaborative shopping list with:
  - Quantities
  - Direct links to stores like Amazon or Carrefour
  - Checkbox to mark what needs to be purchased
  - Add to cart button with all necessary products

#### 📅 Daily organization (coming soon)

- Daily task tracking
- Personal data logging
- Video game tracking and progress

#### 🌍 Designed to be shared

- Each tool aims to facilitate daily life in shared environments (houses, families, couples).
- Modular structure for future tools.