const events=[
    {
        event:"GSoC'21",
        date:[[0,30],[1,20],[2,10],[2,29],[3,13],[4,17],[5,7],[6,12],[6,16],[7,16],[7,23],[7,30],[7,31]],
        color:'#ffdd30'
    },
    {
        event:"Rails Girls'20",
        date:[[0,5],[0,7],[0,9],[0,22],[0,28],[0,31],[1,8],[1,10]],
        color:'#039eff'
    },
]
const months = [[0,"January"],[1,"February"],[2,"March"],[3,"April"],[4,"May"],[5,"June"],[6,"July"],[7,"August"],[8,"September"],[9,"October"],[10,"November"],[11,"December"]];

export const getEvents = () => {
    return events;
  };
export const getMonths = () => {
    return months;
  };

  