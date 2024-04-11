const MenuCard = (xyz) => {
  // console.log(xyz);

  const { prodData } = xyz;

  const { title, price, category, image, rating } = prodData;

  return (
    <div className="w-60 h-96 shadow-lg ">
      <div className="px-2">
        <img
          src={image}
          alt="prod_1"
          className="w-3/4 h-3/4 p-2  border border-transparent  mx-auto"
        />
        <h4>{title}</h4>
        <h4>{price}</h4>

        <h4>{category}</h4>
        <h4>{rating.rate}</h4>
      </div>
    </div>
  );
};
export default MenuCard;
