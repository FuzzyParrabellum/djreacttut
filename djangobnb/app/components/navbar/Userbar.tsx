import Image from "next/image";
import Link from "next/link";

const UserNav = () => {
  return (
    <div className="p-2 relative inline-block border border rounded-full">
      <button className="flex items-center">
        <Image
          src="/burger_icon.png"
          alt="burger logo"
          width={16}
          height={16}
        />
        <Image
          src="/account_icon.png"
          alt="user account logo"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default UserNav;
