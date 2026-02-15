import { Skill, Project, Experience, Strength } from './types';
import { Brain, Users, Wrench, Zap } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Nguyễn Thanh Bình",
  role: "IT Support / Helpdesk (Fresher)",
  email: "tongbinh.tb92@gmail.com",
  phone: "0775 093 239",
  address: "Đồng Tháp, Việt Nam",
  website: "https://bitwork.great-site.net",
  avatarUrl: "https://picsum.photos/400/400", // Placeholder as requested
  bio: "Sinh viên năm cuối ngành Công nghệ thông tin, có khả năng tự xây dựng công cụ phần mềm để tối ưu hiệu suất công việc. Mong muốn phát triển theo hướng IT Support, Helpdesk và ứng dụng AI vào công việc."
};

export const STRENGTHS: Strength[] = [
  {
    title: "Chủ động học hỏi",
    description: "Luôn tìm tòi công nghệ mới để nâng cao kỹ năng chuyên môn.",
    icon: Brain
  },
  {
    title: "Ứng dụng AI",
    description: "Tận dụng AI để tự động hóa và tối ưu quy trình làm việc.",
    icon: Zap
  },
  {
    title: "Hỗ trợ người dùng",
    description: "Kiên nhẫn, lắng nghe và giải quyết vấn đề hiệu quả.",
    icon: Wrench
  },
  {
    title: "Làm việc nhóm",
    description: "Hòa đồng, trách nhiệm và phối hợp tốt với đồng nghiệp.",
    icon: Users
  }
];

export const SKILLS: Skill[] = [
  { name: "Xử lý sự cố máy tính", level: 90, category: "technical" },
  { name: "Microsoft Office", level: 85, category: "tool" },
  { name: "Mạng LAN cơ bản", level: 75, category: "technical" },
  { name: "Lập trình C#", level: 70, category: "technical" },
  { name: "WordPress", level: 80, category: "tool" },
  { name: "Tích hợp API", level: 65, category: "technical" },
  { name: "Phát triển Plugin Chatbot AI", level: 70, category: "technical" },
  { name: "Helpdesk Ticket System", level: 80, category: "tool" }
];

export const PROJECTS: Project[] = [
  {
    title: "Phần mềm Hỗ trợ Nhập liệu",
    description: "Ứng dụng Desktop viết bằng C# giúp tự động hóa quy trình nhập liệu, giúp tăng 30% hiệu suất làm việc cho bộ phận văn phòng.",
    tags: ["C#", ".NET", "Automation"],
    featured: true
  },
  {
    title: "Website WordPress + Chatbot AI",
    description: "Xây dựng website tin tức tích hợp Plugin Chatbot sử dụng Gemini API để trả lời câu hỏi tự động của khách truy cập.",
    tags: ["WordPress", "PHP", "Gemini API", "AI"],
    featured: true,
    link: "https://bitwork.great-site.net"
  },
  {
    title: "Công cụ Tự động hóa",
    description: "Các script nhỏ và tool hỗ trợ xử lý file hàng loạt, backup dữ liệu tự động cho máy trạm.",
    tags: ["Batch Script", "Python", "System Admin"],
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "IT Support",
    company: "Trung tâm Dịch vụ Việc làm Đồng Tháp",
    period: "12/2024 – Nay",
    description: "Hỗ trợ kỹ thuật phần cứng, phần mềm, quản trị mạng nội bộ và hỗ trợ người dùng cuối."
  },
  {
    role: "Nhân viên pha chế",
    company: "Vinpearl",
    period: "2017 – 2021",
    description: "Rèn luyện kỹ năng giao tiếp, phục vụ khách hàng và làm việc dưới áp lực cao."
  }
];