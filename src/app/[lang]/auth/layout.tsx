import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Image src={'/auth-bg.png'} fill alt="фон для страницы" className="object-cover opacity-60 pointer-events-none" />
            <div className="relative z-1">
                {children}
            </div>
        </>
    );
}