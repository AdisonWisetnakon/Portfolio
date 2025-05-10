import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/file.svg" width={"30"} height={"40"} alt=""></Image>
      <video width="320" height="240" controls preload="none">
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
