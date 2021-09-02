import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons";
import FolderIcon from '@material-ui/icons/Folder';
import { useState } from "react";
import { themeData } from "./Theme";
import { lanCountData } from "./lanCount";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect } from "react";
import useCopyClipboard from "react-use-clipboard";
const useStyles = makeStyles(() => ({

    header: {
        color: "#7289Da",
        fontFamily: "Source Code Pro",
        fontWeight: 700,
        fontSize: "1.5rem",
        marginTop: "2.5rem",
        marginBottom: "2rem",
        alignSelf: "center",

    },
    form: {
        alignSelf: "flex-start",
        minWidth: "100%",
        fontFamily: "Source Code Pro",


    },

    repoForm: {
        marginTop: "1.5rem"
    },
    input: {
        maxWidth: "90%",
        fontFamily: "Source Code Pro",
        color: "#FFFFFF"

    },

    theme: {
        maxWidth: "90%",
        marginTop: "2rem",
        fontFamily: "Source Code Pro",

    },
    accord: {
        maxWidth: "90%",
        marginTop: "2rem",
        fontFamily: "Source Code Pro",
        backgroundColor: "#7c93e6",
    },
    button: {
        display: "block",
        marginTop: "1rem",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },
    label: {
        color: "#FFFFFF",

    },
    select: {
        color: "#99AAB5",
        fontWeight: 700
    },
    typocode: {
        whiteSpace:"normal",
        overflow:"hidden",
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },

}))

const RepoStat = () => {
    const [userName, setUserName] = useState("anhduy1202");
    const [repo, setRepo] = useState("better-tic-tac-toe-client");
    const [repoCode, setRepoCode] = useState(`<img src="https://github-readme-stats.vercel.app/api/pin/?username=${userName}&repo=${repo}>`);
    const classes = useStyles();
    const [isCopied, setCopied] = useCopyClipboard(repoCode);
    const [Copied, setCop] = useState(false);
    useEffect(() => {
        setRepoCode(`<img src="https://github-readme-stats.vercel.app/api/pin/?username=${userName}&repo=${repo}>`);

    }, [userName, repo])

    const handleChange = (e) => {
        setCop(false);
        setUserName(e);
        if (e.length == 0) {
            setUserName("anhduy1202");
        }
    }


    const handleClick = () => {
        setCopied(repoCode);
        setCop(true);
    }

    const handleRepoChange=(e)=>{
        setRepo(e);
        setCop(false);
        if (e.length == 0) {
            setRepo("better-tic-tac-toe-client");
        }
    }


    return (
        <section className="repoStat-container">
            <Typography className={classes.header} color="black" gutterBottom>
                Repo Stats:
            </Typography>
            <div className="userStat">
                <form className="userStat-form">
                    <FormControl className={classes.form}>
                        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Github's username</InputLabel>
                        <Input
                            className={classes.input}
                            id="input-with-icon-adornment"
                            placeholder={userName}
                            onChange={(e) => handleChange(e.target.value)}
                            startAdornment={

                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            } />


                    </FormControl>
                    <FormControl className={classes.repoForm}>
                        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Github's Repositories</InputLabel>
                        <Input
                            className={classes.input}
                            id="input-with-icon-adornment"
                            placeholder={repo}
                            onChange={(e) => handleRepoChange(e.target.value)}
                            startAdornment={

                                <InputAdornment position="start">
                                    <FolderIcon />
                                </InputAdornment>
                            } />


                    </FormControl>


                    <Accordion className={classes.accord}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>View Code</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.typocode}>
                                {repoCode}
                                <Button className={classes.button} variant="outlined" onClick={handleClick}>
                                    {Copied ? `Copied` : `Copy Code `}
                                </Button>

                            </Typography>


                        </AccordionDetails>
                    </Accordion>
                </form>
                <img className="userStat-img" src={`https://github-readme-stats.vercel.app/api/pin/?username=${userName}&repo=${repo}`} alt="Your Stat" />

            </div>
        </section>
    );
}

export default RepoStat;