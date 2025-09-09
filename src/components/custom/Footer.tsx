import { InstagramSvg } from "@/assets/svgs/instagramSvg.tsx";
import { FacebookSvg } from "@/assets/svgs/facebookSvg.tsx";
import { TikTokSvg } from "@/assets/svgs/tiktokSvg.tsx";
import { XSvg } from "@/assets/svgs/XSvg.tsx";
import { Button } from "@/components/ui/button.tsx";

const Footer = () => {
  return (
    <footer className="bg-chart-1">
      <div className="container mx-auto max-w-3xl p-4 pt-8  text-center font-light">
        <div className={"flex justify-between mb-4 items-center"}>
          <h3 className={"text-lg font-semibold"}>HFC</h3>
          <div className={"flex gap-1"}>
            <Button size={"icon"} variant={"ghost"}>
              <InstagramSvg width={16} height={16} />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <FacebookSvg width={16} height={16} />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <TikTokSvg width={16} height={16} />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <XSvg width={16} height={16} />
            </Button>
          </div>
        </div>
        <p className={"font-thin text-xs md:text-sm"}>
          {"© 2025 Hellenic Finance Club. All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
