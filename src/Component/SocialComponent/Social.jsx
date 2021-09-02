import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useCopyClipboard from "react-use-clipboard";
import { useEffect } from "react";
import { socialData } from "./socialData";

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
    input: {
        maxWidth: "100%",
        fontFamily: "Source Code Pro",
        color: "#FFFFFF"

    },

    social: {
        maxWidth: "100%",
        marginBottom: "2rem",
        fontFamily: "Source Code Pro",

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
        color: "#7289Da",
    },

    typocode: {
        whiteSpace:"normal",
        overflow:"hidden",
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },
    accord: {
        maxWidth: "90%",
        marginTop: "2rem",
        fontFamily: "Source Code Pro",
        backgroundColor: "#7c93e6",
    },


}))

const Social = () => {
    const classes = useStyles();
    const [socialLink, setLink] = useState("https://www.linkedin.com/in/truong-duy-12a4b5188/");
    const [socialImage, setImage] = useState("https://img.shields.io/badge/-LinkedIn-0e76a8?style=plastic&logo=linkedIn");
    const [code, setCode] = useState(`<a href=${socialLink}> <img src="${socialImage}"> </a>`);
    const [isCopied, setCopied] = useCopyClipboard(code);
    const [Copied, setCop] = useState(false);

    useEffect(() => {
        setCode(`<a href=${socialLink}> <img src="${socialImage}"> </a>`)
    }, [socialLink, socialImage])

    const [social, setSocial] = useState("Linkedin");
    const handleSelect = (e) => {
        setSocial(e);
        setCop(false);
        if (e === "LinkedIn") {
            setImage("https://img.shields.io/badge/-LinkedIn-0e76a8?style=plastic&logo=linkedIn");

        }
        else if (e === "Instagram") {
            setImage("https://img.shields.io/badge/-Instagram-833AB4?style=plastic&logo=Instagram");
        }
        else if (e === "Twitter") {
            setImage("https://img.shields.io/badge/-Twitter-1DA1F2?style=plastic&logo=Twitter");
        }
        else if (e === "Youtube") {
            setImage("https://img.shields.io/badge/<handle>-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white");
        }
        else if (e === "Facebook") {
            setImage("https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white");
        }
        else if (e === "Discord") {
            setImage("https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white");
        }
        else if (e === "Github") {
            setImage("https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white");
        }
    }

    const handleLink = (e) => {
        setLink(e);
        setCop(false);
    }
    const handleCopy = () => {
        setCopied(code);
        setCop(true);
    }
    return (
        <section className="social-container">
            <Typography className={classes.header} color="black" gutterBottom>
                Social Media:
            </Typography>
            <div className="socialStat">
                <form className="socialStat-form">
                    <FormControl className={classes.social}>
                        <InputLabel className={classes.label} id="demo-simple-select-label">Social Media</InputLabel>
                        <Select className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={social}
                            onChange={(e) => handleSelect(e.target.value)}
                        >

                            {socialData.map((val, key) => {
                                return (
                                    <MenuItem value={`${val}`} key={key}> {`${val}`}  </MenuItem>
                                )
                            })}
                        </Select>

                    </FormControl>
                    <FormControl className={classes.form}>
                        <InputLabel className={classes.label} htmlFor="input-with-icon-adornment">Social media's link</InputLabel>
                        <Input
                            className={classes.input}
                            id="input-with-icon-adornment"
                            placeholder={socialLink}
                            onChange={(e) => handleLink(e.target.value)}
                            startAdornment={

                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            } />


                    </FormControl>


                </form>
                <a className="social-link" href={`${socialLink}`}>
                    <img className="social-icon" src={`${socialImage}`} />
                </a>
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
                            {code}
                            <Button className={classes.button} variant="outlined" onClick={()=> handleCopy()}>
                                {Copied ? `Copied` : `Copy Code `}
                            </Button>

                        </Typography>


                    </AccordionDetails>
                </Accordion>

            </div>
        </section>
    );
}

export default Social;