import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  // ci-dessous une fonction où on veut faire en sorte que ça soit possible
  // de lui pass un string
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => setCategory("Pool")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Pool" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat1.png"
            alt="swimming pool"
            width={20}
            height={20}
            //   perso
            className="hover:scale-120"
          />
          <span>Pool</span>
        </div>
        <div
          onClick={() => setCategory("UFO")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "UFO" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat2.png"
            alt="other"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>UFO</span>
        </div>
        <div
          onClick={() => setCategory("House")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "House" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat3.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>House</span>
        </div>
        <div
          onClick={() => setCategory("Campagne")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Campagne" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat4.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>Campagne</span>
        </div>
        <div
          onClick={() => setCategory("Beach")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat5.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>Beach</span>
        </div>
        <div
          onClick={() => setCategory("Room Service")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Room Service" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat6.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>Room Service</span>
        </div>
        <div
          onClick={() => setCategory("Other")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Other" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat7.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>Other</span>
        </div>
        <div
          onClick={() => setCategory("Key")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Key" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat8.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>Key</span>
        </div>
        <div
          onClick={() => setCategory("Fun")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Fun" ? "border-gray-800" : "border-white"
          }  border-gray-200 opacity-60 hover:opacity-100 font-semibold`}
        >
          <Image
            src="/categories_icons/cat9.png"
            alt="swimming pool"
            width={20}
            height={20}
            className="hover:scale-120"
          />
          <span>Fun</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
