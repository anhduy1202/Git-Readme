import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccountCircle } from "@material-ui/icons";
import FolderIcon from '@material-ui/icons/Folder';
import useCopyClipboard from "react-use-clipboard";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({

    header: {
        color: "#7289Da",
        fontFamily: "Source Code Pro",
        fontWeight: 700,
        fontSize: "1.5rem",
        marginTop: "2.5rem",
        marginBottom: "3rem",
        alignSelf: "center",

    },
    input: {
        maxWidth: "90%",
        fontFamily: "Source Code Pro",
        color: "#FFFFFF"

    },
    form: {
        alignSelf: "flex-start",
        minWidth: "100%",
        fontFamily: "Source Code Pro",
    },
    form2: {
        alignSelf: "flex-start",
        minWidth: "100%",
        fontFamily: "Source Code Pro",
        marginTop: "2rem",
    },
    lanField: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
    },
    lan: {
        maxWidth: "80%",
        marginBottom: "1rem",
        marginTop: "2rem",
        fontFamily: "Source Code Pro",
        backgroundColor: "white",
        padding: "0rem",
        backgroundColor: "#7c93e6",

    },
    link: {
        justifySelf: "flex-end",
        minWidth: "20%",
    },
    view: {
        maxWidth: "20%",
    }
    ,
    button: {
        display: "block",
        marginTop: "1rem",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },
    label: {
        color: "#FFFFFF",
    },
    img: {
        maxWidth: "10%",
    },


    typocode: {
        whiteSpace:"normal",
        overflow:"hidden",
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },



}))
const Supporter = () => {

    const classes = useStyles();
    const [username, setUsername] = useState("anhduy1202");
    const [repo, setRepo] = useState("better-tic-tac-toe-client");
    const [code, setCode] = useState(`<img src="https://contrib.rocks/image?repo=${username}/${repo}"`);
    const [Copied, setCop] = useState(false);
    const [isCopied, setCopied] = useCopyClipboard(code);

    useEffect(() => {
        setCode(`<img src="https://contrib.rocks/image?repo=${username}/${repo}"`);
    }, [username, repo])

    const handleChange = (e) => {
        setCop(false);
        setUsername(e);
        if (e.length == 0) {
            setUsername("anhduy1202");
        }
    }

    const handleRepo = (e) => {
        setCop(false);
        setRepo(e);
        if (e.length == 0) {
            setRepo("better-tic-tac-toe-client");
        }
    }
    const handleClick=()=>{
        setCopied(code);
        setCop(true);
    }

    return (
        <section className="badge-container">
            <Typography className={classes.header} color="black" gutterBottom>
                Display Supporters:
            </Typography>
            <div className="countStat">
                <form className="badgeStat-form">
                    <FormControl className={classes.form}>
                        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Github's username</InputLabel>
                        <Input
                            className={classes.input}
                            id="input-with-icon-adornment"
                            placeholder={username}
                            onChange={(e) => handleChange(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            } />


                    </FormControl>
                    <FormControl className={classes.form2}>
                        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Github's Repositories</InputLabel>
                        <Input
                            className={classes.input}
                            id="input-with-icon-adornment"
                            placeholder={repo}
                            onChange={(e) => handleRepo(e.target.value)}
                            startAdornment={<InputAdornment position="start">
                                <FolderIcon />
                            </InputAdornment>}
                        />


                    </FormControl>

                </form>
                <img className={classes.img} src={`https://contrib.rocks/image?repo=${username}/${repo}`} alt="Supporter Not Found" />
                <Accordion className={classes.lan}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>View Code</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.typocode}>
                            {code}
                            <Button className={classes.button} variant="outlined" onClick={handleClick}>
                                {Copied ? `Copied` : `Copy Code `}
                            </Button>

                        </Typography>


                    </AccordionDetails>
                </Accordion>
            </div>

        </section>
    );
}

export default Supporter;