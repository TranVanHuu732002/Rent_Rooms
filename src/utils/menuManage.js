import icons from './icons'

const { MdOutlineLibraryBooks,ImPencil2,BiUserPin } = icons
const menuManage = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/system/create-new",
    icon: <ImPencil2 size={16}/>
  },
  {
    id: 2,
    text: "Quản lí tin đăng",
    path: "/system/manage-post",
    icon: <MdOutlineLibraryBooks size={16}/>
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/system/profile",
    icon: <BiUserPin size={16}/>
  },
];

export default menuManage;
