import { BurguerPublisher } from "./services/burguer.publisher";
import { NavStateTopic } from "./services/nav-state.topic";
import { NavSubscriber } from "./services/nav.subscriber";

export class NavModule{

    //
    constructor(){
        const navStateTopic = new NavStateTopic();
        new BurguerPublisher(
            navStateTopic,
        );
        new NavSubscriber(
            navStateTopic,
        );
    }
}