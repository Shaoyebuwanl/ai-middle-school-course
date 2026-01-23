import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: '中学生 AI 做 App 课程',
  description: '按步骤做｜每节课一个作品｜让中学生独立做出 App。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
