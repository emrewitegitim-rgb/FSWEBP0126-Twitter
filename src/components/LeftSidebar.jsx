import { menu } from "../utils";
import MenuItem from "./MenuItem";
import User from "./User";

function LeftSidebar() {
  return (
    <div className="w-1/6 pt-8">
      {menu.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
      <User />
    </div>
  );
}

export default LeftSidebar;
