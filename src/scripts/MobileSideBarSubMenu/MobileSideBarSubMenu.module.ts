import { ArrowRightPublisher } from "@scripts/MobileSideBarSubMenu/services/ArrowRight.publisher";
import { MobileSideBarSubMenuStateTopic } from "@scripts/MobileSideBarSubMenu/services/MobileSideBarSubMenuState.topic";
import { MobileSideBarSubMenuSubscriber } from "@scripts/MobileSideBarSubMenu/services/MobileSideBarSubMenu.subscriber";
import { ClosePublisher } from "@scripts/MobileSideBarSubMenu/services/Close.publisher";
import { BodySubscriber } from "@scripts/MobileSideBarSubMenu/services/Body.subscriber";
import { BurguerSubscriber } from "@scripts/MobileSideBarSubMenu/services/Burguer.subscriber";

export class MobileSideBarSubMenuModule{

    //
    constructor(){
        const navStateTopic = new MobileSideBarSubMenuStateTopic();
        new ArrowRightPublisher(
            navStateTopic,
        );
        new ClosePublisher(
            navStateTopic,
        );
        new MobileSideBarSubMenuSubscriber(
            navStateTopic,
        );
        new BodySubscriber(
            navStateTopic,
        );
        new BurguerSubscriber(
            navStateTopic,
        );
    }
}