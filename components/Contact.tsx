import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    
    // Email regex
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    // Vietnam Phone Regex
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (VN)";
    }

    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Liên hệ với tôi</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Tôi luôn sẵn sàng trao đổi về công việc và cơ hội hợp tác</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <Reveal delay={0.2}>
            <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Thông tin liên lạc</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-primary-600 dark:text-primary-400 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-primary-600 dark:text-primary-400 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Điện thoại</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-primary-600 dark:text-primary-400 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Địa chỉ</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {PERSONAL_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white dark:bg-slate-700 rounded-xl border border-blue-100 dark:border-slate-600">
                <p className="italic text-gray-600 dark:text-gray-300">
                  "Sẵn sàng học hỏi, làm việc chăm chỉ và cống hiến để tạo ra giá trị thực tế."
                </p>
                <div className="mt-4 font-bold text-primary-600 dark:text-primary-400">- Nguyễn Thanh Bình</div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.4}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-slate-600 focus:ring-primary-500'} bg-gray-50 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-slate-600 focus:ring-primary-500'} bg-gray-50 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                    placeholder="0912 345 678"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-slate-600 focus:ring-primary-500'} bg-gray-50 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                  placeholder="example@gmail.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nội dung tin nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-slate-600 focus:ring-primary-500'} bg-gray-50 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none`}
                  placeholder="Tôi muốn trao đổi về..."
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Đang gửi...
                  </>
                ) : submitted ? (
                  "Gửi thành công!"
                ) : (
                  <>
                    Gửi tin nhắn <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;