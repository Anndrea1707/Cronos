//  function Button (props){
//      const name = 'Alonso'
//       return(
//          <>
//           <button className="bg-primary px-5 py-2  text-">{name}</button>
//          </>
//      )
//   }

 const Button = (props) => {


     const {name} = props;
     return(
         <>
         <button className="bg-primary px-5 py-2  text-">{name}</button>
         </>
     )

}

export default Button;