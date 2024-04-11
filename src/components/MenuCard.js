const MenuCard = (xyz) => {
    // console.log(xyz);
  
    const { prodData } = xyz;
  
    const { title, price, category, image, rating } = prodData;
  
    return (
      <div className="w-60 h-96">
        <img src={image} alt="prod_1" className="w-2/4 h-2/4" />
        <h4>{title}</h4>
        <h4>{price}</h4>
  
        <h4>{category}</h4>
        <h4>{rating.rate}</h4>
      </div>
    );
  };
  export default MenuCard