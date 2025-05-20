import type { MobileSideBarSubMenuStateTopic } from "@scripts/MobileSideBarSubMenu/services/MobileSideBarSubMenuState.topic";
import type { MobileSideBarSubMenuStateType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuState";
import type { MobileSideBarSubMenuMessageEventType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuMessageEvent";
import { MobileSideBarSubMenuEventsEnum } from "@scripts/MobileSideBarSubMenu/enums/MobileSideBarSubMenuEvents";

export class ClosePublisher{

    //
    private closeButton: HTMLButtonElement | null;
    private navStateTopic: MobileSideBarSubMenuStateTopic;

    //
    constructor(
        navStateTopic: MobileSideBarSubMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.closeButton = document.getElementById('idCloseButtonSideBarSubMenu') as HTMLButtonElement | null;
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
            const navState: MobileSideBarSubMenuStateType = {
                isOpen: false,
            };
            const navMessageEvent: MobileSideBarSubMenuMessageEventType = {
                action: MobileSideBarSubMenuEventsEnum.NAV_CLOSE,
            }
            this.navStateTopic.setState(
                navMessageEvent,
                navState,
            );
        }
    }
}