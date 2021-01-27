const our_events={
    sections: [
        {
            title: "EVENTS",
            image: {
                source:require("./../assets/our_events.png"),
            },
            content: [
                {
                    par : "We at AnitaB.org Open Source beleive in Inspiration through Action. To facilitate our Open Souce journey and continue the AnitaB.org legacy we conduct enthralling events all year long, with the purpose of bridging the gap between creative developers and our Open Source community. Keep scrolling to catch a glipse of few such events! ",
                }
            ]
        },
        {
            title: "TITLE 2",
            image:{
                source:require("./../assets/our_events.png"),
            },
            content: [
                {
                    par: "We at AnitaB.org Open Source beleive in Inspiration through Action. To facilitate our Open Souce journey and continue the AnitaB.org legacy we conduct enthralling events all year long, with the purpose of bridging the gap between creative developers and our Open Source community. Keep scrolling to catch a glipse of few such events! ",
                }
            ]
        }
    ]
}


export const getEvents = () => {
    return our_events;
  };