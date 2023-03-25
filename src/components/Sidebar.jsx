import { categories } from "../utils/constants";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex sm:flex-row md:flex-col overflow-y-auto sm:h-auto md:h-[95%]">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          className="font-bold capitalize flex items-center justify-start cursor-pointer bg-transparent outline-none border-none py-[7px] px-[15px] my-[10px] mx-0 rounded-[20px] transition-all hover:bg-[#FC1503] hover:text-white"
        >
          <span className="text-white mr-4">{category.icon}</span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
            className="text-white w-24 text-left"
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
