import './globals.css';
import AppShell from '../components/AppShell';

export const metadata = {
  title: '中学生 AI 做 App 课程',
  description: '按步骤做｜每节课一个作品｜让中学生独立做出 App。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <AppShell>
          <main className="px-4 py-6 md:px-8 md:py-8">{children}</main>
        </AppShell>
      </body>
    </html>
  );
}
