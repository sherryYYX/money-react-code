import React from 'react';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (e) {
  console.log(e);
}

type Props  = {
  name:String
}

const Icon = (props:Props)=>{
  return(
    <svg>
      <use xlinkHref={"#"+ props.name}></use>
    </svg>
  )
}
export default Icon