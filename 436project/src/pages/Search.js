import React from "react"
import {useState} from "react"
import { MDBCol } from "mdbreact";

const express = require("express")
require('dotenv').config
const{Configuration, OpenAiapi} = require('openai')
const app = express()
const port = process.env.PORT || 5000
app.listen(port)
const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY
})
app.use(express.json())
const openai = new OpenAiapi(configuration)


function Search(){
    const[search,setSearch] = useState("")
    const[answer,setAnswer] = useState("")
    
    return(
    <form class = "form" onSubmit={searchText}>
        <MDBCol md="6">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={e=>setSearch(e.target.value)}/>
            <MDBBtn color="elegant" type={"submit"}>Elegant</MDBBtn>
        </MDBCol>
    </form>
    )
    
}
export default Search


