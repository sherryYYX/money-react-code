import React from 'react';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../icons", true, /\.svg$/));
} catch (e) {
  console.log(e);
}


type Props  = {
  name?: string,
} & React.SVGAttributes<SVGElement>

const Icon = (props:Props)=>{
  const {name, children, className, ...rest} = props
  return(
    <svg {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/> }
    </svg>
  );
};
export default Icon