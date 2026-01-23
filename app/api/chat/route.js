export async function POST(request) {
  const { message } = await request.json().catch(() => ({ message: '' }));
  const text = String(message || '').trim();

  // 教學版：用「規則 + 內容庫」先做出效果，確保 3 天內可交付。
  // 若日後要接入真正模型：在這裡改成呼叫 OpenAI / Azure OpenAI / 等 API 即可。

  const reply = makeReply(text);
  return Response.json({ reply });
}

function makeReply(text) {
  if (!text) return '你想問什麼？例如：「用小學生能懂的方式解釋 AI。」';

  // 超簡單的 Prompt 樣板（用來示範「改問法會改答案」）
  if (/什麼是\s*ai|what\s*is\s*ai/i.test(text)) {
    return (
      'AI（人工智能）就像一個很會學習的「小助手」。\n' +
      '它會從很多例子裡找規律，然後幫我們做事情，例如：\n' +
      '• 看圖片認出是貓還是狗\n' +
      '• 聽你說話把語音變成文字\n' +
      '• 跟你對話回答問題\n\n' +
      '小提醒：AI 不是魔法，它會犯錯，所以要學會測試與修正。'
    );
  }

  if (/機器學習|machine\s*learning/i.test(text)) {
    return (
      '把「機器學習」想像成：你教機器做題。\n' +
      '你給它很多「題目 + 正確答案」當練習，\n' +
      '它慢慢學會規律，之後遇到新題目就能猜答案。\n\n' +
      '例子：\n' +
      '• 你給很多張「貓」和「狗」的照片，AI 學會分辨它們。'
    );
  }

  if (/app|應用|例子|功能/.test(text)) {
    return (
      '這裡有幾個簡單例子：\n' +
      '• 聊天機器人：回答同學的問題\n' +
      '• 語音識別：用講話輸入文字\n' +
      '• 圖像識別：拍照辨認物體\n\n' +
      '如果你告訴我：你想做什麼主題（學習/運動/遊戲），我可以幫你想 App 點子。'
    );
  }

  // 通用回覆：示範「先問清楚再回答」的思維
  return (
    '我可以幫你，但我想先確認 2 件事：\n' +
    '1) 你想做的 App 主題是什麼？（學習/生活/遊戲…）\n' +
    '2) 你希望輸出格式是：分點、一步一步、還是 3 句內？\n\n' +
    '你可以這樣改問法：\n' +
    '「請用 5 句、適合小學生，分點解釋：____」'
  );
}
