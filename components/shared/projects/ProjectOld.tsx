import Image from "next/image";

function ProjectsOld() {
    return (
        <section className="container relative h-screen bg-gradient-to-r from-background to-alternativebackground p-4"
            id="projects">
            <div className="flex flex-col gap-2 items-center text-center p-6">
                <h2 className="font-english font-normal text-[7rem] text-foreground">
                    Featured Projects!
                </h2>
                <p className="font-english font-light text-md text-foreground w-3/4">
                    Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.
                    Each product is meticulously crafted to provide exceptional performance, usability, and results.
                </p>
            </div>

            <div className="flex flex-col w-full gap-2 items-center p-6">
                <div>
                    <Image src={"/Images/projects/identity.jpg"}
                        alt={"identity"}
                        width={1000}
                        height={1000}
                        objectFit="crop"
                        className="w-full rounded-md  border-2 border-foreground" />

                    <div className="flex flex-row gap-4 p-4 bg-gradient-to-b from-background to-alternativebackground rounded-md">
                        <div className="w-1/4">
                            <h4 className="text-foreground font-normal text-sm">Project Name </h4>
                            <p className="text-foreground font-light text-xs">Identity</p>
                        </div>

                        <div className="w-1/3">
                            <h4 className="text-foreground font-normal text-sm">Description </h4>
                            <p className="text-foreground font-light text-xs">
                                Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.
                            </p>
                        </div>

                        <div className="w-1/4">
                            <h4 className="text-foreground font-normal text-sm">Industry</h4>
                            <p className="text-foreground font-light text-xs">Foods</p>
                        </div>

                        <div>
                            <h4 className="text-foreground font-normal text-sm">Client </h4>
                            <p className="text-foreground font-light text-xs">KFC</p>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="flex flex-col w-full gap-2 items-center p-6">
                <div>
                    <Image src={"/Images/projects/management.jpg"}
                        alt={"management"}
                        width={1000}
                        height={1000}
                        objectFit="crop"
                        className="w-full rounded-md  border-2 border-foreground" />

                    <div className="flex flex-row gap-4 p-4 bg-gradient-to-b from-background to-alternativebackground rounded-md">
                        <div className="w-1/4">
                            <h4 className="text-foreground font-normal text-sm">Project Name </h4>
                            <p className="text-foreground font-light text-xs">Management</p>
                        </div>

                        <div className="w-1/3">
                            <h4 className="text-foreground font-normal text-sm">Description </h4>
                            <p className="text-foreground font-light text-xs">
                                Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.
                            </p>
                        </div>

                        <div className="w-1/4">
                            <h4 className="text-foreground font-normal text-sm">Industry </h4>
                            <p className="text-foreground font-light text-xs">Foods</p>
                        </div>

                        <div>
                            <h4 className="text-foreground font-normal text-sm">Client </h4>
                            <p className="text-foreground font-light text-xs">KFC</p>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="flex flex-col w-full gap-2 items-center p-6">
                <div>
                    <Image src={"/Images/projects/banner.jpg"}
                        alt={"banner"}
                        width={1000}
                        height={1000}
                        objectFit="crop"
                        className="w-full rounded-md  border-2 border-foreground" />

                    <div className="flex flex-row gap-4 p-4 bg-gradient-to-b from-background to-alternativebackground rounded-md">
                        <div className="w-1/4">
                            <h4 className="text-foreground font-normal text-sm">Project Name </h4>
                            <p className="text-foreground font-light text-xs">Banner</p>
                        </div>

                        <div className="w-1/3">
                            <h4 className="text-foreground font-normal text-sm">Description </h4>
                            <p className="text-foreground font-light text-xs">
                                Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.
                            </p>
                        </div>

                        <div className="w-1/4">
                            <h4 className="text-foreground font-normal text-sm">Industry </h4>
                            <p className="text-foreground font-light text-xs">Foods</p>
                        </div>

                        <div>
                            <h4 className="text-foreground font-normal text-sm">Client </h4>
                            <p className="text-foreground font-light text-xs">KFC</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default ProjectsOld;
