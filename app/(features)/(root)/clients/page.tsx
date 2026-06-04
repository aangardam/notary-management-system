import { RootLayout } from "@/shared/components/layout/root-layout"
import { Card, CardContent } from "@/shared/components/ui/card"
import Client from "./components/client";

const PageClient = () => { 
    return (
        <RootLayout title="Welcome Page">
            <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
                <CardContent>
                    {/* Clients Page */}
                    <Client />
                </CardContent>
            </Card>
        </RootLayout>
    )
}

export default PageClient;