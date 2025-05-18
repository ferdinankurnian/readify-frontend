import { AppSidebar } from "@/components/app-sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex flex-row justify-between shrink-0 items-center border-b bg-background/60 backdrop-blur-md p-4">
            <div className="flex flex-row items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <div className="w-px h-6 bg-gray-300/20 mr-2" />
            <div className="flex flex-row gap-5">
              <Link className="opacity-100" href="/">Library</Link>
              <Link className="opacity-60 hover:opacity-100" href="/">Books</Link>
              <Link className="opacity-60 hover:opacity-100" href="/">Categories</Link>
            </div>
            </div>
          <div>
            <Input type="text" placeholder="Search books.." />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-16 pt-12 w-full max-w-[80rem] mx-auto">
          <Skeleton className="aspect-video h-72 w-full rounded-lg bg-muted/50" />
          <h1 className="text-2xl font-bold pt-2">Continue Reading</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="rounded-lg py-2">
                      <CardContent className="flex flex-col gap-2 p-2 py-0">
                        <Skeleton className="aspect-[3/4] px-2 pt-1 rounded-sm" />
                        <div className="flex flex-col gap-1 p-1">
                          <CardTitle>Menulis Hidup</CardTitle>
                          <CardDescription>Ferdinan Iydheko</CardDescription>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="grid grid-cols-4 gap-4 categories">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-[3/1] w-full flex items-center justify-center rounded-lg bg-muted/50" >
                <h1 className="text-xl">Fiction</h1>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold pt-2">Top Books</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="rounded-lg py-2">
                      <CardContent className="flex flex-col gap-2 p-2 py-0">
                        <Skeleton className="aspect-[3/4] px-2 pt-1 rounded-sm" />
                        <div className="flex flex-col gap-1 p-1">
                          <CardTitle>Menulis Hidup</CardTitle>
                          <CardDescription>Ferdinan Iydheko</CardDescription>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <h1 className="text-2xl font-bold pt-2">Adventure</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <Card className="rounded-lg py-2">
                      <CardContent className="flex flex-col gap-2 p-2 py-0">
                        <Skeleton className="aspect-[3/4] px-2 pt-1 rounded-sm" />
                        <div className="flex flex-col gap-1 p-1">
                          <CardTitle>Menulis Hidup</CardTitle>
                          <CardDescription>Ferdinan Iydheko</CardDescription>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </SidebarInset>
    </>
  );
}
