import type { MobileSideBarSubMenuTopicInterface } from "@scripts/MobileSideBarSubMenu/interfaces/MobileSideBarSubMenu.topic";
import type { MobileSideBarSubMenuSubscriberInterface } from "@scripts/MobileSideBarSubMenu/interfaces/MobileSideBarSubMenu.subscriber";
import type { MobileSideBarSubMenuMessageEventType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuMessageEvent";
import type { MobileSideBarSubMenuStateType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuState";

export class MobileSideBarSubMenuStateTopic implements MobileSideBarSubMenuTopicInterface{

    //
    private observers: MobileSideBarSubMenuSubscriberInterface[];
    private navStateType: MobileSideBarSubMenuStateType;

    //
    constructor(){
        this.observers = [];
        this.navStateType = {
            isOpen: false,
        }
    }

    /**
     * 
     * Observer pattern
     * 
     */

    subscribe(
        observer: MobileSideBarSubMenuSubscriberInterface
    ): void {
        this.observers.push(observer);
    }

    notify(
        messageEvent: MobileSideBarSubMenuMessageEventType
    ): void {
        for(const observer of this.observers){
            observer.update(messageEvent);
        }
    }

    /**
     * 
     * State pattern
     * 
     */

    setState(
        messageEventType: MobileSideBarSubMenuMessageEventType,
        newNavStateType: MobileSideBarSubMenuStateType
    ): void{
        this.navStateType = newNavStateType;
        this.notify(messageEventType);
    }

    getState(): MobileSideBarSubMenuStateType{
        return this.navStateType;
    }
}