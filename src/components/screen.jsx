import React, {useEffect} from 'react';
// import Fade from 'react-reveal/Fade';


const Screen = props => {
	//console.log(props.match.params)
	const {title, screen: ScreenComponent ,match}=props;

    useEffect(() => {
        document.title = `${title} || bla bla bla`;
    }, [title]);

    return (
        // <Fade>
            <ScreenComponent params={match.params}/>
        // </Fade>
    );
};

export default Screen;
