import { MobileSideBarSubMenuEventsEnum } from "@scripts/MobileSideBarSubMenu/enums/MobileSideBarSubMenuEvents";
import type { MobileSideBarSubMenuSubscriberInterface } from "../interfaces/MobileSideBarSubMenu.subscriber";
import type { MobileSideBarSubMenuStateTopic } from "@scripts/MobileSideBarSubMenu/services/MobileSideBarSubMenuState.topic";
import type { MobileSideBarSubMenuMessageEventType } from "../types/MobileSideBarSubMenuMessageEvent";

export class MobileSideBarSubMenuSubscriber implements MobileSideBarSubMenuSubscriberInterface{

    //
    private navStateTopic: MobileSideBarSubMenuStateTopic;
    private mobileSideBarSubMenu: HTMLDivElement | null;

    //
    constructor(
        navStateTopic: MobileSideBarSubMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.mobileSideBarSubMenu = document.getElementById('idMobileSideBarSubMenu') as HTMLDivElement | null;
    }

    /**
     * 
     * Observer patter
     * 
     */
    update(
        messageEventType: MobileSideBarSubMenuMessageEventType
    ): void {
        if(messageEventType.action === MobileSideBarSubMenuEventsEnum.NAV_OPEN){
                this.sideNavOpen();
        }
            
        if(messageEventType.action === MobileSideBarSubMenuEventsEnum.NAV_CLOSE){
            this.sideNavClose();
        }
    }

    private sideNavOpen(): void{
        if(this.mobileSideBarSubMenu){
            this.mobileSideBarSubMenu.classList.remove('mobileSideBarSubMenuLayout__content-close');
            this.mobileSideBarSubMenu.classList.add('mobileSideBarSubMenuLayout__content-open');
        }
    }

    private sideNavClose(): void{
        if(this.mobileSideBarSubMenu){
            this.mobileSideBarSubMenu.classList.remove('mobileSideBarSubMenuLayout__content-open');
            this.mobileSideBarSubMenu.classList.add('mobileSideBarSubMenuLayout__content-close');
        }
    }
}