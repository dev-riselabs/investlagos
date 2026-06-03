import StreamSection from "../components/HomePage/StreamSection";
import InvestmentSection from "../components/HomePage/InvestmentSection";
import HeroSection from "../components/DataInsight/HeroSection";
import DataInsightStats from "../components/DataInsight/StatsSection";
import FocusSection from "../components/DataInsight/FocusSection";
import WinnerSection from "../components/DataInsight/WinnerSection";
import MetricSection from "../components/DataInsight/MetricSection";

function DataInsightPage() {
  return (
    <>
      <HeroSection />
      <DataInsightStats />
      <MetricSection />
      <WinnerSection />
      <FocusSection />
      <InvestmentSection />
      <StreamSection />
    </>
  );
}

export default DataInsightPage;
