import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

// Services
import IndustrialIntelligence from './pages/services/IndustrialIntelligence';
import EnergyAccountability from './pages/services/EnergyAccountability';
import OperationalEfficiency from './pages/services/OperationalEfficiency';
import MepEngineering from './pages/services/MepEngineering';
import EpcSolutions from './pages/services/EpcSolutions';
import WorkforceDevelopment from './pages/services/WorkforceDevelopment';

// Insights
import WhyPowerFactorPenalty from './pages/insights/WhyPowerFactorPenalty';
import SubMeteringRoi from './pages/insights/SubMeteringRoi';
import HybridPowerTelecom from './pages/insights/HybridPowerTelecom';
import CompressedAirExpensiveUtility from './pages/insights/CompressedAirExpensiveUtility';
import VoltageInstabilityMotors from './pages/insights/VoltageInstabilityMotors';
import DefenceOfBoringAudit from './pages/insights/DefenceOfBoringAudit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="projects" element={<Projects />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Services routes */}
          <Route path="services/industrial-intelligence" element={<IndustrialIntelligence />} />
          <Route path="services/energy-accountability" element={<EnergyAccountability />} />
          <Route path="services/operational-efficiency" element={<OperationalEfficiency />} />
          <Route path="services/mep-engineering" element={<MepEngineering />} />
          <Route path="services/epc-solutions" element={<EpcSolutions />} />
          <Route path="services/workforce-development" element={<WorkforceDevelopment />} />

          {/* Insights routes */}
          <Route path="insights/why-power-factor-penalty" element={<WhyPowerFactorPenalty />} />
          <Route path="insights/sub-metering-roi" element={<SubMeteringRoi />} />
          <Route path="insights/hybrid-power-telecom" element={<HybridPowerTelecom />} />
          <Route path="insights/compressed-air-expensive-utility" element={<CompressedAirExpensiveUtility />} />
          <Route path="insights/voltage-instability-motors" element={<VoltageInstabilityMotors />} />
          <Route path="insights/defence-of-boring-audit" element={<DefenceOfBoringAudit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
