import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BACKEND_URL } from "@/utils/constants";
import { useState } from "react";

function ChangeDialog(ChangeDialogProps: {
  changeName: string;
  subText: string;
  authToken: string;
}) {
  const changeName = ChangeDialogProps.changeName;
  const subText = ChangeDialogProps.subText;
  const authToken = ChangeDialogProps.authToken;

  const [changeEmail, setChangeEmail] = useState("");
  const [changePassword, setChangePassword] = useState("");

  const currRequest = changeEmail === "email" ? "email_address" : "password";
  const currFeature = changeEmail === "email" ? changeEmail : changePassword;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`${BACKEND_URL}/user/update-user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [currRequest]: currFeature }),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-white rounded-2xl font-semibold pl-3 pr-3 hover:bg-[#222222]"
        >
          Change
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-50">
        <DialogHeader>
          <DialogTitle>Edit {changeName}</DialogTitle>
          <DialogDescription>{subText}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {changeName}
            </Label>
            <Input
              id="name"
              type={changeName === "Password" ? "Password" : "Email"}
              value={changeName === "Email" ? changeEmail : changePassword}
              className="col-span-3"
              onChange={(e) =>
                changeEmail === "Email"
                  ? setChangeEmail(e.target.value)
                  : setChangePassword(e.target.value)
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeDialog;
