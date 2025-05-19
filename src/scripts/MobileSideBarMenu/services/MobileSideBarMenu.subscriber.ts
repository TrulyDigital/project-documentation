import { MobileSideBarMenuEventsEnum } from "../enums/MobileSideBarMenuEvents";
import type { MobileSideBarMenuSubscriberInterface } from "../interfaces/MobileSideBarMenu.subscriber";
import type { MobileSideBarMenuStateTopic } from "./MobileSideBarMenuState.topic";
import type { MobileSideBarMenuMessageEventType } from "../types/MobileSideBarMenuMessageEvent";

export class MobileSideBarMenuSubscriber implements MobileSideBarMenuSubscriberInterface{

    //
    private navStateTopic: MobileSideBarMenuStateTopic;
    private mobileSideBarMenu: HTMLDivElement | null;

    //
    constructor(
        navStateTopic: MobileSideBarMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.mobileSideBarMenu = document.getElementById('idMobileSideBarMenu') as HTMLDivElement | null;
    }

    /**
     * 
     * Observer patter
     * 
     */
    update(
        messageEventType: MobileSideBarMenuMessageEventType
    ): void {
        if(messageEventType.action === MobileSideBarMenuEventsEnum.NAV_OPEN){
                this.sideNavOpen();
        }
            
        if(messageEventType.action === MobileSideBarMenuEventsEnum.NAV_CLOSE){
            this.sideNavClose();
        }
    }

    private sideNavOpen(): void{
        if(
            this.mobileSideBarMenu
        ){
            this.mobileSideBarMenu.classList.remove('mobileSideBarMenuLayout__content-close');
            this.mobileSideBarMenu.classList.add('mobileSideBarMenuLayout__content-open');
        }
    }

    private sideNavClose(): void{
        if(
            this.mobileSideBarMenu
        ){
            this.mobileSideBarMenu.classList.remove('mobileSideBarMenuLayout__content-open');
            this.mobileSideBarMenu.classList.add('mobileSideBarMenuLayout__content-close');
        }
    }
}