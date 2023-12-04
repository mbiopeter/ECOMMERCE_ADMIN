export const UserColums = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'User', width: 300, renderCell: (params) => {
            return(
                <div className="cellWithImg" style={{display:'flex', alignItems:'center'}}>
                    <img src={params.row.img} style={{width:'32px', height:'32px', borderRadius:'50%', objectFit:'cover', marginRight: '20px'}} ClassName="cellImg" alt="avator"/>
                    {params.row.username} 
                </div>
            );
        }
    },
    {
        field:'email',headerName:'Email',width:200
    },
    {
        field:'age',age:'Age',width:100
    },
    {
        field: 'status', headerName: 'Status', width: 150, renderCell: (params) => {
            return(
                <div style={(params.row.status === 'active') ? {
                    padding:'5px',
                    borderRadius:'5px',
                    color:'green',
                    backgroundColor:'rgba(0, 128, 0, 0.242)'
                } : {
                    padding:'5px',
                    borderRadius:'5px',
                    color:'goldenrod',
                    backgroundColor:'rgba(218, 165, 32, 0.384)'
                }}>
                    {params.row.status}
                </div>
            )
        }
    }
]
//temporary data
export const  UserRows = [
    {
        id:1,
        username: 'jane doe',
        img: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status:'active',
        email: 'janedoe@gmail.com',
        age: 22,
    },
    {
        id:2,
        username: 'james maina',
        img: 'https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status:'active',
        email: 'jamesmaina@gmail.com',
        age: 27,
    },
    {
        id:3,
        username: 'mary nyambura',
        img: 'https://images.pexels.com/photos/1322129/pexels-photo-1322129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status:'pending',
        email: 'marynyambura@gmail.com',
        age: 17,
    },

];


export const ProductColums = [
     { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'product', headerName: 'Product', width: 300, renderCell: (params) => {
            return(
                <div className="cellWithImg" style={{display:'flex', alignItems:'center'}}>
                    <img src={params.row.img} style={{width:'32px', height:'32px', borderRadius:'50%', objectFit:'cover', marginRight: '20px'}} ClassName="cellImg" alt="avator"/>
                    {params.row.product} 
                </div>
            );
        }
    },
    {
        field: 'category', headerName: 'Category', width: 150
    },
    {
        field: 'amaunt', headerName: 'Amaunt In Stock', width: 100
    },
    {
        field:'price',headerName:'Price',width:100
    },
    {
        field:'previousPrice',headerName:'Prev Price',width:100
    },
    {
        field: 'status', headerName: 'Status', width: 100, renderCell: (params) => {
            return(
                <div style={(params.row.status === 'In Stock') ? {
                    padding:'5px',
                    borderRadius:'5px',
                    color:'green',
                    backgroundColor:'rgba(0, 128, 0, 0.242)'
                } : {
                    padding:'5px',
                    borderRadius:'5px',
                    color:'goldenrod',
                    backgroundColor:'rgba(218, 165, 32, 0.384)'
                }}>
                    {params.row.status}
                </div>
            )
        }
    }   
]


//temporary data
export const  ProductRows = [
    {
        id:1,
        product: 'Sumsung Galaxy a14',
        category: 'Phone Accessories',
        description: '4GB RAM, storage 128',
        amaunt: '230 units',
        price: 25000,
        previousPrice: 32000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/64/1125061/1.jpg?6708',
        status:'In Stock',
    },
    {
        id:2,
        product:'Sumsung Galaxy a54',
        category: 'Phone Accessories',
        description: '8GB RAM, storage 256',
        amaunt: '132 units',
        price:60000,
        previousPrice: 72000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/8477051/1.jpg?1717',
        status:'In Stock',
    },
    {
        id:3,
        product: 'Sumsung Galaxy a24',
        category: 'Phone Accessories',
        description: '6GB RAM, storage 128',
        amaunt:'90 units',
        price: 32000,
        previousPrice: 40000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/7899251/1.jpg?0774',
        status:'In Stock',
    },
];