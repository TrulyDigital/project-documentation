import { NavEventsEnum } from "../enums/nav-events";
import type { NavSubscriberInterface } from "../interfaces/nav.subscriber";
import type { NavStateTopic } from "./nav-state.topic";
import type { NavMessageEventType } from "../types/nav-message-event";

export class NavSubscriber implements NavSubscriberInterface{

    //
    private navStateTopic: NavStateTopic;
    private sideNavigationItemsContent: HTMLDivElement | null;
    private documentWith: number;

    //
    constructor(
        navStateTopic: NavStateTopic,
    ){
        this.navStateTopic = navStateTopic;
        this.navStateTopic.subscribe(this);
        this.sideNavigationItemsContent = document.getElementById('idSideNavigationItemsContent') as HTMLDivElement | null;

        this.documentWith = document.body.scrollWidth;
        if(this.documentWith <= 640){
            if(this.sideNavigationItemsContent){
                this.sideNavigationItemsContent.classList.add('sideNavigationItems__content-close');
            }  
        }
        else{
            if(this.sideNavigationItemsContent){
                this.sideNavigationItemsContent.classList.add('sideNavigationItems__content-open');
            }
        }
    }

    /**
     * 
     * Observer patter
     * 
     */
    update(
        messageEventType: NavMessageEventType
    ): void {
        if(messageEventType.action === NavEventsEnum.NAV_OPEN){
                this.sideNavOpen();
        }
            
        if(messageEventType.action === NavEventsEnum.NAV_CLOSE){
            this.sideNavClose();
        }
    }

    private sideNavOpen(): void{
        if(
            this.sideNavigationItemsContent
        ){
            this.sideNavigationItemsContent.classList.remove('sideNavigationItems__content-close');
            this.sideNavigationItemsContent.classList.add('sideNavigationItems__content-open');
        }
    }

    private sideNavClose(): void{
        if(
            this.sideNavigationItemsContent
        ){
            this.sideNavigationItemsContent.classList.remove('sideNavigationItems__content-open');
            this.sideNavigationItemsContent.classList.add('sideNavigationItems__content-close');
        }
    }
}