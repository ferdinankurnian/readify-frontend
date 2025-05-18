import {
  BellIcon,
  BooksIcon,
  ClockCounterClockwiseIcon,
  HeartStraightIcon,
  HouseIcon,
} from "@phosphor-icons/react";

export const SidebarLinks = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: HouseIcon,
      isActive: false,
      cantFill: false,
    },
    {
      title: "My Books",
      url: "#",
      icon: BooksIcon,
      isActive: false,
      cantFill: false,
    },
    {
      title: "History",
      url: "#",
      icon: ClockCounterClockwiseIcon,
      isActive: true,
      cantFill: true,
    },
    {
      title: "Wishlist",
      url: "#",
      icon: HeartStraightIcon,
      isActive: false,
      cantFill: false,
    },
    {
      title: "Notifications",
      url: "#",
      icon: BellIcon,
      isActive: false,
      cantFill: false,
    },
  ],
};