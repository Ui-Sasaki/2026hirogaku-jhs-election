import Image from "next/image";
import Link from "next/link";


export function NavHeader() {
    return (
        <header className="fixed z-10 w-full bg-white/70 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-18">

                    <div className="flex items-center justify-start">
                        <Link href="/">
                       <Image src="/logo.png" alt="Logo" width={250} height={150} />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <nav className="space-x-6">
                            <a href="#" className="text-[#008000] hover:text-green-900 text-[20px]">選挙とは？</a>
                            <a href="#" className="text-[#008000] hover:text-green-900 text-[20px]">候補者一覧</a>
                            <a href="#" className="text-[#008000] hover:text-green-900 text-[20px]">会則・注意事項</a>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
}