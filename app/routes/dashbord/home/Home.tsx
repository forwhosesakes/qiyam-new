import { Header } from "./home/header";
import { HomeSectionFive } from "./home//homeSectionFive";
import HomeSectionFour from "./home//homeSectionFour";
import HomeSectionOne from "./home//homeSectionOne";
import { HomeSectionSeven } from "./home//homeSectionSeven";
import HomeSectionSix from "./home//homeSectionSix";
import { HomeSectionThree } from "./home//homeSectionThree";
import HomeSectionTwo from "./home//homeSectionTwo";

export const Home = (): JSX.Element => {
  return (
    <div dir="rtl">
      <Header />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
    </div>
  );
};
