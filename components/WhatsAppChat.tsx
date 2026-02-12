import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Video, MoreVertical, ArrowLeft, Smile, Paperclip, Mic, Camera } from 'lucide-react';
import { PROFILE_IMAGE } from '../constants';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!message.trim()) return;
    const phoneNumber = '447546717496';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
  };

  return (
    <>
      {/* Floating Button (Right Side) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
             initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 20, scale: 0.9 }}
             className="fixed bottom-24 right-4 md:right-6 w-[90vw] md:w-[350px] h-[500px] z-[60] bg-[#e5ddd5] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans border border-gray-200"
           >
             {/* Header */}
             <div className="bg-[#008069] px-2 py-2 flex items-center text-white shadow-md z-10 shrink-0">
                <button onClick={() => setIsOpen(false)} className="mr-1 p-1 hover:bg-white/10 rounded-full">
                    <ArrowLeft size={22} />
                </button>
                <div className="w-9 h-9 rounded-full overflow-hidden mr-2 bg-gray-300 shrink-0 border border-white/20">
                    <img src={PROFILE_IMAGE} alt="DP" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 cursor-pointer overflow-hidden">
                    <h3 className="font-bold text-base leading-tight truncate">Saqib</h3>
                    <p className="text-[11px] text-white/90 truncate">online</p>
                </div>
                <div className="flex items-center gap-3 px-1">
                    <Video size={20} className="cursor-pointer" />
                    <Phone size={18} className="cursor-pointer" />
                    <MoreVertical size={18} className="cursor-pointer" />
                </div>
             </div>

             {/* Body */}
             <div 
                ref={chatBodyRef}
                className="flex-1 overflow-y-auto p-4 bg-[#e5ddd5] relative scrollbar-thin scrollbar-thumb-gray-300"
                style={{
                    backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "400px"
                }}
             >
                {/* Encryption Notice */}
                <div className="bg-[#ffeecd] p-2 rounded-lg text-[10px] text-center text-[#59696e] shadow-[0_1px_1px_rgba(0,0,0,0.1)] mb-4 mx-auto max-w-[90%] select-none">
                    <span className="flex flex-col sm:flex-row items-center justify-center gap-1 leading-snug">
                        <svg viewBox="0 0 12 15" width="10" height="12" className="inline-block fill-current text-[#59696e] shrink-0 mb-1 sm:mb-0"><path d="M9.75 6V4.5a3.75 3.75 0 0 0-7.5 0V6A2.25 2.25 0 0 0 0 8.25v4.5A2.25 2.25 0 0 0 2.25 15h7.5A2.25 2.25 0 0 0 12 12.75V8.25A2.25 2.25 0 0 0 9.75 6Zm-6.75-1.5a3 3 0 0 1 6 0V6h-6V4.5Z"/></svg>
                        <span>Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.</span>
                    </span>
                </div>

                {/* Date Bubble */}
                <div className="flex justify-center mb-4">
                     <span className="bg-[#dcf8c6] text-[#59696e] text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                        Today
                     </span>
                </div>

                {/* Incoming Message */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-2 pl-3 rounded-lg rounded-tl-none shadow-[0_1px_1px_rgba(0,0,0,0.1)] max-w-[80%] self-start mb-2 relative group"
                >
                    <p className="text-sm text-[#111b21] leading-relaxed">Salam! Saqib here. Need a premium edit or website?</p>
                    <span className="text-[10px] text-[#8696a0] block text-right mt-1 ml-4">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </motion.div>
             </div>

             {/* Footer */}
             <div className="bg-[#f0f2f5] p-2 flex items-end gap-2 shrink-0 min-h-[60px]">
                <div className="bg-white flex-1 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-sm border border-transparent focus-within:border-white">
                   <Smile size={24} className="text-[#8696a0] cursor-pointer hover:text-[#54656f]" />
                   <input 
                    type="text" 
                    placeholder="Message" 
                    className="flex-1 bg-transparent outline-none text-[#111b21] text-sm placeholder:text-[#8696a0] h-6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                   />
                   <Paperclip size={20} className="text-[#8696a0] -rotate-45 cursor-pointer hover:text-[#54656f]" />
                   {!message.trim() && <Camera size={20} className="text-[#8696a0] cursor-pointer hover:text-[#54656f]" />}
                </div>
                <button 
                    onClick={handleSend}
                    className={`p-3 rounded-full shadow-md transition-all flex items-center justify-center w-10 h-10 ${message.trim() ? 'bg-[#008069] text-white hover:bg-[#006e5a]' : 'bg-[#008069] text-white'}`}
                >
                    {message.trim() ? <Send size={18} className="ml-0.5" /> : <Mic size={18} />}
                </button>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;