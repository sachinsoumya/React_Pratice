const MenuCard = (xyz) => {
    // console.log(xyz);
  
    const { prodData } = xyz;
  
    const { title, price, category, image, rating } = prodData;
  
    return (
      <div className="menu-card">
        <img src={image} alt="prod_1" className="product" />
        <h4>{title}</h4>
        <h4>{price}</h4>
  
        <h4>{category}</h4>
        <h4>{rating.rate}</h4>
      </div>
    );
  };
  export default MenuCard