export const SingleUser = [
    {
        id: 1,
        labelEmail: 'Email',
        labelPhone: 'Phone',
        labelAddress: 'Address',
        labelCountry: 'Country',
        labelRattings: 'Rattings',
        valueName: 'Jane Doe',
        valueEmail: 'janedoe@gmail.com',
        valuePhone: '+254 595 952 68',
        valueAddress: 'Nairobi westlands',
        valueCountry: 'kenya',
        valueRattings: '4',
        img: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    },
    {
        id: 2,
        labelEmail: 'Email',
        labelPhone: 'Phone',
        labelAddress: 'Address',
        labelCountry: 'Country',
        labelRattings: 'Rattings',
        valueName: 'James Maina',
        valueEmail: 'jamesmaina@gmail.com',
        valuePhone: '+254 545 952 68',
        valueAddress: 'Nairobi muthaiga',
        valueCountry: 'kenya',
        valueRattings: '3.5',
        img: 'https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: 3,
        labelEmail: 'Email',
        labelPhone: 'Phone',
        labelAddress: 'Address',
        labelCountry: 'Country',
        labelRattings: 'Rattings',
        valueName: 'Mary Nyambura',
        valueEmail: 'marynyambura@gmail.com',
        valuePhone: '+254 595 952 68',
        valueAddress: 'Nairobi CBD',
        valueCountry: 'kenya',
        valueRattings: '4.5',
        img: 'https://images.pexels.com/photos/1322129/pexels-photo-1322129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    },

];

export const SingleProduct = [
    {
        id: 1,
        labelCategory: 'Category',
        labelQuantity: 'Quantity',
        labelPrice: 'Current Price',
        labelPreviousPrice: 'Previous Price',
        valueProduct: 'Sumsung Galaxy a14',
        valueCategory: 'Phone Accessories',
        valueQuantity: 230,
        valuePrice: 25000,
        valuePreviousPrice: 32000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/64/1125061/1.jpg?6708'

    },
    {
        id: 2,
        labelCategory: 'Category',
        labelQuantity: 'Quantity',
        labelPrice: 'Current Price',
        labelPreviousPrice: 'Previous Price',
        valueProduct: 'Sumsung Galaxy a54',
        valueCategory: 'Phone Accessories',
        valueQuantity: 132,
        valuePrice: 60000,
        valuePreviousPrice: 72000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/8477051/1.jpg?1717'

    },
    {
        id: 3,
        labelCategory: 'Category',
        labelQuantity: 'Quantity',
        labelPrice: 'Current Price',
        labelPreviousPrice: 'Previous Price',
        valueProduct: 'Sumsung Galaxy a24',
        valueCategory: 'Phone Accessories',
        valueQuantity: 90,
        valuePrice: 32000,
        valuePreviousPrice: 40000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/7899251/1.jpg?0774'

    },

]

export const SingleUserColums = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'User', width: 170, renderCell: (params) => {
            return (
                <div className="cellWithImg" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={params.row.img} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} ClassName="cellImg" alt="avator" />
                    {params.row.username}
                </div>
            );
        }
    },
    {
        field: 'email', headerName: 'Email', width: 200
    },
    {
        field: 'sale', headerName: 'Sale Price', width: 120
    },
    {
        field: 'delivery', headerName: 'Delivery', width: 100
    },
    {
        field: 'quantity', headerName: 'Quantity', width: 100
    },
    {
        field: 'total', headerName: 'Total', width: 100
    },
    {
        field: 'status', headerName: 'Status', width: 100, renderCell: (params) => {
            return (
                <div style={(params.row.status === 'active') ? {
                    padding: '5px',
                    borderRadius: '5px',
                    color: 'green',
                    backgroundColor: 'rgba(0, 128, 0, 0.242)'
                } : {
                    padding: '5px',
                    borderRadius: '5px',
                    color: 'goldenrod',
                    backgroundColor: 'rgba(218, 165, 32, 0.384)'
                }}>
                    {params.row.status}
                </div>
            )
        }
    }
]
//temporary data
export const SingleUserRows = [
    {
        id: 1,
        username: 'jane doe',
        img: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status: 'active',
        email: 'janedoe@gmail.com',
        sale: 25000,
        delivery: 250,
        quantity: 22,
        total: (25000 * 22) + 250,
        product: 3
    },
    {
        id: 2,
        username: 'james maina',
        img: 'https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'active',
        email: 'jamesmaina@gmail.com',
        sale: 25000,
        delivery: 250,
        quantity: 27,
        total: (25000 * 27) + 250,
        product: 1
    },
    {
        id: 3,
        username: 'mary nyambura',
        img: 'https://images.pexels.com/photos/1322129/pexels-photo-1322129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status: 'pending',
        email: 'marynyambura@gmail.com',
        sale: 25000,
        delivery: 250,
        quantity: 17,
        total: (25000 * 17) + 250,
        product: 2
    },

];


export const SingleProductColums = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
            return (
                <div className="cellWithImg" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={params.row.img} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} ClassName="cellImg" alt="avator" />
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
        field: 'price', headerName: 'Price', width: 100
    },
    {
        field: 'previousPrice', headerName: 'Prev Price', width: 100
    },
    {
        field: 'status', headerName: 'Status', width: 100, renderCell: (params) => {
            return (
                <div style={(params.row.status === 'Sold') ? {
                    padding: '5px',
                    borderRadius: '5px',
                    color: 'green',
                    backgroundColor: 'rgba(0, 128, 0, 0.242)'
                } : (params.row.status === 'Pending') ? {
                    padding: '5px',
                    borderRadius: '5px',
                    color: 'goldenrod',
                    backgroundColor: 'rgba(218, 165, 32, 0.384)'
                } : {
                    padding: '5px',
                    borderRadius: '5px',
                    color: 'red',
                    backgroundColor: 'yellow',
                    opacity: .3,
                }}>
                    {params.row.status}
                </div>
            )
        }
    }
]


//temporary data
export const SingleProductRows = [
    {
        id: 1,
        product: 'Sumsung Galaxy a14',
        category: 'Phone Accessories',
        amaunt: '5 units',
        price: 25000,
        previousPrice: 32000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/64/1125061/1.jpg?6708',
        status: 'Pending',
        user: 2
    },
    {
        id: 2,
        product: 'Sumsung Galaxy a54',
        category: 'Phone Accessories',
        amaunt: '2 units',
        price: 60000,
        previousPrice: 72000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/8477051/1.jpg?1717',
        status: 'Verified',
        user: 3
    },
    {
        id: 3,
        product: 'Sumsung Galaxy a24',
        category: 'Phone Accessories',
        amaunt: '1 units',
        price: 32000,
        previousPrice: 40000,
        img: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/7899251/1.jpg?0774',
        status: 'Sold',
        user: 1
    },
];