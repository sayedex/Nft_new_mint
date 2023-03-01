
import {useAppSelector,useAppdispatch} from "../hooks/redux"
import { useEffect } from 'react';
//wagmi hook
import { useAccount } from 'wagmi'
//wallet slice 
import {setRender,setSupply} from "../store/walletSlice"
//components..
import { Header } from '../components/Header/Header';
import { useTransation } from "../hooks/useTransation";

import Footer from "../components/Footer/Footer";
const  Layout = (props:any)=> {
  const { address, isConnecting, isDisconnected ,isConnected} = useAccount();
  const dispatch = useAppdispatch();
  const {totalSupply} = useTransation()
useEffect(()=>{

  if (totalSupply !== undefined && totalSupply!==null) {
    const supply = Number(totalSupply);
    dispatch(setSupply(supply))
}
},[totalSupply])

    return (
   <div className=" ">
   <Header/>
   {props.children}
   <Footer/>
   </div>
    )
  }
  
  
  export default Layout