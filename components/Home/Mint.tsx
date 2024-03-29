import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import useDirectCall from '../../hooks/useTransation';
import {useAppSelector,useAppdispatch} from "../../hooks/redux";
import { ConnectButtonwagmi } from '../Header/connect';
import { NFT_CONTRACT ,NFT_PRICE} from '../../config';
import { useAccount ,  useSigner,} from 'wagmi'
import { fetchTotalMint } from '../../hooks/Totalsupply';

export function Mint() {
  const dispatch = useAppdispatch()
  const { data: signer } = useSigner();
    const { address, isConnecting, isDisconnected ,isConnected} = useAccount();
    const {BuyToken,loading} = useDirectCall(signer,NFT_CONTRACT);
    const supply = useAppSelector((state) => state.wallet.totalSupply);
    const [load,setload] = useState(false);
    useEffect(()=>{
      setload(true)
    },[])

    const Mintnft = ()=>{
      BuyToken("Mint",NFT_PRICE);

    }
    useEffect(()=>{
      dispatch(fetchTotalMint())
    },[loading])

    

  return (
    <div className='w-full md:w-6/12'>
<h1 className='uppercase text-4xl font-extrabold md:text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Public-Mint</h1>

<p className='py-2'>Mint nft.com Texture Punx are an NFT created by ethereum founding member Texture. On chain, svg. 50% of secondary royalties go to ethereum core devs via protocol guild.</p>

<div className='py-2'>
<h2 className='text-4xl font-extrabold'>{supply}/4000 Minted</h2>
<h2 className='text-lg uppercase py-2 text-white dark:text-white'>Price  0.01 ETH</h2>
</div>

{load?<div>
{isConnected? <button disabled={loading} onClick={()=>Mintnft()} 
  className=' bg-gradient-to-r from-purple-400 to-pink-600 hover:to-purple-500 text-white font-bold py-2 px-10 rounded-2xl tracking-[1px]'>
    {loading?"Minting..":"Mint"}</button>:<ConnectButtonwagmi/> }</div>:null}



    </div>
  )
}

