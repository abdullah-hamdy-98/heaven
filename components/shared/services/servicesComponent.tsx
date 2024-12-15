function ServicesComponent() {
    return (
        <section className="container bg-alternativebackground p-4"
        id="services">
            <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-5 gap-4 text-foreground">
                {/* Section 01 */}
                <div className="col-span-1 row-span-1 md:row-span-2 px-6 text-center md:text-left">
                    <h1 className="font-english font-medium text-[4rem] md:text-[8rem] lg:text-[12rem]">
                        01
                    </h1>
                </div>
                {/* Section About */}
                <div className="col-span-2 row-span-1 md:row-span-2 md:col-start-1 md:row-start-3 px-6 text-center md:text-left">
                    <h1 className="font-english font-medium text-[4rem] md:text-[8rem] lg:text-[12rem]">
                        About
                    </h1>
                </div>
                {/* Section Content */}
                <div className="col-span-1 md:col-span-3 md:row-span-5 md:col-start-4 md:row-start-3">
                    <div className="w-full p-4 md:p-6">
                        <p className="font-english font-medium text-base md:text-lg lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin nec ligula et purus consequat facilisis ut sed lorem.
                            Integer non dui ut felis vulputate tincidunt nec ac elit.
                            Nullam malesuada ligula vitae eros gravida, sit amet blandit lorem accumsan.
                            Maecenas vehicula orci et augue iaculis, at scelerisque mi sodales. Curabitur dictum,
                            elit non interdum pharetra, ligula magna sollicitudin risus, vel suscipit nisi elit eget est.
                            Aenean aliquet sem nec dui posuere feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porttitor,
                            tortor in finibus tempus, eros nisi hendrerit quam, non tristique dolor est nec justo.
                            Quisque ac diam sed nunc volutpat suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesComponent;
