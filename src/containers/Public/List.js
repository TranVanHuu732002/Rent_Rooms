import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getPostsLimit } from "../../store/actions/post";

const List = ({page}) => {
  const dispatch = useDispatch();
  const { posts} = useSelector((state) => state.post);
  useEffect(() => {
    let offset = page? +page -1 : 1
    dispatch(getPostsLimit(offset));
  }, [page]);

  return (
    <div className="w-full bg-white shadow-md rounded-md px-4 ">
      <div className="flex items-center justify-between mt-5 px-1">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật : 12/04/2024</span>
      </div>
      <div className="flex items-center gap-2 my-2 px-1">
        <span>Sắp xếp:</span>
        <Button bgColor="bg-gray-200" text="Mặc định" />
        <Button bgColor="bg-gray-200" text="Mới nhất" />
      </div>

      <div className="items-center ">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={item?.description}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
