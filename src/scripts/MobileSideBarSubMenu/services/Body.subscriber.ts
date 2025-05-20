import { MobileSideBarSubMenuEventsEnum } from "../enums/MobileSideBarSubMenuEvents";
import type { MobileSideBarSubMenuSubscriberInterface } from "../interfaces/MobileSideBarSubMenu.subscriber";
import type { MobileSideBarSubMenuMessageEventType } from "../types/MobileSideBarSubMenuMessageEvent";
import type { MobileSideBarSubMenuStateTopic } from "./MobileSideBarSubMenuState.topic";

export class BodySubscriber implements MobileSideBarSubMenuSubscriberInterface{

    //
    private navStateTopic: MobileSideBarSubMenuStateTopic;
    private body: HTMLBodyElement | null;

    //
    constructor(
        navStateTopic: MobileSideBarSubMenuStateTopic
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.body = document.getElementById('idBody') as HTMLBodyElement | null;
    }

    update(
        messageEventType: MobileSideBarSubMenuMessageEventType
    ): void {
        if(messageEventType.action == MobileSideBarSubMenuEventsEnum.NAV_OPEN){
            this.bodyOpacity();
        }
        if(messageEventType.action === MobileSideBarSubMenuEventsEnum.NAV_CLOSE){
            this.removeBodyOpacity();
        }
    }

    private bodyOpacity(): void{
        if(this.body){
            this.body.classList.add('mainLayout__content-opacity');
        }
    }

    private removeBodyOpacity(): void{
        if(this.body){
            this.body.classList.remove('mainLayout__content-opacity');
        }
    }

}