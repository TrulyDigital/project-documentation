import { MobileSideBarMenuEventsEnum } from "@scripts/MobileSideBarMenu/enums/MobileSideBarMenuEvents";
import type { MobileSideBarMenuMessageEventType } from "@scripts/MobileSideBarMenu/types/MobileSideBarMenuMessageEvent";
import type { MobileSideBarMenuStateType } from "@scripts/MobileSideBarMenu/types/MobileSideBarMenuState";
import type { MobileSideBarMenuStateTopic } from "@scripts/MobileSideBarMenu/services/MobileSideBarMenuState.topic";

export class BurguerPublisher{

    //
    private burguerButton: HTMLButtonElement | null;
    private navStateTopic: MobileSideBarMenuStateTopic;

    //
    constructor(
        navStateTopic: MobileSideBarMenuStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.burguerButton = document.getElementById('idBurguerButtonMainBarMenu') as HTMLButtonElement | null;
        this.init();
    }

    private init(){
        if(this.burguerButton){
            this.burguerButton.addEventListener(
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
            const navState: MobileSideBarMenuStateType = {
                isOpen: true,
            };
            const navMessageEvent: MobileSideBarMenuMessageEventType = {
                action: MobileSideBarMenuEventsEnum.NAV_OPEN,
            }
            this.navStateTopic.setState(
                navMessageEvent,
                navState,
            );
        }
    }
}