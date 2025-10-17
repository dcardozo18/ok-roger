
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const creditCards = [
    {
        name: "Primary Card",
        brand: "Visa",
        number: "**** **** **** 1234",
        isDefault: true,
        authorizedUsers: [
            { name: "User 1", fallback: "U1", avatarUrl: "https://picsum.photos/seed/user1/40/40" },
            { name: "User 2", fallback: "U2", avatarUrl: "https://picsum.photos/seed/user2/40/40" },
        ]
    },
    {
        name: "Secondary Card",
        brand: "Mastercard",
        number: "**** **** **** 5678",
        isDefault: false,
        authorizedUsers: [
             { name: "User 3", fallback: "U3", avatarUrl: "https://picsum.photos/seed/user3/40/40" },
        ]
    }
]

export default function PaymentsPage() {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col bg-muted/40 flex-1">
          <Header />
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-6 md:grid-cols-1">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Credit Cards</CardTitle>
                    <CardDescription>Manage your saved payment methods.</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Credit Card
                  </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Brand</TableHead>
                                <TableHead>Number</TableHead>
                                <TableHead>Enforce Default</TableHead>
                                <TableHead>Authorized Users</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {creditCards.map((card) => (
                                <TableRow key={card.number}>
                                    <TableCell className="font-medium">{card.name}</TableCell>
                                    <TableCell>{card.brand}</TableCell>
                                    <TableCell>{card.number}</TableCell>
                                    <TableCell>
                                        <Switch checked={card.isDefault} />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex -space-x-2">
                                            {card.authorizedUsers.map(user => (
                                                <Avatar key={user.name} className="border-2 border-white">
                                                    <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
                                                    <AvatarFallback>{user.fallback}</AvatarFallback>
                                                </Avatar>
                                            ))}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Receipts</CardTitle>
                  <CardDescription>Review your billing history and download invoices.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-sm">June 1, 2024</p>
                            <p className="text-sm">$99.00</p>
                            <Button variant="link" size="sm">Invoice</Button>
                        </div>
                         <div className="flex justify-between items-center">
                            <p className="text-sm">May 1, 2024</p>
                            <p className="text-sm">$99.00</p>
                            <Button variant="link" size="sm">Invoice</Button>
                        </div>
                         <div className="flex justify-between items-center">
                            <p className="text-sm">April 1, 2024</p>
                            <p className="text-sm">$99.00</p>
                            <Button variant="link" size="sm">Invoice</Button>
                        </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
