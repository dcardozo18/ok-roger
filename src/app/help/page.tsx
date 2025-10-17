
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { HelpCircle, MessageSquare, Lightbulb } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const supportFormSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const suggestionFormSchema = z.object({
  suggestion: z.string().min(10, "Suggestion must be at least 10 characters"),
});

type SupportFormValues = z.infer<typeof supportFormSchema>;
type SuggestionFormValues = z.infer<typeof suggestionFormSchema>;

export default function HelpPage() {
  const { toast } = useToast();

  const supportForm = useForm<SupportFormValues>({
    resolver: zodResolver(supportFormSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const suggestionForm = useForm<SuggestionFormValues>({
    resolver: zodResolver(suggestionFormSchema),
    defaultValues: {
      suggestion: "",
    },
  });

  function onSupportSubmit(data: SupportFormValues) {
    console.log("Support Request:", data);
    toast({
      title: "Support request sent",
      description: "We've received your message and will get back to you shortly.",
    });
    supportForm.reset();
  }

  function onSuggestionSubmit(data: SuggestionFormValues) {
    console.log("Feature Suggestion:", data);
    toast({
      title: "Suggestion received!",
      description: "Thanks for your feedback! We'll consider your idea.",
    });
    suggestionForm.reset();
  }

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {/* FAQ Card */}
              <Card>
                <CardHeader className="flex-row items-start gap-4">
                  <HelpCircle className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>FAQ</CardTitle>
                    <CardDescription>
                      Find answers to frequently asked questions.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                      <AccordionContent>
                        You can reset your password by going to the login page and clicking on the "Forgot Password" link.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I update my billing information?</AccordionTrigger>
                      <AccordionContent>
                        Navigate to the "Billing" section from the sidebar, and you can manage your payment methods and subscriptions there.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I export my data?</AccordionTrigger>
                      <AccordionContent>
                        Yes, most tables in the application have an "Export" button that allows you to download your data.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Ask a Question Card */}
                <Card>
                  <CardHeader className="flex-row items-start gap-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Ask a question</CardTitle>
                      <CardDescription>
                        Can't find the answer? Contact our support team.
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <Form {...supportForm}>
                    <form onSubmit={supportForm.handleSubmit(onSupportSubmit)}>
                      <CardContent className="space-y-4">
                        <FormField
                          control={supportForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Billing issue" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={supportForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please describe your issue in detail..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                      <CardFooter>
                        <Button type="submit" className="w-full">Send Message</Button>
                      </CardFooter>
                    </form>
                  </Form>
                </Card>

                {/* Suggest a Feature Card */}
                <Card>
                  <CardHeader className="flex-row items-start gap-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>Suggest a feature</CardTitle>
                      <CardDescription>
                        Have an idea? We'd love to hear from you.
                      </CardDescription>
                    </div>
                  </CardHeader>
                   <Form {...suggestionForm}>
                    <form onSubmit={suggestionForm.handleSubmit(onSuggestionSubmit)}>
                      <CardContent>
                        <FormField
                          control={suggestionForm.control}
                          name="suggestion"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Suggestion</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="I think it would be great if..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                      <CardFooter>
                        <Button type="submit" className="w-full">Submit Suggestion</Button>
                      </CardFooter>
                    </form>
                  </Form>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
