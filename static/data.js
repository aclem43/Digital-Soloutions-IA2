

const basic_activities =  [
    {id:1, name:"Stalls", description:"Help out in a stall dealing food to your Friends! "},
    {id:2, name:"Flag Ceremony", description:"Participate in holding a flag for your nation or help another nation be represented!"},
    {id:3, name:"Concert Acts", description:"Show your talent in the arts on stage during the UN day concert!"}
]

const detailed_activities = [
    {id:1, name:"Stalls", subactitivity:true , description:"Help out in a stall dealing food to your Friends! ",
        subactivities:[
            {id:1,name:"Mexican Stall",description:"The most authentic mexican food, tortilla, cactus, sombreros ",
                participants:[{id:1,name:"Evelyn Gleichner",grade:"11",admin:false,teacher:false},
                    {id:2,name:"Emerson Hoppe",grade:"9",admin:false,teacher:false},
                    {id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}]},
            {id:2,name:"Japanese Stall",description: "Sushi, Goyza etc ",
                participants:[{id:1,name:"Evelyn Gleichner",grade:"11",admin:false,teacher:false},
                    {id:2,name:"Emerson Hoppe",grade:"9",admin:false,teacher:false},
                    {id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}]},
            {id:3,name:"American Stall",description: "All the american food you can think of maccas, m16s, hotdogs, f22" +
                    "-Raptors ", participants:[{id:1,name:"Evelyn Gleichner",grade:"11",admin:false,teacher:false},
                    {id:2,name:"Emerson Hoppe",grade:"9",admin:false,teacher:false},
                    {id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}]},
            {id:4,name:"Dunk Stall", description:"Help to dunk your favourite teachers in water",
                participants:[{id:1,name:"Evelyn Gleichner",grade:"11",admin:false,teacher:false},
                    {id:2,name:"Emerson Hoppe",grade:"9",admin:false,teacher:false},
                    {id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}]}

        ]
    },
    {id:2, name:"Flag Ceremony", subactitivity:false , description:"Participate in holding a flag for your nation or " +
            "help another nation be represented!",participants:[{id:1,name:"Evelyn Gleichner",grade:"11",admin:false,teacher:false},
            {id:2,name:"Emerson Hoppe",grade:"9",admin:false,teacher:false},{id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}]

    },
    {id:3, name:"Concert Acts", subactitivity:true , description:"Show your talent in the arts on stage during the UN " +
            "day concert!",
        subactivities:[
            {id:1,name:"Dance acts",description:"",participants:[{id:1,name:"Evelyn Gleichner",grade:"11",admin:false,teacher:false},
                    {id:2,name:"Emerson Hoppe",grade:"9",admin:false,teacher:false},{id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}]},
            {id:2,name:"Music acts",description: "",participants:["Andres Feil DVM","Bonny Feeney"]},
            {id:3,name:"Solo acts", description:"",participants:["Andres Feil DVM","Bonny Feeney"]}

        ]
    },
];

//
// {name:"Letty Windler",grade:"",admin:false,teacher:false}
// {name:"Leif Sauer",grade:"",admin:false,teacher:false}
// {name:"January Fay",grade:"",admin:false,teacher:false}
// {id:3,name:"Mr Happy",grade:"",admin:false,teacher:true}
// {name:"Mr Admin",grade:"",admin:true,teacher:false}
const get_detailed_activity = (id) => {
    let data = null
    detailed_activities.forEach((obj)=>{
        if (obj.id == id) {
            data = obj;
        }
    })
    return data
}

