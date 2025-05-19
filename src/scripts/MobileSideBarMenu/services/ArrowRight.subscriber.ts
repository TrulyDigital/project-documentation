import { MobileSideBarMenuEventsEnum } from "../enums/MobileSideBarMenuEvents";
import type { MobileSideBarMenuSubscriberInterface } from "../interfaces/MobileSideBarMenu.subscriber";
import type { MobileSideBarMenuMessageEventType } from "../types/MobileSideBarMenuMessageEvent";
import type { MobileSideBarMenuStateTopic } from "./MobileSideBarMenuState.topic";

export class ArrowRightSubscriber implements MobileSideBarMenuSubscriberInterface{

    //
    private navStateTopic: MobileSideBarMenuStateTopic;
    private arrowRightButton: HTMLButtonElement | null;

    //
    constructor(
        navStateTopic: MobileSideBarMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.arrowRightButton = document.getElementById('idArrowRightButtonMainBarMenu') as HTMLButtonElement | null;
    }

    update(
        messageEventType: MobileSideBarMenuMessageEventType
    ): void {
        if(messageEventType.action === MobileSideBarMenuEventsEnum.NAV_OPEN){
            this.disableButton();
        }
        if(messageEventType.action === MobileSideBarMenuEventsEnum.NAV_CLOSE){
            this.enableButton();
        }
    }

    private disableButton(): void{
        if(this.arrowRightButton){
            this.arrowRightButton.classList.add('desktopMainBarMenu__mobileSideSubMenuBar-disabled');
            this.arrowRightButton.disabled = true;
        }
    }

    private enableButton(): void{
        if(this.arrowRightButton){
            this.arrowRightButton.classList.remove('desktopMainBarMenu__mobileSideSubMenuBar-disabled');
            this.arrowRightButton.disabled = false;
        }
    }
    
}