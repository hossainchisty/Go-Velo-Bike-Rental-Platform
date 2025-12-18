# 🚴 Go-Velo: Sustainable Bike Rental Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Shadcn/UI](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

Go-Velo is a modern, sustainable bike rental and sharing platform designed to connect riders across Germany. Built with a focus on user experience, performance, and sleek design, Go-Velo makes exploring cities on two wheels easier than ever.

## ✨ Key Features

- **🚲 Extensive Bike Catalog**: Browse through a wide variety of bikes, from mountain bikes to city cruisers.
- **🔍 Advanced Search & Filtering**: Find the perfect bike based on type, location, and price.
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.
- **🛡️ Admin Dashboard**: Comprehensive management system for bikes, users, rentals, and analytics.
- **💳 Pricing & Plans**: Transparent pricing models tailored for different user needs.
- **💬 Contact & Support**: Integrated contact forms and FAQ for easy assistance.
- **⚡ Fast Performance**: Powered by Vite and React for near-instant load times.
- **🎨 Beautiful UI**: Crafted with Shadcn/UI and Framer Motion for smooth animations and a premium feel.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI (Radix UI)
- **Routing**: React Router DOM (v6)
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts (for Admin Analytics)
- **Animations**: Tailwind CSS Animate & Framer Motion (via dependencies)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hossainchisty/Go-Velo-Bike-Rental-Platform.git
   cd Go-Velo-Bike-Rental-Platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or if you use bun
   bun install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (shadcn/ui & custom)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configurations
├── pages/          # Application routes/pages
│   ├── admin/      # Administrative dashboard pages
│   └── ...         # Public pages (Home, Explore, About, etc.)
├── assets/         # Images and static assets
├── App.tsx         # Main application component & routing
└── main.tsx        # Application entry point
```

## 🗺️ Routes & Pages

- `/` - Landing Page (Hero, Features, Testimonials)
- `/explore` - Bike Discovery & Listings
- `/bike/:id` - Detailed Bike Information & Booking
- `/how-it-works` - Guide for users
- `/pricing` - Rental plans and costs
- `/about` - Mission and team information
- `/contact` - Get in touch with us
- `/login` - User Authentication
- `/admin` - Dashboard, User & Bike Management

## 👔 Admin Dashboard

The platform includes a robust administrative area accessible at `/admin`. Admins can:
- Monitor platform analytics via beautiful charts.
- Manage bike inventory (add, edit, remove bikes).
- View and manage user accounts and rental history.
- Oversee messages and support requests.

## 📄 License

This project is private and for demonstration purposes.

---

Built with ❤️ for a greener future.
