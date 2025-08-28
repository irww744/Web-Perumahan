import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  Clock,
  User,
  CheckCircle2,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Selamat datang di Cluster Kalita 👋\n\nSaya Rina dari tim marketing. Ada yang bisa saya bantu mengenai hunian premium kami?',
      sender: 'agent',
      timestamp: new Date(),
      status: 'read'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        'Terima kasih atas pertanyaannya! Tim marketing kami akan segera menghubungi Anda untuk memberikan informasi detail mengenai unit yang tersedia.',
        'Saya akan mengirimkan brosur digital dan price list terbaru ke WhatsApp Anda. Bisa berikan nomor yang bisa dihubungi?',
        'Untuk informasi lebih detail, saya bisa mengatur jadwal site visit eksklusif untuk Anda. Kapan waktu yang tepat?',
        'Unit tipe 45/90 memang sedang menjadi favorit! Saat ini masih tersedia 3 unit dengan view terbaik. Mau saya carikan yang sesuai budget Anda?'
      ];
      
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'agent',
        timestamp: new Date(),
        status: 'read'
      };
      
      setMessages(prev => [...prev, agentResponse]);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    'Info harga unit',
    'Jadwal site visit',
    'Cara pembayaran',
    'Fasilitas tersedia'
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'hidden' : 'block'
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: isMinimized ? 0.3 : 1, 
              y: isMinimized ? 200 : 0 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-soft-gray-200 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold">Marketing Cluster Kalita</h3>
                    <div className="flex items-center text-xs opacity-90">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Online - Respon dalam 1 menit
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-soft-gray-50">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-2xl font-inter text-sm leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-br-md'
                              : 'bg-white text-soft-gray-800 rounded-bl-md shadow-sm border border-soft-gray-200'
                          }`}
                        >
                          {msg.text.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              {index < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                        <div className={`flex items-center mt-1 text-xs text-soft-gray-500 ${
                          msg.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}>
                          <span>{formatTime(msg.timestamp)}</span>
                          {msg.sender === 'user' && msg.status && (
                            <CheckCircle2 className={`w-3 h-3 ml-1 ${
                              msg.status === 'read' ? 'text-emerald-500' : 'text-soft-gray-400'
                            }`} />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-soft-gray-200">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ 
                                duration: 0.6, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                              className="w-2 h-2 bg-emerald-500 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="p-4 bg-white border-t border-soft-gray-200">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setMessage(reply);
                          setTimeout(() => sendMessage(), 100);
                        }}
                        className="px-3 py-2 bg-soft-gray-100 hover:bg-emerald-100 text-soft-gray-700 hover:text-emerald-700 rounded-full text-xs font-inter transition-all duration-200 border border-soft-gray-200 hover:border-emerald-300"
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white border-t border-soft-gray-200">
                  <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ketik pesan Anda..."
                        className="w-full p-3 pr-12 border border-soft-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-inter text-sm resize-none transition-all duration-200"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={sendMessage}
                      disabled={!message.trim()}
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-soft-gray-300 disabled:to-soft-gray-400 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none"
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 text-xs text-soft-gray-500 font-inter">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>Biasanya membalas dalam 1 menit</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-3 h-3 mr-1" />
                      <span>+62 812-3456-7890</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Notification */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: 3 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl border border-soft-gray-200 p-4 max-w-xs"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-playfair font-semibold text-soft-gray-800 text-sm mb-1">
                  Marketing Cluster Kalita
                </h4>
                <p className="text-soft-gray-600 text-xs font-inter leading-relaxed">
                  Ada pertanyaan tentang hunian premium kami? Chat sekarang untuk konsultasi gratis!
                </p>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="text-soft-gray-400 hover:text-soft-gray-600 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
</parameter>