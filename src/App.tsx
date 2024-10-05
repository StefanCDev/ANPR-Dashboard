import React from 'react';
import VehicleDashboard from './pages/VehicleDashboard'; // Import your VehicleDashboard component

const App: React.FC = () => {
    return (
        <div>
            <h1>Vehicle Dashboard</h1>
            <VehicleDashboard /> {/* Render your main component */}
        </div>
    );
};

export default App;
