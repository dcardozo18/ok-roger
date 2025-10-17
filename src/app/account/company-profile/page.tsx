
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

const companyProfileFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  address: z.string().optional(),
});

type CompanyProfileFormValues = z.infer<typeof companyProfileFormSchema>;

export default function CompanyProfilePage() {
  const { toast } = useToast();
  const form = useForm<CompanyProfileFormValues>({
    resolver: zodResolver(companyProfileFormSchema),
    defaultValues: {
      companyName: "OK Roger",
      website: "https://ok-roger.com",
      address: "123 Main Street, San Francisco, CA 94105",
    },
  });

  function onSubmit(data: CompanyProfileFormValues) {
    console.log(data);
    toast({
      title: "Company profile updated",
      description: "Your company profile information has been updated successfully.",
    });
  }

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <Card>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardHeader>
                    <CardTitle>Company Profile</CardTitle>
                    <CardDescription>
                      Manage your company's details and branding.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-4xl">
                            O
                        </div>
                        <Button variant="outline">Change Logo</Button>
                    </div>
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button type="submit">Save</Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
