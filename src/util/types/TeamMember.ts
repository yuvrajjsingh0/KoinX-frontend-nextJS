import { StaticImageData } from "next/image";

export default interface TeamMember{
    id: string,
    name:string,
    designation:string,
    desc:string,
    image:StaticImageData
}
