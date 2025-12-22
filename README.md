# 🎯 Smart Task Analyzer

An intelligent task management application that uses algorithm-powered priority scoring to help you focus on what matters most.

## 🌐 Live Demo

- **Frontend**: [https://task-analyzer-sable.vercel.app](https://task-analyzer-sable.vercel.app)
- **Backend API**: [https://task-analyzer-zhaj.onrender.com](https://task-analyzer-zhaj.onrender.com)

## ✨ Features

- 🔐 **Secure Authentication** - HTTP-only cookie-based auth with JWT
- 🧮 **Smart Priority Scoring** - Algorithm calculates task priority based on:
  - Urgency (65%) - Days until deadline
  - Importance (25%) - User-defined impact level
  - Effort (10%) - Estimated hours to complete
- 📊 **Intelligent Filtering** - View tasks by:
  - Due Today
  - Due Tomorrow
  - Overdue
  - Safe (future tasks)
  - Completed
- ✏️ **Full CRUD Operations** - Create, Read, Update, Delete tasks
- 🎨 **Modern UI** - Clean, dark-themed interface with Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imthiyagu07/task-analyzer.git
   cd task-analyzer
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

   Create `.env` file in `backend` folder:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   FRONTEND_URL=http://localhost:5173
   PORT=5000
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create `.env` file in `frontend` folder:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Run the Application**

   Terminal 1 - Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Terminal 2 - Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
task-analyzer/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── task.controller.js
│   │   ├── middleware/
│   │   │   └── protectRoute.js
│   │   ├── models/
│   │   │   ├── User.model.js
│   │   │   └── Task.model.js
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── task.route.js
│   │   ├── utils/
│   │   │   ├── GenerateToken.js
│   │   │   └── priorityAlgo.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Loading.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── store/
│   │   │   ├── authStore.js
│   │   │   └── taskStore.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## 🧮 Priority Scoring Algorithm

The app uses a weighted formula to calculate task priority:

```
Priority Score = (Urgency × 0.65) + (Importance × 0.25) + (Effort × 0.10)
```

- **Urgency**: Based on days until deadline (0-100)
- **Importance**: User-defined impact level (1-5 → 0-100)
- **Effort**: Inverse of estimated hours (less time = higher score)

## 📸 Screenshots

![Screenshot of App](/frontend/public/smart-task-analyzer.png)

### Landing Page
Clean, modern landing page with gradient text and feature highlights.

### Dashboard
View all your tasks with intelligent priority sorting and filtering.

### Task Management
Create, edit, and delete tasks with real-time priority calculation.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Imthiyagu**
- GitHub: [@imthiyagu07](https://github.com/imthiyagu07)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by productivity methodologies like Eisenhower Matrix
- Designed for developers and professionals who value efficiency

---

⭐ **Star this repo if you find it helpful!**
