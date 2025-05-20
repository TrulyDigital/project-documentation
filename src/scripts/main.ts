import { MobileSideBarMenuModule } from "@scripts/MobileSideBarMenu/MobileSideBarMenu.module"
import { MobileSideBarSubMenuModule } from "./MobileSideBarSubMenu/MobileSideBarSubMenu.module";

export function application(){
    document.addEventListener('DOMContentLoaded', () => {
        new MobileSideBarMenuModule();
        new MobileSideBarSubMenuModule();
    });
}
