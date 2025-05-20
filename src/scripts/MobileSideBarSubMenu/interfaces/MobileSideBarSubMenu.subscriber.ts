import type { MobileSideBarSubMenuMessageEventType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuMessageEvent";

export interface MobileSideBarSubMenuSubscriberInterface {
    update(
        messageEventType: MobileSideBarSubMenuMessageEventType
    ): void;
}