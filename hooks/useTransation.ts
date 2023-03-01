import { usePrepareContractWrite ,useContractWrite,useWaitForTransaction,useContractRead} from 'wagmi';
import { NFT_CONTRACT,NFT_PRICE } from '../config';
import erc721abi from "../config/ABI/erc721.json"
import { ethers } from 'ethers';
import { erc20ABI } from 'wagmi';
import { Toast,toast } from 'react-hot-toast';
export function useTransation( ) 
     {

   //without Ox...
  const TokenwithoutPrefix = NFT_CONTRACT.slice(2);

  const { config ,error,isError,isLoading:loadInstance} = usePrepareContractWrite({
    address: `0x${TokenwithoutPrefix}`,
    abi:erc721abi.abi,
    functionName:"Mint",
    overrides: {
      value: ethers.utils.parseEther(NFT_PRICE),
    },
  })


  
  const { writeAsync,data ,isSuccess} = useContractWrite(config)
  const {status,isLoading,isFetching} = useWaitForTransaction({
    hash: data?.hash,
    onSettled(data, error) {
      console.log("asa");
      toast.success('Successfully minted token!')

    },
  })

  const { data:totalSupply ,isLoading:loadSupply} = useContractRead({
    address: `0x${TokenwithoutPrefix}`,
    abi:erc721abi.abi,
    functionName: 'totalSupply',
  })

  return {
    config,
    error,
    isError,
    loadInstance,
    writeAsync,
    data,
    isSuccess,
    status,
    isLoading,
    isFetching,
    totalSupply,
    loadSupply
  }
}


