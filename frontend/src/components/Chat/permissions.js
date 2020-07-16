
import { AnyResource, AnyRole, Allow, Deny, Permission} from 'stream-chat';

export const permissions = [
  new Permission("Admin users can perform any action", 600, AnyResource, ["admin"], false, Allow),
  new Permission("Users can modify their own messages", 400, AnyResource, ["user"], true, Allow),
  new Permission("Users can create channels", 300, AnyResource, ["user"], false, Allow),
  new Permission("Channel Members", 200, ["ReadChannel", "CreateMessage"], ["channel_member"], false, Allow),
  new Permission("Discard all", 100, AnyResource, AnyRole, false, Deny),
];

                    