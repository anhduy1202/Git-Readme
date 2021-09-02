import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, FormControl, Input, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, Typography } from "@material-ui/core"
import { AccountCircle, SettingsInputComponentTwoTone } from "@material-ui/icons";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useCopyClipboard from "react-use-clipboard";
import { useEffect } from "react";
import { lanBadge } from "./lanBadge";

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
        display:"flex",
        flexDirection:"row",
        maxWidth:"100%",
    },
    link: {
        justifySelf:"flex-end",
        minWidth:"20%",
    },
    

    lan: {
        maxWidth: "80%",
        marginBottom: "1rem",
        marginTop: "2rem",
        fontFamily: "Source Code Pro",
        backgroundColor:"white",
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
        minWidth:"80%",
        marginRight:"2rem",
        color: "#7289Da",
        boxShadow: "1px 1px 12px 3px #4d5661",
        paddingLeft: "0.5rem",
       

    },

    typocode: {
        whiteSpace:"normal",
        overflow:"hidden",
        color: "white",
        fontWeight: 700,
        fontFamily: "Source Code Pro"
    },
   


}))

const LanguageBadge = () => {
    const classes = useStyles();
    const [lanLink, setLink] = useState("https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white");
    const [badgeCode, setCode] = useState(`<img src="${lanLink}">`);
    const [Copied, setCop] = useState(false);
    const [isCopied, setCopied] = useCopyClipboard(badgeCode);

    useEffect(() => {
        setCode(`<img src="${lanLink}">`);
    }, [lanLink])


    const handleChange = (link) => {
        setLink(link);
        setCop(false);
    }

    const handleClick = () => {
        setCopied(badgeCode);
        setCop(true);
    }
    return (  
        <section className="badge-container">
        <Typography className={classes.header} color="black" gutterBottom>
            Programming Languages:
        </Typography>
        <div className="badgeStat">
            <form className="badgeStat-form">
                <FormControl className={classes.lanField}>
                    <Select className={classes.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {lanBadge.map(({ language, link }) => {
                            return (
                                <MenuItem className={classes.item} key={language} value={link} > {`${language}`} </MenuItem>
                            )
                        })}

                    </Select>
                    <img className={classes.link} src={lanLink} alt="" />

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
                        {badgeCode}
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
 
export default LanguageBadge;