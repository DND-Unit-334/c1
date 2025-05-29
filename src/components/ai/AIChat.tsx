import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Bot, Loader, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  html?: string;
}

export const AIChat: React.FC<{ professionId?: string }> = ({ professionId }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
    });

    // Add initial greeting
    if (messages.length === 0) {
      const initialMessage = {
        id: 'initial',
        text: professionId 
          ? `Здравствуйте! Я AI-ассистент по карьерному развитию. Я вижу, что вас интересует профессия ${professionId}. Чем могу помочь?`
          : 'Здравствуйте! Я AI-ассистент по карьерному развитию. Я могу помочь вам с выбором профессии, рассказать о карьерных путях и ответить на ваши вопросы. Чем могу помочь?',
        sender: 'ai' as const,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [professionId]);

  const processMarkdown = (text: string): string => {
    return marked(text);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // In a real implementation, this would call the OpenAI API
      // For now, we'll simulate a response
      setTimeout(() => {
        const response = generateMockResponse(input, professionId);
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'ai',
          timestamp: new Date(),
          html: processMarkdown(response)
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setIsLoading(false);
    }
  };

  const generateMockResponse = (input: string, professionId?: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    if (professionId) {
      if (lowercaseInput.includes('зарплат')) {
        return `Для этой профессии характерен следующий рост зарплаты:

1. Junior уровень: 200,000 - 400,000 ₸
2. Middle уровень: 400,000 - 800,000 ₸
3. Senior уровень: 800,000 - 1,500,000 ₸

Эти цифры могут варьироваться в зависимости от компании, города и ваших навыков.`;
      }
      
      if (lowercaseInput.includes('навык') || lowercaseInput.includes('умени')) {
        return `Для успешной карьеры в этой профессии важно развивать следующие навыки:

### Технические навыки
- Профессиональные инструменты и технологии
- Современные методологии и практики
- Специализированное программное обеспечение

### Soft skills
- Коммуникация
- Работа в команде
- Решение проблем
- Управление временем

### Дополнительные навыки
- Английский язык
- Проектное управление
- Презентационные навыки`;
      }
    }

    if (lowercaseInput.includes('карьер')) {
      return `Вот несколько советов по развитию карьеры:

1. **Постоянное обучение**
   - Следите за трендами в отрасли
   - Проходите курсы и получайте сертификаты
   - Читайте профессиональную литературу

2. **Networking**
   - Участвуйте в профессиональных сообществах
   - Посещайте отраслевые мероприятия
   - Заводите полезные знакомства

3. **Практический опыт**
   - Работайте над реальными проектами
   - Создавайте портфолио
   - Ищите менторов

4. **Развитие soft skills**
   - Улучшайте коммуникативные навыки
   - Учитесь работать в команде
   - Развивайте лидерские качества`;
    }

    return `Я могу помочь вам с:

1. Выбором профессии и построением карьерного пути
2. Информацией о требуемых навыках и компетенциях
3. Советами по обучению и развитию
4. Анализом рынка труда и зарплат
5. Подготовкой к собеседованиям

Что именно вас интересует?`;
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b border-neutral-200 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="flex items-center space-x-2">
          <Bot className="text-white" size={24} />
          <h2 className="text-lg font-semibold text-white">
            {t('ai.chatTitle')}
          </h2>
        </div>
        <p className="text-sm text-primary-100 mt-1">
          {t('ai.chatDescription')}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-800'
                }`}
              >
                {message.html ? (
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: message.html }}
                  />
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                )}
                <span className="text-xs opacity-70 mt-2 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 p-4 rounded-lg">
              <Loader className="animate-spin text-primary-500" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-neutral-200 bg-neutral-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t('ai.inputPlaceholder')}
            className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};