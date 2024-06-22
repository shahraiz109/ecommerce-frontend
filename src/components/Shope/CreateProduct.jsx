import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {toast} from "react-toastify"
import { createProduct } from "../../redux/actions/product";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const {  success, error } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();

  useEffect(()=>{
    if(error){
      toast.error(error)
    }
    if(success){
      toast.success("product created successfully")
      navigate("/dashbord")
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    image.forEach((image) => {
      newForm.append("image", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
     newForm.append("tags", tags);
      newForm.append("originalPrice", originalPrice);
       newForm.append("discountPrice", discountPrice);
        newForm.append("stock", stock);
        //  newForm.append("shopId", shop._id);
         dispatch(createProduct(newForm));
  };
  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => prevImages.concat(files));
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-gray-300 shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center text-gray-800 font-bold">
        Create Product
      </h5>
      {/* // create product form  */}

      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name..."
          />
        </div>

        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
          cols="30"
          rows="8"
          required
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-3 px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description..."
          >
          </textarea>
        </div>

        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="choose a category" className="text-gray-400">
              Choose a category...
            </option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>

        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter product tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Original price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter product price..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price <span className=" text-green-500">(with discount...)</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="discountprice"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter product price with full discount..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter product stock..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Uploads Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {image &&
              image.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div className="text-[16px] font-Roboto flex items-center justify-center">
            <input
              type="submit"
              value="Create"
              className="w-[150px] flex items-center justify-center  rounded-[4px] bg-blue-800"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
