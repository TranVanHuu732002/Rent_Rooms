import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsLimit } from "../../store/actions/post";
import { Slider } from "../../components";
import icons from "../../utils/icons";

const {
  HiLocationMarker,
  MdOutlineWatchLater,
  TbReportMoney,
  RiCrop2Line,
  HiOutlineHashtag,
} = icons;

const DetailPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    postId && dispatch(getPostsLimit({ id: postId }));
  }, [postId]);
  return (
    <div className="w-full flex gap-4 mt-4">
      <div className="w-[70%]">
        <Slider
          images={
            posts && posts.length > 0 && JSON.parse(posts[0].images.image)
          }
        />
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-red-600">
              {posts[0]?.title}
            </h2>
            <div className="flex items-center gap-2">
              <span>Chuyên mục:</span>
              <span className="text-blue-600 underline font-medium hover:text-orange-600 cursor-pointer">
                {posts[0]?.overviews?.area}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker color="#2563eb" />
              <span>{posts[0]?.address}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center justify-between gap-1">
                <TbReportMoney />
                <span className="font-semibold text-lg text-green-600">
                  {posts[0]?.attributes?.price}
                </span>
              </span>
              <span className="flex items-center justify-between gap-1">
                <RiCrop2Line />
                <span>{posts[0]?.attributes?.acreage}</span>
              </span>
              <span className="flex items-center justify-between gap-1">
                <MdOutlineWatchLater />
                <span>{posts[0]?.attributes?.published}</span>
              </span>
              <span className="flex items-center justify-between gap-1">
                <HiOutlineHashtag />
                <span>{posts[0]?.attributes?.hashtag}</span>
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Thông tin mô tả</h3>
            <div className="flex flex-col gap-2">
              {posts[0]?.description &&
                JSON.parse(posts[0]?.description)?.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Đặc điểm tin đăng</h3>
            <table class="min-w-[60%] my-2 text-sm text-left">
              <tbody className="w-full">
                <tr class="w-full border-b">
                  <td class="p-2 border">Mã tin</td>
                  <td class="p-2 border">{posts[0]?.overviews?.code}</td>
                </tr>
                <tr class="bg-gray-200 w-full border-b">
                  <td class="p-2 border">Khu vực</td>
                  <td class="p-2 border">{posts[0]?.overviews?.area}</td>
                </tr>
                <tr class="w-full border-b">
                  <td class="p-2 border">Loại tin rao</td>
                  <td class="p-2 border">{posts[0]?.overviews?.type}</td>
                </tr>
                <tr class="bg-gray-200 w-full border-b">
                  <td class="p-2 border">Đối tượng thuê</td>
                  <td class="p-2 border">{posts[0]?.overviews?.target}</td>
                </tr>
                <tr class="w-full border-b">
                  <td class="p-2 border">Gói tin</td>
                  <td class="p-2 border">{posts[0]?.overviews?.bouns}</td>
                </tr>
                <tr class="bg-gray-200 w-full border-b">
                  <td class="p-2 border">Ngày đăng</td>
                  <td class="p-2 border">{posts[0]?.overviews?.created}</td>
                </tr>
                <tr class="w-full border-b">
                  <td class="p-2 border">Ngày hết hạn</td>
                  <td class="p-2 border">{posts[0]?.overviews?.expired}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold text-xl my-4">Thông tin liên hệ</h3>
            <table class="min-w-[60%] my-2 text-sm text-left">
              <tbody className="w-full">
                <tr class="w-full border-b">
                  <td class="w-[33%] p-2 border">Liên hệ </td>
                  <td class="p-2 border">{posts[0]?.user?.name}</td>
                </tr>
                <tr class="bg-gray-200 w-full border-b">
                  <td class="p-2 border">Điện thoại</td>
                  <td class="p-2 border">{posts[0]?.user?.phone}</td>
                </tr>
                <tr class="w-full border-b">
                  <td class="p-2 border">Zalo</td>
                  <td class="p-2 border">{posts[0]?.user?.zalo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-[30%]">SideBar</div>
    </div>
  );
};

export default DetailPost;
