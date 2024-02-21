import { FC } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const MainLayout : FC<Props> = ({children}) => {  
  return (
   <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] overflow-x-hidden">
        <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
            {children}
        </main>
   </section>
  )
}

export default MainLayout;