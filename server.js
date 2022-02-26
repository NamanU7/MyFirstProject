const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())


const fun = (req, res) => {
    res.json([
        {
            title: "Why you should learn Javascript",
            description: "maxime mollitia molestiae quas vel repudiandae consequuntur voluptatum laborum n sdfdsfdsfws iadgiufbhad uaohgdsfu auoxfh iuashd xiuhsodui",
            image: "https://www.w3schools.com/whatis/img_js.png",
        },
        {
            title: "React is a cool library.",
            description: "maxime mollitia molestiae quas vel repudiandae consequuntur voluptatum laborum n sdfdsfdsfws iadgiufbhad uaohgdsfu auoxfh iuashd xiuhsodui",
            image: "https://pbs.twimg.com/card_img/1495530492082405379/Gtp5d87G?format=png&name=medium",
        },
        {
            title: "Software pays good.",
            description: "maxime mollitia molestiae quas vel repudiandae consequuntur voluptatum laborum n sdfdsfdsfws iadgiufbhad uaohgdsfu auoxfh iuashd xiuhsodui",
            image: "https://www.w3schools.com/whatis/img_js.png",
        }

    ]

    );
};

app.get('/posts', fun);




console.log("server started on port 3000");
app.listen(3000);