import React,{useMemo} from 'react'

function UseMemoDemo(){

    const data=[{
        id:1,
        name:'John',
        city:'Pune'
    },{
        id:2,
        name:'Peter',
        city:'Mumbai'
    },{
        id:3,
        name:'Richard',
        city:'Bangalore'
    },{
        id:4,
        name:'Jenifer',
        city:'Nashik' 
    },
    {
        id:3,
        name:'Ruth',
        city:'Kolhapur'
    }
]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const handleSearch=()=>{
        setSearch(text) //J
    }

    const filteredData=useMemo(()=>data.filter((user)=>{
        console.log('hiiiiiiii');
        return user.name.includes(search)
    }),[search])

    return(
        <div>
            <h1>Use Memo Demo!!!</h1>
            <input type='text' onChange={handleChange}/>
            <button type='button' onClick={handleSearch}>Search</button>
            <UserList users={filteredData}/>
        </div>
    )
}

function UserList({users}){
    return(
        <ul>
            {
                users.map((user)=>(
                    <li>{user.name}</li>
                ))
            }
        </ul>
    )
}

export default UseMemoDemo