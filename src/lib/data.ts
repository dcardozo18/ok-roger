

import { DollarSign, ClipboardList, CheckCircle, Briefcase, User, Calendar, MessageSquare, PlusCircle, TrendingUp, Target, CalendarPlus, CalendarCog, CalendarX, ArrowRightLeft, CircleDollarSign, Users, Bell, Check, Clock, ShieldCheck } from 'lucide-react';
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

export const reportStats: Stat[] = [
    { title: "New Bookings", value: "1.2K", change: "+15%", icon: CalendarPlus },
    { title: "Booking Changes", value: "350", change: "+5%", icon: CalendarCog },
    { title: "Cancellations", value: "82", change: "-3%", icon: CalendarX },
    { title: "Transactions", value: "2.8K", change: "+20%", icon: ArrowRightLeft },
    { title: "Spend Managed", value: "$450K", change: "+10%", icon: CircleDollarSign },
    { title: "Employee Time Saved", value: "500h", change: "+8%", icon: Clock },
    { title: "Check Ins", value: "1.5K", change: "+25%", icon: ShieldCheck },
    { title: "Active Users", value: "5.2K", change: "+5%", icon: Users },
    { title: "Trip Reminders", value: "3.1K", change: "+12%", icon: Bell },
    { title: "Jobs Completed", value: "750", change: "+18%", icon: Check },
];


export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Invited" | "Not invited";
  lastLogin: string;
  creationDate: string;
};

export const users: User[] = [
  { id: "1", name: "Alice Johnson", avatarUrl: "https://picsum.photos/seed/avatar1/40/40", avatarFallback: "AJ", email: "alice.j@creative.inc", role: "Admin", status: "Invited", lastLogin: "2023-04-01 10:00 AM", creationDate: "2023-01-15" },
  { id: "2", name: "Bob Williams", avatarUrl: "https://picsum.photos/seed/avatar2/40/40", avatarFallback: "BW", email: "bob.w@techsolutions.com", role: "Editor", status: "Invited", lastLogin: "2023-04-01 11:30 AM", creationDate: "2023-02-20" },
  { id: "3", name: "Charlie Brown", avatarUrl: "https://picsum.photos/seed/avatar3/40/40", avatarFallback: "CB", email: "charlie.b@designhouse.co", role: "Viewer", status: "Not invited", lastLogin: "2023-03-28 05:20 PM", creationDate: "2023-03-10" },
  { id: "4", name: "Diana Prince", avatarUrl: "https://picsum.photos/seed/avatar4/40/40", avatarFallback: "DP", email: "diana.p@webwonders.io", role: "Editor", status: "Invited", lastLogin: "2023-04-02 09:00 AM", creationDate: "2023-04-05" },
  { id: "5", name: "Ethan Hunt", avatarUrl: "https://picsum.photos/seed/avatar5/40/40", avatarFallback: "EH", email: "ethan.h@mi6.gov", role: "Admin", status: "Invited", lastLogin: "2023-03-25 08:45 AM", creationDate: "2023-01-20" },
  { id: "6", name: "Fiona Glenanne", avatarUrl: "https://picsum.photos/seed/avatar6/40/40", avatarFallback: "FG", email: "fiona.g@burnnotice.com", role: "Editor", status: "Invited", lastLogin: "2023-04-01 12:00 PM", creationDate: "2023-02-15" },
  { id: "7", name: "George Costanza", avatarUrl: "https://picsum.photos/seed/avatar7/40/40", avatarFallback: "GC", email: "george.c@vandelay.ind", role: "Viewer", status: "Not invited", lastLogin: "2023-03-20 03:30 PM", creationDate: "2023-03-01" },
  { id: "8", name: "Harvey Specter", avatarUrl: "https://picsum.photos/seed/avatar8/40/40", avatarFallback: "HS", email: "harvey.s@pearsonhardman.com", role: "Admin", status: "Invited", lastLogin: "2023-04-02 01:15 PM", creationDate: "2023-01-10" },
  { id: "9", name: "Irene Adler", avatarUrl: "https://picsum.photos/seed/avatar9/40/40", avatarFallback: "IA", email: "irene.a@thewoman.org", role: "Editor", status: "Not invited", lastLogin: "2023-03-18 07:50 AM", creationDate: "2023-03-18" },
  { id: "10", name: "Jack Sparrow", avatarUrl: "https://picsum.photos/seed/avatar10/40/40", avatarFallback: "JS", email: "jack.s@pearl.ship", role: "Viewer", status: "Invited", lastLogin: "2023-03-30 04:40 PM", creationDate: "2023-01-01" },
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
  { id: "a1", user: "Olivia Martin", action: "closed a deal with", target: "Acme Inc.", time: "5 min ago", icon: DollarSign },
  { id: "a2", user: "Liam Johnson", action: "added a new lead", target: "Globex Corporation", time: "20 min ago", icon: PlusCircle },
  { id: "a3", user: "Emma Wilson", action: "updated the status of", target: "Stark Industries", time: "45 min ago", icon: TrendingUp },
  { id: "a4", user: "Noah Brown", action: "hit their quarterly quota", target: "$100k", time: "1 hr ago", icon: Target },
];

export type TaskDistribution = {
  department: string;
  tasks: number;
  fill: string;
};

export const taskDistribution: TaskDistribution[] = [
    { department: "Hotels", tasks: 186, fill: "var(--color-Hotels)" },
    { department: "Flights", tasks: 124, fill: "var(--color-Flights)" },
    { department: "Car rental", tasks: 98, fill: "var(--color-Car-rental)" },
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


export type Rule = {
  id: string;
  name: string;
  service: string;
  triggers: string[];
  appliesTo: string;
};

export const policyRules: Rule[] = [
  { id: "R001", name: "Business Class Flights", service: "Flights", triggers: ["Price > $1000", "International"], appliesTo: "Execs" },
  { id: "R002", name: "5-Star Hotels", service: "Hotels", triggers: ["Rating = 5"], appliesTo: "Client Facing" },
  { id: "R003", name: "SUV Rentals", service: "Cars", triggers: ["Group > 3", "Equipment"], appliesTo: "All Users" },
  { id: "R004", name: "Last Minute Booking", service: "All", triggers: ["< 48 hours"], appliesTo: "All Users" },
  { id: "R005", name: "High Cost Travel", service: "All", triggers: ["Total > $5000"], appliesTo: "All Users" },
];

export type Approver = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  email: string;
  role: string;
  pendingApprovals: number;
  avgApprovalTime: string;
};

export const approvers: Approver[] = [
    { id: "1", name: "Samantha Carter", avatarUrl: "https://picsum.photos/seed/approver1/40/40", avatarFallback: "SC", email: "samantha.carter@sgc.mil", role: "VP of Engineering", pendingApprovals: 5, avgApprovalTime: "2h" },
    { id: "2", name: "John O'Neill", avatarUrl: "https://picsum.photos/seed/approver2/40/40", avatarFallback: "JO", email: "john.oneill@sgc.mil", role: "Director of Finance", pendingApprovals: 3, avgApprovalTime: "4h" },
    { id: "3", name: "Daniel Jackson", avatarUrl: "https://picsum.photos/seed/approver3/40/40", avatarFallback: "DJ", email: "daniel.jackson@sgc.mil", role: "Lead Archaeologist", pendingApprovals: 8, avgApprovalTime: "1d" },
    { id: "4", name: "Teal'c", avatarUrl: "https://picsum.photos/seed/approver4/40/40", avatarFallback: "T", email: "tealc@sgc.mil", role: "First Prime", pendingApprovals: 2, avgApprovalTime: "30m" },
    { id: "5", name: "George Hammond", avatarUrl: "https://picsum.photos/seed/approver5/40/40", avatarFallback: "GH", email: "george.hammond@sgc.mil", role: "General, SGC", pendingApprovals: 1, avgApprovalTime: "1h" },
    { id: "6", name: "Janet Fraiser", avatarUrl: "https://picsum.photos/seed/approver6/40/40", avatarFallback: "JF", email: "janet.fraiser@sgc.mil", role: "Chief Medical Officer", pendingApprovals: 4, avgApprovalTime: "3h" },
];

export type City = {
    id: string;
    name: string;
    country: string;
}

export type CityTier = City & {
    imageUrl: string;
    imageHint: string;
};
  
export const allCities: City[] = [
    { id: "nyc", name: "New York", country: "USA" },
    { id: "london", name: "London", country: "UK" },
    { id: "paris", name: "Paris", country: "France" },
    { id: "tokyo", name: "Tokyo", country: "Japan" },
    { id: "sydney", name: "Sydney", country: "Australia" },
    { id: "dubai", name: "Dubai", country: "UAE" },
    { id: "singapore", name: "Singapore", country: "Singapore" },
    { id: "berlin", name: "Berlin", country: "Germany" },
    { id: "rome", name: "Rome", country: "Italy" },
    { id: "cairo", name: "Cairo", country: "Egypt" },
    { id: "moscow", name: "Moscow", country: "Russia" },
    { id: "rio", name: "Rio de Janeiro", country: "Brazil" },
    { id: "beijing", name: "Beijing", country: "China" },
    { id: "mumbai", name: "Mumbai", country: "India" },
    { id: "toronto", name: "Toronto", country: "Canada" },
];

export const cityTiers: CityTier[] = [
    { id: "nyc", name: "New York", country: "USA", imageUrl: "https://picsum.photos/seed/nyc/80/60", imageHint: "city skyline" },
    { id: "london", name: "London", country: "UK", imageUrl: "https://picsum.photos/seed/london/80/60", imageHint: "city bridge" },
    { id: "tokyo", name: "Tokyo", country: "Japan", imageUrl: "https://picsum.photos/seed/tokyo/80/60", imageHint: "city street" },
];

export type GroupEvent = {
  id: string;
  date: string;
  time?: string;
  title: string;
  tag: "Personal" | "Meeting" | "Festival Function" | "Events";
};

export const groupEvents: GroupEvent[] = [
  { id: "e1", date: "2025-10-01", title: "Meeting", tag: "Meeting" },
  { id: "e2", date: "2025-10-07", title: "Update Weekly", tag: "Personal" },
  { id: "e3", date: "2025-10-10", title: "School Reunion", tag: "Personal" },
  { id: "e4", date: "2025-10-14", title: "Family Dinner", tag: "Personal" },
  { id: "e5", date: "2025-10-14", title: "Holiday Tour", tag: "Events" },
  { id: "e6", date: "2025-10-18", title: "Marriage Function", tag: "Festival Function" },
  { id: "e7", date: "2025-10-23", title: "Meeting", tag: "Meeting" },
];
