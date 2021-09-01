import { Breadcrumbs, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import WifiIcon from '@material-ui/icons/Wifi';
import LabelIcon from '@material-ui/icons/Label';
const useStyles = makeStyles(() => ({
    
    link: {
            display:"flex",
            textDecoration:"none",
            color:"#FFFFFF"
    },
    
    icon: {
        color:"#7289DA",
        textDecoration:"none",
        paddingRight: 4
       
    },
    bread: {
        color: "#FFFFFF"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className="navbar-container">
            <Breadcrumbs className={classes.bread}>
                <Link className={classes.link} to="/">
                    <HomeIcon className={classes.icon}/>
                    Overview
                </Link>
                <Link className={classes.link} to="/stat">
                    <EqualizerIcon  className={classes.icon} />
                    Statistics

                </Link>
                <Link className={classes.link} to="/social">
                    <WifiIcon className={classes.icon} />
                    Social
                </Link>
                <Link className={classes.link} to="/badge">
                        <LabelIcon className={classes.icon}/>
                    Badge
                </Link>
            </Breadcrumbs>
        </nav>

    );
}

export default Navbar;