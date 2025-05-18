import type { NavMessageEventType } from "../types/nav-message-event";

export interface NavSubscriberInterface {
    update(
        messageEventType: NavMessageEventType
    ): void;
}