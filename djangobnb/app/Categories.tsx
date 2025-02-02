// Ne crée par ce fichier ds le dossier components comme va apparement
// y avoir plus d'un component (cité par ce fichier?)
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
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
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat2.png"
          alt="other"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>UFO</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat3.png"
          alt="swimming pool"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>House</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat4.png"
          alt="swimming pool"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>Campagne</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat5.png"
          alt="swimming pool"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat6.png"
          alt="swimming pool"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>Room Service</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat7.png"
          alt="swimming pool"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>Other</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
        <Image
          src="/categories_icons/cat8.png"
          alt="swimming pool"
          width={20}
          height={20}
          className="hover:scale-120"
        />
        <span>Key</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white border-gray-200 opacity-60 hover:opacity-100 font-semibold">
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
  );
};

export default Categories;
