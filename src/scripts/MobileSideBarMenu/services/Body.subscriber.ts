import { MobileSideBarMenuEventsEnum } from "../enums/MobileSideBarMenuEvents";
import type { MobileSideBarMenuSubscriberInterface } from "../interfaces/MobileSideBarMenu.subscriber";
import type { MobileSideBarMenuMessageEventType } from "../types/MobileSideBarMenuMessageEvent";
import type { MobileSideBarMenuStateTopic } from "./MobileSideBarMenuState.topic";

export class BodySubscriber implements MobileSideBarMenuSubscriberInterface{

    //
    private navStateTopic: MobileSideBarMenuStateTopic;
    private body: HTMLBodyElement | null;

    //
    constructor(
        navStateTopic: MobileSideBarMenuStateTopic
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.body = document.getElementById('idBody') as HTMLBodyElement | null;
    }

    update(
        messageEventType: MobileSideBarMenuMessageEventType
    ): void {
        if(messageEventType.action == MobileSideBarMenuEventsEnum.NAV_OPEN){
            this.bodyOpacity();
        }
        if(messageEventType.action === MobileSideBarMenuEventsEnum.NAV_CLOSE){
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