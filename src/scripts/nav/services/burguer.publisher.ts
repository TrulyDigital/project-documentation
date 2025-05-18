import { NavEventsEnum } from "../enums/nav-events";
import type { NavMessageEventType } from "../types/nav-message-event";
import type { NavStateType } from "../types/nav-state";
import type { NavStateTopic } from "./nav-state.topic";

export class BurguerPublisher{

    //
    private burguerButton: HTMLButtonElement | null;
    private navStateTopic: NavStateTopic;

    //
    constructor(
        navStateTopic: NavStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.burguerButton = document.getElementById('idButtomBurguer') as HTMLButtonElement | null;
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

        if(isOpen){
            const navState: NavStateType = {
                isOpen: false,
            };
            const navMessageEvent: NavMessageEventType = {
                action: NavEventsEnum.NAV_CLOSE,
            }
            this.navStateTopic.setState(
                navMessageEvent,
                navState,
            );
        }
        else{
            const navState: NavStateType = {
                isOpen: true,
            };
            const navMessageEvent: NavMessageEventType = {
                action: NavEventsEnum.NAV_OPEN,
            }
            this.navStateTopic.setState(
                navMessageEvent,
                navState,
            );
        }
    }
}