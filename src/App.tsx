
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import imageSrc from "./52112.png"; 


const API_KEY = "at_0XMo1zhkYG9JwXt78fDufCNqPOBZ1"; // Replace with a valid API key
const DEFAULT_IP = "8.8.8.8"; // Google’s Public DNS IP

const IPTracker: React.FC = () => {
  const [ip, setIp] = useState(DEFAULT_IP);
  const [locationData, setLocationData] = useState<any>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchIPDetails(DEFAULT_IP);
  }, []);

  const fetchIPDetails = async (ipAddress: string) => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
      );

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      if (!data.location) throw new Error("No location data found");

      setLocationData(data);
      updateMap(data.location.lat, data.location.lng);
    } catch (error) {
      console.error("Error fetching IP details:", error.message);
    }
  };

  const updateMap = (lat: number, lng: number) => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current as HTMLDivElement, {
        center: [lat, lng],
        zoom: 10,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([lat, lng], 12);
    }

    if (markerRef.current) {
      markerRef.current.remove();
    }

    markerRef.current = L.marker([lat, lng], {
      icon: L.icon({
        iconUrl: imageSrc,
        iconSize: [100,100],
        iconAnchor: [19, 38],
        popupAnchor: [1, -34],
      }),
    })
      .addTo(mapRef.current)
    
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>IP Address Tracker</h1>
      <input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Enter IP address"
        style={{width:"80%",height:"40px",padding:0}}
      />
      <button onClick={() => fetchIPDetails(ip)} style={{width:"10%",height:"40px",padding:0}}>Search</button>
      {locationData && (
        <p style={{fontSize:"60px"}}>
          <strong>IP:</strong> {locationData.ip} | <strong>Location:</strong>{" "}
          {locationData.location.city}, {locationData.location.country}, {locationData.location.region} | <strong>ISP:</strong>{" "}
          {locationData.isp}
        </p>
      )}
      <div
        ref={mapContainerRef}
        style={{
          width: "1000px",
          height: "1000px",
          margin: "20px auto",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
};

export default IPTracker;