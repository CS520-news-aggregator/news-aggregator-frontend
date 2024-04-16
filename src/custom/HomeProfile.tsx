import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HomeProfileInfo } from "@/types";
import { UserAvatar } from "./UserAvatar";

export function HomeProfile(HomeProfileProp: HomeProfileInfo) {
  const side = HomeProfileProp.side;
  const avatarIdx = HomeProfileProp.avatarIndex;
  return (
    <Sheet>
      <SheetTrigger className="text-white font-anton text-4xl mr-10 mt-7">
        <UserAvatar avatarIndex={avatarIdx} />
      </SheetTrigger>
      <SheetContent side={side} className="border-0 bg-[#161616] text-white">
        <SheetHeader>
          <SheetTitle className="text-white">
            Are you absolutely sure?
          </SheetTitle>
          <SheetDescription className="text-white">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
