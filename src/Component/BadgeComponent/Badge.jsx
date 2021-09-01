import FwBadge from "./FwBadge"
import LanguageBadge from "./LanguageBadge"
import ProfileView from "./ProfileView"
import Supporter from "./Supporter"

const Badge = () => {


    return (
        <section className="mainbadge">

            <LanguageBadge />
            <FwBadge/>
            <ProfileView/>
            <Supporter/>
        </section>
    );
}

export default Badge;