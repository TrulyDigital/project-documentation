import type { MobileSideBarMenuMessageEventType } from "@scripts/MobileSideBarMenu/types/MobileSideBarMenuMessageEvent";
import type { MobileSideBarMenuSubscriberInterface } from "@scripts/MobileSideBarMenu/interfaces/MobileSideBarMenu.subscriber";

export interface MobileSideBarMenuTopicInterface{
    
    //
    subscribe(
        observer: MobileSideBarMenuSubscriberInterface
    ): void;

    //
    notify(
        messageEvent: MobileSideBarMenuMessageEventType
    ): void;
}