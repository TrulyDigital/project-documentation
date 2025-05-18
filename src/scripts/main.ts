import { NavModule } from "./nav/nav.module"

export function application(){
    document.addEventListener('DOMContentLoaded', () => {
        new NavModule();
    });
}
