import Hero from "./hero/Hero";
import CardWrapper from "./cards-section/CardWrapper";
import Contacts from "./socials/Contacts";
import Feedback from "./socials/Feedback";

function Main(){
    return(
        <main>
            <Hero />
            <CardWrapper />
            {/* <Contacts /> */}
            {/* <Feedback /> */}
        </main>
    )
}

export default Main;