import { MobileSideBarMenuModule } from "./MobileSideBarMenu/MobileSideBarMenu.module"

export function application(){
    document.addEventListener('DOMContentLoaded', () => {
        new MobileSideBarMenuModule();
    });
}
