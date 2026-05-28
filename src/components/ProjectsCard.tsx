import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export default function ProjectsCard() {

    const projects = [
        {project: "Mycollex", 
            type: "Web Application", 
            description: "A high-performance real estate platform designed to streamline property discovery and optimize client lead generation.", 
            stack: "Next.js, Tailwind"
        },
        {project: "Gimi", 
            type: "Web Application", 
            description: "A secure, student-facing portal that streamlines consultation scheduling and resource management for university mental health services.", 
            stack: "Next.js, Tailwind"
        },
        {project: "Don Macchiatos", 
            type: "Web Application", 
            description: "A production-ready franchise and brand showcase website featuring an interactive menu and partner application pipeline.", 
            stack: "Next.js, Tailwind"
        },
        {project: "Zapac", 
            type: "Mobile Application", 
            description: "A smart transit mobile app for Cebu that calculates optimal public transport routes, modes of travel, and estimated commuter fares.", 
            stack: "Next.js, Tailwind"
        }
    ]

    return(
        <div className="grid grid-cols-3">
            {projects.map((p) => (
                <Card key={p.project} className="relative mx-auto w-150 max-w-sm pt-0 mt-10">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <Image
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        width={150}
                        height={200}
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardDescription className="text-gray-600 font-medium">{p.type}</CardDescription>
                        <CardTitle>{p.project}</CardTitle>
                        <CardDescription>{p.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Badge variant="secondary">Featured</Badge>
                    </CardFooter>
                </Card>
            ))}
            
        </div>
    );
}