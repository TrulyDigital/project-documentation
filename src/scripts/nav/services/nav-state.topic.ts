import type { NavTopicInterface } from "../interfaces/nav.topic";
import type { NavSubscriberInterface } from "../interfaces/nav.subscriber";
import type { NavMessageEventType } from "../types/nav-message-event";
import type { NavStateType } from "../types/nav-state";

export class NavStateTopic implements NavTopicInterface{

    //
    private observers: NavSubscriberInterface[];
    private navStateType: NavStateType;

    //
    constructor(){

        this.observers = [];
        const documentWith = document.body.scrollWidth;

        if(documentWith <= 640){
            this.navStateType = {
                isOpen: false,
            }
        }
        else{
            this.navStateType = {
                isOpen: true,
            }
        }
    }

    /**
     * 
     * Observer pattern
     * 
     */

    subscribe(
        observer: NavSubscriberInterface
    ): void {
        this.observers.push(observer);
    }

    notify(
        messageEvent: NavMessageEventType
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
        messageEventType: NavMessageEventType,
        newNavStateType: NavStateType
    ): void{
        this.navStateType = newNavStateType;
        this.notify(messageEventType);
    }

    getState(): NavStateType{
        return this.navStateType;
    }
}