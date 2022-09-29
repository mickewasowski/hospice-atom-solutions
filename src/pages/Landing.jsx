import AdditionalNavigation from "../components/navigation/AdditionalNavigation";
import MainNavigation from "../components/navigation/MainNavigation";
import Main from "../components/main-content/Main";
import Footer from "../components/footer/Footer";

function Landing(){

    return(
        <>
            <AdditionalNavigation />
            <MainNavigation />
            <Main />
            <Footer />
        </>
    )
}

export default Landing;