import type { MobileSideBarSubMenuMessageEventType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuMessageEvent";
import type { MobileSideBarSubMenuSubscriberInterface } from "@scripts/MobileSideBarSubMenu/interfaces/MobileSideBarSubMenu.subscriber";

export interface MobileSideBarSubMenuTopicInterface{
    
    //
    subscribe(
        observer: MobileSideBarSubMenuSubscriberInterface
    ): void;

    //
    notify(
        messageEvent: MobileSideBarSubMenuMessageEventType
    ): void;
}