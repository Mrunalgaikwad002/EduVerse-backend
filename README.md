⚙️ EduVerse Backend
EduVerse Backend powers the EduVerse Learning Platform, managing all authentication, course data, quizzes, progress tracking, and video storage through Supabase.
It serves as the core layer connecting the frontend (Next.js) with the database, ensuring smooth, secure, and real-time interaction for both students and instructors.

🌟 Project Overview
The backend handles:


User authentication and role-based access (Student/Instructor)


Course and lesson management


Video upload and retrieval


Quiz creation and evaluation


Progress tracking and certification


Real-time updates using Supabase APIs


EduVerse Backend ensures a robust and scalable data flow between all components of the learning system.

🧩 Main Features


🔐 1. Authentication


Managed using Supabase Auth.


Secure signup, login, and session handling.


Role-based access: student or instructor.


Automatic session refresh and token management.


🎓 2. Course Management


Instructors can create, update, and delete courses.


Stores title, category, description, duration, and thumbnail.


Links each course to the instructor’s profile.


Students can browse, enroll, and view course details.


🎬 3. Video Learning Module


Video lectures uploaded to Supabase Storage.


Each video linked to a specific course and lesson.


Backend generates secure URLs for streaming.


Tracks video completion for progress.


🧠 4. Quiz & Evaluation


Every course includes structured quizzes.


Stores question text, multiple options, and correct answers.


Evaluates submissions and updates progress records.


Displays instant quiz results.


📊 5. Progress Tracking


Tracks lessons completed and quizzes passed.


Stores progress percentage for each enrolled course.


Syncs in real time with student dashboard.


🪪 6. Certificates


Automatically generated after course completion.


Stores certificate link, issue date, and user-course mapping.


Available for download in the user dashboard.


📈 7. Instructor Analytics


Dashboard showing:


Total enrolled students


Course performance


Quiz averages and student engagement





🛠️ Tech Stack
ComponentTechnologyDatabaseSupabase (PostgreSQL)AuthenticationSupabase AuthStorageSupabase StorageAPIsSupabase SDK / REST APIsOptional ServerNode.js + ExpressDeploymentSupabase Cloud / Vercel Edge Functions

⚙️ Setup Instructions
1️⃣ Create a Supabase Project


Go to https://supabase.com


Create a new project.


Copy your API URL and Anon Key.


2️⃣ Configure Environment Variables
Create a .env.local file in your backend or root directory:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key



🎬 Supabase Storage Setup


Go to Storage → Create Bucket → name it course-videos.


Set Public Access = true (for open learning videos).


Upload your lecture videos.


Each video’s public URL will be used in your lessons table.



🔁 Data Flow


Instructor logs in and creates a course.


Uploads videos → stored in Supabase Storage.


Course + video metadata saved in Supabase DB.


Student enrolls and starts learning.


Watching lessons and submitting quizzes updates progress.


When course = 100% complete → certificate is generated.


🚀 Deployment
You can host your backend using any of these:


Supabase Cloud – fully managed hosting.


Vercel – ideal for Next.js API routes.


Render / Railway – if using Node.js + Express server.



🧩 API Endpoints (If Express is used)
MethodEndpointDescriptionGET/api/coursesFetch all coursesGET/api/courses/:idFetch specific coursePOST/api/coursesCreate a new coursePOST/api/quiz/submitSubmit quizGET/api/progress/:userIdGet user progressGET/api/certificates/:userIdGet user certificates

🧠 Future Enhancements


🎥 Live class streaming (Zoom / WebRTC)


💬 Real-time course discussions


🤖 AI-based course recommendations


📱 React Native mobile app


💰 Payment integration for premium courses



👩‍💻 Developed By
Mrunal Gaikwad
