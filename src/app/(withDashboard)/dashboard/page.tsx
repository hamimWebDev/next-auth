import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const section = await getServerSession(authOptions);

  if (section?.user) {
    const { name, email, image }: any = section?.user;
    return (
      <div>
        <h1 className="text-4xl text-center mt-10">Welcome {name} </h1>
        <Image
          className="mx-auto mt-4 rounded-full"
          src={image}
          alt="profile-img"
          height={200}
          width={300}
        />
        <h1 className="text-xl text-center mt-10">Your Email: {email} </h1>
      </div>
    );
  } else {
    return (
      <div>
        
      </div>
    );
  }
};

export default DashboardPage;
