import { DashboardScreen, InventoryScreen, AlertsScreen, RecipesScreen, Tablet } from '@/components/Mockup';

export default function Screenshots() {
  const screens = [
    { id: 'dashboard', label: 'Dashboard', content: <DashboardScreen /> },
    { id: 'inventory', label: 'Inventory', content: <InventoryScreen /> },
    { id: 'alerts',    label: 'Alerts',    content: <AlertsScreen /> },
    { id: 'recipes',   label: 'Recipes',   content: <RecipesScreen /> },
  ];

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: 60, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' }}>
        {screens.map(s => (
          <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div id={s.id}>
              <Tablet width={280}>{s.content}</Tablet>
            </div>
            <p style={{ fontSize: 13, color: '#666', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
