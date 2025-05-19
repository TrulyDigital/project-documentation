import { BurguerPublisher } from "@scripts/MobileSideBarMenu/services/Burguer.publisher";
import { MobileSideBarMenuStateTopic } from "@scripts/MobileSideBarMenu/services/MobileSideBarMenuState.topic";
import { MobileSideBarMenuSubscriber } from "@scripts/MobileSideBarMenu/services/MobileSideBarMenu.subscriber";
import { ClosePublisher } from "@scripts/MobileSideBarMenu/services/Close.publisher";
import { BodySubscriber } from "@scripts/MobileSideBarMenu/services/Body.subscriber";
import { ArrowRightSubscriber } from "@scripts/MobileSideBarMenu/services/ArrowRight.subscriber";

export class MobileSideBarMenuModule{

    //
    constructor(){
        const navStateTopic = new MobileSideBarMenuStateTopic();
        new BurguerPublisher(
            navStateTopic,
        );
        new ClosePublisher(
            navStateTopic,
        );
        new MobileSideBarMenuSubscriber(
            navStateTopic,
        );
        new BodySubscriber(
            navStateTopic,
        );
        new ArrowRightSubscriber(
            navStateTopic,
        );
    }
}