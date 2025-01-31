import Image from "next/image";

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] items-center flex flex-between border rounded-full">
      {/* ci-dessous, cache ces div si en-dessous écran ordi en largeur */}
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Wanted location</p>
          </div>

          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm">Add dates</p>
          </div>

          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm">Add dates</p>
          </div>

          <div className="h-[48px] lg:h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition  cursor-pointer rounded-full text-white">
          <Image
            src="/Loupe.png"
            alt="Magnifying glass icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
