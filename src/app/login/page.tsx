import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center justify-between px-24 py-20 h-full">
      <Image
        src="/login-picture.png"
        alt="Login picture"
        width={600}
        height={600}
      />
      <div className="w-1/2 flex flex-col gap-2">
        <h2 className="text-green-600 text-4xl font-bold">Log in</h2>
        <div className="text-black flex items-center">
          <h4>Don&apos;t have account?</h4>
          <Link
            className="px-1 text-blue-500 hover:text-blue-700"
            href={"/register"}
          >
            Create now!
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>Login</Button>
        </div>
        <div className="border-t border-gray-300 my-4 relative">
          <div className="flex justify-center absolute top-0 w-full -translate-y-1/2">
            <span className="bg-white px-4 text-black text-sm">
              Or log in with
            </span>
          </div>
        </div>
        <Button className="bg-white border border-gray-300 flex items-center justify-center gap-3 text-black hover:text-white hover:border-transparent">
          <Image src="/google.png" width={20} height={20} alt="Google" />
          <span>Google</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
