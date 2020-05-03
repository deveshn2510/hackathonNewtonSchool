import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Style from './style.module.css'
import Page1 from '../../pages/page1';
import Page2 from '../../pages/page2';
import Page3 from '../../pages/page3';
import Page4 from '../../pages/page4';
import Page5 from '../../pages/page5';



const useStyles = makeStyles({
    root: {
        height: 700,
        flexGrow: 1,
        width: 300,

        backgroundColor: "#232323",
        color: "white"
    },
});

export default function ControlledTreeView() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    return (
        <Router>
            <div className={Style.container}>
                <div className={Style.innerContainers1}>
                    <TreeView
                        className={classes.root}
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        expanded={expanded}
                        selected={selected}
                        onNodeToggle={handleToggle}
                        onNodeSelect={handleSelect}
                    >
                        <TreeItem nodeId="1" label="Applications">
                            <Link to="/login">   <TreeItem nodeId="2" label="Calendar" /></Link>
                            <TreeItem nodeId="3" label="Chrome" />
                            <TreeItem nodeId="4" label="Webstorm" />
                        </TreeItem>
                        <TreeItem nodeId="5" label="Documents">
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js" />
                                    <TreeItem nodeId="9" label="tree-view.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeView>
                </div>
                <div className={Style.innerContainers2}>
                    This is home page
                </div>
            </div>
            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/login" exact component={Page2} />
                <Route path="/destination" exact component={Page3} />
                <Route path="/about" exact component={Page4} />
                <Route path="/contactUs" exact component={Page5} />

            </Switch>
        </Router>


    );
}