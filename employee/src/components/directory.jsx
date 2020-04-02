import React, {useEffect, useState} from 'react'
import Table from './Employeetable'
import API from '../util/API'
import Search from './search'
import Header from './Header'

const Directory =()=> {
    const [employeeList, setEmployeeList] = useState([])
    const [searchTerm, setSearchTerm]= useState("")
    const [activeList, setActiveList]= useState([])
    const [direction, setDirection]=useState('des')
    const [sorList, setSorList]=useState(false)
    useEffect(()=>{
        API.search()
        .then(data=> {
            setEmployeeList(data.data.results)
            setActiveList(data.data.results)
        })
    },[])

    const searchTermHandler =(term)=>{
        setSearchTerm(term)
        const filteredList = employeeList.filter(emp=>{
            return emp.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || emp.name.last.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setActiveList(filteredList)
    }
    const sortList =()=>{
       const sortedList = activeList.sort(function(a, b) {
            const x = a.name.first
            const z = b.name.first
            if(direction !== "asc"){
                if (x> z) {
                  return 1;
                }
                if (x < z) {
                  return -1;
                }
                return 0;
            }
            else{
                if (x< z) {
                    return 1;
                  }
                  if (x > z) {
                    return -1;
                  }
                  return 0;
            }
          });
        setDirection(currDir => currDir=== "asc"? "des": "asc")
        setActiveList(sortedList)
        if(!sorList)setSorList(true)

    }
   

    return(
        <>
        <Header />
        <Search handler ={searchTermHandler} val={searchTerm}/>
        <Table sort={sortList} employees = {activeList} isSorted ={sorList} direction={direction}/>
        </>
    )

}
export default Directory