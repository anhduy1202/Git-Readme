import LanStat from "./StatComponent/LanStat";
import RepoStat from "./StatComponent/RepoStat";
import UserStat from "./StatComponent/UserStat";



const Stat = (props) => {
  

    return (
        <section className="stat-container">
            

            <UserStat/>
            <LanStat/>
            <RepoStat/>
            {/* <Card className={classes.card}>
                <CardContent>

                </CardContent>
            </Card> */}
        </section>
    );
}

export default Stat;