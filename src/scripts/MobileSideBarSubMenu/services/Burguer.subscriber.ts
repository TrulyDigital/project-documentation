import { MobileSideBarSubMenuEventsEnum } from "@scripts/MobileSideBarSubMenu/enums/MobileSideBarSubMenuEvents";
import type { MobileSideBarSubMenuSubscriberInterface } from "@scripts/MobileSideBarSubMenu/interfaces/MobileSideBarSubMenu.subscriber";
import type { MobileSideBarSubMenuMessageEventType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuMessageEvent";
import type { MobileSideBarSubMenuStateTopic } from "@scripts/MobileSideBarSubMenu/services/MobileSideBarSubMenuState.topic";

export class BurguerSubscriber implements MobileSideBarSubMenuSubscriberInterface{

    //
    private navStateTopic: MobileSideBarSubMenuStateTopic;
    private burguerButton: HTMLButtonElement | null;

    //
    constructor(
        navStateTopic: MobileSideBarSubMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.burguerButton = document.getElementById('idBurguerButtonMainBarMenu') as HTMLButtonElement | null;
    }

    update(
        messageEventType: MobileSideBarSubMenuMessageEventType
    ): void {
        if(messageEventType.action === MobileSideBarSubMenuEventsEnum.NAV_OPEN){
            this.disableButton();
        }
        if(messageEventType.action === MobileSideBarSubMenuEventsEnum.NAV_CLOSE){
            this.enableButton();
        }
    }

    private disableButton(): void{
        if(this.burguerButton){
            this.burguerButton.classList.add('burguerButtonMainBarMenu-disabled');
            this.burguerButton.disabled = true;
        }
    }

    private enableButton(): void{
        if(this.burguerButton){
            this.burguerButton.classList.remove('burguerButtonMainBarMenu-disabled');
            this.burguerButton.disabled = false;
        }
    }
    
}