import { BurguerPublisher } from "./services/Burguer.publisher";
import { MobileSideBarMenuStateTopic } from "./services/MobileSideBarMenuState.topic";
import { MobileSideBarMenuSubscriber } from "./services/MobileSideBarMenu.subscriber";
import { ClosePublisher } from "./services/Close.publisher";
import { BodySubscriber } from "./services/Body.subscriber";

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
    }
}