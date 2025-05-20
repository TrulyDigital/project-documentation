import { MobileSideBarSubMenuEventsEnum } from "@scripts/MobileSideBarSubMenu/enums/MobileSideBarSubMenuEvents";
import type { MobileSideBarSubMenuMessageEventType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuMessageEvent";
import type { MobileSideBarSubMenuStateType } from "@scripts/MobileSideBarSubMenu/types/MobileSideBarSubMenuState";
import type { MobileSideBarSubMenuStateTopic } from "@scripts/MobileSideBarSubMenu/services/MobileSideBarSubMenuState.topic";

export class ArrowRightPublisher{

    //
    private rightButton: HTMLButtonElement | null;
    private navStateTopic: MobileSideBarSubMenuStateTopic;

    //
    constructor(
        navStateTopic: MobileSideBarSubMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.rightButton = document.getElementById('idArrowRightButtonMainBarMenu') as HTMLButtonElement | null;
        this.init();
    }

    private init(){
        if(this.rightButton){
            this.rightButton.addEventListener(
                'click',
                this.handleClick.bind(this),
            )
        }
    }

    private handleClick(
        event: MouseEvent
    ): void{

        const isOpen: boolean = this.navStateTopic.getState().isOpen;

        if(!isOpen){
            const navState: MobileSideBarSubMenuStateType = {
                isOpen: true,
            };
            const navMessageEvent: MobileSideBarSubMenuMessageEventType = {
                action: MobileSideBarSubMenuEventsEnum.NAV_OPEN,
            }
            this.navStateTopic.setState(
                navMessageEvent,
                navState,
            );
        }
    }
}