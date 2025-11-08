const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Supabase-powered backend. No DB connect lifecycle needed.

const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const lessonRoutes = require('./routes/lesson.routes');
const quizRoutes = require('./routes/quiz.routes');
const progressRoutes = require('./routes/progress.routes');
const paymentRoutes = require('./routes/payment.routes');
const seedRoutes = require('./routes/seed.routes');

const app = express();

// CORS configuration - allow specific origin in production
const allowedOrigins = process.env.FRONTEND_URL 
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
  : ['http://localhost:3000', 'http://localhost:3001'];

// Add Vercel frontend URL if not already included
if (process.env.NODE_ENV === 'production' && !allowedOrigins.includes('https://edu-verse-frontend-silk.vercel.app')) {
  allowedOrigins.push('https://edu-verse-frontend-silk.vercel.app');
}

app.use(cors({ 
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      console.log('Allowed origins:', allowedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({
    name: 'EduVerse API',
    status: 'ok',
    docs: {
      health: '/health',
      auth: ['/auth/signup', '/auth/login', '/auth/profile'],
      courses: ['/courses', '/courses/:id'],
      lessons: ['/lessons/:courseId', '/lessons/stream/:id'],
      quiz: ['/quiz/:courseId', '/quiz/submit'],
      progress: ['/progress/:userId/:courseId', '/progress/update'],
      payment: ['/payment/create-checkout-session', '/payment/verify']
    }
  });
});

app.get('/health', (_req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/lessons', lessonRoutes);
app.use('/quiz', quizRoutes);
app.use('/progress', progressRoutes);
app.use('/payment', paymentRoutes);
app.use('/seed', seedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API listening on :${PORT}`));


