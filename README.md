
# Blood Lagbe - Next.js

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

**Blood Lagbe** is a Next.js-based web application designed to connect blood donors with those in need. The platform allows users to register as donors, search for available donors based on location and blood group, and manage their donor profiles. Built with modern technologies like React, TailwindCSS, and MongoDB, this project aims to simplify the process of finding blood donors in emergencies.

---

## 🌟 Features

- **Search Donors**: Search for available donors by filtering based on location (district and upazilla) and blood group. Eligible donors will be displayed, along with their contact information and next donation date.
- **Donor Registration**: Users can create and update their donor profiles with details like name, mobile number, district, upazilla, blood group, and last donation date.
- **Authentication**: Secure user authentication powered by Clerk.
- **Responsive Design**: Fully responsive design using TailwindCSS and DaisyUI.
- **Real-Time Validation**: Validate Bangladeshi mobile numbers and ensure accurate donation dates.
- **Next Donation Counter**: Automatically calculates the next eligible donation date for donors.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or a local MongoDB instance)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sakincse21/blood-lagbe-nextjs.git
   cd blood-lagbe-nextjs
   ```

2. **Install Dependencies**
   ```bash
   npm install --force
   # or
   yarn install --force
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGODBURI=<your_mongodb_connection_string>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
   CLERK_SECRET_KEY=<your_clerk_secret_key>
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the App**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🛠️ Project Structure

The project follows a modular structure for better maintainability:

```
├── components/       # Reusable UI components
├── dbConfig/         # Database connection configuration
├── functions/        # Utility functions (e.g., mobile validation, date calculations)
├── models/           # MongoDB schemas (e.g., donor model)
├── public/           # Static assets (e.g., images, JSON data)
├── src/              # Core application logic
│   ├── middleware.ts # Authentication middleware
│   ├── types.d.ts    # TypeScript type declarations
│   ├── app/          # Pages and layouts
│   ├── lib/          # Helper utilities
│   └── providers/    # Context providers (e.g., ThemeProvider)
└── tailwind.config.ts # TailwindCSS configuration
```

---

## 🧩 Technologies Used

- **Frontend**: React, Next.js, TailwindCSS, DaisyUI
- **Backend**: Node.js, Express.js (via Next.js API routes), MongoDB
- **Authentication**: Clerk
- **Validation**: Custom utility functions for mobile number and date validation
- **Styling**: TailwindCSS with DaisyUI for pre-built components
- **State Management**: React Hooks and Context API
- **Linting**: ESLint with Next.js configuration

---

## 📚 Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Clerk Documentation](https://clerk.com/docs)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For any questions or feedback, feel free to reach out:

- **Email**: saleheen.sakin@gmail.com
- **LinkedIn**: [Saleheen Uddin Sakin](https://www.linkedin.com/in/saleheen-sakin/)
- **GitHub**: [sakincse21](https://github.com/sakincse21)

---

## 🚀 Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy!

For more details, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

Thank you for checking out **Blood Lagbe**! 🩸❤️ We hope this platform helps save lives by connecting donors with those in need.

---
