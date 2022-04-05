var header = {
    padding:10,
    css:"header",
    cols:[
        {
            view:"label", 
            label:"My App",
            css:"app_name"
        },
        {
            view:"button", 
            id:"profilebtn", 
            label:"Profile", 
            autowidth:true,
            type:"icon",
            icon:"wxi-user",
            css:"webix_transparent profilebtn"
        }
    ]
};

var list = {
    type:"clean",
    width:200,
    css:"side",
    rows:[
        {
            view:"list",
            scroll:false,
            template:"#title#",
            select:true,
            data:[
                {id:1, title:"Dashboard"},
                {id:2, title:"Users"},
                {id:3, title:"Products"},
                {id:4, title:"Locations"}
            ]
        },
        {
            view:"label",
            height:40, 
            autowidth:true,
            padding:10, 
            label:"Connected",
            css:"webix_icon wxi-check connection"
        }
    ]
};

var datatable = {
    view:"datatable",
    scroll:"y",
    type:{width:"100%"},
    autoConfig:true,
    data: small_film_set
};

var formTitle = {
    margin:10,
    css:"form_title",
    cols:[
        { 
            gravity:0.5,
            rows:[
                {},
                {css:"line", height:1},
                {}
            ]
        },
        {
            view:"label",
            autowidth:true,
            label:"EDIT FILMS"
        },
        {
            rows:[
                {},
                {css:"line", height:1},
                {}
            ]
        }
    ]
};

var form = {
    view:"form",
    autoheight:false,
    elements:[
        formTitle,
        {view:"text", name:"title", label:"Title", width:260},
        {view:"text", name:"year", label:"Year"},
        {view:"text", name:"rating", label:"Rating"},
        {view:"text", name:"votes", label:"Votes"},
        {
            margin:10,
            cols:[
            {
                view:"button", 
                autowidth:true, 
                value:"Add new", 
                css:"webix_primary", 
                type: "form"
            },

            {
                view:"button", 
                autowidth:true, 
                value:"Clear"
            }
        ]}
    ]
};

var main = {
    cols:[
        list,
        {view:"resizer"},
        datatable, 
        form
    ]
};

var footer = {
    height:40,
    template:`<span>
    The software is provided by <a href="https://webix.com">https://webix.com</a>. All rights reserved (c)
    </span>`,
    css:"footer"
};
