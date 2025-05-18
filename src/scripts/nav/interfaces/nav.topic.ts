import type { NavMessageEventType } from "../types/nav-message-event";
import type { NavSubscriberInterface } from "./nav.subscriber";

export interface NavTopicInterface{
    
    //
    subscribe(
        observer: NavSubscriberInterface
    ): void;

    //
    notify(
        messageEvent: NavMessageEventType
    ): void;
}