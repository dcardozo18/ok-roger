import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { HelpCircle, MessageSquare, Lightbulb } from "lucide-react";
import Link from "next/link";

const helpOptions = [
    {
        title: "FAQ",
        description: "Find answers to frequently asked questions.",
        icon: <HelpCircle className="h-8 w-8 text-primary" />,
        buttonText: "View FAQ",
        href: "/help/faq"
    },
    {
        title: "Ask a question",
        description: "Can't find the answer? Contact our support team.",
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        buttonText: "Contact Support",
        href: "/help/support"
    },
    {
        title: "Suggest a feature",
        description: "Have an idea for a new feature? We'd love to hear it.",
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        buttonText: "Suggest Feature",
        href: "/help/suggestions"
    }
]

export default function HelpPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {helpOptions.map(option => (
                    <Card key={option.title} className="flex flex-col">
                        <CardHeader className="flex-row items-start gap-4">
                           {option.icon}
                           <div>
                            <CardTitle>{option.title}</CardTitle>
                            <CardDescription>{option.description}</CardDescription>
                           </div>
                        </CardHeader>
                        <CardContent className="flex-grow" />
                        <CardFooter>
                            <Link href={option.href} className="w-full">
                                <Button className="w-full">{option.buttonText}</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
