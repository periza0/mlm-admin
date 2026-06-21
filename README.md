MLM Sports Club Admin Website
A full-stack sports club website for MLM Sports Club with public pages, an admin dashboard, dynamic achievements, and gallery image management.
Features
Responsive React website for home, achievements, gallery, coaching, membership, and about pages
Admin login with bcrypt password hashing and JWT authentication
Protected backend create, delete, and upload routes
Achievement player profiles stored in MongoDB
Gallery image records stored in MongoDB
Image uploads handled through Cloudinary
Swiper-powered public gallery carousel
Vercel rewrite configuration for React Router
Tech Stack
Frontend: React, Vite, Tailwind CSS, React Router, Swiper
Backend: Node.js, Express.js, MongoDB, Mongoose
Auth: bcryptjs, JSON Web Tokens
Uploads: Multer, Cloudinary, multer-storage-cloudinary
Deployment: Vercel-ready frontend routing
Project Structure
mlm-admin-version/
  src/
    components/        # Navbar and route protection
    pages/             # Public pages, login, and admin dashboard
    config.js          # API base URL
  backend/
    config/            # Cloudinary configuration
    middleware/        # JWT auth middleware
    models/            # Mongoose models
    routes/            # Express API routes
    server.js          # Backend entry point
Environment Variables
Create backend/.env with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
ADMIN_NAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
PORT=8000
Run Locally
Install frontend dependencies:
npm install
npm run dev
Install backend dependencies:
cd backend
npm install
npm run dev
Create or update the admin user after adding backend environment variables:
cd backend
node createAdmin.js
API Overview
Public routes:
GET /api/ach - List achievement players
GET /api/gallery - List gallery images
POST /api/auth/login - Admin login
Protected admin routes require Authorization: Bearer <token>:
POST /api/upload - Upload image to Cloudinary
POST /api/ach - Add achievement player
DELETE /api/ach/:id - Delete achievement player
POST /api/gallery - Add gallery image
DELETE /api/gallery/:id - Delete gallery image
Resume Summary
Built and deployed a full-stack sports club management website using React, Express.js, MongoDB, and Cloudinary, featuring JWT admin authentication, protected content management APIs, dynamic achievement profiles, gallery uploads, and responsive public pages for coaching, membership, bookings, and club information.
