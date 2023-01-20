import Image from "next/image";

export default function ValueCard(props) {
  const {image, nama, deskripsi} = props;
  return (
    <div className="relative flex h-fit w-full p-20 mb-4 mx-auto bg-black rounded-lg">
        <div className="w-full lg:w-3/6 my-auto">
            <Image src={image} alt="Value" className="invisible" width={10} height={10}/>
        </div>
        {nama == 'INNOVATIVE' && (
            <div className="absolute flex -top-4 left-0 lg:left-0 w-full h-fit p-6 border-2 border-box-inno-outer bg-box-inno">
                <div className="flex flex-col w-full mb-3 text-white text-center justify-center">
                    <div>
                        <div className="image-column">
                            <div className="image-container">
                                <Image src={image} alt="Value" width={15} height={20} className=""/>
                            </div>
                        </div>
                        <h4 className="font-bold text-lg mt-2">{nama}</h4>
                        <p className="font-normal text-sm mt-4">{deskripsi}</p>
                    </div>
                </div>
            </div>
        )}
        {nama == 'LOYALTY' && (
            <div className="absolute flex -top-4 left-0 lg:left-0 w-full h-fit p-6 border-2 border-box-loyalty-outer bg-box-loyalty">
                <div className="flex flex-col w-full mb-3 text-white text-center justify-center">
                    <div>
                        <div className="image-column">
                            <div className="image-container">
                                <Image src={image} alt="Value" width={25} height={15} className=""/>
                            </div>
                        </div>
                        <h4 className="font-bold text-lg mt-2">{nama}</h4>
                        <p className="font-normal text-sm mt-4">{deskripsi}</p>
                    </div>
                </div>
            </div>
        )}
        {nama == 'RESPECT' && (
            <div className="absolute flex -top-4 left-0 lg:left-0 w-full h-fit p-6 border-2 border-box-respect-outer bg-box-respect">
                <div className="flex flex-col w-full mb-3 text-white text-center justify-center">
                    <div>
                        <div className="image-column">
                            <div className="image-container">
                                <Image src={image} alt="Value" width={30} height={15} className=""/>
                            </div>
                        </div>
                        <h4 className="font-bold text-lg mt-2">{nama}</h4>
                        <p className="font-normal text-sm mt-4">{deskripsi}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}
