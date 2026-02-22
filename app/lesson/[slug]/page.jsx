import Link from 'next/link';
import { LESSONS } from '../../../lib/courseData';
import LessonViewer from '../../../components/LessonViewer';

const DEFAULT_TROUBLESHOOT = [
  '找不到下载按钮：回到本课页面顶部，往下滚动到“资源”，或刷新页面（Ctrl+R）。',
  '点下载没反应：看浏览器是否拦截下载（地址栏右侧提示），允许后再点一次。',
  'app.js 打不开/报 Windows Script Host：不要双击运行，用记事本或 VS Code 打开编辑。',
  '选项空白：检查 choices 是否真的是 4 个选项（数组），不要把 ```json 代码框标记粘进去。',
];

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

export default function LessonPage({ params }) {
  const lesson = LESSONS.find((l) => l.slug === params.slug);

  // Defensive defaults: some lesson fields are optional.
  const troubleshoot = Array.isArray(lesson?.troubleshoot) && lesson.troubleshoot.length > 0
    ? lesson.troubleshoot
    : DEFAULT_TROUBLESHOOT;
  const resources = Array.isArray(lesson?.resources) ? lesson.resources : [];

  if (!lesson) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">找不到课程</h1>
        <Link href="/course" className="text-indigo-600 hover:underline">← 返回课程地图</Link>
      </div>
    );
  }

  return (
    <LessonViewer lesson={lesson} troubleshoot={troubleshoot} resources={resources} />
  );
}
