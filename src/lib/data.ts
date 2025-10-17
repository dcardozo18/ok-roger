import { DollarSign, ClipboardList, CheckCircle, Briefcase, User, Calendar, MessageSquare, PlusCircle } from 'lucide-react';
import type { Icon as LucideIcon } from 'lucide-react';

export type Stat = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  { title: "Total Earnings", value: "$245.8K", change: "+12.5%", icon: DollarSign },
  { title: "Opened Tasks", value: "8,210", change: "-2.1%", icon: ClipboardList },
  { title: "Completed Tasks", value: "6,890", change: "+5.8%", icon: CheckCircle },
  { title: "Total Projects", value: "350", change: "+1.2%", icon: Briefcase },
];

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive" | "Pending";
  lastLogin: string;
  creationDate: string;
};

export const users: User[] = [
  { id: "1", name: "Alice Johnson", avatarUrl: "https://picsum.photos/seed/avatar1/40/40", avatarFallback: "AJ", email: "alice.j@creative.inc", role: "Admin", status: "Active", lastLogin: "2023-04-01 10:00 AM", creationDate: "2023-01-15" },
  { id: "2", name: "Bob Williams", avatarUrl: "https://picsum.photos/seed/avatar2/40/40", avatarFallback: "BW", email: "bob.w@techsolutions.com", role: "Editor", status: "Active", lastLogin: "2023-04-01 11:30 AM", creationDate: "2023-02-20" },
  { id: "3", name: "Charlie Brown", avatarUrl: "https://picsum.photos/seed/avatar3/40/40", avatarFallback: "CB", email: "charlie.b@designhouse.co", role: "Viewer", status: "Inactive", lastLogin: "2023-03-28 05:20 PM", creationDate: "2023-03-10" },
  { id: "4", name: "Diana Prince", avatarUrl: "https://picsum.photos/seed/avatar4/40/40", avatarFallback: "DP", email: "diana.p@webwonders.io", role: "Editor", status: "Active", lastLogin: "2023-04-02 09:00 AM", creationDate: "2023-04-05" },
  { id: "5", name: "Ethan Hunt", avatarUrl: "https://picsum.photos/seed/avatar5/40/40", avatarFallback: "EH", email: "ethan.h@mi6.gov", role: "Admin", status: "Pending", lastLogin: "2023-03-25 08:45 AM", creationDate: "2023-01-20" },
  { id: "6", name: "Fiona Glenanne", avatarUrl: "https://picsum.photos/seed/avatar6/40/40", avatarFallback: "FG", email: "fiona.g@burnnotice.com", role: "Editor", status: "Active", lastLogin: "2023-04-01 12:00 PM", creationDate: "2023-02-15" },
  { id: "7", name: "George Costanza", avatarUrl: "https://picsum.photos/seed/avatar7/40/40", avatarFallback: "GC", email: "george.c@vandelay.ind", role: "Viewer", status: "Inactive", lastLogin: "2023-03-20 03:30 PM", creationDate: "2023-03-01" },
  { id: "8", name: "Harvey Specter", avatarUrl: "https://picsum.photos/seed/avatar8/40/40", avatarFallback: "HS", email: "harvey.s@pearsonhardman.com", role: "Admin", status: "Active", lastLogin: "2023-04-02 01:15 PM", creationDate: "2023-01-10" },
  { id: "9", name: "Irene Adler", avatarUrl: "https://picsum.photos/seed/avatar9/40/40", avatarFallback: "IA", email: "irene.a@thewoman.org", role: "Editor", status: "Pending", lastLogin: "2023-03-18 07:50 AM", creationDate: "2023-03-18" },
  { id: "10", name: "Jack Sparrow", avatarUrl: "https://picsum.photos/seed/avatar10/40/40", avatarFallback: "JS", email: "jack.s@pearl.ship", role: "Viewer", status: "Active", lastLogin: "2023-03-30 04:40 PM", creationDate: "2023-01-01" },
];


export type Project = {
  id: string;
  name: string;
  progress: number;
};

export const activeProjects: Project[] = [
  { id: "p1", name: "Project Alpha", progress: 75 },
  { id: "p2", name: "Project Beta", progress: 50 },
  { id: "p3", name: "Project Gamma", progress: 90 },
  { id: "p4", name: "Project Delta", progress: 25 },
];

export type Member = {
  id: string;
  name: string;
  avatarUrl: string;
  role: string;
  avatarFallback: string;
};

export const teamMembers: Member[] = [
  { id: "m1", name: "Eva Green", avatarUrl: "https://picsum.photos/seed/team1/40/40", role: "UI/UX Designer", avatarFallback: "EG" },
  { id: "m2", name: "Frank Miller", avatarUrl: "https://picsum.photos/seed/team2/40/40", role: "Frontend Developer", avatarFallback: "FM" },
  { id: "m3", name: "Grace Lee", avatarUrl: "https://picsum.photos/seed/team3/40/40", role: "Backend Developer", avatarFallback: "GL" },
];

export type TaskStatus = "In Progress" | "Completed" | "Canceled";

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

export const tasks: Task[] = [
  { id: "t1", title: "Develop homepage UI", status: "In Progress" },
  { id: "t2", title: "Setup database schema", status: "Completed" },
  { id: "t3", title: "Fix authentication bug", status: "In Progress" },
  { id: "t4", title: "Deploy to staging", status: "Canceled" },
  { id: "t5", title: "Design new logo", status: "Completed" },
];

export type Activity = {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  icon: LucideIcon;
};

export const activityStream: Activity[] = [
  { id: "a1", user: "John Doe", action: "commented on", target: "Task 'Homepage Redesign'", time: "2 min ago", icon: MessageSquare },
  { id: "a2", user: "Jane Smith", action: "created a new project", target: "'Mobile App v2'", time: "10 min ago", icon: PlusCircle },
  { id: "a3", user: "Mike Johnson", action: "completed a task", target: "'API Integration'", time: "30 min ago", icon: CheckCircle },
  { id: "a4", user: "John Doe", action: "added a new client", target: "'Innovate Corp'", time: "1 hr ago", icon: User },
];

export type TaskDistribution = {
  department: string;
  tasks: number;
  fill: string;
};

export const taskDistribution: TaskDistribution[] = [
  { department: "Design", tasks: 120, fill: "var(--color-design)" },
  { department: "Development", tasks: 250, fill: "var(--color-development)" },
  { department: "Marketing", tasks: 80, fill: "var(--color-marketing)" },
  { department: "QA", tasks: 50, fill: "var(--color-qa)" },
];

export type SalesData = {
  month: string;
  sales: number;
};

export const monthlySales: SalesData[] = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
  { month: "Aug", sales: 6500 },
  { month: "Sep", sales: 7500 },
  { month: "Oct", sales: 8000 },
  { month: "Nov", sales: 9000 },
  { month: "Dec", sales: 10000 },
];

export type GroupEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  tag: "Team" | "Product" | "Company";
};
