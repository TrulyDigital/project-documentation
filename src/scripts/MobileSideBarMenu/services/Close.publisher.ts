import type { MobileSideBarMenuStateTopic } from "@scripts/MobileSideBarMenu/services/MobileSideBarMenuState.topic";
import type { MobileSideBarMenuStateType } from "@scripts/MobileSideBarMenu/types/MobileSideBarMenuState";
import type { MobileSideBarMenuMessageEventType } from "@scripts/MobileSideBarMenu/types/MobileSideBarMenuMessageEvent";
import { MobileSideBarMenuEventsEnum } from "@scripts/MobileSideBarMenu/enums/MobileSideBarMenuEvents";

export class ClosePublisher{

    //
    private closeButton: HTMLButtonElement | null;
    private navStateTopic: MobileSideBarMenuStateTopic;

    //
    constructor(
        navStateTopic: MobileSideBarMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.closeButton = document.getElementById('idCloseButtonMobileSideBarMenu') as HTMLButtonElement | null;
        this.init();
    }

    private init(){
        if(this.closeButton){
            this.closeButton.addEventListener(
                'click',
                this.handleClick.bind(this),
            )
        }
    }

    private handleClick(
        event: MouseEvent
    ): void{

        const isOpen: boolean = this.navStateTopic.getState().isOpen;

        if(isOpen){
            const navState: MobileSideBarMenuStateType = {
                isOpen: false,
            };
            const navMessageEvent: MobileSideBarMenuMessageEventType = {
                action: MobileSideBarMenuEventsEnum.NAV_CLOSE,
            }
            this.navStateTopic.setState(
                navMessageEvent,
                navState,
            );
        }
    }
}