import ValueCard from "./Value/ValueCard";

export default function Values() {
    return (
        <div className="flex-grow flex w-full max-w-7xl mx-auto mb-16">
            <div className="flex flex-col items-center w-5/6 max-h-[48rem] pt-10 mx-auto lg:ml-auto">
                <div className="w-full">
                    <h1 className="text-xl font-made font-bold text-center p-8">OUR VALUES</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ValueCard
                        image="/img/lightbulb-o.png"
                        nama="INNOVATIVE"
                        deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?" />
                        <ValueCard
                        image="/img/bank.png"
                        nama="LOYALTY"
                        deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Impedit similique eum itaque facere temporibus dolores." />
                        <ValueCard
                        image="/img/balance-scale.png"
                        nama="RESPECT"
                        deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequatur, sit? Tenetur et neque quod incidunt!" />
                    </div>
                </div>
            </div>
        </div>
    )
}