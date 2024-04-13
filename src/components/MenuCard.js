const MenuCard = (xyz) => {
  console.log(xyz);

  const { prodData } = xyz;

  const { title, price, category, image, rating } = prodData;

  return (
    <div className="w-60 h-96 shadow-lg ">
      <div className="px-2">
        <img
          src={image}
          alt="prod_1"
          className="w-3/4 h-64 p-2  border border-transparent  mx-auto"
        />
        <div className="font-semibold">{title}</div>
        <h4>Rs.{price}</h4>

        <h4>{category}</h4>
        <h4>{rating.rate}</h4>
      </div>
    </div>
  );
};

export const AddedTrending = (MenuCard) => {
  return (props) => {
    return (
      <div className="border border-red-600">
        {console.log({ ...props })}

        <MenuCard {...props} />
      </div>
    );
  };
};
export default MenuCard;
