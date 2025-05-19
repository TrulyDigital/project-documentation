import type { MobileSideBarMenuMessageEventType } from "@scripts/MobileSideBarMenu/types/MobileSideBarMenuMessageEvent";

export interface MobileSideBarMenuSubscriberInterface {
    update(
        messageEventType: MobileSideBarMenuMessageEventType
    ): void;
}