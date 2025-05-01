
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(
    localStorage.getItem('mapbox_token') || ''
  );
  const [showTokenInput, setShowTokenInput] = useState(!localStorage.getItem('mapbox_token'));

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        zoom: 3,
        center: [-95.7129, 37.0902], // Center on US
        pitch: 40,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add markers for farmer locations
      addFarmerMarkers();

      // Add atmosphere and fog effects
      map.current.on('style.load', () => {
        map.current?.setFog({
          'color': 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setShowTokenInput(true);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const addFarmerMarkers = () => {
    if (!map.current) return;
    
    // Sample farmer locations (derived from products.ts)
    const farmerLocations = [
      { name: 'Green Valley Farms', location: 'Sonoma, CA', coordinates: [-122.4580, 38.2919] },
      { name: 'Sunshine Organics', location: 'Napa, CA', coordinates: [-122.2863, 38.5025] },
      { name: 'Orchard Hills', location: 'Petaluma, CA', coordinates: [-122.6367, 38.2324] },
      { name: 'Berry Good Farms', location: 'Santa Rosa, CA', coordinates: [-122.7144, 38.4404] },
      { name: 'Whole Harvest Grains', location: 'Davis, CA', coordinates: [-121.7405, 38.5449] },
      { name: 'Happy Cow Dairy', location: 'Petaluma, CA', coordinates: [-122.6367, 38.2324] }
    ];
    
    farmerLocations.forEach(farmer => {
      // Create a marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'farmer-marker';
      markerEl.innerHTML = `<div class="bg-harvest-green text-white p-2 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      </div>`;
      
      // Create a popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div>
            <h3 class="font-bold">${farmer.name}</h3>
            <p>${farmer.location}</p>
          </div>
        `);
        
      // Add marker to map
      new mapboxgl.Marker(markerEl)
        .setLngLat(farmer.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });
  };
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      localStorage.setItem('mapbox_token', mapboxToken);
      setShowTokenInput(false);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="harvest-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-harvest-green mb-3">Farm Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover local farmers in your area and connect directly with them for fresh produce
          </p>
        </div>
        
        {showTokenInput ? (
          <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="font-medium mb-4">Enter your Mapbox API Token</h3>
            <form onSubmit={handleTokenSubmit} className="space-y-3">
              <p className="text-sm text-gray-600 mb-2">
                To display the map, you need to provide a Mapbox public token. 
                Visit <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-harvest-green underline">Mapbox</a> to get your free token.
              </p>
              <input 
                type="text" 
                value={mapboxToken} 
                onChange={(e) => setMapboxToken(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your Mapbox public token"
              />
              <Button type="submit" className="w-full">
                Set Token
              </Button>
            </form>
          </div>
        ) : (
          <div className="rounded-lg overflow-hidden h-[500px] relative shadow-lg border border-gray-100">
            <div ref={mapContainer} className="absolute inset-0" />
            <div className="absolute top-2 right-12 z-10">
              <Button size="sm" variant="outline" className="bg-white" onClick={() => setShowTokenInput(true)}>
                Change API Key
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 z-10 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-harvest-green" />
                <span className="font-medium text-sm">Farmer Locations</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Click on the markers to learn more about our partner farmers</p>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Our farmers are carefully selected based on their commitment to sustainable farming practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
