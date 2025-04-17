
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Navigation, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Major cities in India with their coordinates
const INDIAN_CITIES = [
  { name: 'Mumbai', coordinates: [72.8777, 19.0760] },
  { name: 'Delhi', coordinates: [77.1025, 28.7041] },
  { name: 'Bangalore', coordinates: [77.5946, 12.9716] },
  { name: 'Hyderabad', coordinates: [78.4867, 17.3850] },
  { name: 'Chennai', coordinates: [80.2707, 13.0827] },
  { name: 'Kolkata', coordinates: [88.3639, 22.5726] },
  { name: 'Jaipur', coordinates: [75.7873, 26.9124] },
  { name: 'Ahmedabad', coordinates: [72.5714, 23.0225] },
  { name: 'Pune', coordinates: [73.8567, 18.5204] },
  { name: 'Kochi', coordinates: [76.2673, 9.9312] },
];

interface IndiaMapProps {
  onSelectLocation: (city: string) => void;
  selectedLocation: string;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ onSelectLocation, selectedLocation }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  // This is where you would normally use your Mapbox token
  // For this demo, we'll ask the user to input their token
  useEffect(() => {
    const userToken = localStorage.getItem('mapbox-token');
    if (userToken) {
      setMapboxToken(userToken);
    }
  }, []);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const token = formData.get('mapbox-token') as string;
    if (token) {
      localStorage.setItem('mapbox-token', token);
      setMapboxToken(token);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 3.5,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // When map loads, add markers for each city
    map.current.on('load', () => {
      // Add markers for each city
      INDIAN_CITIES.forEach((city) => {
        const markerEl = document.createElement('div');
        markerEl.className = 'cursor-pointer';
        markerEl.innerHTML = `<div class="${city.name === selectedLocation ? 'text-blog-brown' : 'text-gray-600'} hover:text-blog-brown transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>`;
        
        markerEl.addEventListener('click', () => {
          onSelectLocation(city.name);
          
          // Fly to the selected location
          map.current?.flyTo({
            center: city.coordinates,
            zoom: 8,
            essential: true
          });
        });
        
        new mapboxgl.Marker({ element: markerEl })
          .setLngLat(city.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${city.name}</h3>`))
          .addTo(map.current);
      });
      
      // If there's a selected location, center on it
      if (selectedLocation) {
        const city = INDIAN_CITIES.find(c => c.name === selectedLocation);
        if (city) {
          map.current.flyTo({
            center: city.coordinates,
            zoom: 8,
            essential: true
          });
        }
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, selectedLocation, onSelectLocation]);

  if (!mapboxToken) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-lg font-medium mb-4">Mapbox Token Required</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          To view the interactive India map, please enter your Mapbox public token.
          You can get one for free at <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blog-brown hover:underline">mapbox.com</a>
        </p>
        <form onSubmit={handleTokenSubmit} className="flex flex-col gap-2">
          <input 
            type="text" 
            name="mapbox-token" 
            placeholder="pk.eyJ1IjoieW91..."
            className="border border-input rounded-md px-3 py-2 w-full"
            required
          />
          <button 
            type="submit"
            className="bg-blog-brown text-white px-4 py-2 rounded-md hover:bg-blog-brown/90 transition-colors"
          >
            Save Token
          </button>
        </form>
      </Card>
    );
  }

  return (
    <div className="w-full">
      <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-md" />
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {INDIAN_CITIES.map((city) => (
          <button
            key={city.name}
            onClick={() => onSelectLocation(city.name)}
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
              selectedLocation === city.name 
                ? 'bg-blog-brown text-white' 
                : 'bg-blog-brown/10 text-blog-brown hover:bg-blog-brown/20'
            } transition-colors`}
          >
            <MapPin size={14} className="mr-1" /> {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndiaMap;
