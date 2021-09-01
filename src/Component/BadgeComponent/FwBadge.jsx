import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useCopyClipboard from "react-use-clipboard";
import { useEffect } from "react";
import { fwBadge } from "./fwBade";

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
    form: {
        alignSelf: "flex-start",
        minWidth: "100%",
        fontFamily: "Source Code Pro",
    },
    lanField: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
    },
    link: {
        justifySelf: "flex-end",
        minWidth: "20%",
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

    item: {
        color: "#586fc5"
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
        minWidth: "80%",
        marginRight: "2rem",
        color: "#7289Da",
        boxShadow: "1px 1px 12px 3px #4d5661",
        paddingLeft: "0.5rem",
        paddingTop:"1rem",
        paddingBottom:"1rem"

    },
    typocode: {
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },



}))

const FwBadge = () => {
    const classes = useStyles();
    const [fwLink, setLink] = useState("https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white")
    const [code, setCode] = useState(`<img src="${fwLink}">`);
    const [isCopied, setCopied] = useCopyClipboard(code);
    const [Copied, setCop] = useState(false);

    useEffect(() => {
        setCode(`<img src="${fwLink}">`);
    }, [fwLink])

    const handleChange = (e) => {
        setLink(e);
        setCop(false);
    }

    const handleClick= () => {
        setCopied(code);
        setCop(true);
    }

    return (
        <section className="badge-container">
            <Typography className={classes.header} color="black" gutterBottom>
                Frameworks/Platforms/Libraries:
            </Typography>
            <div className="badgeStat">
                <form className="badgeStat-form">
                    <FormControl className={classes.lanField}>
                        <Select className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleChange(e.target.value)}
                        >
                            {fwBadge.map(({ name, url }) => {
                                return (
                                    <MenuItem value={url} > {name} </MenuItem>
                                )
                            })}
                        </Select>
                        <img className={classes.link} src={fwLink} alt="" />

                    </FormControl>

                </form>
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

export default FwBadge;