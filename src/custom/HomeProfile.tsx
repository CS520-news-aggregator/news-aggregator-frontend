import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HomeProfileInfo, LoginState } from "@/types";
import { UserAvatar } from "./UserAvatar";

export function HomeProfile(HomeProfileProp: HomeProfileInfo) {
  const side = HomeProfileProp.side;
  const avatarIdx = HomeProfileProp.avatarIndex;
  const userProfile = HomeProfileProp.userProfile;
  const setLoginState = HomeProfileProp.setLoginState;

  const handleLogOut = (event: React.SyntheticEvent) => {
    event.preventDefault();
    window.localStorage.setItem("authToken", "");
    setLoginState(LoginState.LoggedOut);
  };

  return (
    <Sheet>
      <SheetTrigger className="text-white font-anton text-4xl mr-10 mt-7">
        <UserAvatar avatarIndex={avatarIdx} />
      </SheetTrigger>
      <SheetContent side={side} className="border-0 bg-[#161616] text-white">
        <SheetHeader>
          <SheetTitle className="text-white flex gap-4">
            <UserAvatar avatarIndex={avatarIdx} />
            <h1 className="text-xl mt-1">{userProfile.username}</h1>
          </SheetTitle>
          <SheetDescription className="text-white">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <button
          title="Sign Out"
          onClick={handleLogOut}
          className="absolute bottom-0 mb-5 border-2 border-white rounded-xl right-0 mr-5 p-2 hover:bg-[#222222]"
        >
          Log Out
        </button>
      </SheetContent>
    </Sheet>
  );
}
