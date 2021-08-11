import React from 'react';

import {TwitterTimelineEmbed} from "react-twitter-embed";

const Twitter = () => {

    return(
        <div className="centerContent">
            <div className="selfCenter standardWidth">
                <TwitterTimelineEmbed sourceType="collection" id="1419723351342333953" options={{height: 400}} />
                <TwitterTimelineEmbed sourceType="profile" screenName="dynamicn3twork" options={{height: 400}} />
            </div>
        </div>
    )

};export default Twitter;