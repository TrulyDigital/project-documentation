import type { MobileSideBarMenuTopicInterface } from "../interfaces/MobileSideBarMenu.topic";
import type { MobileSideBarMenuSubscriberInterface } from "../interfaces/MobileSideBarMenu.subscriber";
import type { MobileSideBarMenuMessageEventType } from "../types/MobileSideBarMenuMessageEvent";
import type { MobileSideBarMenuStateType } from "../types/MobileSideBarMenuState";

export class MobileSideBarMenuStateTopic implements MobileSideBarMenuTopicInterface{

    //
    private observers: MobileSideBarMenuSubscriberInterface[];
    private navStateType: MobileSideBarMenuStateType;

    //
    constructor(){

        this.observers = [];
        const documentWith = document.body.scrollWidth;

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
        observer: MobileSideBarMenuSubscriberInterface
    ): void {
        this.observers.push(observer);
    }

    notify(
        messageEvent: MobileSideBarMenuMessageEventType
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
        messageEventType: MobileSideBarMenuMessageEventType,
        newNavStateType: MobileSideBarMenuStateType
    ): void{
        this.navStateType = newNavStateType;
        this.notify(messageEventType);
    }

    getState(): MobileSideBarMenuStateType{
        return this.navStateType;
    }
}