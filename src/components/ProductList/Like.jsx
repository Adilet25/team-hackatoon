import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Like = () => {
  const [like, setLike] = useState(false);

  return (
    <h2 onClick={() => setLike(!like)}>
      {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </h2>
  );
};

export default Like;
