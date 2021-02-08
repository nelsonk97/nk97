import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-1/c53.0.320.320a/p320x320/92953340_3105562866175550_2575502986159587328_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=4fohvWSsX8YAX8muJbp&_nc_ht=scontent.fykz1-1.fna&tp=27&oh=1d5e9414696d44843ba7670cadc350db&oe=6043B178"
        title="Nelson Khiev"
      />
      <SidebarRow
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"}
        title={"COVID-19 Information Center"}
      />
      <SidebarRow
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"}
        title="Friends"
      />
      <SidebarRow
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"}
        title="Marketplace"
      />
      <SidebarRow
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/U_sRIAvZ0k2.png"}
        title="Jobs"
      />
      <SidebarRow
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"}
        title="Groups"
      />
    </div>
  );
}

export default Sidebar;
