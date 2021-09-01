import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccountCircle } from "@material-ui/icons";

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
        marginTop:"1rem",
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


    typocode: {
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },



}))
const ProfileView = () => {
    const [username, setUsername] = useState("anhduy1202");
    const [color, setColor] = useState("blue");
    const [code, setCode] = useState(`<img src="https://komarev.com/ghpvc/?username=${username}&color=${color}">`);
    const [isCopied, setCopied] = useCopyClipboard(code);
    const [Copied, setCop] = useState(false);


    useEffect(() => {
        setCode(`<img src="https://komarev.com/ghpvc/?username=${username}&color=${color}">`);

    }, [username, color])

    const handleChange = (e) => {
        setUsername(e);
        setCop(false);
        if (e.length == 0) {
            setUsername("anhduy1202");
        }
    }

    const handleColor = (e) => {
        setColor(e);
        if (e.length == 0) {
            setColor("blue");
        }
        setCop(false);
    }

    const handleClick = () => {
        setCopied(code);
        setCop(true);
    }

    const classes = useStyles();
    return (
        <section className="badge-container">
            <Typography className={classes.header} color="black" gutterBottom>
                Add Profile Views Count:
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
                        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Badge Color</InputLabel>
                        <Input
                            className={classes.input}
                            id="input-with-icon-adornment"
                            placeholder={color}
                            onChange={(e) => handleColor(e.target.value)}
                        />


                    </FormControl>

                </form>
                <img className={classes.view} src={`https://komarev.com/ghpvc/?username=${username}&color=${color}`} alt="profile count view" />
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

export default ProfileView;