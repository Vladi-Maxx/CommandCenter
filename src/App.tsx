import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { TabBar } from './components/TabBar/TabBar';
import { ToolGrid } from './components/ToolGrid/ToolGrid';
import { ClockWidget } from './components/ClockWidget/ClockWidget';
import { tabs } from './data/tools';

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <Layout>
      <ClockWidget />

      <header className="mb-8 md:mb-12">
        <h1 className="
          font-[var(--font-mono)] text-2xl md:text-3xl font-bold
          text-[var(--text-primary)]
          uppercase tracking-[0.2em]
          mb-2
        ">
          Command Center
        </h1>
        <p className="
          font-[var(--font-mono)] text-xs
          text-[var(--text-secondary)]
          uppercase tracking-widest
        ">
          AI Tools Dashboard
        </p>
      </header>

      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main>
        <ToolGrid
          tools={currentTab.tools}
          placeholderCount={currentTab.placeholderCount}
          tabId={currentTab.id}
        />
      </main>
    </Layout>
  );
}

export default App;
