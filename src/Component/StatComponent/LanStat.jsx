import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons";
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
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },

}))

const LanStat = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState("anhduy1202");
    const [theme, setTheme] = useState("tokyonight");
    const [layout, setLayout] = useState("");
    const [lanCount, setLanCount] = useState(5);
    const [lanStatCode, setlanCode] = useState(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&theme=${theme}&layout=${layout}&langs_count=${lanCount}">`);
    const [isCopied, setCopied] = useCopyClipboard(lanStatCode);
    const [Copied, setCop] = useState(false);
    useEffect(() => {
        setlanCode(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&theme=${theme}&layout=${layout}&langs_count=${lanCount}">`);

    }, [userName, theme,lanCount,layout])

    const handleChange = (e) => {
        setCop(false);
        setUserName(e);
        if (e.length == 0) {
            setUserName("anhduy1202");
        }
    }
    const handleTheme = (e) => {
        setTheme(e);
        setCop(false);
    }

    const handleClick = () => {
        setCopied(lanStatCode);
        setCop(true);
    }

    const handleLayout = (e) => {
        setLayout(e);
        setCop(false);
    }
    const handleLanCount= (e) => {
        setLanCount(e);
        setCop(false);
    }

    return (

        <section className="lanStat-container">
            <Typography className={classes.header} color="black" gutterBottom>
                Language Stats:
            </Typography>
            <div className="lanStat">
                <form className="lanStat-form">
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
                    <FormControl className={classes.theme}>
                        <InputLabel className={classes.label} id="demo-simple-select-label">Stat's Theme</InputLabel>
                        <Select className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={theme}
                            onChange={(e) => handleTheme(e.target.value)}
                        >
                            {themeData.map((val, id) => {
                                return (
                                    <MenuItem key={id} value={val}>{`${val}`}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.theme}>
                        <InputLabel className={classes.label} id="demo-simple-select-label">Stat's Language Count</InputLabel>
                        <Select className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lanCount}
                            onChange={(e) => handleLanCount(e.target.value)}
                        >
                            {lanCountData.map((val,id) => {
                                return ( 
                                    <MenuItem key={id} value={val}>{`${val}`}</MenuItem>
                                )
                            })}
                            {}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.theme}>
                        <InputLabel className={classes.label} id="demo-simple-select-label">Stat's Layout</InputLabel>
                        <Select className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={layout}
                            onChange={(e) => handleLayout(e.target.value)}
                        >
                            <MenuItem value=""> Default </MenuItem>
                            <MenuItem value="compact"> Compact </MenuItem>

                        </Select>
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
                                {lanStatCode}
                                <Button className={classes.button} variant="outlined" onClick={handleClick}>
                                    {Copied ? `Copied` : `Copy Code `}
                                </Button>

                            </Typography>


                        </AccordionDetails>
                    </Accordion>
                </form>
                <img className="lanStat-img" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&theme=${theme}&layout=${layout}&langs_count=${lanCount}`} alt="Your Stat" />

            </div>


        </section>
    );
}

export default LanStat;