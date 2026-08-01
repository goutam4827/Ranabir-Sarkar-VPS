import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Bot, Send, User, Sparkles, RefreshCw, AlertCircle, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I am VPS's AI Visa & Travel Assistant. Ask me anything about Tourist or Student Visa requirements, Passport Renewals, PCC, MEA Apostille, or FRRO guidelines. How can I assist your travel plans today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What documents are needed for a Schengen Tourist Visa?",
    "How to get Police Clearance Certificate (PCC) in Kolkata?",
    "Steps for MEA Apostille attestation for educational degrees?",
    "How does VPS door-step passport assistance work?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) {
        throw new Error('Failed to reach AI assistant. Please try again.');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || "Thank you for reaching out. Please contact Mr. Ranabir Sarkar directly at +91 9830741022 for detailed advice.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages([...newMessages, assistantMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err.message || 'Error communicating with AI Assistant');
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Chat cleared. Feel free to ask another visa or passport inquiry!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setError(null);
  };

  return (
    <section id="ai-assistant" className="py-16 lg:py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-700 dark:text-amber-400 animate-pulse" />
            <span>24/7 Smart Visa AI Consultant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Instant Visa & Passport AI Assistant
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Get instant answers regarding document checklists, consular guidelines, passport rules, and visa filing procedures powered by Gemini.
          </p>
        </ScrollReveal>

        {/* Chat Window Container */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[600px]">
          
          {/* Chat Topbar */}
          <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 p-0.5 shadow-sm">
                <div className="w-full h-full bg-blue-50 dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-700 dark:text-amber-400" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">VPS Visa AI Consultant</h3>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center space-x-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse inline-block" />
                  <span>Online & Ready to Help</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleClearChat}
              className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs flex items-center space-x-1 font-semibold"
              title="Reset Chat"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear Chat</span>
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="bg-slate-100/70 dark:bg-slate-950/80 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 overflow-x-auto flex items-center space-x-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 flex-shrink-0 font-semibold">Suggested:</span>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={loading}
                className="flex-shrink-0 px-3 py-1 rounded-full bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-800 dark:hover:text-amber-300 border border-slate-200 dark:border-slate-700 text-xs font-medium transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Display Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50 dark:bg-slate-950/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start space-x-3 ${
                  m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    m.role === 'user'
                      ? 'bg-blue-700 text-white'
                      : 'bg-amber-500 text-slate-950'
                  }`}
                >
                  {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Box */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    m.role === 'user'
                      ? 'bg-blue-700 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none space-y-2'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      m.role === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 text-xs text-slate-500 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                  <span>Consulting visa requirements...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2 font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="bg-white p-4 border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Ask about US visa, Schengen documents, passport renewal, PCC..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-700"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-3 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white font-bold shadow-xs transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
