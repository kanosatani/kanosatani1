import React from "react";
import InfoRow from "../components/infoRow/InfoRow";
import { homeAboutdata } from "../data/homePageData";
import ServicesRow from "../components/serviceRow/ServicesRow";
import ProgressRow from "../components/progressRow/ProgressRow";

function Home() {
  return (
    <div>
      <InfoRow
        src={homeAboutdata.src}
        title={homeAboutdata.title}
        desc={homeAboutdata.desc}
      />
      <InfoRow
        title={homeAboutdata.title}
        desc={homeAboutdata.desc}
        src={homeAboutdata.src}
        contentFirst
      />
      <ServicesRow />
      <ProgressRow />
    </div>
  );
}

export default Home;
