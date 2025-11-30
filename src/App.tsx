import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { TabBar } from './components/TabBar/TabBar';
import { ToolGrid } from './components/ToolGrid/ToolGrid';
import { ClockWidget } from './components/ClockWidget/ClockWidget';
import { tabs } from './data/tools';

function App() {
  if (tabs.length === 0) {
    throw new Error('No tabs configured in tools.ts');
  }

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);
  if (!currentTab) {
    throw new Error(`Tab not found: ${activeTab}`);
  }

  return (
    <Layout>
      <ClockWidget />

      <header className="mb-8 md:mb-12">
        <h1 className="
          hero-title
          font-[var(--font-mono)]
          text-4xl md:text-6xl lg:text-7xl
          font-black
          uppercase tracking-[0.3em] md:tracking-[0.5em]
          mb-3
          leading-none
        ">
          Command Center
        </h1>
        <p className="
          font-[var(--font-mono)] text-[10px] md:text-xs
          text-[var(--text-secondary)]
          uppercase tracking-[0.4em]
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
